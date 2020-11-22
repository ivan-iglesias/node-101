const fs = require('fs');
const http = require('http');
const config = require('config');
const queryString = require('querystring');

const app = {
    env: config.util.getEnv('NODE_ENV'),
    port: config.get('app.port')
};

const server = http.createServer((req, res) => {

    if (req.url == '/app') {

        // http://127.0.0.1:8000/app
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(app));
        res.end();

    } else if  (req.url.includes('/hello?')) {

        // http://127.0.0.1:8000/hello?name=ivan
        const query = queryString.parse(req.url.split('?')[1]);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Hello ${query.name}`);
        res.end();

    } else if (req.url == '/users') {

        // http://127.0.0.1:8000/users
        fs.readFile(__dirname + '/users.txt', 'utf8', function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(data);
            }
        });

    } else {
        res.end('Invalid request!');
    }
});

server.listen(app.port);

console.log(`server running on port ${app.port} (${app.env})`);
