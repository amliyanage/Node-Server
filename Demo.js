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
    //fs.writeFileSync('demo.text',req.toString());
    console.log("Request url:", req.url, "Request method:", req.method);
    if (req.url === '/add') {
        res.write('<h1>Hello Customer</h1>');
        res.end();
    }
    else {
        res.write('<h1>Hello World</h1>');
        res.end();
    }
});
server.listen(3000);
