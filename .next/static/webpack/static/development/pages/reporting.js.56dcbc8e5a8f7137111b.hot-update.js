webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: waitForIframeScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForIframeScrollPosition", function() { return waitForIframeScrollPosition; });
var waitForIframeScrollPosition = function waitForIframeScrollPosition(document, callback) {
  var interval = setInterval(function () {
    var element = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition");
    console.log("running interval");

    if (typeof element !== "undefined") {
      clearInterval(interval);
      console.log("Interval cleared");
      callback();
    }
  }, 500);
};



/***/ })

})
//# sourceMappingURL=reporting.js.56dcbc8e5a8f7137111b.hot-update.js.map