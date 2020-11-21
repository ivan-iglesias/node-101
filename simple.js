const http = require('http');
const config = require('config');

const app = {
    env: config.util.getEnv('NODE_ENV'),
    port: config.get('app.port')
};

const server = http.createServer((req, res) => {
    if (req.url == '/date') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ now: new Date() }));
        res.end();
    }

    res.end('Invalid request!');
});

server.listen(app.port);

console.log(`server running on port ${app.port} (${app.env})`);
