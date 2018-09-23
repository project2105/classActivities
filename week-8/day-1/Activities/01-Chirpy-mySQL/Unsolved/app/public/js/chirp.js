// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps


// When user chirps

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var chirp = {
    all: function (cb) {
        orm.all("chirps", function (res) {
            cb(res);
        });
    },

    create: function (author, chirp, cb) {
        orm.create("chirps", author, chirp, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
