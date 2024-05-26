const contactForm = document.querySelector(".contact__form");
const formSelect = document.querySelector(".contact-form__select");
const formSelectWrapper = document.querySelector(".contact-form__select-wrapper");
const formSelectOptionsWrapper = document.querySelector(".contact-form__options");
const formSelectIcon = document.querySelector(".contact-form__select-icon");
const formMessageSection = document.querySelector(".input__section--message");
const formSelectOptions = document.querySelectorAll(".contact-form__option");
const formSelectChosenOption = document.querySelector(".contact-form__chosen");
const formSelectHiddenInput = document.getElementById("selected-option");
const formCheckBox = document.querySelector(".contact-form__checkbox");
const formSubmitBtn = document.querySelector(".contact-form__btn");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const phoneNumberInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const selectError = formSelectChosenOption.parentElement.parentElement.nextElementSibling;
const modal = document.querySelector(".modal");

function modalHandler(modalClass, modalText) {
  modal.classList.add(`${modalClass}`);
  modal.classList.add("modal--fade");
  modal.innerText = modalText;
  setTimeout(() => {
    modal.classList.remove(`${modalClass}`);
    modal.classList.remove("modal--fade");
  }, 3000);
}

function formSelectOpen() {
  formSelect.classList.toggle("contact-form__select--open");
  formSelectOptionsWrapper.classList.toggle("contact-form__options--open");
  formSelectIcon.classList.toggle("contact-form__select-icon--active");
  formMessageSection.classList.toggle("opacity-0");
}

function formOptionSelector(option) {
  selectError.innerText = "";
  formSelectChosenOption.innerText = option.innerText;
  formSelectHiddenInput.value = option.getAttribute("data-value");
  formSelectOpen();
}

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

function isNumberAndEmptyValidation(input, value) {
  if (emptyInputValidation(input, value)) {
    const convertedNumbers = convertNumberToEnglish(value.trim().replace(/\s/g, ""));
    if (isNumber(convertedNumbers)) {
      if (convertedNumbers.length < 10) {
        input.nextElementSibling.innerText = `Phone number must be at least 10 digit.`;
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

function selectValidation(error) {
  if (formSelectChosenOption.innerText === "Choose One...") {
    error.innerText = `This field is required. Please choose one.`;
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function isCheckedValidation() {
  const checkBoxError = formCheckBox.nextElementSibling.nextElementSibling;
  if (document.querySelector(".contact-form__checkbox--active")) {
    checkBoxError.innerText = "";
    return true;
  } else {
    checkBoxError.innerText = `Please read the terms and agree to it.`;
    return false;
  }
}

function formValidation() {
  const firstNameInputValue = firstNameInput.value;
  const lastNameInputValue = lastNameInput.value;
  const phoneNumberInputValue = phoneNumberInput.value;
  const emailInputValue = emailInput.value;
  const messageInputValue = messageInput.value;

  const firstNameValidationResult = isAlphabetAndEmptyValidation(firstNameInput, firstNameInputValue);
  const lastNameValidationResult = isAlphabetAndEmptyValidation(lastNameInput, lastNameInputValue);
  const phoneNumberValidationResult = isNumberAndEmptyValidation(phoneNumberInput, phoneNumberInputValue);
  const emailValidationResult = emailValidation(emailInput, emailInputValue);
  const selectValidationResult = selectValidation(selectError);
  const messageValidationResult = emptyInputValidation(messageInput, messageInputValue);
  const checkedValidationResult = isCheckedValidation();

  const overallValidationResult =
    firstNameValidationResult +
    lastNameValidationResult +
    phoneNumberValidationResult +
    emailValidationResult +
    selectValidationResult +
    messageValidationResult +
    checkedValidationResult;

  if (overallValidationResult === 7) {
    return true;
  } else {
    return false;
  }
}

function formSubmit() {
  if (formValidation()) {
    contactForm.submit();
  } else {
    modalHandler("modal--failed", "Fix The Errors!");
  }
}

formSelectOptions.forEach((option) => {
  option.addEventListener("click", () => {
    formOptionSelector(option);
  });
});

formCheckBox.addEventListener("click", () => {
  formCheckBox.classList.toggle("contact-form__checkbox--active");
  isCheckedValidation();
});
formSelectWrapper.addEventListener("click", formSelectOpen);
formSubmitBtn.addEventListener("click", formSubmit);
