export default class BurgerMenu {
    constructor(config) {
        this.config = config;

        this.burgerButton = document.querySelector(`.${config.BURGER}`);
        this.burgerMenu   = document.querySelector(`.${config.HEADER_MENU}`);
        this.closeButton  = document.querySelector(`.${config.CLOSE_BUTTON}`);

        if (!this.burgerButton || !this.burgerMenu) return;

        this.isMobileView = window.innerWidth <= config.BREAKPOINT;

        this.onBurgerClick   = this.onBurgerClick.bind(this);
        this.onCloseClick    = this.onCloseClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onWindowResize  = this.onWindowResize.bind(this);

        this.manageEvents();
        window.addEventListener('resize', this.onWindowResize);
    }

    manageEvents() {
        if (this.isMobileView) {
            this.burgerButton.addEventListener('click', this.onBurgerClick);
            document.addEventListener('click', this.onDocumentClick);
            if (this.closeButton) {
                this.closeButton.addEventListener('click', this.onCloseClick);
            }
        } else {
            this.burgerButton.removeEventListener('click', this.onBurgerClick);
            document.removeEventListener('click', this.onDocumentClick);
            if (this.closeButton) {
                this.closeButton.removeEventListener('click', this.onCloseClick);
            }
            this.close();
        }
    }

    onWindowResize() {
        const isNowMobile = window.innerWidth <= this.config.BREAKPOINT;
        if (isNowMobile !== this.isMobileView) {
            this.isMobileView = isNowMobile;
            this.manageEvents();
        }
    }

    onBurgerClick(event) {
        event.stopPropagation();
        const isOpen = !this.isOpen();
        this.toggle(isOpen);
    }

    onCloseClick(event) {
        event.stopPropagation();
        this.toggle(false);
    }

    onDocumentClick(event) {
        if (!this.isOpen()) return;

        const target = event.target;
        const clickInsideMenu = target.closest(`.${this.config.HEADER_MENU}`);
        const clickOnBurger   = target.closest(`.${this.config.BURGER}`);

        if (!clickInsideMenu && !clickOnBurger) {
            this.toggle(false);
        }
    }

    isOpen() {
        return this.burgerButton.classList.contains(this.config.BURGER_OPEN);
    }

    toggle(isOpen) {
        this.burgerButton.classList.toggle(this.config.BURGER_OPEN, isOpen);
        this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);

        this.burgerButton.setAttribute('aria-expanded', isOpen);
        this.burgerButton.setAttribute(
            'aria-label',
            isOpen ? this.config.lABEL.CLOSE : this.config.lABEL.OPEN
        );
        this.burgerMenu.setAttribute('aria-hidden', String(!isOpen));
    }

    close() {
        this.toggle(false);
    }
}
