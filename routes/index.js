const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', (req, res) => {
//   res.sendFile('./public/stylesheets/style.css');
// })

// router.get('/', (req, res) => {
//   res.render('index.html', locals, function (err, output) {
//     res.send(output);
//   });
// });

// router.get('/news', (req, res) => {
//   res.send('news');
// })

module.exports = router;
