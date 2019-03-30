import flask
import os
from flask import jsonify, request
from flask import flash, redirect, url_for, session
from joblib import load
from flask_cors import CORS, cross_origin
import requests, json
import pandas as pd
import requests







app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
def predict():


    req=request.get_json(silent=True,force=True)
    print(req.get('queryResult').get('parameters'))
    date=req.get('queryResult').get('parameters').get('date')
    query=req.get('queryResult').get('parameters').get('query')
    category=req.get('queryResult').get('parameters').get('category')
    typee=req.get('queryResult').get('parameters').get('type')
    country=req.get('queryResult').get('parameters').get('country')
    sources=req.get('queryResult').get('parameters').get('source')
    api="https://newsapi.org/v2/everything?language=en&sources="+sources+"&q="+query+"&sortBy=relevancy&apiKey=89cfff18287d4adb919382ad1f8cfecd"
    res=requests.get(api)
    
    text=res.json()['articles'][0]['description']
    print(text)
    # message=[{'text':{'text':[res.json()['articles'][0]['urlToImage'],res.json()['articles'][0]['description']]}}]
    # print(api)

    return jsonify( {'fulfillmentText':text} )
 






app.run(host='0.0.0.0',port=5000)
