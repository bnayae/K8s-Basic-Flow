var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  var d = new Date();
  response.end('Hello World!' + d.toISOString());
};
var www = http.createServer(handleRequest);
www.listen(8080);