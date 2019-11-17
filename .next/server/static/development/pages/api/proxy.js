module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndPoint, frontend, prodFrontend, perPage, STRIPE_PUBLIC_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndPoint", function() { return prodEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontend", function() { return frontend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodFrontend", function() { return prodFrontend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLIC_KEY", function() { return STRIPE_PUBLIC_KEY; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:4444`; // export const prodEndPoint = `https://changethisbackend.deva.io`;

const prodEndPoint = `http://localhost:4444`;
const frontend = `http://localhost:7777`; // export const prodFrontend = 'https://changethisfrontend.deva.io';

const prodFrontend = "http://localhost:7777";
const perPage = 4;
const STRIPE_PUBLIC_KEY = `pk_test_GAJsoqHqXOre1ItdV76GnDVU00eIVoGX5N`;

/***/ }),

/***/ "./pages/api/proxy.js":
/*!****************************!*\
  !*** ./pages/api/proxy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.js");
 // import fetch from 'isomorphic-fetch';
//fucky stuff going on here

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    var newEndpoint =  false ? undefined : _config__WEBPACK_IMPORTED_MODULE_0__["endpoint"];
    var url = req.url;
    var fetchUrl = newEndpoint + url;
    var fetchRes = await fetch(fetchUrl);
    const contentType = fetchRes.headers.get("content-type");
    let response; // if (contentType.includes('text/html')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/html');
    // }
    // if (contentType.includes('text/css')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/css');
    // }
    // if (contentType.includes('image/png')) {
    //   response = fetchRes.text();
    //   res.setHeader('Content-Type', 'image/png');
    // }

    res.setHeader("Content-Type", contentType);

    if (contentType.includes("image/jpeg")) {
      try {
        response = await fetchRes.buffer();
      } catch (error) {
        if (error) console.log(error);
      }

      res.end(response, "binary");
      return;
    }

    if (contentType.includes("image/png")) {
      try {
        response = await fetchRes.buffer();
      } catch (error) {
        if (error) console.log(error);
      }

      res.end(response, "binary");
      return;
    }

    response = await fetchRes.text();
    res.send(response);
  } catch (error) {// if (error) throw new Error(error);
  }
});

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/api/proxy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/pages/api/proxy.js */"./pages/api/proxy.js");


/***/ })

/******/ });
//# sourceMappingURL=proxy.js.map