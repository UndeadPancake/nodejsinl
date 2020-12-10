/* Includes: */
var http = require('http');

/* Register server: */
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.write();
    console.log("Serving " + req.url);
    res.end();
}).listen(8080);