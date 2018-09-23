var request = require('request');
var moment = require('moment');
// Write code here to parse command line arguments and store them into variables
var link = process.argv;
var search = link[2];
var term = link.splice(3).join(' ');

if (search === "show") {
    findShow(term);
    console.log('looking for a TV show');
} else if (search === "actor") {
    findActor(term);
    console.log('looking for an actor');
} else {
    console.log('improper request');
}
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

function findShow() {
    var queryUrl = 'http://api.tvmaze.com/search/shows?q=' + term;
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //console.log(JSON.parse(body));
            console.log('Show Title: ' + JSON.parse(body)[0].show.name);
            console.log('Show Genre(s): ' + JSON.parse(body)[0].show.genres.join(', '));
            console.log('Show Rating: ' + JSON.parse(body)[0].show.rating.average);
            console.log('Show Network: ' + JSON.parse(body)[0].show.network.name);
            console.log('Show Summary: ' + JSON.parse(body)[0].show.summary);
        }
    })
}

function findActor() {
    var queryUrl = 'http://api.tvmaze.com/search/people?q=' + term;
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //console.log(JSON.parse(body));
            var bday = JSON.parse(body)[0].person.birthday;
            console.log('Actor Name: ' + JSON.parse(body)[0].person.name);
            console.log('Actor Birthdate: ' + moment(bday).format("MMM Do YY"));
            console.log('Actor Gender: ' + JSON.parse(body)[0].person.gender);
            console.log('Actor\'s Country: ' + JSON.parse(body)[0].person.country.name);
            console.log('Actor\'s URL: ' + JSON.parse(body)[0].person._links.self.href);
        }
    })
}