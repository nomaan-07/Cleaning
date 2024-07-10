const journeyContent = [
  {
    year: 2020,
    title: `The Timeless Journey of a Cleaning Empire Founded in 2020`,
    caption: `Embarking on a Clean Slate: Our story began in the year 2020, armed with brooms and a vision for a cleaner world. We’ve swept through challenges and polished our way to success, creating not just clean spaces, but a legacy of environmental care and customer satisfaction. As we reflect on our journey, each spotless surface is a chapter in our story, each satisfied client a testament to our dedication. Here’s to the foundation laid with passion and the endless possibilities that lie ahead.`,
    imageSrc: `images/essential-goods-during-epidemic-prevention-protection.jpg`,
  },
  {
    year: 2021,
    title: `Crowned the Best Cleaning Company of 2021 for Our Unmatched Shine and Service`,
    caption: `Rising Above the Rest: In 2021, we didn't just clean spaces; we created havens of purity and tranquility. Honored as the Best Cleaning Company, we're not just a team, but a movement dedicated to excellence, transforming every nook and cranny into a masterpiece of cleanliness. Here's to a year of spotless achievements and the promise of even brighter tomorrows.`,
    imageSrc: `images/high-angle-woman-cleaning-floors.jpg`,
  },
  {
    year: 2022,
    title: `Green and Pristine: Celebrating Our Recognition as the Healthiest Cleaning Company of 2022`,
    caption: `Charting a Healthier Horizon: In 2022, our commitment to health shone brightly, earning us the title of Healthiest Cleaning Company. We're more than just a service; we're a sanctuary of wellness, where every clean space is a testament to our dedication to your well-being. Here's to a year of pristine practices and a future of flourishing cleanliness.`,
    imageSrc: `images/coffe-shop-with-wooden-walls-unfocused.jpg`,
  },
  {
    year: 2023,
    title: `Trailblazers of Tidiness: Honored as the Company of the Year 2023 for Revolutionizing Cleanliness`,
    caption: `Sweeping Success: As the Company of the Year 2023, we've set a new standard for excellence in the cleaning industry. Our commitment to spotless service and innovative solutions has not only cleaned spaces but cleared the way for a brighter, cleaner future. Here's to a year of unmatched achievements and the journey ahead. `,
    imageSrc: `images/coronavirus-pandemic-disinfector-protective-suit-mask-sprays-disinfectants-house-office.jpg`,
  },
  {
    year: 2024,
    title: `Elevating Service to New Heights with Our Happy Customers in 2024`,
    caption: `In 2024, we're not just cleaning homes, we're enriching lives. With every spot we erase, we draw smiles on faces, ensuring our service isn't just improved, but transformed. Here’s to a year of happy customers and sparkling clean achievements.`,
    imageSrc: `images/disinfecting-home.jpg`,
  },
];

const journeyTrackLine = document.querySelector(".journey__line--active");
const journeyButtons = document.querySelectorAll(".journey__year");
const journeyActiveElements = document.querySelectorAll(".journey__year-shape");
const journeyYear = document.querySelector(".journey-content__year");
const journeyTitle = document.querySelector(".journey-content__title");
const journeyCaption = document.querySelector(".journey__caption");
const journeyImage = document.querySelector(".journey__img");
const journeyShapes = document.querySelectorAll(".journey__year-shape");
const journeyActiveLine = document.querySelector(".journey__line--active");

function journeyContentHandler(btn) {
  let currentElemYear = +btn.children[1].innerText;

  journeyShapes.forEach((shape) => {
    let shapeElemYear = +shape.nextElementSibling.innerText;
    if (shapeElemYear > currentElemYear) {
      shape.classList.remove("journey__year-shape--active");
    } else {
      shape.classList.add("journey__year-shape--active");
    }
  });

  let userSelectedJourney = journeyContent.find((journey) => {
    return journey.year === currentElemYear;
  });

  journeyYear.innerText = userSelectedJourney.year;
  journeyTitle.innerText = userSelectedJourney.title;
  journeyCaption.innerText = userSelectedJourney.caption;
  journeyImage.src = userSelectedJourney.imageSrc;
  if (currentElemYear === 2024) {
    journeyActiveLine.style.width = `100%`;
  } else {
    journeyActiveLine.style.width = `${10 + (currentElemYear - 2020) * 20}%`;
  }
}

journeyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    journeyContentHandler(btn);
  });
});
