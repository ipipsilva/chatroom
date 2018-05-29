var express = require('express');
const path = require('path');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var app = express();

// Motor de views
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../app/views'));

// definição de pasta pública
app.use(express.static(path.join(__dirname, '../app/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// Rotas utilizadas na aplicação
var indexRouter = require('../app/routes/indexRouter')(app);
var chatRouter = require('../app/routes/chatRoutes')(app);

module.exports = app;