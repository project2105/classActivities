var database = firebase.database();
console.log(database);

database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    var monthsDiff = moment().diff(moment(data.start), 'months');

    console.log(data);
    $("table").append(
        `<tr>
            <td>${data.name}</td>
            <td>${data.role}</td>
            <td>${data.start}</td>
            <td>${monthsDiff}</td>
            <td>${data.rate}</td>
            <td>${monthsDiff * data.rate}<td>
        </tr>`
    );
});

$("button").on("click", function () {
    // collect all the data from the form
    var employeeName = $("#employeeName").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();

    // clear these fields
    $("#employeeName").val("");
    $("#role").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");

    console.log(employeeName, role, startDate, monthlyRate);
    database.ref().push({
        name: employeeName,
        role: role,
        start: startDate,
        rate: monthlyRate
    });
});