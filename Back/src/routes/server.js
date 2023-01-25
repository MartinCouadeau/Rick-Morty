const http = require('http');

const PORT = 3001;


module.exports =

    http.createServer((req, res) => {
        const { url } = req
        if (url.includes("/rickandmorty/character")) {
            const id = url
            res.writeHead(200, { "content-type" : "application/json"})
            res.end(JSON.stringify())
        } else {
            res.writeHead(404, { "content-type" : "text/plain"})
            res.end("Route not found")
        }

    }).listen(PORT, "localhost")