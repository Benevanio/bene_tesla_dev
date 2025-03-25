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
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  console.log('Jade configurado com sucesso');
} catch (err) {
  console.error('Erro ao configurar Jade:', err);
  process.exit(1);
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  immutable: true,
  etag: false
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  if (req.accepts('html')) {
    next(createError(404));
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.use(function(err, req, res, next) {

  console.error('[ERROR]', err.status || 500, err.message);
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  
  if (req.accepts('html')) {
    try {
      res.render('error');
    } catch (renderErr) {
      res.send('<h1>Erro</h1><p>' + err.message + '</p>');
    }
  } else {
    res.json({ error: err.message });
  }
});

module.exports = app;

if (!process.env.VERCEL) {
  var PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}