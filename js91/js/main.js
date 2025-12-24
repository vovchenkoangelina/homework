//выпадающее меню в шапке
const solutionsLink = document.querySelector(".menu__link--drop-down");
const solutionsItem = document.querySelector(".menu__item--has-dropdown");

solutionsLink.addEventListener("click", (event) => {
  event.preventDefault(); 
  solutionsItem.classList.toggle("is-open");
});

//модалка
const modal = document.querySelector(".modal");
const openButton = document.querySelector(".modal__open-button");
const closeButton = document.querySelector(".modal__close-button");

openButton.addEventListener("click", () => {
    modal.classList.add("modal--open");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal--open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("modal--open");
  }
});

//поиск с тегами
const searchButtons = document.querySelector(".search__buttons");
const searchInput = document.querySelector(".search__input");

searchButtons.addEventListener("click", event => {
    if (event.target.classList.contains("search__chip")) {
        searchInput.value = event.target.textContent;
        searchInput.focus();  
    }
});

const modalButtons = document.querySelector(".modal__buttons");
const modalInput = document.querySelector(".modal__input");

modalButtons.addEventListener("click", event => {
    if (event.target.classList.contains("modal__chip")) {
        modalInput.value = event.target.textContent;
        modalInput.focus();  
    }
});

//кнопка наверх
const scrollTopButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("scroll-top--visible");
  } else {
    scrollTopButton.classList.remove("scroll-top--visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});