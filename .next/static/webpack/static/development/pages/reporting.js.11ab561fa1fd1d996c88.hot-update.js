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

  if (typeof element === "undefined" || typeof element === "null") {
    var interval = setInterval(function () {
      console.log("interval hit"); //get element again

      try {
        element = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition");
      } catch (error) {
        if (error) console.log(error);
      } //check if it exists yet.


      if (typeof element !== "undefined" || typeof element !== "null") {
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
//# sourceMappingURL=reporting.js.11ab561fa1fd1d996c88.hot-update.js.map