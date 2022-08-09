renderTheme();
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvbph3Qpz8w_ZERUZQ-Oh5YEyZI-ulCWQ",
  authDomain: "applitrack.firebaseapp.com",
  projectId: "applitrack",
  storageBucket: "applitrack.appspot.com",
  messagingSenderId: "396436130687",
  appId: "1:396436130687:web:dca8e5f220ecb9a044284a",
  measurementId: "G-EZDMF0Q14Y",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = await getDoc(doc(db, "users", user.uid));
    var applications = userRef.data();
    //userSettings = applications["userSettings"];
    delete applications["userSettings"];
    initMap(applications);
  } else {
    window.location.href = "index.html";
  }
});

function logout() {
  signOut(auth);
  location.reload();
}

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
    document.getElementById("nightbutton").style.display = "none";
    document.getElementById("lightbutton").style.display = "flex";
    document.getElementById("html").style.backgroundColor = "#243B53";
    document.querySelector("nav").style.backgroundColor = "#102A43";
    document.querySelector("nav").classList.remove("has-shadow");
    var navbarItems = document.querySelectorAll(".navbar-item");
    for (var i = 0; i < navbarItems.length; i++) {
      navbarItems[i].style.color = "white";
      navbarItems[i].classList.add("nightmode");
    }
  } else {
    document.getElementById("nightbutton").style.display = "flex";
    document.getElementById("lightbutton").style.display = "none";
  }
}

/**
 * Function to initialize map using Google Maps API
 *
 * @param {*} applications User applications to display on map
 */
function initMap(applications) {
  const map = new google.maps.Map(document.getElementById("locationMap"), {
    zoom: 6,
  });
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(new google.maps.LatLng(24.891752, -98.4375));
  bounds.extend(new google.maps.LatLng(40.351289, -124.244385));
  bounds.extend(new google.maps.LatLng(44.488196, -70.290656));
  bounds.extend(new google.maps.LatLng(49.000282, -101.37085));
  map.setCenter(bounds.getCenter());
  map.fitBounds(bounds);
  var group = [];
  for (const i in applications) {
    if (applications[i][4].length < 1) {
      continue;
    }
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        applications[i][4] +
        "&key=AIzaSyDovyHEqrLYWiEiqACyLfryUo7n9AmPYjg"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data["results"].length < 1) {
        } else {
          const latitude = data.results[0].geometry.location.lat;
          const longitude = data.results[0].geometry.location.lng;

          const loc = { lat: latitude, lng: longitude };
          if (/^[A-Za-z\s]*$/.test(applications[i][0])) {
            var firstLetter = applications[i][0].toUpperCase().charAt(0);
          } else {
            var firstLetter = "";
          }
          var markerString;
          if (applications[i][8] != "None") {
            markerString =
              "images/markers/" +
              applications[i][8].toLowerCase() +
              "_Marker" +
              firstLetter +
              ".png";
          } else {
            markerString = "images/markers/brown_Marker" + firstLetter + ".png";
          }
          const marker = new google.maps.Marker({
            position: loc,
            map: map,
            icon: markerString,
          });
          group.push(marker);
          const contentString =
            `<h1><b>${applications[i][1]} at</b></h1>` +
            `<p><b>${applications[i][0]}</b></p>` +
            `<br>` +
            `<br>` +
            `<p>${applications[i][4]}</p>` +
            `<br>` +
            `<br>` +
            `<p>${
              applications[i][5] ? "Type: " + applications[i][5] : ""
            }</p>` +
            `<p>${
              applications[i][9] ? "Status: " + applications[i][9] : ""
            }</p>` +
            `<p>${
              applications[i][6] ? "Applied on " + applications[i][6] : ""
            }</p>`;
          var infowindow = new google.maps.InfoWindow({
            content: contentString,
          });
          google.maps.event.addListener(infowindow, "domready", function () {
            var closeButton = document.querySelector(".gm-ui-hover-effect");
            closeButton.style.display = "none";
          });
          google.maps.event.addListener(marker, "mouseover", function () {
            infowindow.open(map, marker);
          });
          google.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });
        }
      })
      .catch((e) => {});
  }
  document.getElementById("locationMap").style.width = screen.width;
  document.getElementById("locationMap").style.height =
    document.documentElement.scrollHeight -
    document.querySelector("nav").offsetHeight * 2;
}

export { setLightMode, setNightMode, logout };
