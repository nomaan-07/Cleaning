const allElements = document.querySelectorAll("*");
const header = document.querySelector(".header");
const headerLogoPictures = document.querySelectorAll(".header__logo-picture");
const headerLogoTexts = document.querySelectorAll(".header__logo-text");
const userLoggedInIcon = document.querySelector(".header__user");
const mobileUserLoggedInIcon = document.querySelector(".mobile-login__icon");
const accountUsernames = document.querySelectorAll(".header__user-name");
const accountModal = document.querySelector(".header__login-submenu--wrapper");
const mobileAccountModal = document.querySelector(
  ".mobile-login__submenu--wrapper"
);
const headerLogInBtn = document.querySelector(".header__login-btn");
const mobileLogInBtn = document.querySelector(".mobile-login__login-link");
const headerLogOutButtons = document.querySelectorAll(".header__logout-btn");
const mainSlogan = document.querySelector(".main-slogan");
const changeThemeButtons = document.querySelectorAll(".change-theme-btn");
const changeThemeIcons = document.querySelectorAll(".theme-icon");
const headerLightLogos = document.querySelectorAll(".light-logo");
const headerDarkLogos = document.querySelectorAll(".dark-logo");
const mobileMenuButtons = document.querySelectorAll(".mobile-menu__toggle");
const overlay = document.querySelector(".overlay");
const desktopOverlay = document.querySelector(".desktop-overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileSubmenuOpenBtn = document.querySelector(".mobile-submenu-open-btn");
const mobileSubmenu = document.querySelector(".mobile-submenu");
const mobileThemeName = document.querySelector(".change-theme__text");

let lastScroll = 0;

// check if user is logged in

if (localStorage.getItem("isLoggedIn") === "true") {
  userLoggedInIcon.classList.remove("hidden");
  mobileUserLoggedInIcon.classList.remove("hidden");
  headerLogInBtn.classList.add("hidden");
  mobileLogInBtn.classList.add("hidden");
  if (localStorage.getItem("username")) {
    accountUsernames.forEach((username) => {
      username.innerText = localStorage.getItem("username");
    });
  } else {
    accountUsernames.forEach((username) => {
      username.innerText = "user";
    });
  }
}

if (localStorage.getItem("theme") === "dark") applyDarkTheme();

// Intersection Observer
function observerHandler(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("observe");
    }
  });
}

const observerClasses = `
    .about__image, .section__title, .about__caption, .offer, .comments-wrapper,
    .companies__wrapper, .home__title, .discover__caption, .stats__img, .stats-data,
    .static__caption ,.home__btns, .team__caption, .team__btn, .team__members, .journey-content,
    .journey__img, .journey__track, .service-box, .faqs__wrapper, .faqs__more, .faqs__btn,
    .contact__caption, .contact__info, .contact-img__wrapper, .contact-form__caption, .contact__form,
    .detail-images, .detail-service, .book__caption, .book__form`;

const elementsToObserve = document.querySelectorAll(observerClasses);

const observer = new IntersectionObserver(observerHandler, { threshold: 0.1 });

function observeElement(element) {
  if (element) {
    observer.observe(element);
  }
}

function initObserver() {
  elementsToObserve.forEach(observeElement);
}

// Fallback for browsers without IntersectionObserver support
if ("IntersectionObserver" in window) {
  initObserver();
} else {
  elementsToObserve.forEach((el) => {
    el.classList.add("observe");
  });
}

function removeTransitionBeforeChangeTheme() {
  allElements.forEach((el) => el.classList.add("no-transition"));
}

function removeTransitionAfterChangeTheme() {
  // apply the changes immediately by forcing reflow
  document.body.offsetHeight;
  allElements.forEach((el) => el.classList.remove("no-transition"));
}

function applyDarkTheme() {
  removeTransitionBeforeChangeTheme();
  document.documentElement.classList.add("dark");
  changeThemeIcons.forEach((icon) => icon.classList.toggle("hidden"));
  headerLightLogos.forEach((logo) => logo.classList.add("hidden"));
  headerDarkLogos.forEach((logo) => logo.classList.remove("hidden"));
  mobileThemeName.innerText = "Light";
  removeTransitionAfterChangeTheme();
}

function changeThemeHandler() {
  removeTransitionBeforeChangeTheme();
  changeThemeIcons.forEach((icon) => icon.classList.toggle("hidden"));
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    headerLightLogos.forEach((logo) => logo.classList.remove("hidden"));
    headerDarkLogos.forEach((logo) => logo.classList.add("hidden"));
    mobileThemeName.innerText = "Dark";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    localStorage.setItem("theme", "dark");
    headerLightLogos.forEach((logo) => logo.classList.add("hidden"));
    headerDarkLogos.forEach((logo) => logo.classList.remove("hidden"));
    mobileThemeName.innerText = "Light";
  }
  removeTransitionAfterChangeTheme();
}

function stickyHeader() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll === 0) {
    header.classList.remove("header--scroll", "header--Scroll-TranslateY");
    headerLogoPictures.forEach((logo) =>
      logo.classList.remove("header__logo-picture--scroll")
    );
    headerLogoTexts.forEach((logo) =>
      logo.classList.remove("header__logo-picture--scroll")
    );
  } else {
    if (currentScroll > lastScroll) {
      header.classList.add("header--Scroll-TranslateY");
      header.classList.add("header--scroll");
      headerLogoTexts.forEach((logo) =>
        logo.classList.add("header__logo-picture--scroll")
      );
      headerLogoPictures.forEach((logo) =>
        logo.classList.add("header__logo-picture--scroll")
      );
      accountModal.classList.add("header__login-submenu--wrapper--scroll");
    } else {
      accountModal.classList.remove("header__login-submenu--wrapper--scroll");
      header.classList.remove("header--Scroll-TranslateY");
    }
  }
  lastScroll = currentScroll;
}

function mobileMenuToggle() {
  overlay.classList.toggle("hidden");
  mobileMenu.classList.toggle("mobile-menu__open");
  desktopOverlay.classList.toggle("hidden");
}

function accountModalOpen() {
  accountModal.classList.remove("hidden");
  mobileAccountModal.classList.remove("hidden");
  desktopOverlay.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function accountModalClose() {
  accountModal.classList.add("hidden");
  mobileAccountModal.classList.add("hidden");
  desktopOverlay.classList.add("hidden");
  overlay.classList.add("hidden");
  mobileMenu.classList.remove("mobile-menu__open");
  mobileSubmenu.classList.remove("flex");
  mobileSubmenuOpenBtn.classList.remove("mobile-submenu-open-btn--active");
}

function mobileSubmenuToggle() {
  mobileSubmenu.classList.toggle("flex");
  mobileSubmenuOpenBtn.classList.toggle("mobile-submenu-open-btn--active");
}

function logOutHandler() {
  localStorage.setItem("isLoggedIn", "false");
  location.reload();
}

function commentSectionSwiper() {
  // check if the comment swiper section exist
  if (document.querySelector(".comments-wrapper")) {
    const swiper = new Swiper(".comments-wrapper", {
      autoplay: {
        delay: 4000,
      },
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: ".comments__btn--next",
        prevEl: ".comments__btn--prev",
      },

      breakpoints: {
        401: {
          spaceBetween: 40,
          slidesPerView: 1,
        },
        576: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        1201: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        1400: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
      },
    });
  }
}
commentSectionSwiper();

window.addEventListener("scroll", stickyHeader);
changeThemeButtons.forEach((btn) =>
  btn.addEventListener("click", changeThemeHandler)
);
mobileMenuButtons.forEach((btn) =>
  btn.addEventListener("click", mobileMenuToggle)
);
userLoggedInIcon.addEventListener("click", accountModalOpen);
mobileUserLoggedInIcon.addEventListener("click", accountModalOpen);
desktopOverlay.addEventListener("click", accountModalClose);
headerLogOutButtons.forEach((btn) => btn.addEventListener("click", logOutHandler));
overlay.addEventListener("click", accountModalClose);
mobileSubmenuOpenBtn.addEventListener("click", mobileSubmenuToggle);
