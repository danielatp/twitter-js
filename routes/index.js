const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

/*
res.send("") // expects plain HTML
res.render() //points to a file, with help of nunjucks
*/

/*
router.get('/stylesheets/style.css', function(req, res, next){
  res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public/'})
});

THIS FUNC WAS REPLACE BY :
app.use(express.static('public')) in app.js
// __dirname specifies the total path where the file is stored in my computer
*/

router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name:name});
  // console.log(list);
  res.render('index', { tweets: list});
});

router.get('/tweets/:id', (req, res) => {
  var tweetsWithThatId = Number(req.params.id);
  var getTweet = tweetBank.find({ id:tweetsWithThatId });
  res.render('index', { tweets: getTweet});
})

/*
THIS IS FOR THE locals OBJ EXAMPLE
router.get('/', (req, res) => {
  res.render('index.html', locals, function (err, output) {
    res.send(output);
  });
});
*/

// router.get('/news', (req, res) => {
//   res.send('news');
// })

module.exports = router;
