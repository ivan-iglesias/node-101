const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/date') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ now: new Date() }));
        res.end();
    }

    res.end('Invalid request!');
});

server.listen(8000);

console.log('server running on port 8000');
