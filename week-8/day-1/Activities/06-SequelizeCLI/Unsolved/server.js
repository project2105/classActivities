// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var db = require("./models");

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port %s ", PORT);
  });
});
