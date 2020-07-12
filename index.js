const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, function () {
  console.log('Server Running');
});