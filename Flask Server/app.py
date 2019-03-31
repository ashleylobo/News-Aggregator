import flask
import os
import requests 
from flask import jsonify, request
from flask import flash, redirect, url_for, session
from joblib import load
from flask_cors import CORS, cross_origin
import requests, json
import pandas as pd
import requests

from google.cloud import translate
import os

# Instantiates a client






app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
def predict():
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="/home/ashley/Downloads/NewsChat-3b3528a7e2bf.json"
    translate_client = translate.Client()

    # The text to translate
    
    # The target language
    target = 'en'

    # Translates some text into Russian



    req=request.get_json(silent=True,force=True)
    print(req.get('queryResult').get('parameters'))
    date=req.get('queryResult').get('parameters').get('date')
    query=req.get('queryResult').get('parameters').get('query')
    category=req.get('queryResult').get('parameters').get('category')
    typee=req.get('queryResult').get('parameters').get('type')
    country=req.get('queryResult').get('parameters').get('country')
    sources=req.get('queryResult').get('parameters').get('source')
    lang=req.get('queryResult').get('queryText')
    
 
    translation = translate_client.translate(
    lang,
    target_language=target)
    print(u'Translation: {}'.format(translation['detectedSourceLanguage']))

    if(translation['detectedSourceLanguage']=='en'):
        print(type(sources)," ",type(query))
        api="https://newsapi.org/v2/everything?language=en&sources="+sources+"&q="+query+"&sortBy=relevancy&apiKey=89cfff18287d4adb919382ad1f8cfecd"
        res=requests.get(api)
        text=res.json()['articles'][0]['description']
        print(text)
        return jsonify( {'fulfillmentText':text} )
    else:
        print("hi")
        langApi="http://ee9882ff.ngrok.io/rss/getrss"
        data={'context':'Ipl'}
        r = requests.post(url=langApi, data=data) 

        return jsonify( {'fulfillmentText':r.text} )

    # message=[{'text':{'text':[res.json()['articles'][0]['urlToImage'],res.json()['articles'][0]['description']]}}]
    # print(api)


 






app.run(host='0.0.0.0',port=5000)
