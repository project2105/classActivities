// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/", function (req, res) {
    chirp.all(function (data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Add a chirp
  app.post("/api/chirps", function (req, res) {
    chirp.create([
      "author", "chirp"
    ], [
        req.body.author, req.body.chirp
      ], function (result) {
        res.json({ id: result.insertId });
      });
  });

};
