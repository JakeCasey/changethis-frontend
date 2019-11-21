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
  var element = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition");

  if (typeof element === "undefined") {
    var interval = setInterval(function () {
      //get element again
      element = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition"); //check if it exists yet.

      if (typeof element !== "undefined") {
        //if it does kill the interval and run callback
        clearInterval(interval);
        console.log("Interval cleared");
        callback();
      } //if it doesn't keep checking.

    }, 500);
  } else {
    callback();
  }
};



/***/ })

})
//# sourceMappingURL=reporting.js.46ea6305a79b33350510.hot-update.js.map