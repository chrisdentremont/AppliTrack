const cardList = document.querySelector("#cards");

//Top Menu Elements
const uploadButton = document.querySelector("#uploaddata");
const fileInput = document.querySelector("#fileinput");
const downloadButton = document.querySelector("#downloaddata");
const searchTextBar = document.querySelector("#appsearchbar");
const searchPType = document.querySelector("#appsearchbarptype");
const searchPStatus = document.querySelector("#appsearchbarpstatus");
const searchFUp = document.querySelector("#appsearchbarfup");
const searchDate = document.querySelector("#appsearchdatebar");

//Application Form Modal
const newAppButton = document.querySelector("#addapplication");
let isFormSubmit = true;
const newAppTitle = document.querySelector("#newAppTitle");
const testViewButton = document.querySelector("#testview");
const modalBg = document.querySelector("#formModalBg");
const modal = document.querySelector("#formModal");

//Application Form
const applicationForm = document.querySelector("#applicationform");
const formSubmitButton = document.querySelector("#formsubmit");
const invalidInput = document.querySelector("#invalidinput");

//Application View Modal
const viewModal = document.querySelector("#viewModal");
const viewModalBg = document.querySelector("#viewModalBg");
const viewModalContent = document.querySelector("#viewModalContent");
const modalCardHead = document.querySelector("#modalCardHead");
var editModalButton;
let cookieID;

var cookies = document.cookie.split(";");
var cookiesToDisplay = [];

/**
 * A function to check if a given date is two weeks or more away
 * from the current date.
 */
function isTwoWeeksAgo(date) {
  const twoWeeks = 15 * 24 * 60 * 60 * 1000;
  const twoWeeksTime = new Date().getTime() - twoWeeks;

  if (twoWeeksTime > date) {
    return true;
  } else {
    return false;
  }
}

/**
 * Function that displays application cards on screen through given
 * cookies.
 *
 * The function creates HTML card elements to display each application
 * cookie and applies necessary style classes. The function also
 * checks if the date on an application is more than two weeks ago,
 * and displays a follow-up warning if so.
 *
 *
 * @param {*} cookies
 */
function DisplayCookies(cookies) {
  while (cardList.firstChild) {
    cardList.removeChild(cardList.firstChild);
  }

  for (var i = 0, element; (element = cookies[i++]); ) {
    const current = element.split("=");
    const currentDisplay = JSON.parse(current[1]);

    //Create HTML element
    //Card div
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    var cardID = "" + current[0];
    newCard.setAttribute("id", cardID);

    //Card content
    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    var cardContentTop = document.createElement("p");
    cardContentTop.classList.add("pTopText");
    var text = document.createTextNode(currentDisplay[1] + " @");
    cardContentTop.appendChild(text);
    var cardContentBottom = document.createElement("p");
    cardContentBottom.classList.add("title");
    cardContentBottom.classList.add("is-size-5");
    text = document.createTextNode(currentDisplay[0]);
    cardContentBottom.appendChild(text);
    cardContent.appendChild(cardContentTop);
    cardContent.appendChild(cardContentBottom);

    //Footer content
    var cardFooter = document.createElement("footer");
    cardFooter.classList.add("card-footer");

    var viewLink = document.createElement("p");
    viewLink.classList.add("card-footer-item");
    var viewLinkButton = document.createElement("a");
    viewLinkButton.addEventListener("click", () => {
      //Title
      var modalTitle = document.createElement("header");
      modalTitle.classList.add("modal-card-head");
      modalTitle.classList.add("is-size-5");
      modalTitle.classList.add("has-text-weight-bold");
      modalTitle.classList.add("mb-2");
      modalTitle.appendChild(
        document.createTextNode(
          "" + currentDisplay[1] + " @ " + currentDisplay[0]
        )
      );
      //Edit button
      var editButton = document.createElement("a");
      editButton.setAttribute("id", "editIcon");
      editButton.setAttribute("href", "#");
      editButton.setAttribute("onClick", "javascript:editCard()");
      var editSpan = document.createElement("span");
      editSpan.classList.add("icon");
      editSpan.classList.add("is-medium");
      var editIcon = document.createElement("i");
      editIcon.classList.add("fas");
      editIcon.classList.add("fa-pen");
      editSpan.appendChild(editIcon);
      editButton.appendChild(editSpan);
      modalTitle.appendChild(editButton);
      editModalButton = editButton;

      //Company Name
      var viewCompanyNameTitle = document.createElement("h5");
      viewCompanyNameTitle.setAttribute("name", current[0].replace(/\s/g, ""));
      viewCompanyNameTitle.classList.add("subtitle");
      viewCompanyNameTitle.classList.add("is-4");
      viewCompanyNameTitle.classList.add("px-4");
      viewCompanyNameTitle.classList.add("mb-1");
      viewCompanyNameTitle.classList.add("has-text-weight-bold");
      viewCompanyNameTitle.appendChild(document.createTextNode("Company"));
      var viewCompanyName = document.createElement("p");
      viewCompanyName.classList.add("pText");
      viewCompanyName.classList.add("mb-3");
      viewCompanyName.classList.add("px-4");
      viewCompanyName.appendChild(document.createTextNode(currentDisplay[0]));

      //Position
      var viewPositionTitle = document.createElement("h5");
      viewPositionTitle.classList.add("subtitle");
      viewPositionTitle.classList.add("is-4");
      viewPositionTitle.classList.add("px-4");
      viewPositionTitle.classList.add("mb-1");
      viewPositionTitle.classList.add("has-text-weight-bold");
      viewPositionTitle.appendChild(document.createTextNode("Position"));
      var viewPosition = document.createElement("p");
      viewPosition.classList.add("pText");
      viewPosition.classList.add("mb-3");
      viewPosition.classList.add("px-4");
      viewPosition.appendChild(document.createTextNode(currentDisplay[1]));

      //Position Type
      var viewPositionTypeTitle = document.createElement("h5");
      viewPositionTypeTitle.classList.add("subtitle");
      viewPositionTypeTitle.classList.add("is-4");
      viewPositionTypeTitle.classList.add("px-4");
      viewPositionTypeTitle.classList.add("mb-1");
      viewPositionTypeTitle.classList.add("has-text-weight-bold");
      viewPositionTypeTitle.appendChild(
        document.createTextNode("Position Type")
      );
      var viewPositionType = document.createElement("p");
      viewPositionType.classList.add("pText");
      viewPositionType.classList.add("mb-3");
      viewPositionType.classList.add("px-4");
      viewPositionType.appendChild(document.createTextNode(currentDisplay[2]));

      //Status
      var viewStatusTitle = document.createElement("h5");
      viewStatusTitle.classList.add("subtitle");
      viewStatusTitle.classList.add("is-4");
      viewStatusTitle.classList.add("px-4");
      viewStatusTitle.classList.add("mb-1");
      viewStatusTitle.classList.add("has-text-weight-bold");
      viewStatusTitle.appendChild(
        document.createTextNode("Application Status")
      );
      var viewStatus = document.createElement("p");
      viewStatus.classList.add("pText");
      viewStatus.classList.add("mb-3");
      viewStatus.classList.add("px-4");
      viewStatus.appendChild(document.createTextNode(currentDisplay[3]));

      //Date Applied
      var viewDateAppliedTitle = document.createElement("h5");
      viewDateAppliedTitle.classList.add("subtitle");
      viewDateAppliedTitle.classList.add("is-4");
      viewDateAppliedTitle.classList.add("px-4");
      viewDateAppliedTitle.classList.add("mb-1");
      viewDateAppliedTitle.classList.add("has-text-weight-bold");
      viewDateAppliedTitle.appendChild(document.createTextNode("Date Applied"));
      var viewDateApplied = document.createElement("p");
      viewDateApplied.classList.add("pText");
      viewDateApplied.classList.add("mb-3");
      viewDateApplied.classList.add("px-4");
      if (currentDisplay[4].length == 0) {
        viewDateApplied.appendChild(document.createTextNode("N/A"));
      } else {
        viewDateApplied.appendChild(document.createTextNode(currentDisplay[4]));
      }

      //Followed Up
      var viewFollowedUpTitle = document.createElement("h5");
      viewFollowedUpTitle.classList.add("subtitle");
      viewFollowedUpTitle.classList.add("is-4");
      viewFollowedUpTitle.classList.add("px-4");
      viewFollowedUpTitle.classList.add("mb-1");
      viewFollowedUpTitle.classList.add("has-text-weight-bold");
      viewFollowedUpTitle.appendChild(document.createTextNode("Followed Up"));
      var viewFollowedUp = document.createElement("p");
      viewFollowedUp.classList.add("pText");
      viewFollowedUp.classList.add("mb-3");
      viewFollowedUp.classList.add("px-4");
      viewFollowedUp.appendChild(document.createTextNode(currentDisplay[5]));

      //Notes
      var viewNotesTitle = document.createElement("h5");
      viewNotesTitle.classList.add("subtitle");
      viewNotesTitle.classList.add("is-4");
      viewNotesTitle.classList.add("px-4");
      viewNotesTitle.classList.add("mb-1");
      viewNotesTitle.classList.add("has-text-weight-bold");
      viewNotesTitle.appendChild(document.createTextNode("Notes"));
      var viewNotes = document.createElement("p");
      viewNotes.classList.add("pText");
      viewNotes.classList.add("mb-3");
      viewNotes.classList.add("px-4");
      if (currentDisplay[6].length == 0) {
        viewNotes.appendChild(document.createTextNode("N/A"));
      } else {
        viewNotes.appendChild(document.createTextNode(currentDisplay[6]));
      }

      viewModalContent.appendChild(modalTitle);
      viewModalContent.appendChild(viewCompanyNameTitle);
      viewModalContent.appendChild(viewCompanyName);
      viewModalContent.appendChild(viewPositionTitle);
      viewModalContent.appendChild(viewPosition);
      viewModalContent.appendChild(viewPositionTypeTitle);
      viewModalContent.appendChild(viewPositionType);
      viewModalContent.appendChild(viewStatusTitle);
      viewModalContent.appendChild(viewStatus);
      viewModalContent.appendChild(viewDateAppliedTitle);
      viewModalContent.appendChild(viewDateApplied);
      viewModalContent.appendChild(viewFollowedUpTitle);
      viewModalContent.appendChild(viewFollowedUp);
      viewModalContent.appendChild(viewNotesTitle);
      viewModalContent.appendChild(viewNotes);
      viewModal.classList.add("is-active");
    });
    viewModalBg.addEventListener("click", () => {
      while (viewModalContent.firstChild) {
        viewModalContent.removeChild(viewModalContent.firstChild);
      }
      viewModal.classList.remove("is-active");
    });
    viewLinkButton.classList.add("has-text-gray");
    viewLinkText = document.createTextNode("View");
    viewLinkButton.appendChild(viewLinkText);
    viewLink.appendChild(viewLinkButton);
    //Check if it's been more than two weeks since Applied Date & add warning if so
    if (
      isTwoWeeksAgo(new Date(currentDisplay[4])) &&
      currentDisplay[5] == "No"
    ) {
      var followUpWarning = document.createElement("span");
      followUpWarning.classList.add("icon");
      followUpWarning.classList.add("has-text-danger");
      var followUpIcon = document.createElement("i");
      followUpIcon.classList.add("fas");
      followUpIcon.classList.add("fa-clock");
      followUpIcon.classList.add("tooltip");
      followUpWarning.appendChild(followUpIcon);
      var followUpText = document.createElement("span");
      followUpText.classList.add("tooltiptext");
      followUpText.textContent =
        "It's been more than 2 weeks since you've applied, consider following up!";
      followUpIcon.appendChild(followUpText);
      viewLinkButton.appendChild(followUpWarning);
    }

    var deleteLink = document.createElement("p");
    deleteLink.classList.add("card-footer-item");
    var deleteLinkButton = document.createElement("a");
    deleteLinkButton.addEventListener("click", () => {
      var id = "" + current[0];
      document.cookie =
        "" + id + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
    deleteLinkButton.href = "";
    deleteLinkButton.classList.add("has-text-gray");
    deleteLinkText = document.createTextNode("Delete");
    deleteLinkButton.appendChild(deleteLinkText);
    deleteLink.appendChild(deleteLinkButton);

    cardFooter.appendChild(viewLink);
    cardFooter.appendChild(deleteLink);

    newCard.appendChild(cardContent);
    newCard.appendChild(cardFooter);
    cardList.appendChild(newCard);
  }
}

/**
 * Comparator function to sort the application cards alphabetically.
 *
 * @param {*} a First title to compare.
 * @param {*} b Second title to compare.
 * @returns Comparison result.
 */
function sortByAZ(a, b) {
  var aData = JSON.parse(a.split("=")[1]);
  var bData = JSON.parse(b.split("=")[1]);

  if (aData[0].toLowerCase() < bData[0].toLowerCase()) {
    return -1;
  }
  if (bData[0].toLowerCase() < aData[0].toLowerCase()) {
    return 1;
  }
  return 0;
}

/**
 * Comparator function to sort the application cards by date.
 *
 * @param {*} a First date to compare.
 * @param {*} b Second date to compare.
 * @returns Comparison result.
 */
function sortByDate(a, b) {
  var aData = JSON.parse(a.split("=")[1]);
  var bData = JSON.parse(b.split("=")[1]);

  if (aData[4] < bData[4]) {
    return -1;
  }
  if (bData[4] < aData[4]) {
    return 1;
  }
  return 0;
}

/**
 * A function that runs when the page is loaded and displays
 * application cards through browser cookies.
 *
 * The function ignores any non-application cookies so that the
 * cards are added properly, and also sorts the cards based on
 * separate cookie determined by sortCards() function below.
 *
 * @param {*} event
 */
window.onload = function WindowLoad(event) {
  //Add cookie strings to array
  /*
  0 - Company Name
  1 - Position
  2 - Position Type
  3 - Status
  4 - Date Applied
  5 - Followed Up
  6 - Notes
  */

  //Fill cookie array with correct cookies
  for (var i = 0, element; (element = cookies[i++]); ) {
    if (!element.includes(",")) {
      continue;
    }

    cookiesToDisplay.push(element);
  }

  document.getElementById("appTitle").textContent =
    "Your Applications (" + cookiesToDisplay.length + ")";

  //Get sort cookie and see if cookies need to be sorted
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });

  if (cookie["sort"] == "az") {
    cookiesToDisplay = cookiesToDisplay.sort(sortByAZ);
  }
  if (cookie["sort"] == "date") {
    cookiesToDisplay = cookiesToDisplay.sort(sortByDate);
  }

  DisplayCookies(cookiesToDisplay);
};

/**
 * Shows application form for user to submit data.
 */
newAppButton.addEventListener("click", () => {
  modal.classList.add("is-active");
  isFormSubmit = true;
  newAppTitle.textContent = "New Application";
  formSubmitButton.textContent = "Create";
});

/**
 * Clears application form and disables it when user clicks away.
 */
modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
  applicationForm.reset();
  invalidInput.style.display = "none";
});

/**
 * A function that sorts the application cards by a given criteria.
 *
 * The function uses the given parameter to determine how to
 * sort the cards, either alphabetically or by date.
 *
 * @param {*} method A parameter to determine how to sort the cards.
 */
function sortCards(method) {
  if (method == "az") {
    document.cookie = "sort=az";
  } else if (method == "date") {
    document.cookie = "sort=date";
  }
  location.reload();
}

/**
 * A function that parses through the application form results
 * and creates a cookie with the given information, and adds
 * the cookie to the browser.
 */
formSubmitButton.addEventListener("click", () => {
  if (isFormSubmit) {
    var elements = document.getElementById("applicationform").elements;

    if (elements[0].value.length < 1 || elements[1].value.length < 1) {
      invalidInput.style.display = "block";
    } else {
      invalidInput.style.display = "none";
      applicationForm.submit();

      //Build element array and create cookie
      const formElements = [];
      for (var i = 0, element; (element = elements[i++]); ) {
        formElements.push(element.value);
      }
      var date = new Date();
      var idNum =
        "" +
        (date.getMonth() + 1) +
        date.getDate() +
        date.getFullYear() +
        date.getHours() +
        date.getMinutes() +
        date.getSeconds();
      var id = "" + elements[0].value.replace(/\s/g, "") + idNum;
      var daysToExpire = new Date(2147483647 * 1000).toUTCString();
      const finalElements =
        "" +
        id +
        "=" +
        JSON.stringify(formElements) +
        "; expires=" +
        daysToExpire;
      document.cookie = finalElements;

      //Reset form once successfully submitted
      modal.classList.remove("is-active");
      applicationForm.reset();
      invalidInput.style.display = "none";
      location.reload();
    }
  } else {
    var elements = document.getElementById("applicationform").elements;

    if (elements[0].value.length < 1 || elements[1].value.length < 1) {
      invalidInput.style.display = "block";
    } else {
      invalidInput.style.display = "none";
      applicationForm.submit();

      //Build element array and create cookie
      const formElements = [];
      for (var i = 0, element; (element = elements[i++]); ) {
        formElements.push(element.value);
      }
      const finalElements =
        "" +
        cookieID +
        "=" +
        JSON.stringify(formElements) +
        "; expires=Sun, 01 Jan 2023 00:00:00 UTC; path=/;";
      document.cookie = finalElements;

      //Reset form once successfully submitted
      modal.classList.remove("is-active");
      applicationForm.reset();
      invalidInput.style.display = "none";
      location.reload();
    }
  }
});

/**
 * A function that creates a new .txt file and adds the browser's
 * cookies to the file with same cookie format.
 */
downloadButton.addEventListener("click", () => {
  if (cookiesToDisplay.length < 1) {
    alert("Please add at least 1 application before downloading.");
  } else {
    const a = document.createElement("a");
    //Only download cookies containing application data
    var cookies = document.cookie.split(";");
    var filesToDownload = "";
    for (var i = 0, element; (element = cookies[i++]); ) {
      if (element.includes("[")) {
        filesToDownload += element + ";";
      }
    }
    const file = new Blob([filesToDownload], { type: "text/plain" });
    a.href = URL.createObjectURL(file);

    var date = new Date();
    var fileName =
      "AppliTrack" +
      (date.getMonth() + 1) +
      date.getDate() +
      date.getFullYear() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds();

    a.download = fileName;
    a.click();
  }
});

/**
 * A function that parses through an uploaded file and merges it's
 * cookies with the browser's cookies.
 *
 * The function makes sure that the file uploaded has the .txt
 * extension so that it can properly parse through it.
 */
function loadFile() {
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      if (file.name.substr(file.name.lastIndexOf(".") + 1) == "txt") {
        const cookies = reader.result.split(";");
        for (var i = 0, cookie; (cookie = cookies[i++]); ) {
          var daysToExpire = new Date(2147483647 * 1000).toUTCString();
          var tempCookie = cookie + "; expires=" + daysToExpire;
          document.cookie = tempCookie;
        }
      } else {
        alert("Please upload a .txt file.");
      }
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
  alert("Data has been succesfully uploaded.");
  location.reload();
}

uploadButton.addEventListener("click", () => {
  document.getElementById("fileinput").click();
});

/**
 * A function to properly apply changes to the display structure of
 * the search dropdown.
 *
 * The function takes in a parameter and uses it to determine which
 * search criteria to show the corresponding search box/dropdown for.
 *
 * @param {*} value The String to let the dropdown know which search
 * criteria is selected so it can act accordingly
 */
function selectSearch(value) {
  var spanText = document.getElementById("searchText");
  var searchBar = document.getElementById("appsearchbar");
  spanText.textContent = value;

  if (value == "Company Name") {
    document.getElementById("appsearchbar").value = "";
    DisplayCookies(cookiesToDisplay);
    searchBar.type = "text";
    searchPType.style.display = "none";
    searchPStatus.style.display = "none";
    searchFUp.style.display = "none";
    searchDate.style.display = "none";
    searchTextBar.style.display = "block";
  } else if (value == "Position Name") {
    document.getElementById("appsearchbar").value = "";
    DisplayCookies(cookiesToDisplay);
    searchBar.type = "text";
    searchPType.style.display = "none";
    searchPStatus.style.display = "none";
    searchFUp.style.display = "none";
    searchDate.style.display = "none";
    searchTextBar.style.display = "block";
  } else if (value == "Position Type") {
    search_applications(document.getElementById("searchPTypeText").textContent);
    searchPStatus.style.display = "none";
    searchTextBar.style.display = "none";
    searchFUp.style.display = "none";
    searchDate.style.display = "none";
    searchPType.style.display = "block";
  } else if (value == "Position Status") {
    search_applications(
      document.getElementById("searchPStatusText").textContent
    );
    searchPType.style.display = "none";
    searchTextBar.style.display = "none";
    searchFUp.style.display = "none";
    searchDate.style.display = "none";
    searchPStatus.style.display = "block";
  } else if (value == "Date Applied <=" || value == "Date Applied >") {
    searchDate.value = "";
    DisplayCookies(cookiesToDisplay);
    searchBar.type = "date";
    searchPType.style.display = "none";
    searchPStatus.style.display = "none";
    searchFUp.style.display = "none";
    searchTextBar.style.display = "none";
    searchDate.style.display = "block";
  } else if (value == "Followed Up") {
    search_applications(document.getElementById("searchfUpText").textContent);
    searchPType.style.display = "none";
    searchPStatus.style.display = "none";
    searchTextBar.style.display = "none";
    searchDate.style.display = "none";
    searchFUp.style.display = "block";
  } else if (value == "Notes") {
    document.getElementById("appsearchbar").value = "";
    DisplayCookies(cookiesToDisplay);
    searchBar.type = "text";
    searchPType.style.display = "none";
    searchPStatus.style.display = "none";
    searchFUp.style.display = "none";
    searchDate.style.display = "none";
    searchTextBar.style.display = "block";
  }
}

/**
 * A function to search through the list of cookies given a certain
 * criteria.
 *
 * The function determines which criteria to search for through the
 * 'searchText' element, and loops through every cookie and filters
 * with the corresponding criteria.
 *
 * @param {*} selectValue An optional parameter that lets the function know
 * which criteria to search for in certain conditions
 */
function search_applications(selectValue) {
  var spanText = document.getElementById("searchText");
  if (spanText.textContent == "Company Name") {
    let input = document.getElementById("appsearchbar").value.toLowerCase();
    if (input == "") {
      DisplayCookies(cookiesToDisplay);
    } else {
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[0].substring(0, input.length).toLowerCase().includes(input)) {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  } else if (spanText.textContent == "Position Name") {
    let input = document.getElementById("appsearchbar").value.toLowerCase();
    if (input == "") {
      DisplayCookies(cookiesToDisplay);
    } else {
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[1].substring(0, input.length).toLowerCase().includes(input)) {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  } else if (spanText.textContent == "Position Type") {
    if (selectValue == "Internship/Co-Op") {
      document.getElementById("searchPTypeText").textContent =
        "Internship/Co-Op";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[2] == "Internship/Co-Op") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if (selectValue == "Part-Time") {
      document.getElementById("searchPTypeText").textContent = "Part-Time";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[2] == "Part-Time") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if (selectValue == "Full-Time") {
      document.getElementById("searchPTypeText").textContent = "Full-Time";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[2] == "Full-Time") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  } else if (spanText.textContent == "Position Status") {
    if (selectValue == "Applied") {
      document.getElementById("searchPStatusText").textContent = "Applied";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[3] == "Applied") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if (selectValue == "Interviewed") {
      document.getElementById("searchPStatusText").textContent = "Interviewed";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[3] == "Interviewed") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if (selectValue == "Rejected") {
      document.getElementById("searchPStatusText").textContent = "Rejected";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[3] == "Rejected") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if ((selectValue = "Offered")) {
      document.getElementById("searchPStatusText").textContent = "Offered";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[3] == "Offered") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  } else if (spanText.textContent == "Date Applied <=") {
    let input = document.getElementById("appsearchdatebar").value;
    let newCookies = [];
    for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
      let temp = JSON.parse(element.split("=")[1]);
      if (new Date(temp[4]) <= new Date(input)) {
        newCookies.push(element);
      }
    }
    DisplayCookies(newCookies);
  } else if (spanText.textContent == "Date Applied >") {
    let input = document.getElementById("appsearchdatebar").value;
    let newCookies = [];
    for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
      let temp = JSON.parse(element.split("=")[1]);
      if (new Date(temp[4]) > new Date(input)) {
        newCookies.push(element);
      }
    }
    DisplayCookies(newCookies);
  } else if (spanText.textContent == "Followed Up") {
    if (selectValue == "Yes") {
      document.getElementById("searchfUpText").textContent = "Yes";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[5] == "Yes") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    } else if (selectValue == "No") {
      document.getElementById("searchfUpText").textContent = "No";
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[5] == "No") {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  } else if (spanText.textContent == "Notes") {
    let input = document.getElementById("appsearchbar").value.toLowerCase();
    if (input == "") {
      DisplayCookies(cookiesToDisplay);
    } else {
      let newCookies = [];
      for (var i = 0, element; (element = cookiesToDisplay[i++]); ) {
        let temp = JSON.parse(element.split("=")[1]);
        if (temp[6].substring(0, input.length).toLowerCase().includes(input)) {
          newCookies.push(element);
        }
      }
      DisplayCookies(newCookies);
    }
  }
}

/**
 * A function that allows the user to edit an existing application
 * card.
 *
 * The function converts the information modal to the editable form
 * modal and allows the user to edit the existing information and
 * submit the changes to override the already existing cookie.
 */
function editCard() {
  isFormSubmit = false;
  //Collect already existing info & remove modal
  let values = [];
  let editParent = editModalButton.parentElement.parentElement;
  editParent.removeChild(editParent.firstChild);
  while (editParent.firstChild) {
    if (editParent.firstChild.nodeName == "P") {
      values.push(editParent.firstChild.textContent);
    }
    if (editParent.firstChild.hasAttribute("name")) {
      cookieID = editParent.firstChild.getAttribute("name");
    }
    editParent.removeChild(editParent.firstChild);
  }
  while (viewModalContent.firstChild) {
    viewModalContent.removeChild(viewModalContent.firstChild);
  }
  viewModal.classList.remove("is-active");
  //Add form modal and fill in pre-existing info

  modal.classList.add("is-active");
  document.querySelector("#companyNameField").value = values[0];
  document.querySelector("#positionField").value = values[1];
  document.querySelector("#positionTypeField").value = values[2];
  document.querySelector("#positionStatusField").value = values[3];
  if (values[4] != "N/A") {
    document.querySelector("#dateAppliedField").value = values[4];
  }
  document.querySelector("#followedUpField").value = values[5];
  if (values[6] != "N/A") {
    document.querySelector("#notesField").value = values[6];
  }
  //formSubmitButton.textContent = "Submit Changes";
  newAppTitle.textContent = "Editing " + values[0];
  formSubmitButton.textContent = "Submit Changes";
}