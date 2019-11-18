webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/ToolbarOverlay.js":
/*!**********************************************!*\
  !*** ./components/special/ToolbarOverlay.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/web.js");
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");





var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/ToolbarOverlay.js";





var ToolbarOverlayDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ToolbarOverlay__ToolbarOverlayDiv",
  componentId: "sc-1wlttng-0"
})(["transform:translate3d(", " + \"%\",0,0);"], function (props) {
  return props.transform3d;
});

var ToolbarOverlay =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ToolbarOverlay, _Component);

  function ToolbarOverlay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToolbarOverlay);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ToolbarOverlay).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ToolbarOverlay, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.test && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
        items: this.props.test.state.showToolbarOverlay,
        from: {
          opacity: 0
        },
        enter: {
          opacity: 1
        },
        leave: {
          opacity: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, function (show) {
        return show && function (props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ToolbarOverlayDiv // className="absolute bottom-0 left-0 right-0 top-0 bg-white"
          , {
            style: props,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "icon-add-circle h-12 w-12",
            viewBox: "0 0 24 24",
            onClick: function onClick() {
              return _this.props.test.toggleToolbarOverlay();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            className: "fill-current text-gray-300",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
            d: "M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z",
            className: "fill-current text-gray-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          })), _this.props.test.state.toolbarOverlayContents);
        };
      }));
    }
  }]);

  return ToolbarOverlay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_8__["default"])([_Global__WEBPACK_IMPORTED_MODULE_9__["Global"]])(ToolbarOverlay));

/***/ })

})
//# sourceMappingURL=reporting.js.6c0cb85f07bcbf7e2a3e.hot-update.js.map