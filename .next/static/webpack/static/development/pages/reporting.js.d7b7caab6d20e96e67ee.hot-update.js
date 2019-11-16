webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/Toolbar.js":
/*!***************************************!*\
  !*** ./components/special/Toolbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var _ToolbarOverlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ToolbarOverlay */ "./components/special/ToolbarOverlay.js");
/* harmony import */ var _BlockList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BlockList */ "./components/special/BlockList.js");
/* harmony import */ var btoa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! btoa */ "./node_modules/btoa/index.js");
/* harmony import */ var btoa__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(btoa__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-clipboard.js */ "./node_modules/react-clipboard.js/dist/react-clipboard.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_clipboard_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _SimpleTextBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SimpleTextBlock */ "./components/special/SimpleTextBlock.js");
/* harmony import */ var _PinBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PinBlock */ "./components/special/PinBlock.js");








var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/Toolbar.js";








 // Blocks


 // const ToolbarDiv = styled.div`
//   width: 100%;
//   max-width: 300px;
//   z-index: 10;
//   background-color: #d2ddec;
//   padding: 40px;
//   position: relative;
//   p {
//     margin: 0px;
//   }
// `;

var ToolbarDiv =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ToolbarDiv, _Component);

  function ToolbarDiv() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ToolbarDiv);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ToolbarDiv).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ToolbarDiv, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container w-1/5 flex flex-col  ml-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return ToolbarDiv;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Toolbar =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Toolbar, _Component2);

  function Toolbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Toolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Toolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      base64: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "showBlocks", function () {
      //place component in state
      _this.props.test.putComponentInToolbar(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BlockList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })); //open toolbar


      _this.props.test.toggleToolbarOverlay();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "showCanvasOptions", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "handlebase64Update", function (e) {
      _this.setState({
        base64: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "_updateState", function () {
      _this.props.test._loadStateFromHash(_this.state.base64);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Toolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var canvas = this.props.test; // var toolbar = this.props.test.state.toolbar;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ToolbarDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.showBlocks();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "class": "icon-add-circle h-16 w-16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        className: "fill-current text-gray-300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        className: "fill-current text-gray-500",
        d: "M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), canvas && canvas.state.toolbar.map(function (block, i) {
        var type = block.type;

        switch (type) {
          case "text":
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SimpleTextBlock__WEBPACK_IMPORTED_MODULE_17__["default"], {
              key: i,
              block: block,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            });
            break;

          case "pin":
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PinBlock__WEBPACK_IMPORTED_MODULE_18__["default"], {
              key: i,
              block: block,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            });
            break;
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar_card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex justify-between mb-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "w-10 h-10 mr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        className: "fill-current text-gray-300",
        d: "M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        className: "fill-current text-gray-500",
        d: "M13 15h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("polygon", {
        "class": "secondary",
        points: "14 2 20 8 14 8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "toolbar_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Save")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        ref: function ref(textarea) {
          return _this2.textArea = textarea;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), this.props.test && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_clipboard_js__WEBPACK_IMPORTED_MODULE_16___default.a, {
        component: _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"],
        "data-clipboard-text": btoa__WEBPACK_IMPORTED_MODULE_15___default()(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.props.test.state)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "copy application state to clipboard"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        onChange: function onChange(e) {
          return _this2.handlebase64Update(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2._updateState();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, " ", "Update State From String")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ToolbarOverlay__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }));
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_11__["default"])([_Global__WEBPACK_IMPORTED_MODULE_12__["Global"]])(Toolbar));

/***/ })

})
//# sourceMappingURL=reporting.js.d7b7caab6d20e96e67ee.hot-update.js.map