class Header {
  //Поле selectors хранит CSS-селекторы атрибутов
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };

  //Поле stateClasses хранит CSS-классы состояний
  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };
  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }

  constructor() {
    //Нужно заполнить переменные для доступа к DOM-элементам,
    //с которыми мы будем работать
    this.rootElement = document.querySelector(this.selectors.root); //ссылка на корневой DOM-эдемент разрабатываемого компонента
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.bindEvents();
  }
}

export default Header;
