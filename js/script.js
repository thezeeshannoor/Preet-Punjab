// header
let navPages = document.getElementById("navPages");
let navBtn = document.getElementById("navBtn");

navBtn.onclick = () => {
  if (navPages.style.display == "flex") {
    navPages.style.display = "none";
  } else {
    navPages.style.display = "flex";
  }
};
// Poets Gallery JS
document.addEventListener("DOMContentLoaded", function () {
  let poetBtns = document.getElementById("poetBtns");

  poetBtns.addEventListener("click", (e) => {
    let allPoets = document.querySelectorAll(".allPoets");
    let poetsDiv = document.getElementById("poetsDiv");
    if (
      e.target.id == "allPoets" ||
      e.target.id == "classicalPoets" ||
      e.target.id == "modernPoets"
    ) {
      for (let i = 0; i < allPoets.length; i++) {
        allPoets[i].classList.remove("d-flex");
        allPoets[i].style.display = "none";
      }
      let filterBTnColor = document.querySelectorAll(".filterBtn");
      for (let i = 0; i < filterBTnColor.length; i++) {
        filterBTnColor[i].classList.remove("filterBtnActive");
        filterBTnColor[i].classList.add("filterBtnNotActive");
      }

      let poetType = document.getElementById(e.target.id);
      poetType.classList.remove("filterBtnNotActive");
      poetType.classList.add("filterBtnActive");
      poetType.classList.add("filterBtnActive");
      let selectedPoetClass = document.querySelectorAll(`.${poetType.id}`);
      poetsDiv.style.animation = "none";
      setTimeout(() => {
        poetsDiv.style.animation = "move 0.3s ease-in 1";
      }, 0);
      for (let i = 0; i < selectedPoetClass.length; i++) {
        selectedPoetClass[i].classList.remove("d-flex");
        selectedPoetClass[i].style.display = "flex";
      }
    }
  });
});
// gazals
document.addEventListener("DOMContentLoaded", function (e) {
  const gazals = [
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
    "guzre jo apne yaron ki sohbat mein chaar din",
  ];
  let gazalDiv = document.getElementById("gazalDiv");

  let seeAllGazal = document.getElementById("seeAllGazal");
  let seeLessGazal = document.getElementById("seeLessGazal");
  seeLessGazal.style.display = "none";
  let gazalIndex = 4;
  seeAllGazal.onclick = () => {
    gazalIndex = gazals.length - 1;

    seeAllGazal.style.display = "none";
    seeLessGazal.style.display = "block";

    gazalFun();
  };

  seeLessGazal.onclick = () => {
    gazalIndex = 4;
    seeLessGazal.style.display = "none";
    seeAllGazal.style.display = "block";
    gazalFun();
  };

  const gazalFun = () => {
    gazalDiv.innerHTML = "";
    for (let i = 0; i < gazalIndex; i++) {
      let space = document.createElement("div");
      space.classList.add("px-3", "px-sm-5", "mx-3", "my-5");

      let flexDiv = document.createElement("div");
      flexDiv.classList.add("d-flex", "gap-2", "align-items-center", "gazal");

      let icon = document.createElement("i");
      icon.classList.add("far", "fa-heart", "dil");

      let p = document.createElement("p");
      p.classList.add("d-flex", "align-items-center", "mb-1");
      p.innerText = gazals[i];
      let aTag = document.createElement("a");
      aTag.href = "ghazals.html";
      aTag.classList.add("text-decoration-none", "text-black");
      aTag.appendChild(p);

      flexDiv.appendChild(icon);
      flexDiv.appendChild(aTag);

      space.appendChild(flexDiv);
      let hrLine = document.createElement("hr");
      space.appendChild(hrLine);

      gazalDiv.appendChild(space);
    }
  };
  gazalFun();
  // Get all icons with the 'toggle-icon' class
  var icons = document.querySelectorAll(".dil");

  // Add click event listener to each icon
  icons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      if (e.target.classList.contains("far")) {
        e.target.classList.remove("far");
        e.target.classList.add("fa");
        e.target.style.color = "red";
      } else {
        e.target.classList.remove("fa");
        e.target.classList.add("far");
        e.target.style.color = "black";
      }
    });
  });
});

// popular poetry js
const poetry = [
  {
    head: "Na Kar Bandya Meri Meri",
    desc: `Na kar bandya meri meri 
        Na teri na meri
        Char dina da mela
        Dunya pher matti de dheri`,
    poet: "-Bulleh Shah",
  },

  {
    head: "Lorem ipsum",
    desc: `lorem ipsum
        lorem ipsum
        lorum imspsum`,
    poet: "-Bulleh Shah",
  },
  {
    head: "Zeeshan",
    desc: `Na kar bandya meri meri 
        Na teri na meri
        Char dina da mela
        Dunya pher matti de dheri`,
    poet: "-Bulleh Shah",
  },

  {
    head: "Noor",
    desc: `Na kar bandya meri meri 
        Na teri na meri
        Char dina da mela
        Dunya pher matti de dheri`,
    poet: "-Bulleh Shah",
  },
];

let popPrev = document.getElementById("popPrev");
let popNext = document.getElementById("popNext");

let sliderTxtHeadFirst = document.getElementById("sliderTxtHeadFirst");
let sliderTxtHeadSecond = document.getElementById("sliderTxtHeadSecond");

let sliderDescHeadFirst = document.getElementById("sliderDescHeadFirst");
let sliderDescHeadSecond = document.getElementById("sliderDescHeadSecond");

let firstWriter = document.getElementById("firstWriter");
let secondWriter = document.getElementById("secondWriter");

let indexPoetFirst = 0;
let indexPoetSecond = 0;
const mediaQueryList = window.matchMedia("(max-width: 500px)");
popNext.onclick = () => {
  popNext.style.backgroundColor = "#f2742062";
  popPrev.style.backgroundColor = "white";
  if (
    indexPoetFirst == poetry.length - 1 ||
    indexPoetSecond == poetry.length - 1
  ) {
    return;
  }

  if (indexPoetFirst == 0 && indexPoetSecond == 0) {
    indexPoetFirst += 1;

    indexPoetSecond += 2;
  } else if (mediaQueryList.matches) {
    indexPoetFirst++;
  } else {
    indexPoetFirst++;
    indexPoetSecond++;
  }

  sliderTxtHeadFirst.innerText = poetry[indexPoetFirst].head;
  sliderDescHeadFirst.innerText = poetry[indexPoetFirst].desc;
  firstWriter.innerText = poetry[indexPoetFirst].poet;

  sliderTxtHeadSecond.innerText = poetry[indexPoetSecond].head;
  sliderDescHeadSecond.innerText = poetry[indexPoetSecond].desc;
  secondWriter.innerText = poetry[indexPoetSecond].poet;
};

popPrev.onclick = () => {
  popNext.style.backgroundColor = "white";
  popPrev.style.backgroundColor = "#f2742062";

  if (indexPoetFirst == 0 || indexPoetSecond == 0) {
    return;
  } else if (mediaQueryList.matches) {
    indexPoetFirst--;
  } else {
    indexPoetFirst--;
    indexPoetSecond--;
  }

  sliderTxtHeadFirst.innerText = poetry[indexPoetFirst].head;
  sliderDescHeadFirst.innerText = poetry[indexPoetFirst].desc;
  firstWriter.innerText = poetry[indexPoetFirst].poet;

  sliderTxtHeadSecond.innerText = poetry[indexPoetSecond].head;
  sliderDescHeadSecond.innerText = poetry[indexPoetSecond].desc;
  secondWriter.innerText = poetry[indexPoetSecond].poet;
};

/* Toggle between showing and hiding the dropdown content */

// /* Initialize Google Translate API */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,ur,pa,pa-Guru",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

// landing page gallery
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("filterBtns").addEventListener("click", (e) => {
    let targetBtn = e.target.closest(".filterBtn");
    if (!targetBtn) return; // Ignore clicks outside of buttons

    let targetId = targetBtn.id;

    let fil = document.querySelectorAll(".filterBtn");
    fil.forEach((btn) => {
      btn.classList.remove("filterBtnActive");
      btn.classList.add("filterBtnNotActive");
    });
    targetBtn.classList.remove("filterBtnNotActive");

    let all = document.querySelectorAll(".allImg");
    all.forEach((img) => {
      img.style.display = "none";
      img.style.animation = "none"; // Reset animation
    });

    switch (targetId) {
      case "all":
        targetBtn.classList.add("filterBtnActive");
        all.forEach((img) => {
          img.style.display = "block";
          setTimeout(() => {
            img.style.animation = "move 0.2s linear 1";
          }, 0);
        });
        break;
      case "food":
      case "dress":
      case "art":
        document.getElementById(targetId).classList.add("filterBtnActive");
        document.getElementById(`${targetId}Img`).style.display = "block";
        setTimeout(() => {
          document.getElementById(`${targetId}Img`).style.animation =
            "move 0.2s linear 1";
        }, 0);
        break;
      case "dance":
        targetBtn.classList.add("filterBtnActive");
        document.getElementById("danceImg").style.display = "block";
        setTimeout(() => {
          document.getElementById("danceImg").style.animation =
            "move 0.2s linear 1";
        }, 0);
        break;
      default:
        break;
    }
  });
});
