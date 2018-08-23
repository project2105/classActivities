var database = firebase.database();

console.log(database);

database.ref().on('value', function (snapshot) {
    console.log(snapshot.val());
});

database.ref().set({
    'favsong': 'Everlong'
});

database.ref('bio/').push({
    name: 'Paul',
    age: 47
});


$('button').on('click', function () {
    var name = $('#name').val();
    var age = $('#age').val();

    database.ref('bio/').push({
        name,
        age
    })

});

database.ref('bio/').on('value', function (snapshot) {
    var data = snapshot.val();
    $('#display').html('Name: ' + data.name + '<br>' + 'Age: ' + data.age);
    console.log(snapshot.val());
});

// OR
// database.ref().on('value', function (snapshot) {
//     var data = snapshot.val().bio;
//     $('#display').html('Name: ' + data.name + '<br>' + 'Age: ' + data.age);
//     console.log(snapshot.val());
// });