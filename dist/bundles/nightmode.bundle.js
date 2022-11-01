/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var EntryPoint;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nightmode.js":
/*!**************************!*\
  !*** ./src/nightmode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTheme\": () => (/* binding */ renderTheme),\n/* harmony export */   \"setLightMode\": () => (/* binding */ setLightMode),\n/* harmony export */   \"setNightMode\": () => (/* binding */ setNightMode)\n/* harmony export */ });\n//#region Color Codes\r\nconst COLOR_1 = \"#ECB365\";\r\n(\"#102A43\");\r\nconst COLOR_2 = \"#064663\";\r\nconst COLOR_3 = \"#04293A\";\r\nconst COLOR_4 = \"#041C32\";\r\n\r\nconst TEXT_COLOR = \"#BCCCDC\";\r\nconst DROPDOWN_COLOR = \"#102A43\";\r\nconst MODALBG_COLOR = \"#243B53\";\r\n//#endregion\r\n\r\nrenderTheme();\r\n\r\nfunction setNightMode() {\r\n  document.cookie = \"theme=night\";\r\n  document.getElementById(\"html\").style.transition = \"0.3s\";\r\n  document.querySelector(\"nav\").style.transition = \"0.3s\";\r\n  renderTheme();\r\n}\r\n\r\nfunction setLightMode() {\r\n  document.cookie = \"theme=light\";\r\n  location.reload();\r\n}\r\n\r\n/**\r\n * Function to change styles of present DOM elements to night mode color\r\n */\r\nfunction renderTheme() {\r\n  let cookie = {};\r\n  document.cookie.split(\";\").forEach(function (el) {\r\n    let [key, value] = el.split(\"=\");\r\n    cookie[key.trim()] = value;\r\n  });\r\n  if (cookie[\"theme\"] == \"night\") {\r\n    try {\r\n      //#region Login Page\r\n      document.getElementById(\"footer\").style.backgroundColor = DROPDOWN_COLOR;\r\n      document.getElementById(\"footer\").style.color = TEXT_COLOR;\r\n      document\r\n        .getElementById(\"logInModalColor\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"signUpModalColor\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"forgPassModalColor\")\r\n        .classList.remove(\"has-background-white\");\r\n\r\n      var titleTexts = document.querySelectorAll(\".title\");\r\n      for (var i = 0; i < titleTexts.length; i++) {\r\n        titleTexts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var subtitleTexts = document.querySelectorAll(\".subtitle\");\r\n      for (var i = 0; i < subtitleTexts.length; i++) {\r\n        subtitleTexts[i].style.color = TEXT_COLOR;\r\n      }\r\n      //#endregion\r\n    } catch {}\r\n\r\n    try {\r\n      //#region Application Page\r\n      document.getElementById(\"appTitle\").style.color = TEXT_COLOR;\r\n      document.getElementById(\"newAppTitle\").style.color = TEXT_COLOR;\r\n      document.getElementById(\"settingsTitle\").style.color = TEXT_COLOR;\r\n      document.querySelector(\"#formsubmit\").style.backgroundColor = COLOR_1;\r\n      document.querySelector(\"#formsubmit\").style.color = \"black\";\r\n      document.querySelector(\"#viewsubmit\").style.backgroundColor = COLOR_1;\r\n      document.querySelector(\"#viewsubmit\").style.color = \"black\";\r\n      document.querySelector(\"#sortContent\").style.backgroundColor =\r\n        DROPDOWN_COLOR;\r\n      document.querySelector(\"#searchContent\").style.backgroundColor =\r\n        DROPDOWN_COLOR;\r\n      document\r\n        .getElementById(\"viewModalContent\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"addModalContent\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"settingsModalContent\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"deleteModalContent\")\r\n        .classList.remove(\"has-background-white\");\r\n\r\n      var modalHeaders = document.querySelectorAll(\"#viewModalHeader\");\r\n      for (var i = 0; i < modalHeaders.length; i++) {\r\n        modalHeaders[i].style.backgroundColor = DROPDOWN_COLOR;\r\n        modalHeaders[i].style.color = TEXT_COLOR;\r\n      }\r\n      //#endregion\r\n    } catch {}\r\n\r\n    try {\r\n      //#region Profile Page\r\n      document\r\n        .getElementById(\"resetNameModalColor\")\r\n        .classList.remove(\"has-background-white\");\r\n      document\r\n        .getElementById(\"deleteAccountModalColor\")\r\n        .classList.remove(\"has-background-white\");\r\n      document.querySelector(\".box\").style.backgroundColor = DROPDOWN_COLOR;\r\n      //#endregion\r\n    } catch {}\r\n\r\n    try {\r\n      //#region Job Listing Page\r\n      document.querySelector(\"#filterDropdown\").style.backgroundColor =\r\n        DROPDOWN_COLOR;\r\n      //#endregion\r\n    } catch {}\r\n\r\n    try {\r\n      //#region All\r\n      document.getElementById(\"nightbutton\").style.display = \"none\";\r\n      document.getElementById(\"lightbutton\").style.display = \"flex\";\r\n      document.getElementById(\"html\").style.backgroundColor = COLOR_4;\r\n      document.querySelector(\"nav\").style.backgroundColor = COLOR_3;\r\n      document.querySelector(\"nav\").classList.remove(\"has-shadow\");\r\n\r\n      var tableHeaders = document.querySelectorAll(\"tr\");\r\n      for (var i = 0; i < tableHeaders.length; i++) {\r\n        tableHeaders[i].style.backgroundColor = COLOR_3;\r\n        tableHeaders[i].style.color = TEXT_COLOR;\r\n      }\r\n      var tableText = document.querySelectorAll(\"td\");\r\n      for (var i = 0; i < tableText.length; i++) {\r\n        tableText[i].style.color = TEXT_COLOR;\r\n      }\r\n      var tableTextHeaders = document.querySelectorAll(\"th\");\r\n      for (var i = 0; i < tableTextHeaders.length; i++) {\r\n        tableTextHeaders[i].style.color = TEXT_COLOR;\r\n      }\r\n      var h1texts = document.querySelectorAll(\"h1\");\r\n      for (var i = 0; i < h1texts.length; i++) {\r\n        h1texts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var h3texts = document.querySelectorAll(\"h3\");\r\n      for (var i = 0; i < h3texts.length; i++) {\r\n        h3texts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var h5texts = document.querySelectorAll(\"h5\");\r\n      for (var i = 0; i < h5texts.length; i++) {\r\n        h5texts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var navbarItems = document.querySelectorAll(\".navbar-item\");\r\n      for (var i = 0; i < navbarItems.length; i++) {\r\n        navbarItems[i].style.color = \"white\";\r\n        navbarItems[i].classList.add(\"nightmode\");\r\n      }\r\n      var cardContents = document.querySelectorAll(\".card-content\");\r\n      for (var i = 0; i < cardContents.length; i++) {\r\n        if (cardContents[i].style.backgroundColor == \"\") {\r\n          cardContents[i].style.backgroundColor = COLOR_2;\r\n        }\r\n      }\r\n      var cardFooters = document.querySelectorAll(\".card-footer-item\");\r\n      for (var i = 0; i < cardFooters.length; i++) {\r\n        cardFooters[i].style.backgroundColor = DROPDOWN_COLOR;\r\n      }\r\n      var pTexts = document.querySelectorAll(\"p\");\r\n      for (var i = 0; i < pTexts.length; i++) {\r\n        if (\r\n          pTexts[i].parentElement.classList.contains(\"card-content\") &&\r\n          pTexts[i].parentElement.style.backgroundColor != \"rgb(6, 70, 99)\"\r\n        ) {\r\n          continue;\r\n        }\r\n        pTexts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var topButtons = document.querySelectorAll(\".topbutton\");\r\n      for (var i = 0; i < topButtons.length; i++) {\r\n        topButtons[i].style.backgroundColor = COLOR_1;\r\n        topButtons[i].style.borderColor = COLOR_2;\r\n      }\r\n      var dropdownItems = document.querySelectorAll(\".dropdown-item\");\r\n      for (var i = 0; i < dropdownItems.length; i++) {\r\n        dropdownItems[i].style.color = TEXT_COLOR;\r\n      }\r\n      var spanTexts = document.querySelectorAll(\"span\");\r\n      for (var i = 0; i < spanTexts.length; i++) {\r\n        spanTexts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var spanTexts = document.querySelectorAll(\"span.tag\");\r\n      for (var i = 0; i < spanTexts.length; i++) {\r\n        spanTexts[i].style.color = \"white\";\r\n      }\r\n      var spanTexts = document.querySelectorAll(\"button>span\");\r\n      for (var i = 0; i < spanTexts.length; i++) {\r\n        spanTexts[i].style.color = COLOR_4;\r\n      }\r\n      var modalBgs = document.querySelectorAll(\".modal-content\");\r\n      for (var i = 0; i < modalBgs.length; i++) {\r\n        modalBgs[i].style.backgroundColor = MODALBG_COLOR;\r\n      }\r\n      var labelTexts = document.querySelectorAll(\"label\");\r\n      for (var i = 0; i < labelTexts.length; i++) {\r\n        labelTexts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var h5Texts = document.querySelectorAll(\"h5\");\r\n      for (var i = 0; i < h5Texts.length; i++) {\r\n        h5Texts[i].style.color = TEXT_COLOR;\r\n      }\r\n      var inputs = document.querySelectorAll(\"input,select,textarea\");\r\n      for (var i = 0; i < inputs.length; i++) {\r\n        inputs[i].style.backgroundColor = COLOR_3;\r\n        inputs[i].style.color = TEXT_COLOR;\r\n      }\r\n      //#endregion\r\n    } catch {}\r\n  } else {\r\n    try {\r\n      document.getElementById(\"nightbutton\").style.display = \"flex\";\r\n      document.getElementById(\"lightbutton\").style.display = \"none\";\r\n      document\r\n        .getElementById(\"viewModalContent\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"addModalContent\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"settingsModalContent\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"deleteModalContent\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"logInModalColor\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"signUpModalColor\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"forgPassModalColor\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"resetNameModalColor\")\r\n        .classList.add(\"has-background-white\");\r\n      document\r\n        .getElementById(\"deleteAccountModalColor\")\r\n        .classList.add(\"has-background-white\");\r\n    } catch {}\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://EntryPoint/./src/nightmode.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/nightmode.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	EntryPoint = __webpack_exports__;
/******/ 	
/******/ })()
;