"use strict";
// Simple server in js
// const http = require("http");
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
// });
// server.listen(3000);
var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url === '/add') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/dashboard" method="POST">');
        res.write('<input type="text" name="name">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url === '/dashboard' && req.method === 'POST') {
        var body_1 = [];
        req.on('data', function (chunk) {
            body_1.push(chunk);
        });
        req.on('end', function () {
            var paramBody = Buffer.concat(body_1).toString();
            var name = paramBody.split('=')[1];
            res.write('<h1>Welcome ' + name + '</h1>');
            res.end();
        });
    }
    else {
        res.write('<h1>Hello World</h1>');
        res.end();
    }
});
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
