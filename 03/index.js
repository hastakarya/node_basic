var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('Node with Express');
});

app.get('/user/:name', function (request, response) {
    response.send("Name value is : " + request.params.name);
});

app.listen(3000);