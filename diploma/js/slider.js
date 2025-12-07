export const newsSlider = () => {
    new Swiper('.news__slider', {
    slidesPerView: 3,      
    spaceBetween: 20,      
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
        768: {      
        slidesPerView: 2,
        spaceBetween: 20,
        },
        1024: {      
        slidesPerView: 3,
        spaceBetween: 24,
        },
    },
    });
};

export const vacanciesSlider = () => {
    new Swiper('.vacancies__slider', {
    slidesPerView: 3,      
    spaceBetween: 20,      
    slidesPerGroup: 1,     
    loop: false,          

    navigation: {
        prevEl: ".vacancies__slider-button--prev",
        nextEl: ".vacancies__slider-button--next",
    },

    // отображение слайдов для устройств с меньшим экраном
    breakpoints: {
        0: {            
        slidesPerView: 1,
        spaceBetween: 16,
        },
        768: {      
        slidesPerView: 2,
        spaceBetween: 20,
        },
        1024: {      
        slidesPerView: 3,
        spaceBetween: 24,
        },
    },
    });
};