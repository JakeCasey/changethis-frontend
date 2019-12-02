webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/Pin.js":
/*!***********************************!*\
  !*** ./components/special/Pin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tippy */ "./node_modules/react-tippy/dist/react-tippy.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TooltipWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TooltipWrapper */ "./components/special/TooltipWrapper.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Comment */ "./components/special/Comment.js");






var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/Pin.js";







var PinDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Pin__PinDiv",
  componentId: "sc-1edaed1-0"
})(["width:", ";height:", ";background-color:lightskyblue;position:absolute;top:", ";left:", ";transform:translateX(", ") translateY(", ");pointer-events:auto;"], function (props) {
  return props.width + "px";
}, function (props) {
  return props.height + "px";
}, function (props) {
  return props.pin.y + (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(props.pin.scrollPosition.y) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(props.pin.scrollPosition.y) : 0) + "px";
}, function (props) {
  return props.pin.x + "px";
}, function (props) {
  return -props.width / 2 + "px";
}, function (props) {
  return -props.height / 2 + "px";
});
var Pop = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Pin__Pop",
  componentId: "sc-1edaed1-1"
})(["width:300px;background:blue;"]);

var Pin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pin, _Component);

  function Pin() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pin);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pin).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pin, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PinDiv, {
        key: this.props.key,
        width: 25,
        height: 25,
        pin: this.props.pin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        trigger: "click",
        interactive: true,
        html: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TooltipWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_12__["default"], {
          pin: this.props.pin,
          globalState: this.props.globalState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: "100%",
          height: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return Pin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ })

})
//# sourceMappingURL=reporting.js.fb1c50b49e3af3beb045.hot-update.js.map