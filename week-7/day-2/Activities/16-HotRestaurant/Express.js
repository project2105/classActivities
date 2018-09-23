var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

const tables = [];

app.get('/api/tables', function (req, res) {
    res.json(tables);
});

app.post('/api/reserve', function () {
    const table = req.body;
    tables.push(table);
    res.json(table);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
