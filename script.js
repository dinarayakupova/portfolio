//ANIMATION
//Hello there

gsap.from(".hello", {
  x: -100,
  delay: 1,
});

gsap.from(".hero-image", { x: 100 });

gsap.from(".steps-full", { y: 100 });

//links, gradual appearance
gsap.from(".link", {
  opacity: 0,
  duration: 2,
  delay: 2,
  stagger: 0.6,
});

// steps, gradual apperance
gsap.from(".step-item", {
  opacity: 0,
  duration: 1,
  delay: 2,
  stagger: 0.6,
});

// Sections on scroll
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  gsap.from(section, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top bottom-=200",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });
});

// PORTFOLIO SCREENS
function showGallery(category) {
  // Hide all galleries
  document.querySelectorAll(".gallery").forEach(function (gallery) {
    gallery.style.display = "none";
  });

  // Show the selected gallery
  document.getElementById(category + "-gallery").style.display = "flex";

  // Update heading text
  var headingText = "";
  switch (category) {
    case "easy-apps":
      headingText = "Easy Apps";
      break;
    case "web-design":
      headingText = "Web Design";
      break;
    case "wordpress":
      headingText = "Wordpress";
      break;
  }
  document.getElementById("portHead").textContent = headingText;
}
//LIGHT / DARK MODE

const toggle = document.querySelector("#toggleDark");
const container = document.querySelector(".home");
const steps = document.querySelector(".steps-full");
const skills = document.querySelectorAll(".service-box");
const titles = document.querySelectorAll(
  "#resume .resume-row .resume-contents .box .titleExperience"
);
const buttons = document.querySelectorAll(".btn");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-sun");

  // if back to light
  if (this.classList.toggle("fa-moon")) {
    container.style.background = "#FAF1E4";
    container.style.transition = "2s";

    steps.style.background = "#E0AED0";
    steps.style.color = "#4E3636";

    skills.forEach((skill) => {
      skill.style.background = "#E0AED0";
      skill.style.color = "#4E3636";
    });

    titles.forEach((title) => {
      title.style.color = "#9c367a";
    });

    buttons.forEach((button) => {
      button.style.background = "#E0AED0";
      button.style.color = "#4E3636";

      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#FAF1E4";
        button.style.color = "#4E3636";
      });

      button.addEventListener("mouseout", function () {
        button.style.background = "#E0AED0";
        button.style.color = "#4E3636";
      });
    });

    // dark
  } else {
    container.style.background = "#C8B6A6";
    container.style.transition = "2s";

    steps.style.background = "#85586F";
    steps.style.color = "#F8EDE3";
    steps.style.transition = "2s";

    skills.forEach((skill) => {
      skill.style.background = "#85586F";
      skill.style.color = "#F8EDE3";
    });

    titles.forEach((title) => {
      title.style.color = "#573848";
    });

    buttons.forEach((button) => {
      button.style.background = "#85586F";
      button.style.color = "#F8EDE3";

      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#C8B6A6";
        button.style.color = "#4E3636";
      });

      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#85586F";
        button.style.color = "#F8EDE3";
      });
    });
  }
});

//LANGUAGES CHANGE
let langIcon = document.getElementById("lang-icon");
let langDropdown = document.getElementById("lang");

langIcon.addEventListener("click", function () {
  langDropdown.classList.toggle("hidden");
});

const translations = {
  en: {
    sayHello: "Hello, there",
    text: "I am Dinara, a web developer skilled in design",
    iAmparag: `With six years of marketing experience and a newly acquired "Software Development" degree, I'm a seasoned professional. My passion lies in digitally implementing brand messages and showcasing product values through design`,
    passion: `Here's where my passion lies:`,
    brandStr: `Brand Strategy`,
    brandStrDesc: `Brand strategy defines identity, ensures consistency, targets the right audience, gains a competitive edge, and fosters growth and loyalty.`,
    uiUxDesc: `Effective UI/UX design enhances satisfaction with smooth, intuitive experiences, boosting engagement and retention.`,
    webDes: `Web Design`,
    webDesDesc: `A well-designed website impresses, conveying professionalism and credibility to captivate visitors.`,
    frontEnd: `Frontend Development`,
    frontEndDesc: `Careful coding is critical to ensuring the reliability, functionality, and performance of software applications. Clean and well-structured code facilitates collaboration among developers and simplifies maintenance and updates.`,
    levelUp: `Let's level up your look!`,
    skillsHead: `My Skills`,
    skillsMarStr: `Marketing Strategy`,
    skillsMarStrDesc: `Research user journey needs, studying the competition , identifying SEO keywords, GSOT and content strategy.`,
    skillsWebDes: `Web Design`,
    skillsWebDev: `Web Development`,
    resume: `Resume`,
    resumeSubTitle: `My education & experiences`,
    educationTitle: `Education`,
    vanierDesc: `Engaging in a dynamic learning journey focused on building the skills and knowledge needed to create software applications. We delved into the programming languages (Java, JS, CSharp, Flutter), algorithms, and data structures, honing their ability to design, code, and test software`,
    yorkDesc: `Learning to leverage digital channels such as social media, email, SEO, and PPC to drive brand visibility and engagement. Exploring consumer behavior, data analysis, and content creation techniques to craft effective marketing strategies.`,
    uniDesc: `Learning the strategies and tactics behind successful public relations, including crisis management, media relations, and stakeholder engagement. Studying art of crafting compelling advertising campaigns, honing skills in creative messaging, design, and media planning.`,
    kinoklikDesc: `MERN (MongoDB, Express, React & Node) application development, debugging and testing code, feature design and implementation. Working on UI/UX of the app.`,
    kabritaDesc: `Developing and executing marketing strategies tailored to promote and sell infant and toddler food products. Market research to understand consumer needs, preferences, and trends in the baby nutrition industry. Monitoring sales performance to meet revenue goals.`,
    agencyDesc: `Responsible for project management, ensuring that campaigns meet deadlines and budget constraints. Collaborating closely with clients to understand their goals and vision. Providing directions to creative teams and productions. Monitoring campaign performance, analyzing results, and making data-driven recommendations to optimize marketing efforts.`,
    photoDesc: `Portrait landscape photography and event photography. Post-processing tasks to perfect photos, which include adjusting color balance, exposure, and contrast, removing imperfections. Assisting students with English homework, assignments, and exam preparation.`,
    downloadCV: `Download CV`,
    portfolioHeading: `Some Of My Works`,
    portfolioParagraph: `Presenting my small projects, with many more on the horizon.`,
    contactHeading: `Let's Get In Touch`,
    feelFree: `Feel free to reach out through the contact form below.`,
    btnSendMes: `Send`,
    footer: `All rights reserved.`,
  },
  fr: {
    sayHello: "Bonjour",
    text: "Je suis Dinara, une devéloppeuse web spécialisée en design",
    iAmparag: `Avec six ans d'expérience en marketing et un tout nouveau diplôme en "Développement de logiciels", je suis un professionnel aguerri. Ma passion réside dans la mise en œuvre numérique des messages de marque et la mise en valeur des valeurs des produits à travers le design.`,
    passion: `Voici où se situe ma passion:`,
    brandStr: `Stratégie de marque`,
    brandStrDesc: `La stratégie de marque définit l'identité, garantit la cohérence, cible le bon public, procure un avantage compétitif et favorise la croissance et la fidélité.`,
    uiUxDesc: `Une conception efficace de l'interface utilisateur/amélioration de l'expérience utilisateur (UI/UX) augmente la satisfaction grâce à des expériences fluides et intuitives, renforçant ainsi l'engagement et la rétention.`,
    webDes: `Design Web`,
    webDesDesc: `Un site web bien conçu impressionne, véhiculant le professionnalisme et la crédibilité pour captiver les visiteurs.`,
    frontEnd: `Développement Frontend`,
    frontEndDesc: `Une programmation soignée est cruciale pour garantir la fiabilité, la fonctionnalité et les performances des applications logicielles. Un code propre et bien structuré facilite la collaboration entre les développeurs et simplifie la maintenance et les mises à jour.`,
    levelUp: `Elevons votre image!`,
    skillsHead: `Mes compétences`,
    skillsMarStr: `Stratégie marketing`,
    skillsMarStrDesc: `Analyse des besoins du parcours utilisateur, étude de la concurrence, identification des mots-clés SEO, GSOT et stratégie de contenu.`,
    skillsWebDes: `Design Web`,
    skillsWebDev: `Développement Web`,
    resume: `Curriculum Vitæ`,
    resumeSubTitle: `Mon parcours scolaire et professionnel`,
    educationTitle: `Éducation`,
    vanierDesc: `Participation à un parcours d'apprentissage dynamique axé sur le développement des compétences et des connaissances nécessaires à la création d'applications logicielles. Nous avons exploré les langages de programmation (Java, JS, CSharp, Flutter), les algorithmes et les structures de données, en perfectionnant notre capacité à concevoir, coder et tester des logiciels.`,
    yorkDesc: `Apprentissage de l'utilisation des canaux numériques tels que les médias sociaux, l'e-mail, le SEO et le PPC pour stimuler la visibilité et l'engagement de la marque. Exploration du comportement des consommateurs, de l'analyse des données et des techniques de création de contenu pour élaborer des stratégies marketing efficaces.`,
    uniDesc: `Apprentissage des stratégies et des tactiques derrière les relations publiques réussies, y compris la gestion de crise, les relations avec les médias et l'engagement des parties prenantes. Étude de l'art de la création de campagnes publicitaires percutantes, perfectionnement des compétences en messagerie créative, en design et en planification média.`,
    kinoklikDesc: `Développement d'applications MERN (MongoDB, Express, React & Node), débogage et test de code, conception et mise en œuvre de fonctionnalités. Travail sur l'UI/UX de l'application.`,
    kabritaDesc: `Développement et exécution de stratégies marketing visant à promouvoir et vendre des produits alimentaires pour nourrissons et tout-petits. Recherche de marché pour comprendre les besoins, préférences et tendances des consommateurs dans l'industrie de la nutrition infantile. Suivi des performances des ventes pour atteindre les objectifs de revenus.`,
    agencyDesc: `Responsable de la gestion de projet, en veillant à ce que les campagnes respectent les délais et les contraintes budgétaires. Collaboration étroite avec les clients pour comprendre leurs objectifs et leur vision. Fourniture d'orientations aux équipes créatives et de production. Suivi des performances des campagnes, analyse des résultats et formulation de recommandations basées sur les données pour optimiser les efforts marketing.`,
    photoDesc: `Photographie de portrait, paysage et d'événements. Tâches de post-traitement pour parfaire les photos, notamment ajustement de l'équilibre des couleurs, de l'exposition et du contraste, suppression des imperfections. Aide aux étudiants pour les devoirs d'anglais, les travaux et la préparation aux examens.`,
    downloadCV: `Télécharger le CV`,
    portfolioHeading: `Quelques-unes de mes réalisations`,
    portfolioParagraph: `Présentation de mes petits projets, avec beaucoup d'autres à venir.`,
    contactHeading: `Contactez Moi`,
    feelFree: `N'hésitez pas à me contacter via le formulaire ci-dessous.`,
    btnSendMes: `Envoyer`,
    footer: `Tous droits réservés.`,
  },
};

let languageSelector = document.querySelector("#lang");
let hello = document.querySelector(".hero .hero-text h4");
let iAm = document.querySelector(".hero .hero-text h3");
let iAmP = document.querySelector(".hero .hero-text p");
let stepsHead = document.querySelector(".steps-full h1");
let brandStr = document.querySelector(".steps-container #brandStr");
let webDes = document.querySelector(".steps-container #webDes");
let frontDev = document.querySelector(".steps-container #frontDev");
let brandStrDesc = document.querySelector(".steps-container #brandStrDesc");
let uiDesc = document.querySelector(".steps-container #uiDesc");
let webDesDesc = document.querySelector(".steps-container #webDesDesc");
let frontDevDesc = document.querySelector(".steps-container #frontDevDesc");
let levelUp = document.querySelector(".steps-full h4");
let skillsHead = document.querySelector(".services .heading h2");
let skillsMarStrat = document.querySelector(
  ".services-container .service-box h2#marketStr"
);
let skillsMarStrDesc = document.querySelector(
  ".services-container .service-box p#marketStrDesc"
);

let skillsUiHead = document.querySelector(
  ".services-container .service-box h2#marketStrDesc"
);

let skillsWebDes = document.querySelector(
  ".services-container .service-box h2#webDesign"
);
let skillsWebDev = document.querySelector(
  ".services-container .service-box h2#webDevelop"
);
let resumeTitle = document.querySelector(".resume .heading h3");
let resumeSubTitle = document.querySelector(".resume .heading h2");
let educationTitle = document.querySelector(
  ".resume-row .column .sub-heading #education"
);
let experienceTitle = document.querySelector(
  ".resume-row .column .sub-heading #experi"
);
let vanierDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #vanierDesc"
);
let yorkDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #yorkDesc"
);
let uniDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #uniDesc"
);
let kinoklikDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #kinoklikDesc"
);
let kabritaDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #kabritaDesc"
);
let agencyDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #agencyDesc"
);
let photoDesc = document.querySelector(
  ".resume-row .column  .resume-contents .box #photoDesc"
);
let downloadCV = document.querySelector(".container #downloadCV");
let portfolioHeading = document.querySelector(
  ".container .portfolio  .heading #portHead"
);
let portfolioParagraph = document.querySelector(
  ".container .portfolio  .heading #portParag"
);
let contactHeading = document.querySelector(".contact-form .contactTitle h2");
let feelFree = document.querySelector(".contact-form .contactTitle p");
let btnSendMes = document.querySelector(".contact-form form #sendMessage");
let footer = document.querySelector("footer p #rights");

const setLanguage = (language) => {
  if (language == "en") {
    hello.innerText = translations.en.sayHello;
    iAm.innerText = translations.en.text;
    iAmP.innerText = translations.en.iAmparag;
    stepsHead.innerText = translations.en.passion;
    brandStr.innerText = translations.en.brandStr;
    webDes.innerText = translations.en.webDes;
    frontDev.innerText = translations.en.frontEnd;
    brandStrDesc.innerText = translations.en.brandStrDesc;
    uiDesc.innerText = translations.en.uiUxDesc;
    webDesDesc.innerText = translations.en.webDesDesc;
    frontDevDesc.innerText = translations.en.frontEndDesc;
    levelUp.innerText = translations.en.levelUp;
    skillsHead.innerText = translations.en.skillsHead;
    skillsMarStrat.innerText = translations.en.skillsMarStr;
    skillsMarStrDesc.innerText = translations.en.skillsMarStrDesc;
    skillsWebDes.innerText = translations.en.skillsWebDes;
    skillsWebDev.innerText = translations.en.skillsWebDev;
    resumeTitle.innerText = translations.en.resume;
    resumeSubTitle.innerText = translations.en.resumeSubTitle;
    educationTitle.innerText = translations.en.educationTitle;
    vanierDesc.innerText = translations.en.vanierDesc;
    yorkDesc.innerText = translations.en.yorkDesc;
    uniDesc.innerText = translations.en.uniDesc;
    kinoklikDesc.innerText = translations.en.kinoklikDesc;
    kabritaDesc.innerText = translations.en.kabritaDesc;
    agencyDesc.innerText = translations.en.agencyDesc;
    photoDesc.innerText = translations.en.photoDesc;
    downloadCV.innerText = translations.en.downloadCV;
    portfolioHeading.innerText = translations.en.portfolioHeading;
    portfolioParagraph.innerText = translations.en.portfolioParagraph;
    contactHeading.innerText = translations.en.contactHeading;
    feelFree.innerText = translations.en.feelFree;
    btnSendMes.innerText = translations.en.btnSendMes;
    footer.innerText = translations.en.footer;
  } else if (language == "fr") {
    hello.innerText = translations.fr.sayHello;
    iAm.innerText = translations.fr.text;
    iAmP.innerText = translations.fr.iAmparag;
    stepsHead.innerText = translations.fr.passion;
    brandStr.innerText = translations.fr.brandStr;
    webDes.innerText = translations.fr.webDes;
    frontDev.innerText = translations.fr.frontEnd;
    brandStrDesc.innerText = translations.fr.brandStrDesc;
    uiDesc.innerText = translations.fr.uiUxDesc;
    webDesDesc.innerText = translations.fr.webDesDesc;
    frontDevDesc.innerText = translations.fr.frontEndDesc;
    levelUp.innerText = translations.fr.levelUp;
    skillsHead.innerText = translations.fr.skillsHead;
    skillsMarStrat.innerText = translations.fr.skillsMarStr;
    skillsMarStrDesc.innerText = translations.fr.skillsMarStrDesc;
    skillsWebDes.innerText = translations.fr.skillsWebDes;
    skillsWebDev.innerText = translations.fr.skillsWebDev;
    resumeTitle.innerText = translations.fr.resume;
    resumeSubTitle.innerText = translations.fr.resumeSubTitle;
    educationTitle.innerText = translations.fr.educationTitle;
    vanierDesc.innerText = translations.fr.vanierDesc;
    yorkDesc.innerText = translations.fr.yorkDesc;
    uniDesc.innerText = translations.fr.uniDesc;
    kinoklikDesc.innerText = translations.fr.kinoklikDesc;
    kabritaDesc.innerText = translations.fr.kabritaDesc;
    agencyDesc.innerText = translations.fr.agencyDesc;
    photoDesc.innerText = translations.fr.photoDesc;
    downloadCV.innerText = translations.fr.downloadCV;
    portfolioHeading.innerText = translations.fr.portfolioHeading;
    portfolioParagraph.innerText = translations.fr.portfolioParagraph;
    contactHeading.innerText = translations.fr.contactHeading;
    feelFree.innerText = translations.fr.feelFree;
    btnSendMes.innerText = translations.fr.btnSendMes;
    footer.innerText = translations.fr.footer;
  }
};

languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

//Nav links
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");
var menuLinks = document.querySelectorAll(".nav-links li a");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}

//date for footer

function Footer() {
  let year = new Date().getFullYear();
  document.querySelector(".footerYear").textContent = year;
}

Footer();
