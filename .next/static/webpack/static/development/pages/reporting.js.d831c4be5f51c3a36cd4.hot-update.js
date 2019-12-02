webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/SimpleTextBlock.js":
/*!***********************************************!*\
  !*** ./components/special/SimpleTextBlock.js ***!
  \***********************************************/
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
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/SimpleTextBlock.js";




var SimpleTextBlock =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SimpleTextBlock, _Component);

  function SimpleTextBlock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SimpleTextBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SimpleTextBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateTextBlock", function (e) {
      var value = e.target.value;
      console.log(value);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SimpleTextBlock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var block = this.props.block;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "toolbar_card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "toolbar_header_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "toolbar-icon",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z",
        className: "text-gray-300 fill-current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        d: "M14 2L20 8 14 8z",
        className: "text-gray-500 fill-current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "toolbar_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Text")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "label",
        value: this.props.block.label,
        onChange: function onChange(e) {
          return _this2.updateTextBlock(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "value",
        value: this.props.block.value,
        onChange: function onChange(e) {
          return _this2.updateTextBlock(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
    }
  }]);

  return SimpleTextBlock;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_7__["default"])([_Global__WEBPACK_IMPORTED_MODULE_8__["Global"]])(SimpleTextBlock));

/***/ })

})
//# sourceMappingURL=reporting.js.d831c4be5f51c3a36cd4.hot-update.js.map