import { newsSlider } from "./slider.js";
import { vacanciesSlider } from "./slider.js";
import Modal from "./modal.js";

try {
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