import { newsSlider } from "./slider.js";
import { vacanciesSlider } from "./slider.js";

try {
    newsSlider();
    vacanciesSlider();
}
catch (error) {
    console.error(error);
}