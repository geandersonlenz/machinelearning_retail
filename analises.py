from flask import Flask, request, render_template, redirect, url_for, jsonify, session
from textblob import TextBlob, Word
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

import nltk
from nltk.stem.wordnet import WordNetLemmatizer
from collections import Counter

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'boreal'
app.config['MONGO_URI'] = 'mongodb://lucaspinto:Reload04@ds115360.mlab.com:15360/boreal'

mongo = PyMongo(app)
collection_projects = mongo.db.projects	
data = collection_projects.find_one({
	'_id': ObjectId(id)
	});

#analise de sentimento
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

#Counter
tags = blob.tags
tag = [value for key, value in blob.tags]
counter = Counter(tag)