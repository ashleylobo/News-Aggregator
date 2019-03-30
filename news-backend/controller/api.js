const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');

var WordPOS = require('wordpos'),
    wordpos = new WordPOS();

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
    console.log(response);
   
  });
}

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
