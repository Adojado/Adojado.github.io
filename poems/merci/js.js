$('.place').on('click', function () {
    $('#dialog img').attr('src', $(this).attr('data-img'));
    $('#dialog p').html($(this).attr('data-text'));
    $( "#dialog" ).dialog();
});
