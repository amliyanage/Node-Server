"use strict";
// Simple server in js
// const http = require("http");
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
// });
// server.listen(3000);
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    console.log("Request url:", req.url, "Request method:", req.method);
    if (req.url === '/add') {
        fs.writeFile('demo.text', req.url, function (err) {
            res.write('<h1>File created</h1>');
            return res.end();
        });
    }
    else {
        res.write('<h1>Hello World</h1>');
        res.end();
        process.exit();
    }
});
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
