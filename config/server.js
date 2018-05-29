var express = require('express');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
const path = require('path');
var consign = require('consign');
var app = express();

// Motor de views
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../app/views'));

// definição de pasta pública
app.use(express.static(path.join(__dirname,'../app/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include(path.join('./app/routes'))
    .then(path.join('./app/controllers'))
    .into(app);

module.exports = app;