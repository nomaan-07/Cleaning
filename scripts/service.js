const services = [
  {
    service: "factory-cleaning",
    imagesSrc: [
      "images/services/close-up-mop-cleaning-industrial-plant-floor.jpg",
      "images/services/professional-industrial-cleaner-protective-uniform-cleaning-floor-food-processing-plant.jpg",
      "images/essential-goods-during-epidemic-prevention-protection.jpg",
      "images/coronavirus-pandemic-disinfector-protective-suit-mask-sprays-disinfectants-house-office.jpg",
      "images/high-angle-woman-cleaning-floors.jpg",
      "images/disinfecting-home.jpg",
    ],
    name: "Factory Cleaning",
    price: "2300",
    stars: 4,
    titles: [
      `Industrial Strength Cleanliness`,
      `Precision Cleaning for High-Performance Spaces`,
      `The Clean Factory Revolution`,
      `Sparkling Facilities, Superior Production`,
      `Next-Level Clean for Next-Gen Factories`,
    ],
    captions: [
      `Experience the pinnacle of purity with our comprehensive factory cleaning solutions. Where every corner gleams and safety standards are not just met, but exceeded.`,
      `Our specialized team delivers meticulous cleaning services tailored for the complex needs of industrial environments, ensuring operational excellence and a spotless workspace.`,
      `Join the revolution of cleanliness in the manufacturing sector. Our services don't just clean; they enhance productivity and employee well-being.`,
      `Discover the direct link between our exceptional cleaning services and your factory's enhanced production capabilities. A clean factory is a productive one.`,
      `Embrace the future with our advanced cleaning techniques designed for modern factories. We bring cutting-edge cleanliness to your doorstep.`,
    ],
  },
  {
    service: "office-cleaning",
    imagesSrc: [
      "images/services/person-taking-care-office.jpg",
      "images/services/people-taking-care-office-cleaning.jpg",
      "images/coronavirus-pandemic-disinfector-protective-suit-mask-sprays-disinfectants-house-office.jpg",
      "images/essential-goods-during-epidemic-prevention-protection.jpg",
    ],
    name: "Office Cleaning",
    price: "540",
    stars: 3,
    titles: [
      `Spotless Success: Elevating Office Environments`,
      `Executive Clean: Where First Impressions Count`,
      `Eco-Friendly Office Shine: Brightening Your Business Sustainably`,
      `Hygienic Havens: The Pinnacle of Office Cleanliness`,
      `Clutter-Free Clarity: Organized Spaces, Optimized Minds`,
    ],
    captions: [
      `Transform your workspace into a beacon of productivity with our premium office cleaning services. We don't just clean; we elevate your environment for success and well-being.`,
      `Make every corner of your office speak volumes about your commitment to excellence. Our executive cleaning services ensure that your office always makes a stellar first impression.`,
      `Embrace a greener clean with our eco-friendly office cleaning solutions. We use sustainable practices to keep your office sparkling while protecting the planet.`,
      `In today's world, hygiene is paramount. Our meticulous cleaning protocols are designed to create a safe, hygienic haven for your team and clients alike.`,
      `An organized space is the first step to an optimized mind. Our clutter-free cleaning approach ensures that every desk and corner is organized for clarity and focus.`,
    ],
  },
  {
    service: "kitchen-cleaning",
    imagesSrc: [
      "images/services/woman-holding-rag-detergent-cleaning-cooker.jpg",
      "images/services/young-smiling-woman-wearing-rubber-gloves-cleaning-stove.jpg",
      "images/disinfecting-home.jpg",
      "images/essential-goods-during-epidemic-prevention-protection.jpg",
      "images/coronavirus-pandemic-disinfector-protective-suit-mask-sprays-disinfectants-house-office.jpg",
    ],
    name: "Kitchen Cleaning",
    price: "990",
    stars: 5,
    titles: [
      `Culinary Cleanliness: Chef's Choice for Spotless Kitchens`,
      `Gastronomic Gleam: Sparkling Spaces for Delicious Dishes`,
      `Healthful Hearth: The Heart of a Hygienic Home`,
      `Eco-Pure Kitchens: Clean Conscience Cooking`,
      `Sterile Sanctuary: The Essence of a Clean Kitchen`,
      `Sizzle & Shine: The Dual Delight of Cooking`,
      `Aromatic Aesthetics: A Clean Kitchen is a Delicious Kitchen`,
      `Prismatic Pantries: Reflecting Culinary Perfection`,
    ],
    captions: [
      `Where every chef's dream of a pristine kitchen comes true. Our expert team ensures that your cooking space is not just clean, but a culinary canvas ready for your creations.`,
      `Dive into the art of cooking in a kitchen that shines as brightly as your gastronomic talents. Our cleaning services guarantee a gleaming backdrop for every dish you craft.`,
      `The kitchen is the heart of the home, and we keep it healthy. Experience our thorough cleaning that makes your kitchen a safe and sanitary haven for family gatherings.`,
      `Cook with a clean conscience in an environment-friendly kitchen. Our green cleaning methods mean your kitchen is spotless without leaving a footprint on the environment.`,
      `Unleash the essence of culinary excellence with a kitchen that's a sterile sanctuary. Our cleaning services ensure every surface is sanitized and ready for your next gastronomic adventure.`,
      `Feel the sizzle of cooking in a kitchen that shines with cleanliness. Our meticulous cleaning ensures that every pot, pan, and plate gleams with the promise of delicious meals.`,
      `Let the aroma of your cooking be complemented by the aesthetics of a clean kitchen. Our services ensure that your kitchen looks as delicious as the food you prepare.`,
      `Our cleaning experts transform your pantry into a prismatic space, reflecting the perfection of your culinary skills. A clean pantry is the secret ingredient to your kitchen's charm.`,
    ],
  },
  {
    service: "car-washing",
    imagesSrc: [
      "images/services/man-polishing-car-inside.jpg",
      "images/services/man-polishing-car-inside-car-service.jpg",
      "images/coronavirus-pandemic-disinfector-protective-suit-mask-sprays-disinfectants-house-office.jpg",
      "images/high-angle-woman-cleaning-floors.jpg",
      "images/essential-goods-during-epidemic-prevention-protection.jpg",
      "images/disinfecting-home.jpg",
      "images/high-angle-woman-cleaning-floors.jpg",
    ],
    name: "Car Washing",
    price: "170",
    stars: 4,
    titles: [
      `Lustrous Liners: The Gleam of a Well-Cared Vehicle`,
      `Auto Elegance: Pioneering Pristine Car Care`,
      `Velocity Veneer: Speed into Cleanliness`,
      `Wheeled Wonder: Where Shine Meets the Road`,
      `Polished Performance: The Art of Automotive Clean`,
      `Sleek Streets: Crafting the Cleanest Ride in Town`,
      `Mirror Finish: Reflecting Excellence on the Road`,
    ],
    captions: [
      `Dive into the realm of lustrous liners, where every vehicle gleams with the promise of the open road. Our car washing services ensure your ride is well-cared for, from hood to trunk.`,
      `Elevate your auto experience with our pioneering car care. We bring elegance to your automobile with unmatched attention to detail and a pristine finish.`,
      `Speed into cleanliness with our Velocity Veneer service. We ensure that your vehicle not only runs smoothly but shines with the vigor of velocity.`,
      `Experience the wonder of a well-maintained vehicle. Our services ensure that your car shines bright, making every journey a polished performance.`,
      `Art meets automotive clean in our Polished Performance package. We treat your car to the finest care, ensuring it reflects your drive towards excellence.`,
      `Crafting the cleanest ride in town, our Sleek Streets service transforms your car into a beacon of shine, ready to turn heads on every corner.`,
      `Achieve a mirror finish with our detailing expertise. We bring reflective excellence to your vehicle, ensuring it stands out on the road.`,
    ],
  },
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfMonthsOf2024 = [
  { January: [] },
  { February: [] },
  { March: [] },
  { April: [] },
  {
    May: [
      28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 1,
    ],
  },
  {
    June: [
      26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6,
    ],
  },
  {
    July: [
      30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 1, 2, 3,
    ],
  },
  {
    August: [
      28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31,
    ],
  },
  {
    September: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      1, 2, 3, 4, 5,
    ],
  },
  {
    October: [
      29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
      29, 30, 31, 1, 2,
    ],
  },
  {
    November: [
      27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
      26, 27, 28, 29, 30,
    ],
  },
  {
    December: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 1, 2, 3, 4,
    ],
  },
];
const usStates = [
  "alabama",
  "al",
  "alaska",
  "ak",
  "arizona",
  "az",
  "arkansas",
  "ar",
  "california",
  "ca",
  "colorado",
  "co",
  "connecticut",
  "ct",
  "delaware",
  "de",
  "florida",
  "fl",
  "georgia",
  "ga",
  "hawaii",
  "hi",
  "idaho",
  "id",
  "illinois",
  "il",
  "indiana",
  "in",
  "iowa",
  "ia",
  "kansas",
  "ks",
  "kentucky",
  "ky",
  "louisiana",
  "la",
  "maine",
  "me",
  "maryland",
  "md",
  "massachusetts",
  "ma",
  "michigan",
  "mi",
  "minnesota",
  "mn",
  "mississippi",
  "ms",
  "missouri",
  "mo",
  "montana",
  "mt",
  "nebraska",
  "ne",
  "nevada",
  "nv",
  "new hampshire",
  "nh",
  "new jersey",
  "nj",
  "new mexico",
  "nm",
  "new york",
  "ny",
  "north carolina",
  "nc",
  "north dakota",
  "nd",
  "ohio",
  "oh",
  "oklahoma",
  "ok",
  "oregon",
  "or",
  "pennsylvania",
  "pa",
  "rhode island",
  "ri",
  "south carolina",
  "sc",
  "south dakota",
  "sd",
  "tennessee",
  "tn",
  "texas",
  "tx",
  "utah",
  "ut",
  "vermont",
  "vt",
  "virginia",
  "va",
  "washington",
  "wa",
  "west virginia",
  "wv",
  "wisconsin",
  "wi",
  "wyoming",
  "wy",
];
const iranProvinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

const discountCodes = [
  { code: "offprice10", price: 0.9 },
  { code: "off20", price: 0.8 },
  { code: "off30%", price: 0.7 },
  { code: "off40/100", price: 0.6 },
];

const detailButtons = document.querySelectorAll(".detail-service__btn");
const detailIcons = document.querySelectorAll(".detail-service__btn-icon");
const imageModal = document.querySelector(".image-modal");
const imageModalCloseBtn = document.querySelector(".image-modal__close-btn");
const modalImg = document.querySelector(".image-modal__img");
const serviceNameElements = document.querySelectorAll(".service-name");
const detailImagesSwiper = document.querySelector(".detail-images");
const detailServiceElem = document.querySelector(".detail-service");
const discoverElem = document.querySelector(".discover");
const serviceFinalPrice = document.querySelector(".service__price--number");
const bookSubmitBtn = document.querySelector(".book-form__btn");
const bookForm = document.querySelector(".book__form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const phoneNumberInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email");
const dateWrapper = document.querySelector(".date__wrapper");
const calendarIcon = document.querySelector(".calendar__icon");
const calendar = document.querySelector(".calendar");
const calendarMonthWrapper = document.querySelector(".calender__month-wrapper");
const calendarMonths = document.querySelector(".calendar__months");
const monthsElements = document.querySelectorAll(".calendar__month");
const calendarDaysWrapper = document.querySelector(".calendar__body");
const calendarApplyBtn = document.querySelector(".calendar__btn");
const chosenDateELem = document.querySelector(".book-form__chosen");
const chosenMonthELem = document.querySelector(".calendar__chosen-month");
const dateHiddenInput = document.getElementById("date__hidden-input");
const stateInput = document.getElementById("state");
const cityInput = document.getElementById("city");
const aptInput = document.getElementById("apt");
const zipCodeInput = document.getElementById("zip");
const addressInput = document.getElementById("address");
const plans = document.querySelectorAll(".plan");
const planHiddenInput = document.getElementById("selected-plan");
const serviceBeforeOffPrice = document.querySelector(".previous__price");
const priceHiddenInput = document.getElementById("price__hidden-input");
const discountInput = document.getElementById("discount");
const discountApplyBtn = document.querySelector(".discount__btn");
const preferencesInput = document.getElementById("preferences");
const formCheckBox = document.querySelector(".book-form__checkbox");
const serviceHiddenInput = document.getElementById("service__hidden-input");
const modal = document.querySelector(".modal");

// get the date
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

let locationSearch = location.search;
let locationSearchParam = new URLSearchParams(locationSearch);
let serviceParam = locationSearchParam.get("service");

let userSelectedService = services.find((service) => {
  return service.service === serviceParam;
});

function modalHandler(modalClass, modalText) {
  modal.classList.add(`${modalClass}`);
  modal.classList.add("modal--fade");
  modal.innerText = modalText;
  setTimeout(() => {
    modal.classList.remove(`${modalClass}`);
    modal.classList.remove("modal--fade");
  }, 3000);
}

function addStars(starsCount, starsElem, starsWrapper) {
  let starsHtml = "";
  for (let i = 0; i < starsCount; i++) {
    starsHtml += starsElem;
  }
  starsWrapper.insertAdjacentHTML("beforeend", starsHtml);
}

function addServiceToHtml() {
  document.title = `Cleaning | ${userSelectedService.name}`;
  discoverElem.style.backgroundImage = `url('${userSelectedService.imagesSrc[1]}')`;
  serviceNameElements.forEach((name) => {
    name.innerText = userSelectedService.name;
  });
  let detailImagesWrapper = document.createElement("div");
  detailImagesWrapper.classList.add("swiper-wrapper", "detail-images__wrapper");
  let numberOfImages = userSelectedService.imagesSrc.length;
  for (let i = 0; i < numberOfImages; i++) {
    let imageWrapper = `
              <div class="swiper-slide detail__img--wrapper">
              <img src="${userSelectedService.imagesSrc[i]}" alt="${userSelectedService.name} image" class="detail__img">
              </div>`;
    detailImagesWrapper.insertAdjacentHTML("beforeend", imageWrapper);
  }
  detailImagesSwiper.prepend(detailImagesWrapper);

  // Create titles and Captions
  let detailServiceWrapper = document.createElement("div");
  detailServiceWrapper.classList.add("detail-service__wrapper");
  let numberOfTitles = userSelectedService.titles.length;
  let titleAndCaption = "";
  for (let i = 0; i < numberOfTitles; i++) {
    titleAndCaption += `<h3 class="detail-service__title">${userSelectedService.titles[i]}</h3>
                          <p class="detail-service__caption">${userSelectedService.captions[i]}</p>`;
  }
  titleAndCaption += `<div class="detail-service__fade"></div>`;
  detailServiceWrapper.insertAdjacentHTML("beforeend", titleAndCaption);
  detailServiceElem.prepend(detailServiceWrapper);

  // Create and add rating stars
  let starsWrapper = document.createElement("div");
  starsWrapper.classList.add("box__stars");

  let emptyStarElem = `
      <svg class="box__star">
      <use href="#star"></use>
      </svg>
      `;
  let activeStarElem = `
          <svg class="box__star box__star--active">
          <use href="#star"></use>
          </svg>
      `;
  let emptyStars = 5 - userSelectedService.stars;
  let activeStars = 5 - emptyStars;

  addStars(activeStars, activeStarElem, starsWrapper);
  addStars(emptyStars, emptyStarElem, starsWrapper);

  detailServiceElem.prepend(starsWrapper);

  // Add title
  let detailServiceTitle = `<h2 class="section__title">${userSelectedService.name}</h2>`;
  detailServiceElem.insertAdjacentHTML("afterbegin", detailServiceTitle);

  serviceFinalPrice.innerText = `${userSelectedService.price}`;
  priceHiddenInput.value = `${userSelectedService.price}`;
}

// If product do not exist then redirect to page 404
if (userSelectedService) {
  addServiceToHtml();
} else {
  location.replace("page-404.html");
}

// get elements after they added to DOM
const detailCaptionWrapper = document.querySelector(".detail-service__wrapper");
const detailFade = document.querySelector(".detail-service__fade");
const detailImages = document.querySelectorAll(".detail__img");

function detailImageSwiper() {
  const swiper = new Swiper(".detail-images", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".detail__navigation-btn--next",
      prevEl: ".detail__navigation-btn--prev",
    },
    pagination: {
      el: ".detail__pagination",
      clickable: true,
    },
  });
}

detailImageSwiper();

function detailMoreCaption() {
  detailCaptionWrapper.classList.toggle("detail-service__wrapper--open");
  detailFade.classList.toggle("hidden");
  detailButtons.forEach((btn) => {
    btn.classList.toggle("hidden");
  });
}

function imageModalOpen(img) {
  imageModal.classList.add("image-modal--open");
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  document.body.classList.add("body-overflow-hidden");
}

function imageModalClose() {
  imageModal.classList.remove("image-modal--open");
  document.body.classList.remove("body-overflow-hidden");
}

function dateSelectToggle() {
  dateWrapper.parentElement.classList.toggle("select--open");
  calendarIcon.classList.toggle("calendar__icon--active");
  calendar.classList.toggle("calendar--open");
  calendarMonths.classList.remove("calendar--open");
}

function makeCalendarMonthsStructure(month, index) {
  if (index < currentMonth) {
    month.classList.add("calendar__month--past");
  } else {
    month.classList.add("calendar__month--active");
  }
}

function chooseDate(dayElements, index) {
  let chosenMonth = "";
  let chosenDay = "";
  dayElements.forEach((day) => {
    // if the day belong to chosen month then add event listener
    if (day.classList.contains("calendar__day-date--current-month")) {
      day.addEventListener("click", () => {
        dayElements.forEach((day) => day.classList.remove("calendar__day-date--active"));
        day.classList.add("calendar__day-date--active");
        chosenMonth = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
        chosenDay = +day.innerText < 10 ? `0${day.innerText}` : `${day.innerText}`;
        chosenDateELem.innerText = `${currentYear}/${chosenMonth}/${chosenDay}`;
        dateHiddenInput.value = `${currentYear}${chosenMonth}${chosenDay}`;
      });
    }
  });
}

function makeCalendarDaysStructure(month, index) {
  const currentMonthDays = daysOfMonthsOf2024[index];
  // check if the chosen month is past or not
  if (index >= currentMonth) {
    calendarDaysWrapper.innerHTML = "";
    // get the array of days from object
    const dayArray = Object.values(currentMonthDays)[0];
    let dayHtml = `<div class="flex-center">Sun</div><div class="flex-center">Mon</div><div class="flex-center">Tue</div><div class="flex-center">Wed</div><div class="flex-center">Thu</div><div class="flex-center">Fri</div><div class="flex-center">Sat</div>`;
    dayArray.forEach((day) => {
      dayHtml += `<div class="calendar__day-date">${day}</div>`;
    });
    calendarDaysWrapper.insertAdjacentHTML("beforeend", dayHtml);
    const dayElements = document.querySelectorAll(".calendar__day-date");
    let startDayElem = "";
    if (index === currentMonth) {
      startDayElem = Array.from(dayElements).findIndex((day) => {
        return day.innerText == currentDay;
      });
      dayElements[startDayElem].classList.add("calendar__day-date--current-day");
    } else {
      startDayElem = Array.from(dayElements).findIndex((day) => {
        return day.innerText === "1";
      });
    }

    // add class to days of chosen month
    for (let i = startDayElem; i < dayElements.length; ) {
      dayElements[i].classList.add("calendar__day-date--current-month");
      i++;

      // if day is belong to another month then break
      if (dayElements[i]) {
        if (+dayElements[i].innerText <= +dayElements[startDayElem].innerText) {
          break;
        }
      }
    }

    chooseDate(dayElements, index);

    if (typeof month === "string") {
      chosenMonthELem.innerText = month;
    } else {
      chosenMonthELem.innerText = month.innerText;
    }
  }
}

makeCalendarDaysStructure(months[currentMonth], currentMonth);

function isAlphabet(str) {
  return /^[\p{Letter}\s]+$/u.test(str);
}

function isNumber(str) {
  return /^[\p{Number}]+$/u.test(str);
}

function isEmail(str) {
  const emailChars =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailChars.test(str);
}

function convertNumberToEnglish(str) {
  const numbers = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  return str
    .split("")
    .map((char) => numbers[char] || char)
    .join("");
}

function emptyInputValidation(input, value) {
  if (value.trim() === "") {
    input.nextElementSibling.innerText = `This field is required. Please fill it in.`;
    return false;
  } else {
    input.value = value.trim();
    input.nextElementSibling.innerText = ``;
    return true;
  }
}

function isNumberAndEmptyValidation(input, value, inputLength, inputName) {
  if (emptyInputValidation(input, value)) {
    const convertedNumbers = convertNumberToEnglish(value.trim().replace(/\s/g, ""));
    if (isNumber(convertedNumbers)) {
      if (convertedNumbers.length < inputLength) {
        input.nextElementSibling.innerText = `${inputName} must be at least ${inputLength} digit.`;
      } else {
        input.value = convertedNumbers;
        input.nextElementSibling.innerText = ``;
        return true;
      }
    } else {
      input.nextElementSibling.innerText = `Please use numbers only.`;
      return false;
    }
  }
}

function emailValidation(input, value) {
  if (emptyInputValidation(input, value)) {
    if (isEmail(value.trim())) {
      input.value = value.trim();
      input.nextElementSibling.innerText = ``;
      return true;
    } else {
      input.nextElementSibling.innerText = `Please enter a valid email format.`;
      return false;
    }
  }
}

function isAlphabetAndEmptyValidation(input, value) {
  if (emptyInputValidation(input, value)) {
    if (isAlphabet(value)) {
      input.value = value.trim();
      input.nextElementSibling.innerText = "";
      return true;
    } else {
      input.nextElementSibling.innerText = `Please use letters only.`;
      return false;
    }
  }
}

function dateSelectValidation() {
  const chosenDateELemText = chosenDateELem.innerText;
  const dateErrorElem = dateWrapper.parentElement.nextElementSibling;
  if (chosenDateELemText === "Pick a Date") {
    dateErrorElem.innerText = `Please Pick a Date.`;
    return false;
  } else {
    dateErrorElem.innerText = "";
    return true;
  }
}

function stateValidation(input, value) {
  if (emptyInputValidation(input, value)) {
    const lowerCaseValue = value.toLowerCase();
    const usStateExist = usStates.includes(lowerCaseValue);
    const iranProvinceExist = iranProvinces.includes(value);
    if (usStateExist || iranProvinceExist) {
      return true;
    } else {
      input.nextElementSibling.innerText = `'${value}' is not a state!`;
      return false;
    }
  }
}

function isCheckedValidation() {
  const checkBoxError = formCheckBox.nextElementSibling.nextElementSibling;
  if (document.querySelector(".book-form__checkbox--active")) {
    checkBoxError.innerText = "";
    return true;
  } else {
    checkBoxError.innerText = `Please read the terms and agree to it.`;
    return false;
  }
}

function bookValidation() {
  const firstNameInputValue = firstNameInput.value;
  const lastNameInputValue = lastNameInput.value;
  const phoneNumberInputValue = phoneNumberInput.value;
  const emailInputValue = emailInput.value;
  const stateInputValue = stateInput.value;
  const cityInputValue = cityInput.value;
  const aptInputValue = aptInput.value;
  const zipCodeInputValue = zipCodeInput.value;
  const addressInputValue = addressInput.value;

  const firstNameValidationResult = isAlphabetAndEmptyValidation(firstNameInput, firstNameInputValue);
  const lastNameValidationResult = isAlphabetAndEmptyValidation(lastNameInput, lastNameInputValue);
  const phoneNumberValidationResult = isNumberAndEmptyValidation(
    phoneNumberInput,
    phoneNumberInputValue,
    10,
    "Phone number"
  );
  const emailValidationResult = emailValidation(emailInput, emailInputValue);
  const dateValidationResult = dateSelectValidation();
  const stateValidationResult = stateValidation(stateInput, stateInputValue);
  const cityValidationResult = emptyInputValidation(cityInput, cityInputValue);
  const aptValidationResult = emptyInputValidation(aptInput, aptInputValue);
  const zipCodeValidationResult = isNumberAndEmptyValidation(zipCodeInput, zipCodeInputValue, 5, "Zip code");
  const addressValidationResult = emptyInputValidation(addressInput, addressInputValue);
  const checkedValidationResult = isCheckedValidation();

  const overallValidationResult =
    firstNameValidationResult +
    lastNameValidationResult +
    phoneNumberValidationResult +
    emailValidationResult +
    dateValidationResult +
    stateValidationResult +
    cityValidationResult +
    aptValidationResult +
    zipCodeValidationResult +
    addressValidationResult +
    checkedValidationResult;
  if (overallValidationResult === 11) {
    return true;
  } else {
    return false;
  }
}

function bookSubmit() {
  const localStorageBooking = localStorage.getItem("bookingDetails");
  let existBooking;
  if (localStorageBooking) {
    existBooking = JSON.parse(localStorage.getItem("bookingDetails"));
  }
  if (bookValidation()) {
    let id = existBooking ? existBooking.length : 0;
    const newBookDetail = {
      id: id,
      serviceName: userSelectedService.name,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      phoneNumber: phoneNumberInput.value,
      email: emailInput.value,
      bookDate: chosenDateELem.innerText,
      state: stateInput.value,
      city: cityInput.value,
      apt: aptInput.value,
      zipCode: zipCodeInput.value,
      address: addressInput.value,
      plan: planHiddenInput.value,
      discount: discountInput.value,
      beforeOffPrice: serviceBeforeOffPrice.innerText,
      finalPrice: priceHiddenInput.value,
      preferences: preferencesInput.value,
      discountExist: discountAvailable,
    };
    const bookingDetails = existBooking ? [...existBooking] : [];
    bookingDetails.push(newBookDetail);

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    if (localStorage.getItem("isLoggedIn") === "true") {
      location.reload();
    } else {
      location.replace("login-signup.html");
    }
  } else {
    modalHandler('modal--failed', 'Fix The Errors!')
  }
}

let discountAvailable = true;
function planActivation(plan, index) {
  discountAvailable = true;
  plans.forEach((plan) => plan.classList.remove("plan--active"));
  plan.classList.add("plan--active");
  planHiddenInput.value = plan.getAttribute("data-value");
  // every future plan have 10% off
  let off = (100 - index * 10) / 100;
  let finalPrice = (userSelectedService.price * off).toFixed(0);
  serviceFinalPrice.innerText = `${finalPrice}`;
  priceHiddenInput.value = `${finalPrice}`;
  discountInput.value = "";
  if (index) {
    serviceBeforeOffPrice.innerText = userSelectedService.price;
  } else {
    serviceBeforeOffPrice.innerText = "";
  }
}

function discountHandler() {
  const discountInputValue = discountInput.value;
  const discountCode = discountCodes.find((discount) => {
    return discount.code === discountInputValue;
  });
  if (discountCode && discountAvailable) {
    discountAvailable = false;
    const lastPrice = +serviceFinalPrice.innerText;
    priceHiddenInput.value = (lastPrice * discountCode.price).toFixed(0);
    serviceFinalPrice.innerText = (lastPrice * discountCode.price).toFixed(0);
    if (!serviceBeforeOffPrice.innerText) {
      serviceBeforeOffPrice.innerText = lastPrice;
    }
  }
}

detailButtons.forEach((btn) => {
  btn.addEventListener("click", detailMoreCaption);
});

detailImages.forEach((img) => {
  img.addEventListener("click", () => {
    imageModalOpen(img);
  });
});

monthsElements.forEach((month, index) => {
  makeCalendarMonthsStructure(month, index);
  month.addEventListener("click", () => makeCalendarDaysStructure(month, index));
});

plans.forEach((plan, index) => {
  plan.addEventListener("click", () => {
    planActivation(plan, index);
  });
});

imageModalCloseBtn.addEventListener("click", imageModalClose);
bookSubmitBtn.addEventListener("click", bookSubmit);
dateWrapper.addEventListener("click", dateSelectToggle);
calendarApplyBtn.addEventListener("click", dateSelectToggle);
calendarMonthWrapper.addEventListener("click", () => {
  calendarMonths.classList.toggle("calendar--open");
});
discountApplyBtn.addEventListener("click", discountHandler);
discountInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    discountHandler();
  }
});
formCheckBox.addEventListener("click", () => {
  formCheckBox.classList.toggle("book-form__checkbox--active");
  isCheckedValidation();
});
