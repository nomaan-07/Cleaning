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

const backBtn = document.querySelector(".back__btn");
const cancelBtn = document.querySelector(".cancel-btn");
const BookTitle = document.querySelector(".book-detail__title");
const bookForm = document.querySelector(".book__form");
const allInputs = document.querySelectorAll("input, textarea");
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
const serviceFinalPrice = document.querySelector(".service__price--number");
const serviceBeforeOffPrice = document.querySelector(".previous__price");
const priceHiddenInput = document.getElementById("price__hidden-input");
const discountInput = document.getElementById("discount");
const discountApplyBtn = document.querySelector(".discount__btn");
const preferencesInput = document.getElementById("preferences");
const checkBoxSection = document.querySelector(".input__checkbox-section");
const formCheckBox = document.querySelector(".book-form__checkbox");
const serviceHiddenInput = document.getElementById("service__hidden-input");
const bookFormApplyBtn = document.querySelector(".book-form__btn");
const modal = document.querySelector(".modal");

let localStorageBookingsDetails = JSON.parse(localStorage.getItem("bookingDetails"));
const chosenBookingDetail = localStorageBookingsDetails.find((booking) => {
  return booking.showDetail === "true";
});
let serviceOriginalPrice = chosenBookingDetail.beforeOffPrice;
if (!serviceOriginalPrice) {
  serviceOriginalPrice = chosenBookingDetail.finalPrice;
}
// get the date
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// apply dark theme

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

localStorage.setItem("backFromDetail", "true");

function modalHandler(modalClass, modalText) {
  modal.classList.add(`${modalClass}`);
  modal.classList.add("modal--fade");
  modal.innerText = modalText;
  setTimeout(() => {
    modal.classList.remove(`${modalClass}`);
    modal.classList.remove("modal--fade");
  }, 3000);
}

function backBtnHandler() {
  location.replace("account.html");
}
function cancelBtnHandler() {
  chosenBookingDetail.situation = "canceled";
  localStorage.setItem("bookingDetails", JSON.stringify(localStorageBookingsDetails));
  location.replace("account.html");
}
function defaultValues() {
  if (chosenBookingDetail.situation !== "in-order") {
    cancelBtn.classList.add("hidden");
  }

  if (chosenBookingDetail.situation === "complete") {
    bookFormApplyBtn.classList.add("hidden");
    checkBoxSection.classList.add("hidden");
    allInputs.forEach((input) => {
      input.addEventListener("keydown", (event) => {
        event.preventDefault();
      });
    });
  }

  BookTitle.innerText = chosenBookingDetail.serviceName;
  firstNameInput.value = chosenBookingDetail.firstName;
  lastNameInput.value = chosenBookingDetail.lastName;
  phoneNumberInput.value = chosenBookingDetail.phoneNumber;
  emailInput.value = chosenBookingDetail.email;
  chosenDateELem.innerText = chosenBookingDetail.bookDate;
  stateInput.value = chosenBookingDetail.state;
  cityInput.value = chosenBookingDetail.city;
  aptInput.value = chosenBookingDetail.apt;
  zipCodeInput.value = chosenBookingDetail.zipCode;
  addressInput.value = chosenBookingDetail.address;
  serviceBeforeOffPrice.innerText = chosenBookingDetail.beforeOffPrice;
  preferencesInput.value = chosenBookingDetail.preferences;
  serviceFinalPrice.innerText = chosenBookingDetail.finalPrice;

  // add discount code if exist
  const discountCodeExist = discountCodes.find((discountCode) => {
    return discountCode.code === chosenBookingDetail.discount;
  });
  if (discountCodeExist) {
    discountInput.value = chosenBookingDetail.discount;
  }

  // determine active plan

  plans.forEach((plan) => {
    if (plan.innerText === chosenBookingDetail.plan) {
      plan.classList.add("plan--active");
    }
  });

  if (serviceBeforeOffPrice.innerText === "" || chosenBookingDetail.plan === "") {
    plans.forEach((plan) => {
      if (plan.innerText === "One Time") {
        plan.classList.add("plan--active");
      }
    });
  }
}
defaultValues();

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

function bookApplyChanges() {
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
    chosenBookingDetail.situation = "in-order";
    chosenBookingDetail.firstName = firstNameInput.value;
    chosenBookingDetail.lastName = lastNameInput.value;
    chosenBookingDetail.phoneNumber = phoneNumberInput.value;
    chosenBookingDetail.email = emailInput.value;
    chosenBookingDetail.bookDate = chosenDateELem.innerText;
    chosenBookingDetail.state = stateInput.value;
    chosenBookingDetail.city = cityInput.value;
    chosenBookingDetail.apt = aptInput.value;
    chosenBookingDetail.zipCode = zipCodeInput.value;
    chosenBookingDetail.address = addressInput.value;
    chosenBookingDetail.plan = planHiddenInput.value;
    chosenBookingDetail.discount = discountInput.value;
    chosenBookingDetail.beforeOffPrice = serviceBeforeOffPrice.innerText;
    chosenBookingDetail.finalPrice = priceHiddenInput.value;
    chosenBookingDetail.preferences = preferencesInput.value;
    localStorage.setItem("bookingDetails", JSON.stringify(localStorageBookingsDetails));
    location.replace("account.html");
  } else {
    modalHandler('modal--failed', 'Fix The Errors!')
  }
}

backBtn.addEventListener("click", backBtnHandler);
cancelBtn.addEventListener("click", cancelBtnHandler);
bookFormApplyBtn.addEventListener("click", bookApplyChanges);

let discountAvailable = true;
if (chosenBookingDetail.discountExist === false) {
  discountAvailable = false;
}
function planActivation(plan, index) {
  discountAvailable = true;
  plans.forEach((plan) => plan.classList.remove("plan--active"));
  plan.classList.add("plan--active");
  planHiddenInput.value = plan.getAttribute("data-value");
  // every future plan have 10% off
  let off = (100 - index * 10) / 100;
  let finalPrice = (+serviceOriginalPrice * off).toFixed(0);
  serviceFinalPrice.innerText = `${finalPrice}`;
  priceHiddenInput.value = `${finalPrice}`;
  discountInput.value = "";
  if (index) {
    serviceBeforeOffPrice.innerText = serviceOriginalPrice;
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

monthsElements.forEach((month, index) => {
  makeCalendarMonthsStructure(month, index);
  month.addEventListener("click", () => makeCalendarDaysStructure(month, index));
});
plans.forEach((plan, index) => {
  plan.addEventListener("click", () => {
    planActivation(plan, index);
  });
});
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
