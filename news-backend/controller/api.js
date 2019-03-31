const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22284ec06b3e4717ac7dec4364156177');

var WordPOS = require('wordpos'),
    wordpos = new WordPOS();

var Promise = require('promise');
let Parser = require('rss-parser');
const JSON = require('circular-json');


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
// getnews =(req,res)=>{
//   var req = parser.parse(req);
//   console.log(req)
//   wordpos.getNouns('hello monday how are you', function(result){
//     console.log('efsfsdfsd')
//   }); 
// }


getnews=(req,res)=>{
    // console.log(req)
    newsapi.v2.everything({ 
    q:req.query.title,
    sources:req.query.sources,
    domains: req.query.domain,
    from: '2019-21-03',
    to: '2019-02-27',
    language:req.query.language,
    sortBy: "relevancy",
    },
    function(err,res){
    console.log(res)
  });
}


    /*
      {
        status: "ok",
        articles: [...]
      }
    */


keywords =(req,res)=>{
  wordpos.getNouns('hello monday how are you', function(result){
    console.log('efsfsdfsd')
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
          res.send({s:"heelo"})
        });
      }
      catch{
          console.log("nope didnt work for shit")
      }
     
     
    })();
}
  module.exports={getnews,keywords,getrss}
