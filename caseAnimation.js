$(document).ready(function() {
    const openCaseButton = $('#openCaseButton');
    const hextechCase = $('.case');
    const resultContainer = $('.result');
    const mimiGif = $('.mimi');

    // Definiujemy tablicę nagród w kolejności, w jakiej mają być otrzymane
    // Nagrody 0 i 1 będą zawierać klucz, nagroda 2 (ostatnia) już nie.
    const rewardSequence = [
        { id: 'reward1', type: 'image', src: 'image/reward1.png', text: 'Brawo cos czeka na ciebie juz na lidze', hasKey: true },
        { id: 'reward2', type: 'image', src: 'image/reward2.png', text: 'No to nizesz odebrac do dnia XYZ skopiuj sobie kod XXXXXX', hasKey: true },
        { id: 'reward3', type: 'image', src: 'image/reward3.png', text: 'No i ostatnie do odebrania w czasie', hasKey: false }
    ];

    let currentRewardIndex = 0;

    function resetCase() {
        hextechCase.css('background-image', 'url("image/case.png")');
        hextechCase.removeClass('opening');
        resultContainer.addClass('hidden').empty();
        openCaseButton.show();
        mimiGif.show();
    }

    function displayReward(reward) {
        resultContainer.empty();

        const rewardItem = $('<div class="result-item"></div>');

        if (reward.type === 'image') {
            const img = $('<img class="reward-image">').attr('src', reward.src).attr('alt', 'Nagroda');
            rewardItem.append(img);
        } else if (reward.type === 'text') {
            const text = $('<p class="reward-text"></p>').text(reward.content);
            rewardItem.append(text);
        }

        const description = $('<p></p>').text(reward.text || 'Tadam!');
        rewardItem.append(description);
        resultContainer.append(rewardItem);

        if (reward.hasKey) {
            const keyRewardDiv = $('<div id="keyReward"></div>');
            keyRewardDiv.append($('<img src="image/hextech_key.png" alt="Klucz Hextech" width="80px">'));
            keyRewardDiv.append($('<p>Masz kolejny klucz a co tam!</p>'));
            const openNextCaseButton = $('<div class="button" id="openNextCaseButton">Dawaj kolejną skrzynke!</div>');
            keyRewardDiv.append(openNextCaseButton);
            resultContainer.append(keyRewardDiv);

            openNextCaseButton.on('click', function() {
                resetCase();
            });
        } else {
            resultContainer.append($('<p>To byl ostatni prezencik kochana Sardynko</p>'));
            openCaseButton.hide();
            mimiGif.hide();
        }
    }

    openCaseButton.on('click', function() {
        if (currentRewardIndex >= rewardSequence.length) {
            $(this).hide();
            hextechCase.css('background-image', 'none');
            resultContainer.removeClass('hidden').empty().append($('<p>Wszystkie nagrody zostały odebrane!</p><p>Baw sie dobrze dalej dzisiejszym dniem</p>'));
            return;
        }

        $(this).hide();
        mimiGif.hide();

        hextechCase.addClass('opening');

        setTimeout(function() {
            hextechCase.css('background-image', 'none');
            resultContainer.removeClass('hidden');

            const currentReward = rewardSequence[currentRewardIndex];
            displayReward(currentReward);

            currentRewardIndex++;

            hextechCase.removeClass('opening');
        }, 1000);
    });

    if (rewardSequence.length > 0) {
        openCaseButton.show();
    } else {
        openCaseButton.hide();
        resultContainer.removeClass('hidden').text('Brak dostępnych nagród.');
    }
});
