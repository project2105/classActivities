var button = $('<button>').addClass('btn btn-success labelSuccess').text('Click Me');
$('#lou-buttons').append(button);
$(document).on('click', 'button.btn-success', function () {
    $(this).removeClass('btn-success');
    $(this).addClass('btn-warning');
});

