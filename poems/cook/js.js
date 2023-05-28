$('input').on('change', function() {
    let sweetValue = 0;
    let acidValue = 0;
    let spicyValue = 0;

    sweetValue += $('input[name="sweet1"]').val();
    sweetValue += $('input[name="sweet2"]').val();
    sweetValue += $('input[name="sweet3"]').val();

    acidValue += $('input[name="acid1"]').val();
    acidValue += $('input[name="acid2"]').val();
    acidValue += $('input[name="acid3"]').val();

    spicyValue += $('input[name="spicy1"]').val();
    spicyValue += $('input[name="spicy2"]').val();
    spicyValue += $('input[name="spicy3"]').val();

    let max = parseInt(sweetValue) + parseInt(spicyValue) + parseInt(acidValue);

    let sweetPercent = (sweetValue / max) * 100;
    let acidPercent = (acidValue / max) * 100;
    let spicyPercent = (spicyValue / max) * 100;

    $('.icon.sweet .value').animate({
       width: sweetPercent + '%'
    }, 700);

    $('.icon.acid .value').animate({
        width: acidPercent + '%'
    }, 700);

    $('.icon.spicy .value').animate({
        width: spicyPercent + '%'
    }, 700);
});

$('button').on('click', function (){
    let sweetValue = 0;
    let acidValue = 0;
    let spicyValue = 0;

    sweetValue += $('input[name="sweet1"]').val();
    sweetValue += $('input[name="sweet2"]').val();
    sweetValue += $('input[name="sweet3"]').val();

    acidValue += $('input[name="acid1"]').val();
    acidValue += $('input[name="acid2"]').val();
    acidValue += $('input[name="acid3"]').val();

    spicyValue += $('input[name="spicy1"]').val();
    spicyValue += $('input[name="spicy2"]').val();
    spicyValue += $('input[name="spicy3"]').val();

    let max = parseInt(sweetValue) + parseInt(spicyValue) + parseInt(acidValue);

    let sweetPercent = (sweetValue / max) * 100;
    let acidPercent = (acidValue / max) * 100;
    let spicyPercent = (spicyValue / max) * 100;

    let limit = 30;
    let name = '';
    let change = false;

    if (sweetPercent > limit) {
        name = 'sweet';
        change = true;
    }

    if (name != '' && acidPercent > 40) {
        name += '-acid';
        change = true;
    } else if (acidPercent > 40) {
        name += 'acid';
        change = true;
    }

    if (name != '' && spicyPercent > 40) {
        name += '-spicy';
        change = true;
    } else if (spicyPercent > 40) {
        name += 'spicy';
        change = true;
    }

    if ((acidPercent > limit && sweetPercent > limit && spicyPercent > limit) || !change) {
        name = 'all';
    }

    name += '.jpg';

    $('.list').html(
        '<img src="' + name + '" />'
    );

});
