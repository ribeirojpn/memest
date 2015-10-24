var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports = function(){
  var app = express();
  app.set('port',process.env.PORT || 3000);
  app.set(express.static('./public'));
  app.set('views', './app/views');

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(cookieParser());
  app.use(session({
    secret: 'mema ae intaum',
    resave: true,
    saveUninitialized: true
  }));

  load('models',{cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
