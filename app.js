var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

process.env.SKIP_BUILD_OPTIMIZATION = '1';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

try {
  app.engine('jade', require('jade').__express);
  app.set('view engine', 'jade');
  console.log('Usando Jade como template engine');
} catch (e) {
  app.engine('jade', require('pug').__express);
  app.set('view engine', 'jade');
  console.log('Usando Pug como fallback para templates Jade');
}

app.set('views', path.join(__dirname, 'views'));

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
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  
  try {
    res.render('error');
  } catch (e) {
    console.error('Erro ao renderizar template:', e);
    res.send('<h1>Erro</h1><pre>' + err.message + '</pre>');
  }
});

module.exports = app;

if (!process.env.VERCEL) {
  var PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}