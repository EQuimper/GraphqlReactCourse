require('babel-register');
require('babel-polyfill');

const app = require('./server/server');

app.listen(4000, () => {
  console.log('Listening');
});
