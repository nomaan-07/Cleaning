const services = [
  {
    service: "factory-cleaning",
    name: "Factory Cleaning",
    price: "2300",
    imageSrc:
      "images/services/professional-industrial-cleaner-protective-uniform-cleaning-floor-food-processing-plant.jpg",
  },
  {
    service: "office-cleaning",
    name: "Office Cleaning",
    price: "540",
    imageSrc: "images/services/people-taking-care-office-cleaning.jpg",
  },
  {
    service: "kitchen-cleaning",
    name: "Kitchen Cleaning",
    price: "990",
    imageSrc: "images/services/young-smiling-woman-wearing-rubber-gloves-cleaning-stove.jpg",
  },
  {
    service: "car-washing",
    name: "Car Washing",
    price: "170",
    imageSrc: "images/services/man-polishing-car-inside-car-service.jpg",
  },
];

const allElements = document.querySelectorAll("*");
const changeThemeBtn = document.querySelector(".change-theme-btn");
const changeThemeIcons = document.querySelectorAll(".theme-icon");
const headerLightLogos = document.querySelectorAll(".light-logo");
const headerDarkLogos = document.querySelectorAll(".dark-logo");
const accountBtn = document.querySelector(".header-menu__btn");
const accountModal = document.querySelector(".header__login-submenu--wrapper");
const overlay = document.querySelector(".desktop-overlay");
const usernameElements = document.querySelectorAll(".username, .header__user-name");
const headerLogOutBtn = document.querySelector(".header__logout-btn");
const accountOpenBtn = document.querySelector(".main-content__box--account");
const bookingsOpenBtn = document.querySelector(".main-content__box--bookings");
const backBtn = document.querySelector(".back__btn");
const mainContentWrapper = document.querySelector(".main-content");
const modal = document.querySelector(".modal");
const accountWrapper = document.querySelector(".account__wrapper");
const bookingsWrapper = document.querySelector(".bookings__wrapper");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const accountApplyBtn = document.querySelector(".change-detail__btn");
const currentPasswordInput = document.getElementById("current-password");
const newPasswordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordChangeBtn = document.querySelector(".change-password__btn");
const passwordShowIcons = document.querySelectorAll(".show-password");
const passwordHideIcons = document.querySelectorAll(".hide-password");
const localStorageBookings = localStorage.getItem("bookingDetails");

if (localStorage.getItem("theme") === "dark") applyDarkTheme();

let username = "";
let email = "";
function getUserDataFromLocalStorage() {
  username = localStorage.getItem("username") || "user";
  email = localStorage.getItem("userEmail") || "email@example.com";
}

if (localStorage.getItem("isLoggedIn") !== "true") {
  location.href = "login-signup.html";
}

getUserDataFromLocalStorage();

function sortArrayByDate(array) {
  return array.sort((a, b) => new Date(a.bookDate) - new Date(b.bookDate));
}

function isDatePassed(dateString) {
  const inputDate = new Date(dateString);
  const today = new Date();
  return inputDate < today;
}

function redirectToBookDetailPage(bookingsDetails, bookElements) {
  bookElements.forEach((bookElem) => {
    let chosenBook = bookingsDetails.find((booking) => {
      return +bookElem.id === booking.id;
    });
    bookElem.addEventListener("click", () => {
      chosenBook.showDetail = "true";
      localStorage.setItem("bookingDetails", JSON.stringify(bookingsDetails));
      location.replace("book-detail.html");
    });
  });
}

function makeBookSectionHtml(bookingsDetails) {
  const bookingTable = document.createElement("table");
  const bookingTableBody = document.createElement("tbody");

  bookingTable.classList.add("book__table");

  const bookingTableHead = `<thead>
              <tr class="book__header">
                  <th></th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>Price</th>
                  <th>Situation</th>
              </tr>
          </thead>`;

  bookingTable.insertAdjacentHTML("beforeend", bookingTableHead);
  let bookDetailsHtml = "";
  let bookNumber = 1;
  bookingsDetails.forEach((booking) => {
    let situationClass = "";
    let situationText = "";
    if (booking.situation === "complete") {
      situationClass = "book__situation--complete";
      situationText = "Complete";
    } else if (booking.situation === "in-order") {
      situationClass = "book__situation--in-order";
      situationText = "In Order";
    } else {
      situationClass = "book__situation--canceled";
      situationText = "Canceled";
    }
    bookDetailsHtml = `<tr id="${booking.id}" class="book__detail">
        <td class="book__number"><span class="flex-center">${bookNumber}</span></td>
        <td class="book__service">${booking.serviceName}</td>
        <td class="book__date">${booking.bookDate}</td>
        <td class="book__state">${booking.state}</td>
        <td class="book__city">${booking.city}</td>
        <td class="book__zip-code">${booking.zipCode}</td>
        <td class="book__price">${booking.finalPrice}$</td>
        <td class="book__situation ${situationClass}">${situationText}</td>
    </tr>`;
    bookingTableBody.insertAdjacentHTML("beforeend", bookDetailsHtml);
    bookNumber++;
  });
  bookingTable.insertAdjacentElement("beforeend", bookingTableBody);
  bookingsWrapper.insertAdjacentElement("beforeend", bookingTable);

  const bookElements = document.querySelectorAll(".book__detail");
  redirectToBookDetailPage(bookingsDetails, bookElements);
}

function makeMobileBookSectionHtml(bookingsDetails) {
  const mobileBookingSection = document.createElement("div");
  mobileBookingSection.classList.add("mobile-books");

  let bookDetailsHtml = "";
  let bookNumber = 1;
  bookingsDetails.forEach((booking) => {
    let situationClass = "";
    let situationText = "";
    if (booking.situation === "complete") {
      situationClass = "book__situation--complete";
      situationText = "Complete";
    } else if (booking.situation === "in-order") {
      situationClass = "book__situation--in-order";
      situationText = "In Order";
    } else {
      situationClass = "book__situation--canceled";
      situationText = "Canceled";
    }

    bookDetailsHtml = `<div class="mobile-book">
        <div class="mobile-book__name">${booking.serviceName}</div>
        <div class="mobile-book__item mobile-book__date">Date: <span>${booking.bookDate}</span></div>
        <div class="mobile-book__item">State: <span>${booking.state}</span></div>
        <div class="mobile-book__item">City: <span>${booking.city}</span></div>
        <div class="mobile-book__item">Zip Code: <span>${booking.zipCode}</span></div>
        <div class="mobile-book__item mobile-book__item--price">Price: <span class="mobile-book__final-price">${booking.finalPrice}</span>$
        </div>
        <div id="${booking.id}" class="mobile-book__btn btn"><span>See More</span></div>
        <div class="mobile-book__situation ${situationClass}"> ${situationText}</div>
        <div class="mobile-book__number flex-center">${bookNumber}</div>
    </div>`;
    bookNumber++
    mobileBookingSection.insertAdjacentHTML("beforeend", bookDetailsHtml);
    bookingsWrapper.insertAdjacentElement("beforeend", mobileBookingSection);

  });
  const bookElementsBtn = document.querySelectorAll(".mobile-book__btn");
  redirectToBookDetailPage(bookingsDetails, bookElementsBtn);
}

function bookingSectionHandler() {
  // check if back from detail page
  if (localStorage.getItem("backFromDetail") === "true") {
    accountWrapper.classList.add("hidden");
    mainContentWrapper.classList.add("hidden");
    backBtn.classList.remove("hidden");
    bookingsWrapper.classList.remove("hidden");
    localStorage.setItem("backFromDetail", "false");
  }

  // get booking detail from localStorage
  if (localStorageBookings) {
    let localStorageBookingsDetails = JSON.parse(localStorageBookings);
    const bookingSectionTitle = `<h2 class="bookings__title">Your Bookings</h2>`;
    bookingsWrapper.insertAdjacentHTML("beforeend", bookingSectionTitle);
    localStorageBookingsDetails.forEach((booking) => {
      booking.showDetail = "false";
    });

    // determine the booking situation
    localStorageBookingsDetails.forEach((booking) => {
      if (booking.situation !== "canceled") {
        if (isDatePassed(booking.bookDate)) {
          booking.situation = "complete";
        } else {
          booking.situation = "in-order";
        }
      }
    });

    // sort the bookingsDetails array by date
    const sortedBookingsDetails = sortArrayByDate(localStorageBookingsDetails);

    makeBookSectionHtml(sortedBookingsDetails);
    makeMobileBookSectionHtml(sortedBookingsDetails);
  }
  // if there is no booking
  else {
    bookingsWrapper.innerHTML = `<div class="section-wrapper">
        <div class="no-booking__wrapper">
          <h3 class="no-booking__text">No Booking Yet</h3>
          <a href="services.html" class="btn no-booking__btn"><span>Services</span></a>
        </div>
      </div>`;
  }
}
bookingSectionHandler();

function accountInputsDefaultValue() {
  usernameInput.value = username;
  emailInput.value = email;
}
accountInputsDefaultValue();

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
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    localStorage.setItem("theme", "dark");
    headerLightLogos.forEach((logo) => logo.classList.add("hidden"));
    headerDarkLogos.forEach((logo) => logo.classList.remove("hidden"));
  }
  removeTransitionAfterChangeTheme();
}

function headerAccountModalHandler() {
  accountModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

function wrapperDisplayHandler(displayWrapper, hiddenWrapper1, behavior, hiddenWrapper2 = null) {
  displayWrapper.classList.remove("hidden");
  hiddenWrapper1.classList.add("hidden");
  if (behavior === "open") {
    backBtn.classList.remove("hidden");
  } else {
    backBtn.classList.add("hidden");
    hiddenWrapper2.classList.add("hidden");
  }
}

function logUserOut() {
  localStorage.setItem("isLoggedIn", "false");
  location.href = "index.html";
}

function modalHandler(modalClass, modalText) {
  modal.classList.add(`${modalClass}`);
  modal.classList.add("modal--fade");
  modal.innerText = modalText;
  setTimeout(() => {
    modal.classList.remove(`${modalClass}`);
    modal.classList.remove("modal--fade");
  }, 3000);
}

function encodePassword(password) {
  let encodedPassword = "";
  for (let i = 0; i < password.length; i++) {
    let charCode = password.charCodeAt(i);
    charCode *= ((2 + 8) / 2) * 4;
    encodedPassword += String.fromCharCode(charCode);
  }
  return encodedPassword;
}

function decodePassword(password) {
  if (password) {
    let decodedPassword = "";
    for (let i = 0; i < password.length; i++) {
      let charCode = password.charCodeAt(i);
      charCode /= ((2 + 8) / 2) * 4;
      decodedPassword += String.fromCharCode(charCode);
    }
    return decodedPassword;
  }
}

function isEmail(str) {
  const emailChars =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailChars.test(str);
}

function correctPassword(input, value) {
  const minLength = 8;
  const upperCases = /[A-Z]/;
  const lowerCases = /[a-z]/;
  const numbers = /[0-9]/;
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  if (value.length < minLength) {
    input.nextElementSibling.innerText = `At least 8 characters long!`;
    return false;
  }
  if (!lowerCases.test(value)) {
    input.nextElementSibling.innerText = `At least one lowercase letter!`;
    return false;
  }
  if (!upperCases.test(value)) {
    input.nextElementSibling.innerText = `At least one uppercase letter!`;
    return false;
  }
  if (!numbers.test(value)) {
    input.nextElementSibling.innerText = `At least one number!`;
    return false;
  }
  if (!specialChars.test(value)) {
    input.nextElementSibling.innerText = `At least one special character!`;
    return false;
  }

  return true;
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

function emptyPasswordValidation(input, value) {
  if (value === "") {
    input.nextElementSibling.innerText = `This field is required. Please fill it in.`;
    return false;
  } else {
    input.nextElementSibling.innerText = ``;
    return true;
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

function passwordValidation(input, value) {
  if (emptyPasswordValidation(input, value)) {
    if (correctPassword(input, value)) {
      input.nextElementSibling.innerText = ``;
      return true;
    }
  }
}

function usernameValidation(input, value) {
  if (emptyInputValidation(input, value)) {
    if (value.length < 4) {
      input.nextElementSibling.innerText = `At least 4 characters.`;
      return false;
    } else if (value.length > 10) {
      input.nextElementSibling.innerText = `At most 10 characters.`;
      return false;
    } else {
      input.nextElementSibling.innerText = "";
      return true;
    }
  }
}

function changeProfileValidation() {
  const usernameInputValue = usernameInput.value;
  const emailInputValue = emailInput.value;

  const usernameValidationResult = usernameValidation(usernameInput, usernameInputValue);
  const emailValidationResult = emailValidation(emailInput, emailInputValue);

  if (usernameValidationResult && emailValidationResult) {
    if (usernameInputValue !== username || emailInputValue !== email) {
      localStorage.setItem("username", usernameInputValue);
      localStorage.setItem("userEmail", emailInputValue);
      modalHandler("modal--succeed", `Your profile changed.`);
      getUserDataFromLocalStorage();
      usernameElements.forEach((el) => {
        el.innerText = username;
      });
    }
  }
}

function changePasswordValidation() {
  const currentPasswordInputValue = currentPasswordInput.value;
  const newPasswordInputValue = newPasswordInput.value;
  const confirmPasswordInputValue = confirmPasswordInput.value;

  const currentPasswordValidationResult = emptyInputValidation(currentPasswordInput, currentPasswordInputValue);
  const newPasswordValidationResult = passwordValidation(newPasswordInput, newPasswordInputValue);

  const localStorageUserPassword = decodePassword(localStorage.getItem("userPassword"));
  if (newPasswordValidationResult && currentPasswordValidationResult) {
    if (newPasswordInputValue !== confirmPasswordInputValue) {
      confirmPasswordInput.nextElementSibling.innerText = `Passwords didn't match.`;
      newPasswordInput.value = "";
      confirmPasswordInput.value = "";
    } else {
      if (currentPasswordInputValue !== localStorageUserPassword) {
        modalHandler("modal--failed", `Password is incorrect!`);
        currentPasswordInput.value = "";
        currentPasswordInput.focus();
      } else {
        localStorage.setItem("userPassword", encodePassword(newPasswordInputValue));
        modalHandler("modal--succeed", `Password changed.`);
        currentPasswordInput.value = "";
        newPasswordInput.value = "";
        confirmPasswordInput.value = "";
        passwordHideIcons.forEach((icon) => {
          hidePassword(icon);
        });
      }
    }
  } else {
    confirmPasswordInput.nextElementSibling.innerText = "";
      modalHandler("modal--failed", "Fix The Errors!");
  }
}

function showPassword(icon) {
  const input = icon.previousElementSibling.previousElementSibling;
  input.type = "text";
  input.focus();
  icon.classList.add("hidden");
  icon.nextElementSibling.classList.remove("hidden");
}

function hidePassword(icon) {
  const input = icon.previousElementSibling.previousElementSibling.previousElementSibling;
  input.type = "password";
  input.focus();
  icon.classList.add("hidden");
  icon.previousElementSibling.classList.remove("hidden");
}

function focusOnNextInputWithEnter(input, nextInput) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      nextInput.focus();
    }
  });
}
focusOnNextInputWithEnter(currentPasswordInput, newPasswordInput);
focusOnNextInputWithEnter(newPasswordInput, confirmPasswordInput);

function focusOnNextInputWithArrowDown(input, nextInput) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      nextInput.focus();
      // set cursor at the end of value if not an 'email' input.
      if (nextInput.type !== "email") {
        const valueLength = nextInput.value.length;
        nextInput.setSelectionRange(0, valueLength);
      }
    }
  });
}

function focusOnPreviousInputWithArrowUp(input, previousInput) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      previousInput.focus();
      // set cursor at the end of value if not an 'email' input.
      if (previousInput.type !== "email") {
        const valueLength = previousInput.value.length;
        previousInput.setSelectionRange(0, valueLength);
      }
    }
  });
}

focusOnNextInputWithArrowDown(currentPasswordInput, newPasswordInput);
focusOnNextInputWithArrowDown(newPasswordInput, confirmPasswordInput);
focusOnPreviousInputWithArrowUp(newPasswordInput, currentPasswordInput);
focusOnPreviousInputWithArrowUp(confirmPasswordInput, newPasswordInput);

function enterKeyTrigger(input, validationFunction) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      validationFunction();
    }
  });
}

enterKeyTrigger(usernameInput, changeProfileValidation);
enterKeyTrigger(emailInput, changeProfileValidation);
enterKeyTrigger(confirmPasswordInput, changePasswordValidation);

usernameElements.forEach((el) => {
  el.innerText = username;
});

passwordShowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    showPassword(icon);
  });
});

passwordHideIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    hidePassword(icon);
  });
});

changeThemeBtn.addEventListener("click", changeThemeHandler);
accountBtn.addEventListener("click", headerAccountModalHandler);
headerLogOutBtn.addEventListener("click", logUserOut);

accountOpenBtn.addEventListener("click", () => {
  wrapperDisplayHandler(accountWrapper, mainContentWrapper, "open");
});

bookingsOpenBtn.addEventListener("click", () => {
  wrapperDisplayHandler(bookingsWrapper, mainContentWrapper, "open");
});

backBtn.addEventListener("click", () => {
  wrapperDisplayHandler(mainContentWrapper, bookingsWrapper, "close", accountWrapper);
});

accountApplyBtn.addEventListener("click", changeProfileValidation);

passwordChangeBtn.addEventListener("click", changePasswordValidation);
