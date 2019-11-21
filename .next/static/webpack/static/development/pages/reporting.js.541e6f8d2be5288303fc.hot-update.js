webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/PinOverlay.js":
/*!******************************************!*\
  !*** ./components/special/PinOverlay.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");








var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/PinOverlay.js";








var PinOverlayDiv = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "PinOverlay__PinOverlayDiv",
  componentId: "sgig1q-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:2;pointer-events:", ";"], function (props) {
  return props.showPointerEvents ? "auto" : "none";
});

var PinOverlay =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PinOverlay, _Component);

  function PinOverlay() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PinOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PinOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      showPointerEvents: true,
      pin: {
        x: "",
        y: ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onMouseMove", function (e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.

      var y = e.clientY - rect.top; //y position within the element.
      //get scroll position;

      var scroll;
      Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_15__["waitForIframeScrollPosition"])(document, function () {
        var iframeScrollPosition = document.getElementById("iframe").contentWindow.document.getElementById("iframeScrollPosition");

        if (typeof iframeScrollPosition !== "undefined") {
          scroll = iframeScrollPosition.getAttribute("y");
        } else {
          scroll = "0";
        } // this.setState({ pin: { ...this.state.pin, x: e.screenX, y: e.screenY } });


        _this.setState({
          pin: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.pin, {
            x: x,
            y: y,
            scrollPosition: {
              y: scroll
            }
          })
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_handlePinClick", function (Global) {
      Global._placePin(_this.state.pin); // Global._placePin(this.state.pin);

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_removePointerEvents", function () {
      _this.setState({
        showPointerEvents: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PinOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        pin: {
          belongsTo: this.props.id,
          x: "",
          y: "",
          comment: ""
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var block = this.props.block;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_11__["Subscribe"], {
        to: [_Global__WEBPACK_IMPORTED_MODULE_9__["Global"]],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, function (globalState) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PinOverlayDiv, {
          showPointerEvents: _this2.state.showPointerEvents,
          onClick: function onClick() {
            return _this2._handlePinClick(globalState);
          },
          onMouseMove: function onMouseMove(e) {
            return _this2._onMouseMove(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, _this2.state.pin.x, "\" \"", _this2.state.pin.y);
      }));
    }
  }]);

  return PinOverlay;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // export default withContainers([globalState])(PinOverlay);


/* harmony default export */ __webpack_exports__["default"] = (PinOverlay);

/***/ })

})
//# sourceMappingURL=reporting.js.541e6f8d2be5288303fc.hot-update.js.map