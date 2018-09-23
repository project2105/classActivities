function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        var outcome = Math.floor(Math.random() * 2)
        if (outcome === 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    }
    this.badGame = function () {
        var outcome = Math.floor(Math.random() * 2)
        if (outcome === 1) {
            this.offense--;
        } else {
            defense--;
        }
    }
    this.printstats = function () {
        console.log(this.name + ' ' + this.position + ' ' + this.defense + ' ' + this.offense);
    }
}

var player1 = new Player('adam', 'something', 5, 5);

player1.printstats();
player1.goodGame();
player1.printstats();
var counter = 0;
function userInput() {

    var inquirer = require("inquirer");
    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Player name?"
        },

        {
            type: "list",
            name: "position",
            message: "What position?",
            choices: ["dudeA", "dudeB", "dudeC"]
        },

        {
            type: "input",
            name: "offense",
            message: "Offensive value (1 to 10)?"
        },

        {
            type: "input",
            name: "defense",
            message: "Defensive value (1 to 10)?"
        }

    ]).then(function (response) {
        player = 'player1';
        var player = new Player(response.name, response.position, response.offense, response.defense);
        player.printstats();
        if (counter < 2) {
            counter++;
            player = 'player' + counter;
            userInput();
        }
    });


}
userInput();
