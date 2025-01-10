"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routings = routings;
function routings(req, res) {
    if (req.url === "/add") {
        res.write("<Html>");
        res.write("<body>");
        res.write('<form method="post" action="/dashboard">');
        res.write('<input type="text" name="Name" />');
        res.write('<button type="submit" value="Submit" />Submit</button>');
        res.write("</form>");
        res.write("</body>");
        res.write("</Html>");
        res.end();
    }
    else if (req.url === "/dashboard" && req.method === "POST") {
        var body_1 = [];
        req.on("data", function (chunk) {
            body_1.push(chunk);
        });
        req.on("end", function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var name = parsedBody.split("=")[1];
            console.log(name);
            res.write("<h1> hallow" + name + " </h1>");
            res.end();
        });
    }
    else if (req.url === "/") {
        res.write("<h1>Landing page...</h1>");
        res.end();
    }
}
