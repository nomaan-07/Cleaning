const faqsButtons = document.querySelectorAll(".fax-box__icons");

function faqsSectionHandler(btn) {
  btn.children[0].classList.toggle("hidden");
  btn.children[1].classList.toggle("hidden");
  btn.parentElement.nextElementSibling.classList.toggle(
    "faqs-boxs__caption--open"
  );
}

faqsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    faqsSectionHandler(btn);
  });
});
