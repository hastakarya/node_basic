var fs = require('fs');
var url = require('url');

function renderFile(fileName, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(fileName, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('file not found');
        } else {
            response.write(data);
            response.end();
        }
    });
}

module.exports = {
    handlerRequest: function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                renderFile('index.html', response);
                break;
            case '/user':
                renderFile('user.html', response);
                break;

            default:
                break;
        }
    }
}