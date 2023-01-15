$(document).ready(function () {
    window.page = 0;
});
$('#timeline-line').on('click', function () {
    window.page++;
    if (window.page == 1) {
        window.page = 3;
    }
    if (window.page >= 21) {
        return true;
    }
    $('#timeline-line').css('display', 'none');
    console.log(window.page);
    $('#timeline').animate({
        top: '-' + (window.page * 100) + 'vh'
    }, 1000, function () {
        if (window.page >= 20) {
            $('#timeline-line').html('<h2>Я тебя люблю</h2>');
        }
        $('#timeline-line').css('display', 'block');
    });
})
