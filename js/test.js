// Skrypt zmieniający kolor tła strony na losowy kolor
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Wywołanie funkcji zmieniającej kolor tła co 2 sekundy (2000 milisekund)
setInterval(changeBackgroundColor, 2000);

// Opcjonalnie: wywołaj funkcję od razu, aby kolor zmienił się na starcie
changeBackgroundColor();
