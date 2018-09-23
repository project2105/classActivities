var code = process.argv;
var output;
var operand = code[2];
var num1 = code[3];
var num2 = code[4];

if (operand === 'add') {
    output = parseFloat(num1) + parseFloat(num2);
} else if (operand === 'subtract') {
    output = parseFloat(num1) - parseFloat(num2);
} else if (operand === 'multiply') {
    output = parseFloat(num1) * parseFloat(num2);
} else if (operand === 'divide') {
    output = parseFloat(num1) / parseFloat(num2);
} else if (operand === 'remainder') {
    output = parseFloat(num1) % parseFloat(num2);
}

console.log(output);