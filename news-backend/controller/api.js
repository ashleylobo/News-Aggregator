const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');
const User =require("../model/user")
const htmlToText = require('html-to-text');

// var WordPOS = require('wordpos'),
//     wordpos = new WordPOS();
// getnews=(req,res)=>{
//   console.log("hello")
//     newsapi.v2.topHeadlines({
//     source: 'News18.com ',
//     language: 'en',


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

getnews=(req,res)=>{
    newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
   
    language: 'en',
    sortBy: 'relevancy',
   
  }).then(response => {
    console.log("News sent to native ",response);
    res.send(response.articles)

    
    console.log(response);
   
  })
  .catch((r)=>{
    console.log("r ",r)
  })

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

keywords =(req,res)=>{
  wordpos.getNouns(req, function(result){
    console.log(result);
  }); 
}

getrss =(req,res)=>{
  title=[],
  link=[]
   let Parser = require('rss-parser');
  let parser = new Parser();
    (async () => {
      try{
        console.log("called")
        context=req.body
        console.log(context.context)
        if(context.context==("Ipl"||"Cricket")){
        let feed = await parser.parseURL('http://api.patrika.com/rss/cricket-news');
        // console.log(feed.title);
       
        feed.items.forEach(item => {
          title.push(item.title)
          // link.push(item.link)
          // console.log(item.title + ':' + item.link)
        
        });
        t=title[0]
        d=JSON.stringify(t)
        console.log("sent")
        res.send(JSON.parse(d) )
      }
      else if (context=="Politics"){
        let feed = await parser.parseURL('http://api.patrika.com/rss/political-news');
        // console.log(feed.title);
       
        feed.items.forEach(item => {
          title.push(item.title)
          link.push(item.link)
          // console.log(item.title + ':' + item.link)
        
        });
      
        res.send(title)
      }
      }
      catch(er){
          console.log("nope didnt work for shit ",er)
      }
     
     
    })();
}
  module.exports={getnews,keywords,getrss,addfollow}
