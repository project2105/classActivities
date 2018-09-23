var connection = require("./connection.js");

var orm = {
  select: function (colToSearch, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colToSearch, tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  leftJoin: function (table1, table2, table1client_id, table2client_id) {
    var queryString = "SELECT * FROM ?? LEFT JOIN ?? ON ?? = ??;";
    connection.query(queryString, [table1, table2, table1client_id, table2client_id], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
