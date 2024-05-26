const articles = [
  {
    name: "terms",
    title: "Terms And Conditions",
    content: `<h2 class="content__title">Intellectual Property Rights</h2>
  <p class="content__caption">Under the luminous banner of Intellectual Property Rights, we at Cleaning
      enshrine the essence of
      creativity and originality that fuels our website's content. This term is a testament to our
      unwavering commitment to protect the unique identity and proprietary materials that adorn our
      digital presence. From the intricate designs that grace our pages to the insightful articles that
      engage our readers, every element is a piece of our intellectual mosaic, safeguarded against the
      winds of infringement. We invite our visitors to admire and be inspired, but remind them that just
      as one does not take what is not theirs, so too should our content remain respectfully on our site.
  </p>

  <h2 class="content__title">Limitation of Liability</h2>
  <p class="content__caption">In the vast tapestry of the digital realm, our Limitation of Liability serves
      as a humble
      acknowledgment of our human limitations amidst the web's complexities. While we endeavor to uphold a
      bastion of reliability and precision, this clause gently reminds our users that Cleaning is but a
      steward of information, not an infallible oracle. Interruptions may occur, and data may age, yet our
      resolve to provide a seamless and enriching experience remains undeterred. We stand vigilant,
      ever-ready to restore harmony to our digital abode, ensuring that our virtual space reflects the
      order and cleanliness we cherish.</p>

  <h2 class="content__title">User Conduct</h2>
  <p class="content__caption">The User Conduct clause is the golden rule of our online community, a beacon
      guiding our users to
      interact with the dignity and respect befitting the sanctity of our shared digital space. It is a
      call to uphold the highest standards of decency, ensuring that every click, every comment, and every
      interaction is infused with the spirit of lawful and ethical conduct. We implore our users to tread
      lightly and thoughtfully, as one would through a freshly cleaned hallway, preserving the tranquility
      and integrity of Cleaning for all who visit.</p>

  <h2 class="content__title">Dispute Resolution</h2>
  <p class="content__caption">Our Dispute Resolution clause is the olive branch extended in times of discord,
      a promise of peaceful
      and equitable solutions to the unforeseen tangles that may arise. It is a testament to our belief in
      the power of dialogue and understanding, mirroring the meticulous care with which we address every
      nook and cranny in our cleaning endeavors. This term outlines a path of reconciliation, ensuring
      that any ripples in our interactions are smoothed over with the same grace and efficiency that
      characterizes our service.</p>

  <h2 class="content__title">Governing Law</h2>
  <p class="content__caption">The Governing Law clause stands as the cornerstone of our legal foundation, a
      clear and unwavering
      declaration of the jurisdictional compass that guides our operations. It is the map by which we
      navigate the intricate legal landscapes, offering our users the assurance that, in the realm of
      Cleaning, fairness and order reign supreme. This term ensures that the rule of law is the lighthouse
      guiding us through the fog of uncertainty, providing a safe harbor for all our legal interactions.
  </p>

  <h2 class="content__title">Payment Terms</h2>
  <p class="content__caption">Within the Payment Terms clause, we weave the intricate details of our financial transactions,
      crafting a tapestry of transparency and trust. This term is the ledger of our economic exchanges, a
      clear and concise record that delineates the methods and cycles of our monetary interactions. It is
      our pledge that every coin exchanged in the pursuit of cleanliness is accounted for with the utmost
      integrity, reflecting the clarity and honesty that is the hallmark of our brand.</p>

  <h2 class="content__title">Shipping Policy and Return/Refund Details</h2>
  <p class="content__caption">Our Shipping Policy and Return/Refund Details clause is the embodiment of our
      commitment to customer
      satisfaction, a guiding principle that ensures every transaction is as spotless as the services we
      render. This term is the assurance that every product dispatched from our domain is handled with
      care and precision, and should any item fall short of our lofty standards, we provide a clear and
      straightforward process to make things right. It is our guarantee that the trust placed in Cleaning
      is never misplaced.</p>

  <h2 class="content__title">Acceptable Use</h2>
  <p class="content__caption">Our Acceptable Use clause delineates the boundaries of our digital landscape,
      setting forth the norms
      and expectations that foster a harmonious and secure online environment. This term is the signpost
      that marks the permissible from the prohibited, guiding our users to engage with our content in ways
      that enhance, rather than disrupt, the orderly flow of information and services. It is our call to
      our visitors to join us in maintaining the pristine condition of our website, ensuring that Cleaning
      remains a beacon of order and propriety.</p>

  <h2 class="content__title">Modification of Terms</h2>
  <p class="content__caption">The Modification of Terms clause is the dynamic pulse of our website, a
      recognition of the
      ever-evolving nature of the digital world that necessitates adaptability and foresight. This term is
      our commitment to continuous improvement, ensuring that our terms and conditions remain at the
      forefront of relevance and effectiveness. It is our assurance that as Cleaning grows and adapts, so
      too will the framework that supports our interactions with our valued users, always striving for the
      pinnacle of excellence.</p>`,
  },
  {
    name: "privacy",
    title: "Privacy Policy",
    content: `<h2 class="content__title">Information Collection</h2>
  <p class="content__caption">At Cleaning, we believe in transparency and the importance of safeguarding your privacy. This section of our Privacy Policy outlines the types of personal information we collect, such as names, contact details, and browsing data. We collect this information to enhance your experience and tailor our services to your preferences. Rest assured, the collection is done with the utmost respect for your privacy and in accordance with applicable laws.</p>
  
  <h2 class="content__title">Information Use</h2>
  <p class="content__caption">The information we gather serves as a cornerstone for providing exceptional service. In this segment, we detail how your data enables us to personalize your experience, improve our website, and communicate effectively. Whether it's sending updates about our services or responding to inquiries, we use your information to ensure that your interaction with Cleaning is seamless and satisfactory.</p>
  
  <h2 class="content__title">Information Sharing</h2>
  <p class="content__caption">Your trust is our top priority, and we are committed to protecting your personal information. This part of our Privacy Policy clarifies the circumstances under which we might share your data with trusted third parties. These instances are limited to essential functions such as payment processing and website analytics. We ensure that all third parties adhere to our stringent privacy standards.</p>
  
  <h2 class="content__title">Cookies and Tracking Technology</h2>
  <p class="content__caption">To make your visits to our website as efficient as possible, we employ cookies and similar tracking technologies. This section explains how these technologies help us understand user behavior, manage content, and remember your preferences. We provide instructions on how you can control cookie settings, ensuring you have the choice to customize your browsing experience.</p>
  
  <h2 class="content__title">Data Security</h2>
  <p class="content__caption">Safeguarding your personal information is akin to the care we take in cleaning – meticulous and thorough. This clause describes the robust security measures we have in place to protect your data from unauthorized access or disclosure. We employ industry-standard practices and are constantly updating our protocols to keep your information secure.</p>
  
  <h2 class="content__title">Your Rights and Choices</h2>
  <p class="content__caption">We empower you with the ability to control your personal information. This section provides an overview of your rights regarding the collection, use, and sharing of your data. We outline how you can access, update, or delete your information, and we respect your choices regarding how it's used.</p>
  
  <h2 class="content__title">Privacy Policy Changes</h2>
  <p class="content__caption">As Cleaning evolves, so may our Privacy Policy. This part informs you of our process for implementing changes to the policy. We commit to notifying you of any significant updates and encourage you to review this section periodically to stay informed about how we protect your privacy.</p>
  
  <h2 class="content__title">Contact Information</h2>
  <p class="content__caption">Should you have any questions or concerns about our Privacy Policy or the handling of your personal information, this section provides our contact details. We welcome your feedback and are here to assist you with any privacy-related matters.</p>
  `,
  },
  {
    name: "support",
    title: "Support",
    content: `<h2 class="content__title">Getting Started</h2>
  <p class="content__caption">Welcome to Cleaning's Support Center! Whether you're new to our services or a seasoned user, our Getting Started guide is here to help you navigate our website with ease. Discover how to create an account, manage your settings, and take the first steps towards a cleaner, more organized digital space.</p>
  
  <h2 class="content__title">Troubleshooting</h2>
  <p class="content__caption">Encountering a hiccup? Our Troubleshooting section is designed to provide quick fixes to common issues. From login troubles to service interruptions, we've compiled a list of solutions to get you back on track without delay. If the problem persists, our dedicated support team is just a message away.</p>
  
  <h2 class="content__title">FAQs</h2>
  <p class="content__caption">Have questions? We have answers! Our Frequently Asked Questions (FAQs) cover a wide range of topics, providing you with instant answers to the most common queries. Explore this resource to gain insights into our services, policies, and more, all at your fingertips.</p>
  
  <h2 class="content__title">Service Requests</h2>
  <p class="content__caption">Need personalized assistance? Submit a Service Request, and our team will be at your service. Detail your needs or concerns, and we'll provide tailored support to ensure your experience with Cleaning is nothing short of exceptional.</p>
  
  <h2 class="content__title">Feedback and Suggestions</h2>
  <p class="content__caption">Your feedback is invaluable to us. Share your thoughts and suggestions to help us improve and grow. We're committed to creating the best possible experience for you, and your input is a crucial part of that journey.</p>
  
  <h2 class="content__title">Contact Us</h2>
  <p class="content__caption">Can't find what you're looking for? Our Contact Us section is here to connect you directly with our support team. Reach out to us via email, phone, or live chat, and we'll ensure your inquiries are addressed promptly and thoroughly.</p>
  
  <h2 class="content__title">Resource Library</h2>
  <p class="content__caption">Dive into our Resource Library for an in-depth look at our services and best practices. From user guides to tutorial videos, we've curated a collection of materials to enhance your knowledge and help you make the most of Cleaning's offerings.</p>
  
  <h2 class="content__title">Community Forum</h2>
  <p class="content__caption">Join the conversation in our Community Forum, where users come together to share tips, experiences, and support. Engage with peers, learn from others' insights, and contribute to a thriving community of Cleaning enthusiasts.</p>
  
  <h2 class="content__title">Emergency Support</h2>
  <p class="content__caption">In urgent situations, our Emergency Support is here to provide immediate assistance. When critical issues arise, count on us to respond swiftly with the expertise and resources needed to resolve your concerns as quickly as possible.</p>
  
  <h2 class="content__title">Updates and Announcements</h2>
  <p class="content__caption">Stay informed with the latest Updates and Announcements from Cleaning. We'll keep you in the loop on new features, service enhancements, and important notices to ensure you're always up to date with what's happening.</p>
  `,
  },
];

const contentWrapper = document.querySelector(".content__wrapper");
const contentTitle = document.querySelector(".title");

let locationSearch = location.search;
let locationSearchParam = new URLSearchParams(locationSearch);
let articleParam = locationSearchParam.get("article");

let userSelectedArticle = articles.find((article) => {
  return article.name === articleParam;
});

document.title = `Cleaning | ${userSelectedArticle.title}`;
contentTitle.innerText = userSelectedArticle.title;
contentWrapper.insertAdjacentHTML("beforeend", userSelectedArticle.content);
