const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const port = 3000;

const mime = {
    html: "text/html",
    txt: "text/plain",
    css: "text/css",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    js: "application/javascript",
    json: "application/json",
    wasm: "application/wasm"
};

function hostAddress(req) {
    return req.headers.host.split(':')[0];
}

const server = http.createServer(function (req, resp) {
    if (req.method !== "GET") {
        resp.writeHead(405, {"Content-Type": "text/html"});
        resp.write("<!DOCTYPE html><html lang='en'><head><title>405 Method Not Allowed</title><meta charset='UTF-8'></head><body><h1>405 Method Not Allowed</h1>" +
        "<p>This method is not allowed on this resource.</p><hr><em>Node.js server at " + hostAddress(req) + " port " + port + "</em></body></html>");
        return;
    }
    var reqpath = url.parse(req.url).pathname;
    var file = path.join(__dirname, reqpath.replace(/\/$/, "/index.html"));
    if (!fs.existsSync(file)) {
        resp.writeHead(404, {"Content-Type": "text/html"});
        resp.write("<!DOCTYPE html><html lang='en'><head><title>404 Not Found</title><meta charset='UTF-8'></head><body><h1>404 Not Found</h1>" +
        "<p>The server could not find the file specified.</p><hr><em>Node.js server at " + hostAddress(req) + " port " + port + "</em></body></html>");
        return;
    }
    var type = mime[path.extname(file).slice(1)] || "text/plain";
    fs.readFile(file, function (error, data) {
        if (error) {
            resp.writeHead(500, {"Content-Type": "text/html"});
            resp.write("<!DOCTYPE html><html lang='en'><head><title>500 Internal Server Error</title><meta charset='UTF-8'></head><body><h1>500 Internal Server Error</h1>" +
            "<p>The server encountered an internal error or misconfiguration and was unable to complete your request.</p><hr><em>Node.js server at " + hostAddress(req) + " port " + port + "</em></body></html>");
        } else {
            resp.writeHead(200, {"Content-Type": type});
            resp.write(data);
        }
        resp.end();
    });
});

server.listen(3000, function () {
    console.log("Listening on port http://localhost:3000");
});
