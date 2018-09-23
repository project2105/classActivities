var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function afterConnection() {
    connection.query(`select * from fav_songs where artist = "radiohead";`, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

afterConnection();