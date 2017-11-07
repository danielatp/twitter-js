const express = require( 'express' );
const app = express();


const PORT = 3000;
app.listen(PORT, () => {
  console.log('server listening');
})

app.use(function (req, res, next) {
  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  console.log('Request Type:', req.method, req.method.res);
  next()
})

app.get('/', (req, res) => {
  res.send('Welcomeeee');
});

app.get('/news', (req, res) => {
  res.send('news');
})
