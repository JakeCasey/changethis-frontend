webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/ShowPins.js":
/*!****************************************!*\
  !*** ./components/special/ShowPins.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Pin */ "./components/special/Pin.js");
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/ShowPins.js";








var ShowPinsDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "ShowPins__ShowPinsDiv",
  componentId: "sc-1acb6tt-0"
})(["position:absolute;top:", ";left:0px;right:0px;bottom:0px;z-index:2;pointer-events:none;"], function (props) {
  return props.scrollTop ? props.scrollTop : "0px";
});
var timeout = "";

var ShowPins =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowPins, _Component);

  function ShowPins() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShowPins);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShowPins)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      scrollTop: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_updateScrollPosition", function (event) {
      console.log("update scroll position");
      var scroll = 0;
      var iframeScrollPosition = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition");

      if (iframeScrollPosition.getAttribute("y")) {
        scroll = -iframeScrollPosition.getAttribute("y");
      } else {
        scroll = 0;
      }

      _this.setState({
        scrollTop: scroll + "px"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_handleScroll", function (me) {
      console.log("Scroll listener.");
      window.clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this._updateScrollPosition();

        setTimeout(_this._updateScrollPosition(), 150);
      }, 200);

      _this._updateScrollPosition();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShowPins, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //get initial scroll pos
      console.log("showpins is mounted"); //TODO: THIS NEEDS TO WAIT FOR IFRAME TO EXIST

      setTimeout(function () {
        Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_14__["waitForIframeScrollPosition"])(document, function () {
          _this2._updateScrollPosition(); //attach scroll listener


          document.getElementById("iframe").contentWindow.document.addEventListener("scroll", _this2._handleScroll, false);
        });
      }, 5000);
    } //polling is almost accurate but needs a trail off perhaps an interval or a while statement
    //that runs several more times over a few seconds.

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// window.removeEventListener('scroll', this._updateScrollPosition, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var block = this.props.block;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_9__["Subscribe"], {
        to: [_Global__WEBPACK_IMPORTED_MODULE_7__["Global"]],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, function (test) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ShowPinsDiv, {
          scrollTop: _this3.state.scrollTop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, test.state.pins.map(function (pin, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Pin__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: i,
            pin: pin,
            test: test,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          });
        }));
      }));
    }
  }]);

  return ShowPins;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // export default withContainers([globalState])(ShowPins);


/* harmony default export */ __webpack_exports__["default"] = (ShowPins);

/***/ })

})
//# sourceMappingURL=reporting.js.445e0d5b98076f02870a.hot-update.js.map