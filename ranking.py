import pandas as pd
import numpy as np
from pymongo import MongoClient
from skcriteria import Data, MIN, MAX
from skcriteria.madm import closeness, simple, moora, electre
import xlwt

#connect mongo
client = MongoClient('mongodb://lucaspinto:Reload04@ds115360.mlab.com:15360/boreal')
db = client.boreal

#connect collection
collection = db.sales
mongo = collection.find()
result = pd.DataFrame(list(mongo))

#create function
criteria = [MAX, MIN, MIN, MAX, MAX]
alt = result.loc[0:100, ['Quantity', 'NormalPrice', 'LenghtDiscount', 'Revenue', 'AcceptDiscount']]
mtx = alt.values
anames = result.loc[0:100, 'Description'].values
cnames = list(alt)
weights = [0.3, 0.1, 0.2, 0.3, 0.1]

data = Data(mtx, criteria,
		weights=weights,            
		anames=anames,
		cnames=cnames)

dm = simple.WeightedSum()
dec = dm.decide(data)

# dtp = round(dec.e_.points, 2)
dt=zip(dec.data.anames, dec._rank, dec.e_.points)

import os
file_path = "C:/AppBoreal/"
directory = os.path.dirname(file_path)

def savetoxls():
	 
	if not os.path.exists(directory):
		os.makedirs(directory)

	x = list(dec.data.anames)
	y = dec._rank.tolist()
	z = dec.e_.points.tolist()
	

	workbook = xlwt.Workbook()
	worksheet = workbook.add_sheet('A Test Sheet', cell_overwrite_ok=True) 
	l = 0
	c = 0
	worksheet.write(0, 0, 'ANAMES')
	worksheet.write(0, 1, 'RANK')
	worksheet.write(0, 2, 'POINTS')
    
	for l,e in enumerate(x):
		worksheet.write(l + 1, c, e)

	for l,f in enumerate(y):
		worksheet.write(l + 1, c + 1, f)
    
	for l,g in enumerate(z):
		worksheet.write(l + 1, c + 2, g)
	
	return workbook.save('C:\AppBoreal\Ranking_export.xls')    
	#return workbook.save('export.xls')