$(document).ready(function () {
    $('button').on('click', function (event) {
        event.preventDefault();
        console.log('clicked');
        var studentName = $('input').val();
        var newTr = $('<tr>');
        var newTd = $('<td>')
        newTd.text(studentName);
        newTr.append(newTd);
        $('table').append(newTr);
        $('input').val();
    })
})