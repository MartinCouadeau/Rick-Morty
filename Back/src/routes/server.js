const http = require('http');
const characters = require("../utils/data.js")
const PORT = 3001;
const char =require("../utils/data")
const { getCharById } = require("../controllers/getCharById")
const { getCharDetail } = require("../controllers/getCharDetail")

module.exports =

    http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let url = req.url.split("/")
        const id = Number(url.pop())
        url = url.join("/")
        switch (url) {
            case "/onsearch":
                return getCharById(res, id)
            case "/detail":
                return getCharDetail(res, id)
            default:
                res.writeHead(500, {"Content-Type": "text/plain"})
                res.end(error.message)
                break;
        }
    }).listen(PORT, "localhost")