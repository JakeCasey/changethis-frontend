webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/Comment.js":
/*!***************************************!*\
  !*** ./components/special/Comment.js ***!
  \***************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/Comment.js";






var Commentarea = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].textarea.withConfig({
  displayName: "Comment__Commentarea",
  componentId: "dimpc7-0"
})(["width:100%;height:100%;"]);

var Comment =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Comment, _Component);

  function Comment() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Comment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_getPlaceholder", function () {
      var placeholders = ["This needs more SPARKLE.", "Can I get this in comic-sans?", "I like everything about how this looks, except for how it looks.", "How can we “spice” this page up?", "Why don’t we add a few more colors into the mix?", "This shit is gonna go viral", "How about we just “spruce” this up a bit?"];
      return lodash__WEBPACK_IMPORTED_MODULE_10___default.a.sample(placeholders); // return 'test';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_updateComment", function (globalState, e) {
      var previousState = globalState.state.pins;

      globalState._updatePinCommentByID(_this.props.pin.id, e.target.value, previousState);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Commentarea, {
        className: "bg-gray-100",
        value: this.props.pin.comment,
        onChange: function onChange(e) {
          return _this2._updateComment(_this2.props.globalState, e);
        },
        placeholder: this._getPlaceholder(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      });
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/special/DesignCanvas.js":
/*!********************************************!*\
  !*** ./components/special/DesignCanvas.js ***!
  \********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/DesignCanvas.js";







var CanvasContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "DesignCanvas__CanvasContainer",
  componentId: "br7asi-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:2;"]);

var DesignCanvas =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DesignCanvas, _React$Component);

  function DesignCanvas() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesignCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DesignCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      canvas: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesignCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.globalState.instantiateCanvas(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      var canvas = this.props.globalState;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CanvasContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        ref: function ref(c) {
          return _this2.c = c;
        },
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return DesignCanvas;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(DesignCanvas, "propTypes", {
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(DesignCanvas, "defaultProps", {
  width: 1440,
  height: 1000
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_12__["default"])([_Global__WEBPACK_IMPORTED_MODULE_13__["Global"]])(DesignCanvas));

/***/ }),

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
          test: this.props.globalState,
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
          lineNumber: 44
        },
        __self: this
      })));
    }
  }]);

  return Pin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ }),

/***/ "./components/special/PinBlock.js":
/*!****************************************!*\
  !*** ./components/special/PinBlock.js ***!
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
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/PinBlock.js";





var PinBlock =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PinBlock, _Component);

  function PinBlock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PinBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PinBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PinBlock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var block = this.props.block;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "toolbar_card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "toolbar_header_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "toolbar-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        className: "fill-current text-gray-300",
        d: "M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        className: "fill-current text-gray-500",
        d: "M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "toolbar_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Pin")), this.props.globalState && this.props.globalState.state.pins.map(function (p, index) {
        if (p.belongsTo == _this2.props.block.id) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, p.comment);
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _this2.props.globalState.togglePinPlacement(_this2.props.block.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.globalState && this.props.globalState.state.isPlacingPin ? "Stop Placing Pins" : "Place Pin"));
    }
  }]);

  return PinBlock;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_7__["default"])([_Global__WEBPACK_IMPORTED_MODULE_8__["Global"]])(PinBlock));

/***/ }),

/***/ "./components/special/Reporting.js":
/*!*****************************************!*\
  !*** ./components/special/Reporting.js ***!
  \*****************************************/
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DesignCanvas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DesignCanvas */ "./components/special/DesignCanvas.js");
/* harmony import */ var _Toolbar_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Toolbar.js */ "./components/special/Toolbar.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../config */ "./config.js");







var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/Reporting.js";












var backendUrl =  true ? _config__WEBPACK_IMPORTED_MODULE_18__["endpoint"] : undefined;
var WorkArea = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "Reporting__WorkArea",
  componentId: "sc-5smu6h-0"
})(["display:flex;margin-bottom:30px;"]);
var UrlBar = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "Reporting__UrlBar",
  componentId: "sc-5smu6h-1"
})(["display:flex;"]);
var URL = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].input.withConfig({
  displayName: "Reporting__URL",
  componentId: "sc-5smu6h-2"
})(["width:100%;"]);
var CanvasContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "Reporting__CanvasContainer",
  componentId: "sc-5smu6h-3"
})(["position:relative;width:100%;height:100%;min-height:1100px;min-width:1100px;overflow-y:hidden;"]); // https://tobiasahlin.com/spinkit/

var LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "Reporting__LoadingContainer",
  componentId: "sc-5smu6h-4"
})([".sk-folding-cube{display:", ";margin:20px auto;width:40px;height:40px;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg);}.sk-folding-cube .sk-cube{float:left;width:50%;height:50%;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.sk-folding-cube .sk-cube:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#4299e1;-webkit-animation:sk-foldCubeAngle 2.4s infinite linear both;animation:sk-foldCubeAngle 2.4s infinite linear both;-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%;}.sk-folding-cube .sk-cube2{-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg);}.sk-folding-cube .sk-cube3{-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg);}.sk-folding-cube .sk-cube4{-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg);}.sk-folding-cube .sk-cube2:before{-webkit-animation-delay:0.3s;animation-delay:0.3s;}.sk-folding-cube .sk-cube3:before{-webkit-animation-delay:0.6s;animation-delay:0.6s;}.sk-folding-cube .sk-cube4:before{-webkit-animation-delay:0.9s;animation-delay:0.9s;}@-webkit-keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0;}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1;}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0;}}@keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0;}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1;}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0;}}"], function (props) {
  return props.loading ? "block" : "none";
});
var LoadingOverlay = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "Reporting__LoadingOverlay",
  componentId: "sc-5smu6h-5"
})(["display:", ";position:absolute;top:0;bottom:0;right:0;left:0;"], function (props) {
  return props.loading ? "block" : "none";
});

var Reporting =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Reporting, _Component);

  function Reporting() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reporting);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Reporting)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      url: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchPage", function () {
      _this.props.globalState.setState({
        pageLoading: true
      });

      _this.props.globalState.fetchPage(_this.state.url);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateUrl", function (e) {
      var url = e.target.value;

      _this.setState({
        url: url
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === "Enter") {
        _this.fetchPage();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "stopLoading", function () {
      _this.props.globalState.setState({
        pageLoading: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reporting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var router = this.props.router;
      var url = router.query.url;

      if (url) {
        console.log(url);
        this.setState({
          url: url
        }, function () {
          _this2.fetchPage();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(UrlBar, {
        className: "mb-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(URL, {
        className: "bg-gray-100 px-8 mr-8 rounded",
        value: this.state.url,
        onChange: function onChange(e) {
          _this3.updateUrl(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this3.handleKeyDown(e);
        },
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: " text-green-700 mr-4 rounded ",
        onClick: function onClick() {
          _this3.fetchPage();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon-arrow-thick-right-circle w-10 h-10",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        className: "fill-current text-green-300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        d: "M12 14H7a1 1 0 01-1-1v-2a1 1 0 011-1h5V8a1 1 0 011.7-.7l4 4a1 1 0 010 1.4l-4 4A1 1 0 0112 16v-2z",
        className: "text-green-500 fill-current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(WorkArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CanvasContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, this.props.globalState && this.props.globalState.state.overIframe.map(function (OverIframe, i) {
        var OverIframeComponent = OverIframe.component;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OverIframeComponent, {
          key: i,
          id: OverIframe.belongsTo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        });
      }), " ", this.props.globalState && this.props.globalState.state && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoadingOverlay, {
        loading: this.props.globalState.state.pageLoading,
        className: "bg-gray-100 opacity-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoadingContainer, {
        className: "flex absolute w-full mt-64",
        loading: this.props.globalState.state.pageLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sk-folding-cube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sk-cube1 sk-cube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sk-cube2 sk-cube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sk-cube4 sk-cube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sk-cube3 sk-cube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        style: {
          width: "1100px"
        },
        onLoad: function onLoad() {
          return _this3.stopLoading();
        },
        src: this.props.globalState.state.urlSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Toolbar_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        query: query
      };
    }
  }]);

  return Reporting;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_11__["default"])([_Global__WEBPACK_IMPORTED_MODULE_12__["Global"]])(Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Reporting)));

/***/ }),

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
      }, this.props.globalState && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
        items: this.props.globalState.state.showToolbarOverlay,
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
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ToolbarOverlayDiv, {
            className: "absolute bottom-0 left-0 right-0 top-0 bg-white",
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
              return _this.props.globalState.toggleToolbarOverlay();
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
              lineNumber: 39
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
            d: "M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z",
            className: "fill-current text-gray-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "flex flex-col my-4 py-8 px-8 mt-16 shadow absolute bottom-0 left-0 right-0 top-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, _this.props.globalState.state.toolbarOverlayContents));
        };
      }));
    }
  }]);

  return ToolbarOverlay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_8__["default"])([_Global__WEBPACK_IMPORTED_MODULE_9__["Global"]])(ToolbarOverlay));

/***/ })

})
//# sourceMappingURL=reporting.js.0d7ec6efc47e76496f71.hot-update.js.map