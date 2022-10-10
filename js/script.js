function start()
{
    var time = 2000;

    $(".heart").each(function() {
        var heart = $(this)
        setTimeout(function () {
            $(heart).fadeIn(500);
            $(heart).animate({top: '900px', left: '35vw'}, 3500);
        }, time);
        time += 1000;
    });

    setTimeout(function () {
        $('.heart-big').fadeIn(500);
        $('.content-love').animate({top: '422px'}, 7500);
    }, time);
}
