const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');


getnews=(req,res)=>{
  console.log("hello")
    newsapi.v2.everything({
    sources: 'The Times of India',
    language: 'en',
 
  }).then(response => {
    console.log(response);
    res.send(response.articles)

    
  });
}
  module.exports={getnews}
