var fs = require('fs');
fs.readFile("bank.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);

    var transaction = process.argv[2];
    var amount = process.argv[3];

    // calculate total
    function calculateTotal() {
        fs.readFile("bank.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
            var transactionArray = data.split(', ');
            var balance = 0;
            for (var i = 0; i < transactionArray.length; i++) {
                const element = parseFloat(transactionArray[i]);
                balance += element;
            }
        })
    }

    if (transaction === 'total') {
        calculateTotal();
        console.log(data);
    } else if (transaction === 'deposit') {
        fs.appendFile("bank.txt", ", " + amount, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    } else if (transaction === 'withdraw') {
        var out = ", -" + amount;
        fs.appendFile("bank.txt", out, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    } else if (transaction === 'lotto') {
        console.log('nothing');
    }