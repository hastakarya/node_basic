var http = require('http');
var fs = require('fs');

function handleRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', null, function (error, data) {
        if (error) {
            response.writeHead(4040);
            response.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

var server = http.createServer(handleRequest);

server.listen(3000, function () {
    console.log('server running on port 3000');
});