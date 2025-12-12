import BurgerMenu from "./burger.js";
import { newsSlider } from "./slider.js";
import { vacanciesSlider } from "./slider.js";
import Modal from "./modal.js";

try {
    new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    CLOSE_BUTTON: "header__menu-close",
    lABEL: {
        OPEN: "Открыть номер телефона",
        CLOSE: "Закрыть номер телефона",
    },
    BREAKPOINT: 567,
});
    newsSlider();
    vacanciesSlider();
    new Modal({
        PAGE_BODY: "page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    });
}
catch (error) {
    console.error(error);
}

function initGoUpButton() {
    const goUpButton = document.querySelector(".go-up-button");
    if (!goUpButton) return;

    function getHalfPage() {
        const doc = document.documentElement;
        const fullHeight = doc.scrollHeight - doc.clientHeight;
        return fullHeight / 2;
    }

    let threshold = getHalfPage();

    function toggleGoUpButton() {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        const shouldShow = scrolled > threshold;

        goUpButton.classList.toggle("go-up-button--visible", shouldShow);
    }

    window.addEventListener("scroll", toggleGoUpButton);
    window.addEventListener("resize", () => {
        threshold = getHalfPage();
        toggleGoUpButton();
    });

    toggleGoUpButton();
}

document.addEventListener("DOMContentLoaded", initGoUpButton);