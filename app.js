var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Configuração do motor de visualização (Jade/Pug)
app.set('views', path.join(__dirname, 'views'));

// Configuração para compatibilidade com Vercel
try {
  app.set('view engine', 'pug'); // Tenta usar Pug primeiro
  console.log('Usando Pug como engine de template');
} catch (e) {
  app.set('view engine', 'jade'); // Fallback para Jade
  console.log('Usando Jade como engine de template');
}

// Configuração de middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  immutable: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.error(err.stack || err);
  
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
  
  res.status(err.status || 500);
  
  try {
    res.render('error');
  } catch (e) {
    res.send('<h1>Ocorreu um erro</h1><p>' + err.message + '</p>');
  }
});

if (process.env.VERCEL) {
  module.exports = app;
} else {
  var PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  module.exports = app;
}