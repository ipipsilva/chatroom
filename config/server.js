var express = require('express');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var consign = require('consign');
var app = express();

// Motor de views
app.set('view engine','ejs');
app.set('views', './app/views');

// definição de pasta pública
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());


consign({cwd: process.cwd() + "/app"})
    .include('routes')
    .then('controllers')
    .into(app);

module.exports = app;