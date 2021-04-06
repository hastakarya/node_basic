var http = require('http');
var route = require('./route');

http.createServer(route.handlerRequest).listen(3000);