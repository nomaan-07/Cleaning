const logos = document.querySelectorAll(".logo");
const modal = document.querySelector(".modal");
const wrapperHeader = document.querySelector(".wrapper__header");
const wrapperHeaderIcon = document.querySelector(".wrapper__header-icon");
const title = document.querySelector(".login__title");
const toLoginButtons = document.querySelectorAll(".options__login");
const toSignupButtons = document.querySelectorAll(".options__signup");
const toForgotBtn = document.querySelector(".options__forgot");
const loginWrapper = document.querySelector(".login");
const loginBtn = document.querySelector(".login__btn");
const loginEmailInput = document.querySelector(".login__email-input");
const loginPasswordInput = document.querySelector(".login__password-input");
const loginCheckBox = document.querySelector(".login__checkbox");
const signupWrapper = document.querySelector(".signup");
const signupBtn = document.querySelector(".signup__btn");
const signupUsernameInput = document.querySelector(".signup__Username-input");
const signupEmailInput = document.querySelector(".signup__email-input");
const signupPasswordInput = document.querySelector(".signup__password-input");
const signupCheckBox = document.querySelector(".signup__checkbox");
const forgotWrapper = document.querySelector(".forgot");
const forgotEmailInput = document.querySelector(".forgot__email-input");
const forgotBtn = document.querySelector(".forgot__btn");
const verificationWrapper = document.querySelector(".verification");
const verificationTitle = document.querySelector(".verification__title");
const verificationBtn = document.querySelector(".verification__btn");
const verificationInputs = document.querySelectorAll(".verification__input");
const verificationSendCodeBtn = document.querySelector(".verification__text");
const changePasswordWrapper = document.querySelector(".change-password");
const newPasswordInput = document.querySelector(".new-password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");
const changePasswordBtn = document.querySelector(".change-password__btn");
const passwordShowIcons = document.querySelectorAll(".show-password");
const passwordHideIcons = document.querySelectorAll(".hide-password");
const allInputs = document.querySelectorAll("input");
const allErrorTextElements = document.querySelectorAll(".error-text");

let generatedVerificationCode = "";

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  logos.forEach((logo) => {
    logo.classList.toggle("header__logo--hidden");
  });
}

function generateVerificationCode() {
  const codeNumber = Math.floor(Math.random() * (100000 - 10000)) + 10000;
  generatedVerificationCode = codeNumber.toString();
}

function wrapperDisplayHandler(displayWrapper, hiddenWrapper1, hiddenWrapper2, titleText) {
  displayWrapper.classList.remove("hidden");
  hiddenWrapper1.classList.add("hidden");
  hiddenWrapper2.classList.add("hidden");
  title.innerText = titleText;
  allInputs.forEach((input) => {
    input.value = "";
  });
  allErrorTextElements.forEach((el) => {
    el.innerText = "";
  });
  loginCheckBox.classList.remove("login__checkbox--active");
  signupCheckBox.classList.remove("signup__checkbox--active");
  passwordShowIcons.forEach((icon) => {
    const input = icon.previousElementSibling.previousElementSibling;
    input.type = "password";
    icon.classList.remove("hidden");
    icon.nextElementSibling.classList.add("hidden");
  });
  passwordHideIcons.forEach((icon) => {
    icon.classList.add("hidden");
    icon.previousElementSibling.classList.remove("hidden");
  });
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

function modalHandler(modalClass, modalText) {
  modal.classList.add(`${modalClass}`);
  modal.classList.add("modal--fade");
  modal.innerText = modalText;
  setTimeout(() => {
    modal.classList.remove(`${modalClass}`);
    modal.classList.remove("modal--fade");
  }, 3000);
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

function emptyPasswordValidation(input, value) {
  if (value === "") {
    input.nextElementSibling.innerText = `This field is required. Please fill it in.`;
    return false;
  } else {
    input.nextElementSibling.innerText = ``;
    return true;
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

function isCheckedValidation(checkBox, activeClass) {
  const checkBoxError = checkBox.nextElementSibling.nextElementSibling;
  if (document.querySelector(`.${activeClass}`)) {
    checkBoxError.innerText = "";
    return true;
  } else {
    checkBoxError.innerText = `Please read the terms and agree to it.`;
    return false;
  }
}

function checkBoxActivationHandler(checkBox, activeClass) {
  checkBox.classList.toggle(`${activeClass}`);
  isCheckedValidation(checkBox, activeClass);
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

function loginValidation() {
  const emailInputValue = loginEmailInput.value;
  const passwordInputValue = loginPasswordInput.value;
  const localStorageEmail = localStorage.getItem("userEmail");
  const localStoragePassword = decodePassword(localStorage.getItem("userPassword"));
  const emailValidationResult = emailValidation(loginEmailInput, emailInputValue);
  const passwordValidationResult = emptyPasswordValidation(loginPasswordInput, passwordInputValue);
  const checkedValidationResult = isCheckedValidation(loginCheckBox, "login__checkbox--active");

  const overallValidationResult = emailValidationResult + passwordValidationResult + checkedValidationResult;
  if (overallValidationResult === 3) {
    if (localStorageEmail != emailInputValue) {
      modalHandler("modal--failed", "Email is incorrect!");
    } else if (localStoragePassword != passwordInputValue) {
      modalHandler("modal--failed", "Password is incorrect!");
      loginPasswordInput.value = "";
      loginPasswordInput.focus();
    } else {
      localStorage.setItem("isLoggedIn", "true");
      modalHandler("modal--succeed", "Login was successful.");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  } else {
    modalHandler("modal--failed", "Fix The Errors!");
  }
}

function signupValidation() {
  const usernameInputValue = signupUsernameInput.value;
  const emailInputValue = signupEmailInput.value;
  const passwordInputValue = signupPasswordInput.value;
  const usernameInputValueResult = usernameValidation(signupUsernameInput, usernameInputValue);
  const emailValidationResult = emailValidation(signupEmailInput, emailInputValue);
  const passwordValidationResult = passwordValidation(signupPasswordInput, passwordInputValue);
  const checkedValidationResult = isCheckedValidation(signupCheckBox, "signup__checkbox--active");
  const overallValidationResult =
    usernameInputValueResult + emailValidationResult + passwordValidationResult + checkedValidationResult;

  if (overallValidationResult === 4) {
    if (emailInputValue === localStorage.getItem("userEmail")) {
      modalHandler("modal--failed", "User already exist.");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", usernameInputValue);
      localStorage.setItem("userEmail", emailInputValue);
      localStorage.setItem("userPassword", encodePassword(passwordInputValue));
      modalHandler("modal--succeed", "Signup was successful.");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  } else {
    modalHandler("modal--failed", "Fix The Errors!");
  }
}

function forgotValidation() {
  const emailInputValue = forgotEmailInput.value;
  const emailValidationResult = emailValidation(forgotEmailInput, emailInputValue);
  const localStorageEmail = localStorage.getItem("userEmail");
  verificationInputs.forEach((input) => {
    input.value = "";
  });
  if (emailValidationResult) {
    if (localStorageEmail === emailInputValue) {
      modal.classList.add("modal--succeed");
      modal.classList.add("modal--fade");
      generateVerificationCode();
      modal.innerText = `your code is: ${generatedVerificationCode}`;
      wrapperDisplayHandler(verificationWrapper, forgotWrapper, loginWrapper, "Verification Code");
      wrapperHeader.classList.add("wrapper__header--verification");
      wrapperHeaderIcon.classList.remove("hidden");
      verificationTitle.innerText = emailInputValue;
    } else {
      modalHandler("modal--failed", "Email is incorrect!");
    }
  } else {
    modalHandler("modal--failed", "Fix The Errors!");
  }
}

function verifyInputNumbers() {
  let inputNumber = "";
  verificationInputs.forEach((input) => {
    inputNumber += input.value;
  });
  modal.classList.remove("modal--succeed");
  modal.classList.remove("modal--fade");
  if (inputNumber === generatedVerificationCode) {
    wrapperDisplayHandler(changePasswordWrapper, verificationWrapper, wrapperHeaderIcon, "Change Password");
    wrapperHeader.classList.remove("wrapper__header--verification");
  } else {
    modalHandler("modal--failed", "Code is wrong");
    setTimeout(() => {
      modal.classList.add("modal--succeed");
      modal.classList.add("modal--fade");
      modal.innerText = `your code is: ${generatedVerificationCode}`;
    }, 4000);
  }
}

function handleBackspace(input, index, event) {
  if (input.value === "" && index > 0) {
    // Prevent the default backspace action
    event.preventDefault();
    // Clear the current input value
    input.value = "";
    // Focus on the previous input
    const previousInput = verificationInputs[index - 1];
    previousInput.focus();
    previousInput.select();
  } else if (input.value !== "") {
    // Clear the current input value
    input.value = "";
  }
}

function verificationCodeConfirmationHandler(input, index) {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (index < verificationInputs.length - 1) {
      input.nextElementSibling.focus();
      input.nextElementSibling.select();
    } else {
      verifyInputNumbers();
    }
  });

  input.addEventListener("click", () => {
    input.select();
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      handleBackspace(input, index, event);
    }
  });
}

function changePasswordValidation() {
  const newPasswordInputValue = newPasswordInput.value;
  const confirmPasswordInputValue = confirmPasswordInput.value;
  const newPasswordValidationResult = passwordValidation(newPasswordInput, newPasswordInputValue);
  const confirmPasswordValidationResult = emptyInputValidation(confirmPasswordInput, confirmPasswordInputValue);
  const overallValidationResult = newPasswordValidationResult + confirmPasswordValidationResult;
  if (overallValidationResult === 2) {
    if (confirmPasswordInputValue === newPasswordInputValue) {
      modalHandler("modal--succeed", "Password Changed");
      wrapperDisplayHandler(loginWrapper, changePasswordWrapper, forgotWrapper, "Login");
      loginEmailInput.value = localStorage.getItem("userEmail");
      localStorage.setItem("userPassword", encodePassword(newPasswordInputValue));
      newPasswordInput.value = "";
      confirmPasswordInput.value = "";
    } else {
      confirmPasswordInput.nextElementSibling.innerText = `Passwords didn't match.`;
    }
  } else {
    modalHandler("modal--failed", "Fix The Errors!");
  }
}

function enterKeyTrigger(input, validationFunction) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      validationFunction();
    }
  });
}

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

// verificationInputs.forEach(input => {verificationCodeConfirmationHandler(input);})
verificationInputs.forEach((input, index) => {
  verificationCodeConfirmationHandler(input, index);
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

focusOnNextInputWithArrowDown(loginEmailInput, loginPasswordInput);
focusOnNextInputWithArrowDown(signupUsernameInput, signupEmailInput);
focusOnNextInputWithArrowDown(signupEmailInput, signupPasswordInput);
focusOnNextInputWithArrowDown(newPasswordInput, confirmPasswordInput);

focusOnPreviousInputWithArrowUp(loginPasswordInput, loginEmailInput);
focusOnPreviousInputWithArrowUp(signupEmailInput, signupUsernameInput);
focusOnPreviousInputWithArrowUp(signupPasswordInput, signupEmailInput);
focusOnPreviousInputWithArrowUp(confirmPasswordInput, newPasswordInput);

enterKeyTrigger(loginEmailInput, loginValidation);
enterKeyTrigger(loginPasswordInput, loginValidation);
enterKeyTrigger(signupUsernameInput, signupValidation);
enterKeyTrigger(signupEmailInput, signupValidation);
enterKeyTrigger(signupPasswordInput, signupValidation);
enterKeyTrigger(forgotEmailInput, forgotValidation);
enterKeyTrigger(confirmPasswordInput, changePasswordValidation);

loginBtn.addEventListener("click", loginValidation);
signupBtn.addEventListener("click", signupValidation);
forgotBtn.addEventListener("click", forgotValidation);
verificationBtn.addEventListener("click", verifyInputNumbers);
changePasswordBtn.addEventListener("click", changePasswordValidation);

loginCheckBox.addEventListener("click", () => {
  checkBoxActivationHandler(loginCheckBox, "login__checkbox--active");
});
signupCheckBox.addEventListener("click", () => {
  checkBoxActivationHandler(signupCheckBox, "signup__checkbox--active");
});

toLoginButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    wrapperDisplayHandler(loginWrapper, signupWrapper, forgotWrapper, "Login");
  });
});

toSignupButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    wrapperDisplayHandler(signupWrapper, loginWrapper, forgotWrapper, "Sign Up");
  });
});

toForgotBtn.addEventListener("click", () => {
  wrapperDisplayHandler(forgotWrapper, loginWrapper, signupWrapper, "Reset Password");
});

wrapperHeaderIcon.addEventListener("click", () => {
  wrapperDisplayHandler(forgotWrapper, verificationWrapper, wrapperHeaderIcon, "Reset Password");
  wrapperHeader.classList.remove("wrapper__header--verification");
  modal.classList.remove("modal--succeed");
  modal.classList.remove("modal--fade");
  forgotEmailInput.value = localStorage.getItem("userEmail");
});

verificationSendCodeBtn.addEventListener("click", () => {
  generateVerificationCode();
  modalHandler("modal--succeed", "New code was sent");
  setTimeout(() => {
    modal.classList.add("modal--succeed");
    modal.classList.add("modal--fade");
    modal.innerText = `your code is: ${generatedVerificationCode}`;
  }, 4000);
});

newPasswordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const newPasswordInputValue = newPasswordInput.value;
    const newPasswordValidationResult = passwordValidation(newPasswordInput, newPasswordInputValue);
    if (newPasswordValidationResult) {
      confirmPasswordInput.focus();
    }
  }
});
