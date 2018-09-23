var inquirer = require("inquirer");
var mysql = require('mysql');

inquirer
    .prompt([
        {
            type: "list",
            message: "Do you want to post an item for auction or bid on an item?",
            choices: ["Post an item", "Bid on an item"],
            name: "task"
        },
    ])
    .then(function (response1) {
        if (response1.task = "Post an item") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What would you like to post for auction?",
                        name: "itemName"
                    },
                ])
                .then(function (response2) {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What type of item is this?",
                                name: "itemType"
                            },
                        ])
                        .then(function (response3) {
                            console.log('yes');
                        })
                },
                
        } else if (response1.task = "Bid on an item") {
            inquirer
                .prompt([
                    {
                        type: "list",
                        message: "What would you like to bid on?",
                        choices: [],
                        name: "chosenAuction"
                    },
                ])
        }
    });
