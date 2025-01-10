"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var Route_1 = require("./Route");
var server = http.createServer(Route_1.routings);
server.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
