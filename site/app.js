var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Registrar as rotas
var cadastroRouter = require('./routes/cadastro');
var loginRouter = require('./routes/login'); //mudar para usuarios
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Usar as rotas registradas
app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter); //mudar para usuarios
app.use('/', indexRouter);

module.exports = app;
