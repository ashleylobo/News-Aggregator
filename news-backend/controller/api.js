const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');
const User =require("../model/user")

getnews=(req,res)=>{
  console.log("hello")
    newsapi.v2.topHeadlines({
    source: 'News18.com ',
    language: 'en',

 
  }).then(response => {
    console.log("News sent to native ",response);
    res.send(response.articles)

    
  });
}

addfollow=(req,res)=>{
  follow=req.body.data
  console.log("addfollower ",req.body.data)//.data since from axios passing as d
  User.findOne({name:"Joy"})
  .then((u)=>{

    u.preferences.push(follow)
    u.save()
  })
  res.send(req.body.data)
}
module.exports={getnews,addfollow}
