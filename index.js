/*
This JS file (uses Node.js) reads
the data from main.txt and displays
it.
*/

var http = require('http')
var fs = require('fs')

// Display data on server (port 8080)
http.createServer(function (req, res) {
  fs.readFile('main.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
}).listen(8080)
