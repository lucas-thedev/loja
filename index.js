let express = require('express');
let app = express();
require('dotenv').config();
let router = require('./routes');

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', router);

app.listen(3000, function () {
  console.log('Server Running');
});