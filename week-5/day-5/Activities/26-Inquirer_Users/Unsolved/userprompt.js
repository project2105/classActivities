// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "list",
            message: "Pick a city.",
            choices: ["Boston", "Seattle", "Chicago"],
            name: "city"
        },
        {
            type: "checkbox",
            message: "Favorite time of day.",
            choices: ["Morning", "Noon", "Night"],
            name: "time"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.password && inquirerResponse.password === 'sam') {
            console.log("\nWelcome " + inquirerResponse.username);
            console.log("You chose " + inquirerResponse.city + ".");
            console.log("You favorite time of day is " + inquirerResponse.time + ".");
            console.log("Password: " + inquirerResponse.password + ".");
            console.log("Confirm? " + inquirerResponse.confirm + ".")
        }
        else {
            console.log("Incorrect password!");
        }
    });

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
