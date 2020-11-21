const fs = require('fs');
const http = require('http');
const config = require('config');

const app = {
    env: config.util.getEnv('NODE_ENV'),
    port: config.get('app.port')
};

const server = http.createServer((req, res) => {
    if (req.url == '/app') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(app));
        return res.end();
    }

    if (req.url == '/users') {
        return fs.readFile(__dirname + '/users.txt', 'utf8', function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end(JSON.stringify(err));
            }

            res.writeHead(200, {'Content-Type': 'text/plain'});
            return res.end(data);
        });
    };

    res.end('Invalid request!');
});

server.listen(app.port);

console.log(`server running on port ${app.port} (${app.env})`);
