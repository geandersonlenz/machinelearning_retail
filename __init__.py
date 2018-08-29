#v1.1
#basico flask
from flask import Flask, request, render_template, redirect, url_for, jsonify, session
import json, re, string, random

#biblioteca pandas 
import pandas as pd

#requisições
import urllib.request

#date
from datetime import date

#organização do texto
from textblob import TextBlob, Word

#comunicação com o banco de dados
from flask_pymongo import PyMongo

#encriptador de senha
import bcrypt

#necessário para pegar o id 
from bson.objectid import ObjectId

#Miscellaneous operating system interfaces
import os

#tokenization, stemmer, counter 
import nltk
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords, wordnet

#files
from collections import Counter

#lemmatisation, postagging
import spacy
import en_core_web_sm
import pt_core_news_sm

nlp = spacy.load("pt")
nle = spacy.load("en")
#nle = en_core_web_sm.load()
#nlp = pt_core_news_sm.load()

#classifier
from sklearn.externals import joblib

#topic modelling
import gensim
from gensim import corpora

#basket
# from basket_analysis import rules
# from mlxtend.frequent_patterns import apriori
# from mlxtend.frequent_patterns import association_rules

#ranking
from skcriteria import Data, MIN, MAX
from skcriteria.madm import closeness, simple, moora, electre
from ranking import dec
from itertools import product
import itertools
import xlwt

#multiclass
import numpy as np
import _pickle as cPickle
import pickle
#from sklearn.externals import joblib <- ja importado
# purchase = joblib.load('multiclassifier.pkl')
purchase2 = joblib.load('multicategory_pickle.pkl')

#categorias - temperatura
from weather import Weather, Unit
from datetime import datetime, timedelta
import calendar

import jinja2

#Categorias - Preferencias 
import statsmodels.api as sm
from sklearn.linear_model import LinearRegression

##################################


app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'boreal'
app.config['MONGO_URI'] = 'mongodb://lucaspinto:Reload04@ds115360.mlab.com:15360/boreal'

mongo = PyMongo(app)


#########################    ROTAS LOGIN / LOGOFF E POP   ##################################

@app.route('/login', methods=['GET', 'POST'])
def login():
    users = mongo.db.users
    login_user = users.find_one({'name' : request.form['username']})

    if login_user:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password']) == login_user['password']:
            session['username'] = request.form['username']
            return redirect(url_for('dashboard'))
        else:
        	error = 'Invalid username/password'
        return render_template('/users/login.html', error=error)
    	
    error = 'Invalid username/password'
    return render_template('/users/login.html', error=error)


@app.route('/sign_out')
def sign_out():
    session.pop('username')
    return redirect(url_for('dashboard'))

#########################    ROTAS INICIAIS  ##################################

@app.route('/')
def dashboard():
	if 'username' in session:
		if request.method == 'GET':
			return render_template('dashboard/index.html')

	return render_template('/users/login.html')

#########################    RESULTADO DO SEARCH ##############################

@app.route('/searchresult', methods=['POST'])
def searchresult():
	if request.method == 'POST':
		
		collection_clients = mongo.db.clients
		clients = collection_clients.find({"name": request.form['top-search'] })

	return render_template('list/search_results.html', clients=clients)

#########################    ROTAS CLIENTES  ##################################

@app.route('/newclient')
def newclient():
	if 'username' in session:

		return render_template('list/clientregister.html')

@app.route('/sendclient', methods=['POST'])
def sendclient():
	
	collection_clients = mongo.db.clients

	if request.method == 'POST':
		collection_clients.insert_one({
			'name': request.form['name'],
			'last_name': request.form['last_name'],
			'age': request.form['age'],
			'companyname': request.form['companyname'],
			'fone': request.form['fone'],
			'cel': request.form['cel'],
			'secfone': request.form['secfone'],
			'seccel': request.form['seccel']
			})

	return redirect(url_for('listclients'))

@app.route('/listclients', methods=['GET'])
def listclients():
	if 'username' in session:
		collection_clients = mongo.db.clients
		listclients = collection_clients.find()
		return render_template('list/clients.html', listclients = listclients)
	return render_template('/users/login.html')

@app.route('/listclient/del/<id>', methods=['GET','POST'])
def clientremove(id):
	if 'username' in session:
		collection_clients = mongo.db.clients
		collection_clients.delete_many({
			'_id': ObjectId(id)
			})
		return redirect(url_for('listclients'))
	return render_template('/users/login.html')

@app.route('/listclient/<id>')
def listOneClient(id):
	if 'username' in session:
		collection_clients = mongo.db.clients
		data = collection_clients.find_one({
			'_id': ObjectId(id)
			});
		return render_template('list/oneclient.html', client = data)
	return render_template('/users/login.html')


#########################    ROTAS PROJETOS  ##################################
@app.route('/project')
def project():
	if 'username' in session:
		return redirect(url_for('list_projects'))

	return render_template('/users/login.html')


@app.route('/project/create', methods=['GET', 'POST'])
def projectcreate():
	if 'username' in session:
		collection_projects = mongo.db.projects	
		if request.method == 'POST':
			text = request.form['sentiment_text']
			blob = TextBlob(text)
			#texto for wordcloud
			texto = text.replace(',','.')
			texto2 = texto.replace('\r\n\r\n','.')
			texto3 = texto2.replace('\n',' ')
			texto4 = texto3.replace('\r',' ')
			texto5 = texto4.replace('&#34;',' ')
			texto6 = texto5.replace('&#39;',' ')
			
			seq = [str(x) for x in blob.sentences]
			sentiment = [x.sentiment for x in blob.sentences]
			polarity1 = [sentiment[index][0] for index in range(len(sentiment))]
			polarity2 = [round(x, 2) for x in polarity1]
			polarity3 = ["{:.0%}".format(x) for x in polarity2]
			result = dict(zip(seq, polarity3))
			subjectivity1 = [sentiment[index][1] for index in range(len(sentiment))]
			subjectivity2 = [round(x, 2) for x in subjectivity1]
			subjectivity3 = ["{:.0%}".format(x) for x in subjectivity2]
			result2 = dict(zip(seq, subjectivity3))

			#Counter
			tags = blob.tags
			tag = [value for key, value in blob.tags]
			counter = Counter(tag)

	        #TOKENIZATION 
			words = nltk.word_tokenize(text)
			words = nltk.word_tokenize(text)
			p_tokenization = [word.lower() for word in words if word.isalpha()]
			tokenization = [word.lower() for word in words if word.isalpha()]

			#LEMMATISATION
			doc = nlp(text)
			lemmatisation = [word.lemma_ for word in doc]

			#POSTAGGING
			doc = nlp(text)
			tokenization = json.dumps([token.orth_ for token in doc])
			postagging = json.dumps([i.tag_ for i in doc])
			#return jsonify({tokenization, postagging})

			# PUNCTUATION
			tokenized_docs=[word_tokenize(doc) for doc in text]
			x=re.compile('[%s]' % re.escape(string.punctuation))
			tokenized_docs_no_punctuation = []
			for review in tokenized_docs:
				new_review = []
			for token in review:
				new_token = x.sub(u'', token)
			if not new_token == u'':
				new_review.append(new_token)
	        
			tokenized_docs_no_punctuation.append(new_review)
	        #jsonify({'punctuation': tokenized_docs_no_punctuation})
			punctuation = jsonify({'punctuation': tokenized_docs_no_punctuation})

			#STEMMER
			text_stemmer = request.form['sentiment_text']
			from nltk.stem import PorterStemmer
			stemmer = PorterStemmer()
			result_stemmer = stemmer.stem(text_stemmer)
			#jsonify({'stemmer': result_stemmer})


			#noun_phrases
			noun = [blob.noun_phrases]
			noun_phrases = jsonify({'Noun Phrases': noun})


			#key_summarize
			nouns = [word.lemmatize() for word, tag in blob.tags if tag == 'NN']
			word_k = [Word(item) for item in random.sample(nouns, 5)]
			key = [words.pluralize() for words in word_k]
			jsonify({'key summarize': key})
	        #return jsonify({'key summarize': key})

			#Classifier
			clf = joblib.load('model.pkl')
			classify = clf.classify(text)

			t = date.today()
			dia = str(t.day)
			mes = str(t.month)
			ano = str(t.year)
			today = dia + '/' + mes + '/' + ano

			collection_projects.insert_one({
					'title': request.form['title'],
					'texto': texto6,
					'text': text,
					'date': today,
					'counter': counter,
					'polarity3': polarity3,
	    			'subjectivity3': subjectivity3,
					'tokenization': p_tokenization,
					'key_summarize': key,
					'classify': classify,
					'lemmatisation': lemmatisation,
					'postagging': postagging,
					'punctuation': tokenized_docs_no_punctuation,
					'result_stemmer': result_stemmer,
					'noun_phrases': noun

		})

		return redirect(url_for('project'))
	return render_template('/users/login.html')



@app.route('/list-projects')
def list_projects():
	if 'username' in session:
		collection_projects = mongo.db.projects	
		list_projects = collection_projects.find()
		
		t = date.today()
		dia = str(t.day)
		mes = str(t.month)
		ano = str(t.year)
		today = dia + '/' + mes + '/' + ano

		return render_template('list/list-projects.html', projects = list_projects, today=today)
	return render_template('/users/login.html')

@app.route('/project/<id>')
def listOne(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		text = data['text']
		blob = TextBlob(text)
		seq = [str(x) for x in blob.sentences]
		sentiment = [x.sentiment for x in blob.sentences]
		polarity1 = [sentiment[index][0] for index in range(len(sentiment))]
		polarity2 = [round(x, 2) for x in polarity1]
		polarity3 = ["{:.0%}".format(x) for x in polarity2]
		result = dict(zip(seq, polarity3))
		subjectivity1 = [sentiment[index][1] for index in range(len(sentiment))]
		subjectivity2 = [round(x, 2) for x in subjectivity1]
		subjectivity3 = ["{:.0%}".format(x) for x in subjectivity2]
		result2 = dict(zip(seq, subjectivity3))

		return render_template('list/one.html', project = data, result=result, result2=result2)
	return render_template('/users/login.html')

@app.route('/project/<id>/texto')
def texto(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		title = 'Texto'
		return render_template('list/texto.html', project=data, title=title)
	return render_template('/users/login.html')



@app.route('/project/<id>/analisedesentimento')
def analisedesentimento(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});

		text = data['text']
		blob = TextBlob(text)
		seq = [str(x) for x in blob.sentences]
		sentiment = [x.sentiment for x in blob.sentences]
		polarity1 = [sentiment[index][0] for index in range(len(sentiment))]
		polarity2 = [round(x, 2) for x in polarity1]
		polarity3 = ["{:.0%}".format(x) for x in polarity2]
		result = dict(zip(seq, polarity3))
		subjectivity1 = [sentiment[index][1] for index in range(len(sentiment))]
		subjectivity2 = [round(x, 2) for x in subjectivity1]
		subjectivity3 = ["{:.0%}".format(x) for x in subjectivity2]
		result2 = dict(zip(seq, subjectivity3))
		
		return render_template('list/analisedesentimento.html', project = data, result=result, result2=result2)
	return render_template('/users/login.html')

@app.route('/project/<id>/topicmodelling')
def topicmodelling(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		title = 'Topic Modelling'
		return render_template('list/topicmodelling.html', project=data, title=title)
	return render_template('/users/login.html')


@app.route('/project/<id>/geracaodetexto')
def geracaodetexto(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		title = 'Geração de Texto'
		return render_template('list/geracaodetexto.html', project = data, title=title)
	return render_template('/users/login.html')

@app.route('/project/<id>/speechtotext')
def speechtotext(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		title = 'Speech To Text'
		return render_template('list/speechtotext.html', project = data, title=title)
	return render_template('/users/login.html')

@app.route('/project/<id>/wordcloud')
def wordcloud(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		title = 'Word Cloud'
		return render_template('list/wordcloud.html', project = data, title=title)
	return render_template('/users/login.html')

@app.route('/project/<id>/entities')
def entities(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		text = data['text']
		doc = nle(text)
		text = [ent.text for ent in doc.ents]
		entities = [ent.label_ for ent in doc.ents]
		x = Counter(entities)
		entities_kind = dict(x)
		dictionary = dict(zip(text, entities))
		person = {k: v for k, v in dictionary.items() if v == 'PER'}
		organization = {k: v for k, v in dictionary.items() if v == 'ORG'}
		location = {k: v for k, v in dictionary.items() if v == 'LOC'}
		miscellaneous = {k: v for k, v in dictionary.items() if v == 'MISC'}

		title = 'Entities'
		return render_template('list/entities.html', project = data, title=title, dictionary=dictionary, person=person, organization=organization,
			location=location, miscellaneous=miscellaneous)
	return render_template('/users/login.html')

@app.route('/project/<id>/stopwords')
def stopwords(id):
	from nltk.corpus import stopwords
	
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			});
		
		#STOPWORDS
		words_box = data['texto']
		stopWords = set(stopwords.words('english'))
		words = word_tokenize(words_box)
		wordsFiltered = []
		for w in words:
			if w not in stopWords:
				wordsFiltered.append(w)

		title = 'Stop Words'
		return render_template('list/stopwords.html', project = data, title=title, wordsFiltered=wordsFiltered)
	return render_template('/users/login.html')

@app.route('/project/remove/<id>', methods=['GET','POST'])
def remove(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		collection_projects.delete_many({
			'_id': ObjectId(id)
			})

		return redirect(url_for('list_projects'))
	return render_template('/users/login.html')

@app.route('/project/edit/<id>', methods=['GET'])
def edit(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		data = collection_projects.find_one({
			'_id': ObjectId(id)
			})

		return render_template('list/edit.html', project = data)
	return render_template('/users/login.html')


@app.route('/project/update/<id>', methods=['GET','POST'])
def update(id):
	if 'username' in session:
		collection_projects = mongo.db.projects	
		collection_projects.update_one(
			{ '_id': ObjectId(id) },
			{ 
				'$set': {
					'title': request.form['title'],
					'text': request.form['text'],
				}
			})


		return redirect (url_for('list_projects'))
	return render_template('/users/login.html')

#########################################################################
# BASKET 
#########################################################################

@app.route('/basket', methods=['POST', 'GET'])
def basket():
	collection_basket = mongo.db.basket
	todos_basket = collection_basket.find()
	if (todos_basket.count()) < 1:
		ziprules = []
	else:
		for x in todos_basket:
			rul_a = x['rul_a']
			rul_c = x['rul_c']
			rules_support = x['rules_support']
			rules_confidence = x['rules_confidence']
			rules_lift = x['rules_lift']
	ziprules = zip(rul_a, rul_c, rules_support, rules_confidence, rules_lift)

	return render_template('basket/tables.html', ziprules=ziprules)

@app.route('/basketupdate', methods=['POST'])
def basketupdate():
	collection_basket = mongo.db.basket
	collection_basket.delete_many({})

	url = request.files['file']
	df = pd.read_csv(url)

	df['Description'] = df['Description'].str.strip()
	# print('chegou aqui')
	df.dropna(axis=0, subset=['InvoiceNo'], inplace=True)
	df['InvoiceNo'] = df['InvoiceNo'].astype('str')
	df = df[~df['InvoiceNo'].str.contains('C')]


	basket = (df[df['Country'] =="France"]
	          .groupby(['InvoiceNo', 'Description'])['Quantity']
	          .sum().unstack().reset_index().fillna(0)
	          .set_index('InvoiceNo'))

	def encode_units(x):
	    if x <= 0:
	        return 0
	    if x >= 1:
	        return 1

	basket_sets = basket.applymap(encode_units)
	basket_sets.drop('POSTAGE', inplace=True, axis=1)

	# print('chegou aqui 2')
	from mlxtend.frequent_patterns import apriori
	from mlxtend.frequent_patterns import association_rules

	frequent_itemsets = apriori(basket_sets, min_support=0.07, use_colnames=True)

	rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1)

	def corretora(x):
		for k in x:
			next(iter(k))
			return k
	
	rul_a = rules.antecedants.apply(corretora)
	rul_c = rules.consequents.apply(corretora)

	ziprules = zip(rul_a, rul_c, rules.support, rules.confidence, rules.lift)

	results = len(rul_a)
	#rules=rules, ziprules=ziprules, results=results
	# print('chegou aqui 3')
	rul_a_list = rul_a.tolist()
	rul_c_list = rul_c.tolist()
	rules_support_list = rules.support.tolist()
	rules_confidence_list = rules.confidence.tolist()
	rules_lift_list = rules.lift.tolist()
	# print('quase gravando')

	collection_basket = mongo.db.basket
	collection_basket.insert_one({
				'rul_a': rul_a_list,
				'rul_c': rul_c_list,
				'rules_support': rules_support_list,
				'rules_confidence': rules_confidence_list,
				'rules_lift': rules_lift_list,
				})
	# print('gravou')
	return redirect(url_for('basket'))

#########################################################################
# RANKING 
#########################################################################
@app.route('/ranking')
def ranking():
	if 'username' in session:
		dec 
		save='none'
		dt=zip(dec.data.anames, dec._rank, dec.e_.points)

		return render_template('ranking/tables.html', dt=dt, save=save)
	return render_template('/users/login.html')

#########################################################################
# MAP
#########################################################################
@app.route('/mymap')
def mymap():
	if 'username' in session:
		name = 'My Map'
		return render_template('map/my_map.html', name=name)

@app.route('/mapcluster')
def mapcluster():
	if 'username' in session:
		name = 'Cluster'
		return render_template('map/cluster.html', name=name)

@app.route('/mapheatmap')
def mapheatmap():
	if 'username' in session:
		name = 'Heatmap'
		return render_template('map/map_heatmap2.html', name=name)

@app.route('/receita')
def receita3():
	if 'username' in session:
		name = 'Receita'
		return render_template('map/map_receita3.html', name=name)

#########################################################################
# MULTICLASS 
#########################################################################
@app.route('/multiclass', methods=['POST'])
def multiclass():
	if 'username' in session:
		

		preco = request.form['preco']
		quantidade = request.form['quantidade']
		promotion = request.form['promotion']
		receita = request.form['receita']
		clima = request.form['clima']

		predict_request = [[preco, quantidade, promotion, receita, clima]]

		y_hat = purchase.predict(predict_request)
		y_hat = y_hat.tolist()

		cat_hat = purchase2.predict(predict_request)
		cat_hat = cat_hat.tolist()

		return render_template('multiclass/multiclass.html',
												y_hat=y_hat,
                                            cat_hat=cat_hat)

	return render_template('/users/login.html')

#########################################################################
# POPOTO
#########################################################################
@app.route('/popoto')
def popoto():
	if 'username' in session:
		
		
		return render_template('popoto/popoto.html')
	return render_template('/users/login.html')


#########################################################################
# ERRO 404
#########################################################################
@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/page_not_found.html'), 404


#########################################################################
# SEARCH CLIENT
#########################################################################
@app.route('/searchclient', methods=['POST'])
def searchclient():
	if 'username' in session:
		if request.form['name'] is not None:
			collection_clients = mongo.db.clients
			data = collection_clients.find_one({'name': request.form['name']});
			# status = 'show'
			return render_template('list/dashboard.html', data=data)
		else:
			status = 'none'
			return render_template('list/dashboard.html', status=status) 
		#redirect(url_for('dashboard'))
	
	return render_template('/users/login.html', error=error)


#########################################################################
# Logistic Regression
#########################################################################
@app.route('/logistic-regression')
def logistic_regression():
	if 'username' in session:
		return render_template('/learning/logistic-regression.html')

	return render_template('/users/login.html', error=error)



#########################################################################
# CATEGORIAS
#########################################################################
@app.route('/categorias2')
def categorias2():
	if 'username' in session:
		######### CLIMA
		date_today = datetime.now()
		days = pd.date_range(date_today, date_today + timedelta(9), freq='D')
		weather = Weather(unit=Unit.CELSIUS)
		city = 'bento goncalves'
		location = weather.lookup_by_location(city)
		forecasts = location.forecast
		weather = [forecast.text for forecast in forecasts]
		minima = [forecast.low for forecast in forecasts]
		maxima = [forecast.high for forecast in forecasts]
		tempo = {'forecast': weather, 'minima': minima, 
	        'maxima': maxima, 'day': days.day, 
	        'month': days.month, 'year': days.year,
	        'hours': days.hour, 'minutes': days.minute}

		dia = tempo['day']
		mes = tempo['month']
		ano = tempo['year']

		t_max = tempo['maxima']
		t_min = tempo['minima']
		clima = tempo['forecast']

		dias_da_semana = []
		for x in days:
			y = x.weekday()
			dias_da_semana.extend([y])

		comp = zip(dia, mes, ano, t_max, t_min, clima)

		return render_template('/categorias/categorias.html', tempo=tempo, comp=comp, city=city, 
															dias_da_semana=dias_da_semana)

	return render_template('/users/login.html', error=error)

@app.route('/categorias')
def categorias():
	if 'username' in session:
		date_today = datetime.now()
		days = pd.date_range(date_today, date_today + timedelta(9), freq='D')
		weather = Weather(unit=Unit.CELSIUS)
		city = 'bento goncalves'
		location = weather.lookup_by_location(city)
		forecasts = location.forecast
		weather = [forecast.text for forecast in forecasts]
		minima = [forecast.low for forecast in forecasts]
		maxima = [forecast.high for forecast in forecasts]
		tempo = {'forecast': weather, 'minima': minima, 
	        'maxima': maxima, 'day': days.day, 
	        'month': days.month, 'year': days.year,
	        'hours': days.hour, 'minutes': days.minute}

		dia = tempo['day']
		mes = tempo['month']
		ano = tempo['year']

		t_max = tempo['maxima']
		t_min = tempo['minima']
		clima = tempo['forecast']

		dias_da_semana = []
		for x in days:
			y = x.weekday()
			dias_da_semana.extend([y])

		comp = zip(dia, mes, ano, t_max, t_min, clima)

		from lista_feriados import k_lista_feriados
		k_lista_feriados.insert(0, '17/7/2018')
		#print(k_lista_feriados)

		lista_total_k = []
		for x in comp:
		    s = '{0}/{1}/{2}'
		    y = [x[0],x[1],x[2]]
		    #print([s.format(*y)])
		    lista_total_k.append(s.format(*y))

		for x in k_lista_feriados:
		    for y in lista_total_k:
		        if y in x:
		            listagem = {'key':y, 'value':'Feriado'}
		            # print(listagem)
		
		collection_purchase2 = mongo.db.purchase2
		data_purchase2 = collection_purchase2.find()

		collection_purchase = mongo.db.purchase
		data_purchase = collection_purchase.find()

		lista_total = []
		for x in data_purchase2:
		    # print(x['purchase2_list'])
		    lista_total.append(x['purchase2_list'])
			
		lista_total = lista_total[0]

		lista_produtos_total = []
		for x in data_purchase:
			# print(x['purchase_list'])
			lista_produtos_total.append(x['purchase_list'])
			
		lista_produtos_total = lista_produtos_total[0]

		return render_template('/categorias/categorias2.html', tempo=tempo, 
																comp=comp, 
																city=city, 
																dias_da_semana=dias_da_semana, 
																clima=clima,
																y=y,
																lista_total=lista_total,
																lista_produtos_total=lista_produtos_total)

@app.route('/categoriasgravar', methods=['POST'])
def categoriasgravar():
	if 'username' in session:
		if request.method == 'POST':

			collection_purchase2 = mongo.db.purchase2
			collection_purchase2.delete_many({})

			url = request.files['file']
			df = pd.read_csv(url)

			# result = purchase.predict(df)
			result_2 = purchase2.predict(df)
			purchase2_list = result_2.tolist()

			collection_purchase2.insert_one({
					'purchase2_list': purchase2_list,
					})

			return redirect(url_for('categorias2'))



@app.route('/preferencias')
def preferencias():
	collection_preferencias = mongo.db.preferencias
	todas_preferencias = collection_preferencias.find()

	if (todas_preferencias.count()) < 1:
		coe = []
		pre = []
		coe_N = []
		resultado_preferencias = zip(coe, pre, coe_N)
	else:
		for x in todas_preferencias:
			coe = x['coe']
			pre = x['pre']
			coe_N = x['coe_N']
			resultado_preferencias = zip(coe, pre, coe_N)
			
		data = resultado_preferencias

	return render_template('/preferencias/preferencias.html', data=data)
@app.route('/preferenciasupdate', methods=['POST'])
def preferenciasupdate():

	collection_preferencias = mongo.db.preferencias
	collection_preferencias.delete_many({})

	url = request.files['file']
	df = pd.read_csv(url)
	X = df.loc[:, df.columns != 'Rank']
	y = df[["Rank"]]
				
	lr = LinearRegression()
	lr.fit(X, y)
	a = X.columns.tolist()
	b = lr.coef_.tolist()[0]
	coefs = pd.DataFrame({'Preditores': a, 'Coefficients': b})
	highest_coef = coefs.nlargest(5, 'Coefficients')
	raw = highest_coef.Coefficients.values.tolist()
	highest_coef["Coeff_Normal"] = [float(i)/sum(raw) for i in raw]

	coe = highest_coef['Coefficients']
	pre = highest_coef['Preditores']
	coe_N = highest_coef['Coeff_Normal']
		
	coe_list = coe.tolist()
	pre_list = pre.tolist()
	coe_N_list = coe_N.tolist()

	# print(coe_list)

	collection_preferencias = mongo.db.preferencias
	collection_preferencias.insert_one({
				'coe': coe_list,
				'pre': pre_list,
				'coe_N': coe_N_list,
				})

	return redirect(url_for('preferencias'))

if __name__ == '__main__':
	app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
	app.run(debug=True)