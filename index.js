let express = require('express');
let app = express();
require('dotenv').config();

let router = require('./routes');

app.use('/', router);

app.listen(3000, function () {
  console.log('Server Running');
});