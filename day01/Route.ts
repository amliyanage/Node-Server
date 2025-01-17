import { IncomingMessage, ServerResponse } from 'http';

export function routings(req: IncomingMessage, res: ServerResponse): void {
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
    } else if (req.url === "/dashboard" && req.method === "POST") {
      const body: Buffer[] = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
  
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const name = parsedBody.split("=")[1];
        console.log(name);
        res.write("<h1> hallow"+ name + " </h1>");
        res.end();
      });
    } else if (req.url === "/") {
      res.write("<h1>Landing page...</h1>");
      res.end();
    }
  }