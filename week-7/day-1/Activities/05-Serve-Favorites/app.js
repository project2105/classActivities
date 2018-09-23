const fs = require("fs");
const http = require("http");

const PORT = 8080;

const server = http.createServer(function (req, res) {
    const route = req.url;
    console.log(req.url);

    if (route === "/") {
        displayPage("index.html", res, 200);
    } else if (route === "/foods") {
        displayPage("foods.html", res, 200);
    } else if (route === "/movies") {
        displayPage("movies.html", res, 200);
    } else if (route === "/frameworks") {
        displayPage("frameworks.html", res, 200);
    } else {
        displayPage("404.html", res, 404);
    }
});

const displayPage = function (page, res, status) {
    fs.readFile(__dirname + "/" + page, function (err, html) {
        res.writeHead(status, { "content-type": "text/html" });
        res.end(html);
    });
}

server.listen(PORT, function () {
    console.log(`WE IN HERE! on ${PORT}`);
});