//#region Color Codes
const COLOR_1 = "#ECB365";
("#102A43");
const COLOR_2 = "#064663";
const COLOR_3 = "#04293A";
const COLOR_4 = "#041C32";

const TEXT_COLOR = "#BCCCDC";
const DROPDOWN_COLOR = "#102A43";
const MODALBG_COLOR = "#243B53";
//#endregion

renderTheme();

function setNightMode() {
  document.cookie = "theme=night";
  document.getElementById("html").style.transition = "0.3s";
  document.querySelector("nav").style.transition = "0.3s";
  renderTheme();
}

function setLightMode() {
  document.cookie = "theme=light";
  location.reload();
}

/**
 * Function to change styles of present DOM elements to night mode color
 */
function renderTheme() {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  if (cookie["theme"] == "night") {
    try {
      //#region Login Page
      document.getElementById("footer").style.backgroundColor = DROPDOWN_COLOR;
      document.getElementById("footer").style.color = TEXT_COLOR;
      document
        .getElementById("logInModalColor")
        .classList.remove("has-background-white");
      document
        .getElementById("signUpModalColor")
        .classList.remove("has-background-white");
      document
        .getElementById("forgPassModalColor")
        .classList.remove("has-background-white");

      var titleTexts = document.querySelectorAll(".title");
      for (var i = 0; i < titleTexts.length; i++) {
        titleTexts[i].style.color = TEXT_COLOR;
      }
      var subtitleTexts = document.querySelectorAll(".subtitle");
      for (var i = 0; i < subtitleTexts.length; i++) {
        subtitleTexts[i].style.color = TEXT_COLOR;
      }

      var placeholderTexts = document.querySelectorAll("::placeholder");
      for (var i = 0; i < placeholderTexts.length; i++) {
        placeholderTexts[i].style.color = TEXT_COLOR;
      }
      //#endregion
    } catch {}

    try {
      //#region Application Page
      document.getElementById("appTitle").style.color = TEXT_COLOR;
      document.getElementById("newAppTitle").style.color = TEXT_COLOR;
      document.getElementById("settingsTitle").style.color = TEXT_COLOR;
      document.querySelector("#formsubmit").style.backgroundColor = COLOR_1;
      document.querySelector("#formsubmit").style.color = "black";
      document.querySelector("#viewsubmit").style.backgroundColor = COLOR_1;
      document.querySelector("#viewsubmit").style.color = "black";
      document.querySelector("#sortContent").style.backgroundColor =
        DROPDOWN_COLOR;
      document.querySelector("#searchContent").style.backgroundColor =
        DROPDOWN_COLOR;
      document
        .getElementById("viewModalContent")
        .classList.remove("has-background-white");
      document
        .getElementById("addModalContent")
        .classList.remove("has-background-white");
      document
        .getElementById("settingsModalContent")
        .classList.remove("has-background-white");
      document
        .getElementById("deleteModalContent")
        .classList.remove("has-background-white");

      var modalHeaders = document.querySelectorAll("#viewModalHeader");
      for (var i = 0; i < modalHeaders.length; i++) {
        modalHeaders[i].style.backgroundColor = DROPDOWN_COLOR;
        modalHeaders[i].style.color = TEXT_COLOR;
      }
      //#endregion
    } catch {}

    try {
      //#region Profile Page
      document
        .getElementById("resetNameModalColor")
        .classList.remove("has-background-white");
      document
        .getElementById("deleteAccountModalColor")
        .classList.remove("has-background-white");
      document.querySelector(".box").style.backgroundColor = DROPDOWN_COLOR;
      //#endregion
    } catch {}

    try {
      //#region Job Listing Page
      document.querySelector("#filterDropdown").style.backgroundColor =
        DROPDOWN_COLOR;
      //#endregion
    } catch {}

    try {
      //#region All
      document.getElementById("nightbutton").style.display = "none";
      document.getElementById("lightbutton").style.display = "flex";
      document.getElementById("html").style.backgroundColor = COLOR_4;
      document.querySelector("nav").style.backgroundColor = COLOR_3;
      document.querySelector("nav").classList.remove("has-shadow");

      var tableHeaders = document.querySelectorAll("tr");
      for (var i = 0; i < tableHeaders.length; i++) {
        tableHeaders[i].style.backgroundColor = COLOR_3;
        tableHeaders[i].style.color = TEXT_COLOR;
      }
      var tableText = document.querySelectorAll("td");
      for (var i = 0; i < tableText.length; i++) {
        tableText[i].style.color = TEXT_COLOR;
      }
      var tableTextHeaders = document.querySelectorAll("th");
      for (var i = 0; i < tableTextHeaders.length; i++) {
        tableTextHeaders[i].style.color = TEXT_COLOR;
      }
      var h1texts = document.querySelectorAll("h1");
      for (var i = 0; i < h1texts.length; i++) {
        h1texts[i].style.color = TEXT_COLOR;
      }
      var h3texts = document.querySelectorAll("h3");
      for (var i = 0; i < h3texts.length; i++) {
        h3texts[i].style.color = TEXT_COLOR;
      }
      var h5texts = document.querySelectorAll("h5");
      for (var i = 0; i < h5texts.length; i++) {
        h5texts[i].style.color = TEXT_COLOR;
      }
      var navbarItems = document.querySelectorAll(".navbar-item");
      for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].style.color = "white";
        navbarItems[i].classList.add("nightmode");
      }
      var cardContents = document.querySelectorAll(".card-content");
      for (var i = 0; i < cardContents.length; i++) {
        if (cardContents[i].style.backgroundColor == "") {
          cardContents[i].style.backgroundColor = COLOR_2;
        }
      }
      var cardFooters = document.querySelectorAll(".card-footer-item");
      for (var i = 0; i < cardFooters.length; i++) {
        cardFooters[i].style.backgroundColor = DROPDOWN_COLOR;
      }
      var pTexts = document.querySelectorAll("p");
      for (var i = 0; i < pTexts.length; i++) {
        if (
          pTexts[i].parentElement.classList.contains("card-content") &&
          pTexts[i].parentElement.style.backgroundColor != "rgb(6, 70, 99)"
        ) {
          continue;
        }
        pTexts[i].style.color = TEXT_COLOR;
      }
      var topButtons = document.querySelectorAll(".topbutton");
      for (var i = 0; i < topButtons.length; i++) {
        topButtons[i].style.backgroundColor = COLOR_1;
        topButtons[i].style.borderColor = COLOR_2;
      }
      var dropdownItems = document.querySelectorAll(".dropdown-item");
      for (var i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].style.color = TEXT_COLOR;
      }
      var spanTexts = document.querySelectorAll("span");
      for (var i = 0; i < spanTexts.length; i++) {
        spanTexts[i].style.color = TEXT_COLOR;
      }
      var spanTexts = document.querySelectorAll("span.tag");
      for (var i = 0; i < spanTexts.length; i++) {
        spanTexts[i].style.color = "white";
      }
      var spanTexts = document.querySelectorAll("button>span");
      for (var i = 0; i < spanTexts.length; i++) {
        spanTexts[i].style.color = COLOR_4;
      }
      var modalBgs = document.querySelectorAll(".modal-content");
      for (var i = 0; i < modalBgs.length; i++) {
        modalBgs[i].style.backgroundColor = MODALBG_COLOR;
      }
      var labelTexts = document.querySelectorAll("label");
      for (var i = 0; i < labelTexts.length; i++) {
        labelTexts[i].style.color = TEXT_COLOR;
      }
      var h5Texts = document.querySelectorAll("h5");
      for (var i = 0; i < h5Texts.length; i++) {
        h5Texts[i].style.color = TEXT_COLOR;
      }
      var inputs = document.querySelectorAll("input,select,textarea");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = COLOR_3;
        inputs[i].style.color = TEXT_COLOR;
      }
      var panels = document.querySelectorAll(".panel");
      for (var i = 0; i < panels.length; i++) {
        panels[i].style.backgroundColor = COLOR_2;
      }
      var panelHeadings = document.querySelectorAll(".panel-heading");
      for (var i = 0; i < panelHeadings.length; i++) {
        panelHeadings[i].style.backgroundColor = COLOR_3;
        panelHeadings[i].style.color = TEXT_COLOR;
      }
      //#endregion
    } catch {}
  } else {
    try {
      //#region Login Page
      document
        .getElementById("logInModalColor")
        .classList.add("has-background-white");
      document
        .getElementById("signUpModalColor")
        .classList.add("has-background-white");
      document
        .getElementById("forgPassModalColor")
        .classList.add("has-background-white");
      //#endregion
    } catch {}

    try {
      //#region Application Page
      document
        .getElementById("viewModalContent")
        .classList.add("has-background-white");
      document
        .getElementById("addModalContent")
        .classList.add("has-background-white");
      document
        .getElementById("settingsModalContent")
        .classList.add("has-background-white");
      document
        .getElementById("deleteModalContent")
        .classList.add("has-background-white");
      //#endregion
    } catch {}

    try {
      //#region Account Page
      document
        .getElementById("deleteAccountModalColor")
        .classList.add("has-background-white");
      document
        .getElementById("resetNameModalColor")
        .classList.add("has-background-white");
      //#endregion
    } catch {}

    document.getElementById("nightbutton").style.display = "flex";
    document.getElementById("lightbutton").style.display = "none";
  }
}

export { setLightMode, setNightMode, renderTheme };
