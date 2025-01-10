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
    console.log("Request url:", req.url, "Request method:", req.method);
});
server.listen(3000);
