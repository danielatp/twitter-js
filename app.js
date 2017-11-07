const express = require( 'express' );
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');


const PORT = 3000;
app.listen(PORT, () => {
  console.log('server listening');
})

app.use(volleyball)

app.get('/', (req, res) => {
  // res.render('index', function(err, html){
  //   res.send(html);
  // });
  res.render('index.html', locals, function (err, output) {
    res.send(output);
  });
});

app.get('/news', (req, res) => {
  res.send('news');
})


var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
