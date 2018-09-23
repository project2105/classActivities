var inputString = process.argv;
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];
var outputNum;

if (operand === 'add') {
    outputNum = parseFloat(num1) + parseFloat(num2);
} else if (operand === 'subtract') {
    outputNum = parseFloat(num1) - parseFloat(num2);
} else if (operand === 'multply') {
    outputNum = parseFloat(num1) * parseFloat(num2);
} else if (operand === 'divide') {
    outputNum = parseFloat(num1) / parseFloat(num2);
} else if (operand === 'remainder') {
    outputNum = parseFloat(num1) % parseFloat(num2);
}

console.log(outputNum);