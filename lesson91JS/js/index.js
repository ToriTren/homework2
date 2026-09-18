import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { heroSlider } from "./hero-slider.js";
import { initSearch } from "./search.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      PAGE_BODY_MENU_OPEN: "page__body--menu-open",
      MENU_LINK: "menu__link",
      SUBMENU_TRIGGER: "menu__link--solutions",
      SUBMENU_PARENT: "menu__item--solutions",
      SUBMENU_OPEN: "menu__item--solutions-open",
      BREAKPOINT: 768,
      MAIN: "main",
    },
    headerFixed
  );

  heroSlider();
  initSearch();  
} catch (error) {
  console.error(error);
}
