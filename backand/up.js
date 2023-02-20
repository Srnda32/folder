const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const route = url.parse(req.url).pathname
    if (route == "/") {
        res.write("you're boring")
        res.end()
    }
    else if (route == "/random-number") {
        res.write((Math.random()*100) .toString())
        res.end()
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 