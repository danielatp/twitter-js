const express = require( 'express' );
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server listening');
})

app.use(volleyball);
/*
VOLLEYBALL (OR MORGAN) IS REPLACING THIS FUNC THAT ACTS LIKE MIDDLEWARE:
app.use(function(req, res, next){
  console.log('something here -', req.method, req.path )
  res.on('finish', function(){
    console.log('responded:', res.statusCode);
  })
  next()
})
*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.use('/', routes); //for every incoming requests, use routes folder
app.use(express.static(__dirname + '/public')); //should use __dirname???


nunjucks.configure('views', {noCache: true}); // this configuration lets us use res.render() later, and point nunjucks to the proper directory for templates

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

/*
var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
THIS IS AN EXAMPLE ON HOW TO USE NUNJUCKS
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});
*/
