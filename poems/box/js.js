let iterate = 0;
let linkIterate = 0;
let text = [
    'Да, я знаю, я очень опоздал.',
    'Будет хорошо, если вы останетесь здесь на некоторое время.',
    'Вчерашние торжества явно прошли не так, как мы хотели.',
    'но я хочу, чтобы ты знала, что я ценю тебя.',
    'Улыбка, которая может разбудить меня каждый день ',
    'глаза, которые счастливо засыпали.',
    'Губы сладкие, как клубника',
    'юмор, который заставляет меня смеяться',
    'Я просто ценю тебя таким, какой ты есть, за те эмоции, которые ты мне даришь.',
    'Спасибо вам за это )',
    'Я хотел бы, чтобы улыбка сопровождала вас каждый день.',
    'link Я бы хотел взять тебя с собой в отпуск.',
    'проводить с вами время, чтобы отдохнуть и расслабиться',
    'link ездить на мотоцикле',
    'почувствовать легкий ветер, когда ты прижимаешься ко мне.',
    'link приготовить что-нибудь вместе',
    'Сочетание вашей сладости с моей любовью к острым ароматам позволит создать нечто восхитительное',
    'просто быть с тобой',
    'ваш партнер, но и друг, с которым вы можете делать все.',
    'может быть, я слегка улыбнулся?',
    'Не знаю, но я точно устал от прыжков )',
    'link ваш кролик',
];
let link = [
    'https://apartamentyzakopane.pl/blog/wp-content/uploads/2019/09/tatryblog-2-1024x683.jpg',
    'https://i.pinimg.com/236x/ba/51/10/ba51106ddd2976e5c0406e3ec1f810a9.jpg',
    'https://www.kobieta.pl/media/cache/big/uploads/media/default/0003/41/najlepsze-imprezy-sa-w-kuchni-3-pomysly-na-wspolne-gotowanie-z-przyjaciolmi.jpeg',
    'https://assets.catawiki.com/image/cw_normal/plain/assets/catawiki/assets/2022/11/22/f/f/d/ffd80cd8-9af0-4b2c-99ac-84f8769897c4.jpg'
];
let result = false;
jump = false;
$(document).click(function () {

    if (jump) {
        return;
    }

    if (text[iterate] === undefined) {
        $('.box').addClass('bounce-7');


        setTimeout(function () {
            $('.box').removeClass('bounce-7');
            jump = false;
        }, 1000)
        iterate++;

        jump = true;

        return;
    }

    $('.box').text(text[iterate]);
    result = text[iterate].includes("link");

    if (result) {
        window.open(link[linkIterate], "_blank");
        linkIterate++;
        result = false
    }
    jump = true;

    $('.box').addClass('bounce-7');


    setTimeout(function () {
        $('.box').removeClass('bounce-7');
        jump = false;
    }, 1000)
    iterate++;
});
