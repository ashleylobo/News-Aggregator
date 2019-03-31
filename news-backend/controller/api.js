const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');
const User =require("../model/user")

var WordPOS = require('wordpos'),
    wordpos = new WordPOS();
getnews=(req,res)=>{
  console.log("hello")
    newsapi.v2.topHeadlines({
    source: 'News18.com ',
    language: 'en',

var Promise = require('promise');
// let Parser = require('rss-parser');
// let parser = new Parser();
//     (async () => {
//       try{
//         let feed = await parser.parseURL('feed://www.thehindu.com/education/careers/?service=rss');
//         console.log(feed.title);
       
//         feed.items.forEach(item => {
//           console.log(item.title + ':' + item.link)
//         });
//       }
//       catch{
//           console.log("efgdfgffd")
//       }
     
     
//     })();

getnews=()=>{
    newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    console.log("News sent to native ",response);
    res.send(response.articles)

    
    console.log(response);
   
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

keywords =(req,res)=>{
  wordpos.getNouns(req, function(result){
    console.log(result);
  }); 
}

getrss =(req,res)=>{
  let parser = new Parser();
    (async () => {
      try{
        let feed = await parser.parseURL('http://api.patrika.com/rss/latest-corporate-news');
        console.log(feed.title);
       
        feed.items.forEach(item => {
          console.log(item.title + ':' + item.link)
        });
      }
      catch{
          console.log("nope didnt work for shit")
      }
     
     
    })();
}
  module.exports={getnews,keywords,getrss}
