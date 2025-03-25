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
  app.engine('pug', require('pug').__express);
  app.set('view engine', 'pug');
  console.log('pug configurado com sucesso');
} catch (err) {
  console.error('Erro ao configurar pug:', err);
  try {
    app.engine('pug', require('pug').__express);
    app.set('view engine', 'pug');
    console.log('Usando Pug como fallback para pug');
  } catch (fallbackErr) {
    console.error('Erro no fallback Pug:', fallbackErr);
    process.exit(1);
  }
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

app.use('/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')));

app.use('/', (req, res, next) => {
  try {
    indexRouter(req, res, next);
  } catch (err) {
    console.error('Erro na rota principal:', err);
    next(err);
  }
});

app.use('/users', (req, res, next) => {
  try {
    usersRouter(req, res, next);
  } catch (err) {
    console.error('Erro na rota de usuários:', err);
    next(err);
  }
});

app.use(function(err, req, res, next) {
  console.error('Erro capturado:', {
    message: err.message,
    stack: err.stack,
    status: err.status || 500
  });

  if (!res.headersSent) {
    res.status(err.status || 500);
    
    try {
      res.format({
        html: () => {
          try {
            res.render('error', {
              message: err.message,
              error: process.env.NODE_ENV === 'development' ? err : {}
            });
          } catch (renderErr) {
            res.send(`
              <h1>Erro</h1>
              <p>${err.message}</p>
              ${process.env.NODE_ENV === 'development' ? `<pre>${err.stack}</pre>` : ''}
            `);
          }
        },
        json: () => {
          res.json({
            error: err.message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
          });
        },
        default: () => {
          res.type('txt').send(`Erro: ${err.message}`);
        }
      });
    } catch (handlerErr) {
      console.error('Falha no handler de erro:', handlerErr);
      res.status(500).send('Erro interno do servidor');
    }
  }
});

module.exports = app;

if (!process.env.VERCEL) {
  var PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}