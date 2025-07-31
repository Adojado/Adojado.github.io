document.addEventListener('DOMContentLoaded', () => {
    const scrollElement = document.querySelector('.scroll');

    if (scrollElement) {
        const scrollFactor = 0.4;
        const maxTranslateY = 800;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;

            let translateYValue = scrollY * scrollFactor;

            translateYValue = Math.min(translateYValue, maxTranslateY);

            scrollElement.style.transform = `translateY(${translateYValue}px)`;
        });
    }
});
