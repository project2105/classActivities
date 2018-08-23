var yes = require('./band.js');
console.log('A punk band is ' + yes.punk);

for (var key in yes) {
    console.log('A ' + key + ' band is ' + yes[key] + '.');
}
