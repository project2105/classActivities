var orm = require("./config/orm.js");

// Console log all the party names.
orm.select("party_name", "parties");
// Console log all the client names.
orm.select("client_name", "clients");
// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");
// Console log all the clients and their parties.
orm.leftJoin("parties", "clients", "parties.client_id", "clients.id");