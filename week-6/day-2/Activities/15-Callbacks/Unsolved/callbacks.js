var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

function what(arg1, callback) {
    console.log(arg1);
    callback();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function who(arg1, callback2) {
    if (arg1) {
        callback2();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function how(f, v) {
    return function () {
        return f(v);
    }
}

sum(5)(10);
function sum(a) {
    return function (b) {
        return a + b;
    }
}


// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
