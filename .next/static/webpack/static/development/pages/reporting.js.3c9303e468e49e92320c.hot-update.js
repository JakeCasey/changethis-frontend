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
      var placeholders = ['This needs more SPARKLE.', 'Can I get this in comic-sans?', 'I like everything about how this looks, except for how it looks.', 'How can we “spice” this page up?', 'Why don’t we add a few more colors into the mix?', 'This shit is gonna go viral', 'How about we just “spruce” this up a bit?'];
      return lodash__WEBPACK_IMPORTED_MODULE_10___default.a.sample(placeholders); // return 'test';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_updateComment", function (Global, e) {
      var previousState = Global.state.pins;
      console.log(_this.props.pin.id);
      console.log(e.target.value);
      console.log(previousState);

      Global._updatePinCommentByID(_this.props.pin.id, e.target.value, previousState);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Commentarea, {
        value: this.props.pin.comment,
        onChange: function onChange(e) {
          return _this2._updateComment(_this2.props.test, e);
        },
        placeholder: this._getPlaceholder(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      });
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=reporting.js.3c9303e468e49e92320c.hot-update.js.map