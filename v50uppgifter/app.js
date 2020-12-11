/* Includes: */
var http = require('http');
var url = require('url');
var fs = require('fs');

function htmlPage(req, res) {
    res.write('<html>');
        res.write('<head>');
            res.write('<title>' + req.url + '</title>');
        res.write('</head>');
        res.write('<body>');
            res.write('<h1>' + req.url + '</h1>');
            res.write('<p>My first paragraph</p>');
        res.write('</body>');
    res.write('</html>');
    res.end();
}

function calcPage(req, res) {
    fs.readFile('jscalc.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}

function compPage(req, res, qdata) {
    var result;
    switch (qdata.op) {
        case "plus":
            result = parseInt(qdata.x) + parseInt(qdata.y);
            res.write(qdata.x + " + " + qdata.y + " = " + result);
            break;
        case "minus":
            result = qdata.x - qdata.y;
            res.write(qdata.x + " - " + qdata.y + " = " + result);
            break;
        case "times":
            result = qdata.x * qdata.y;
            res.write(qdata.x + " * " + qdata.y + " = " + result);
            break;
        case "div":
            result = qdata.x / qdata.y;
            res.write(qdata.x + " / " + qdata.y + " = " + result);
            break;
    }
    res.end();
}

    /* Register server: */
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (q.pathname == '/calc') {
        calcPage(req, res);
    }
    else if (q.pathname == '/compute') {
        var qdata = q.query;
        compPage(req, res, qdata);
    }
    else {
        htmlPage(req, res);
    }
    console.log("Serving " + req.url);
}).listen(8080);