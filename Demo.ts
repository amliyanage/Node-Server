import * as http from 'http';
import * as fs from 'fs';

const server = http.createServer((req, res) => {
   
    if(req.url === '/add'){
        res.write('<html>')
        res.write('<body>')
        res.write('<form action="/dashboard" method="POST">')
        res.write('<input type="text" name="name">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else if(req.url === '/dashboard' && req.method === 'POST'){
        const body : Buffer[] = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const paramBody = Buffer.concat(body).toString();
            const name = paramBody.split('=')[1];
            res.write('<h1>Welcome ' + name + '</h1>');
            res.end();
        });
    } else {
        res.write('<h1>Hello World</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});