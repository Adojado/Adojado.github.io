$(document).ready(function() {
    let texts = [
        "твое время",
        "твоя улыбка",
        "твой голос",
        "твои глаза",
        "твое тепло",
        "твои волосы",
        "твои губы",
    ];

    texts.forEach(function (element, index) {
        setTimeout(function () {
            $('.texts').html(element);
            setTimeout(function () {
                $('.texts').animate({
                    top: 0,
                    color: "#222233"
                }, 2000, function () {
                    $('.texts').css('top', '200px');
                    $('.texts').css('color', '#ffffff');
                })
            }, 1500)
        }, index * 3500);
    });

    setTimeout(function () {
        $('.texts').html("Вместе они весь мой мир");
        $('.heart-Container').toggleClass('broken');
    }, 24500)

    setTimeout(function () {
        $('.lvy').slideDown(2000);
    }, 25500)
});
