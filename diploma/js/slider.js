export const newsSlider = () => {
    new Swiper('.news__slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            prevEl: ".news__slider-button--prev",
            nextEl: ".news__slider-button--next",
        },

        // отображение слайдов для устройств с меньшим экраном
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            }, 1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
};

export const vacanciesSlider = () => {
    new Swiper('.vacancies__slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            prevEl: '.vacancies__slider-button--prev',
            nextEl: '.vacancies__slider-button--next',
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 16, },
            500: { slidesPerView: 2, spaceBetween: 20, },
            1200: { slidesPerView: 3, spaceBetween: 24, },
        },
    });
};

