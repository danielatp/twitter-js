const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  // var content =
  var list = tweetBank.find({name:name});
  console.log(list);
  res.render('index', { tweets: list});
});

router.get('/tweets/:id', (req, res) => {
  var num = Number(req.params.id);
  var getTweet = tweetBank.find(function (obj) {
    return obj.id === num;
  })
  res.send(getTweet);

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
