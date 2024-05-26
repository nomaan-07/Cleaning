const homeBgImg1 = document.querySelector("#home-bg-img-1");
const homeBgImg2 = document.querySelector("#home-bg-img-2");
const homeBgImageSources = [
  "images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg",
  "images/slideshow/afro-woman-holding-bucket-with-cleaning-items.jpg",
  "images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg",
];
const homeWordsWrapper = document.querySelector(".home__words");
const homeWords = ["House", "Kitchen", "Office"];

function changeHomeBgImg() {
  let activeImg = homeBgImg1;
  let inactiveImg = homeBgImg2;
  let indexOfHomeBgImages = 0;

  function swapImages() {
    const temp = activeImg;
    activeImg = inactiveImg;
    inactiveImg = temp;
  }

  setInterval(() => {
    indexOfHomeBgImages = (indexOfHomeBgImages + 1) % homeBgImageSources.length;
    // indexOfHomeBgImages++;
    // if (indexOfHomeBgImages > homeBgImageSources.length - 1) {
    //     indexOfHomeBgImages = 0;
    // }
    inactiveImg.src = homeBgImageSources[indexOfHomeBgImages];
    activeImg.classList.remove("opacity-1");
    setTimeout(() => {
      activeImg.classList.add("opacity-1");
    }, 100);
    swapImages();
  }, 4000);
}

function changeHomeWord() {
  let indexOfWord = 0;
  setInterval(() => {
    indexOfWord = (indexOfWord + 1) % homeWords.length;
    homeWordsWrapper.innerHTML = `<span class="home__word">${homeWords[indexOfWord]}</span>`;
  }, 4000);
}

function commentSectionSwiper() {
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

changeHomeBgImg();
changeHomeWord();
commentSectionSwiper();
