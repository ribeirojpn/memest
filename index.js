var http = require('http');
var app = require('./config/express')();
require('./config/database')(process.env.MONGOLAB_URI || 'mongodb://localhost/memest');
require('./config/passport')();

http.createServer(app).listen(app.get('port'),function(){
  console.log('Server on...');
});
