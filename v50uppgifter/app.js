/* Includes: */
var http = require('http');

function htmlPage(req, res) {
    res.write('<html>');
        res.write('<head>');
            res.write('<title>Repeat</title>');
        res.write('</head>');
        res.write('<body>');
            res.write('<h1>' + req.url + '</h1>');
            res.write('<p>My first paragraph</p>');
        res.write('</body>');
    res.write('</html>');
}

    /* Register server: */
    http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    htmlPage(req, res);
    console.log("Serving " + req.url);
    res.end();
}).listen(8080);