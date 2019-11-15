webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/special/Global.js":
/*!**************************************!*\
  !*** ./components/special/Global.js ***!
  \**************************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var _PinOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PinOverlay */ "./components/special/PinOverlay.js");
/* harmony import */ var _ShowPins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShowPins */ "./components/special/ShowPins.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config */ "./config.js");















var frontendUrl =  true ? _config__WEBPACK_IMPORTED_MODULE_14__["frontend"] : undefined;

var Global =
/*#__PURE__*/
function (_Container) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Global, _Container);

  function Global() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Global);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Global)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      overIframe: [],
      currentIframe: frontendUrl + "/api/proxy?url=aHR0cDovL2J1Z2hlcmQuY29t",
      showPins: true,
      showCanvas: false,
      canvas: null,
      iframe: {
        size: {
          height: 0,
          width: 200
        }
      },
      showToolbarOverlay: false,
      toolbarOverlayContents: "",
      toolbar: [],
      isPlacingPin: false,
      pins: [],
      text: "This is some text"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addSimpleTextBlock", function () {
      _this.toggleToolbarOverlay();

      var simpleText = {
        id: shortid__WEBPACK_IMPORTED_MODULE_12___default.a.generate(),
        type: "text",
        value: "test",
        label: "test"
      };
      var toolbar = _this.state.toolbar;
      toolbar.push(simpleText);

      _this.setState({
        toolbar: toolbar
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addPinBlock", function () {
      _this.toggleToolbarOverlay();

      _this.setState({
        overIframe: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.overIframe), [{
          belongsTo: "test",
          component: _ShowPins__WEBPACK_IMPORTED_MODULE_11__["default"]
        }])
      });

      var pin = {
        id: shortid__WEBPACK_IMPORTED_MODULE_12___default.a.generate(),
        type: "pin"
      }; //place pin view over iframe

      var toolbar = _this.state.toolbar;
      toolbar.push(pin);

      _this.setState({
        toolbar: toolbar
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "putComponentInToolbar", function (component) {
      _this.setState({
        toolbarOverlayContents: component
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleToolbarOverlay", function () {
      _this.setState({
        showToolbarOverlay: !_this.state.showToolbarOverlay
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "togglePinPlacement", function (id, block) {
      if (_this.state.isPlacingPin) {
        var stat = _this.state.overIframe;
        stat = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(stat, function (i) {
          return i.belongsTo != id;
        });

        _this.setState({
          overIframe: stat,
          isPlacingPin: false
        });
      } else {
        _this.setState({
          overIframe: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.overIframe), [{
            belongsTo: id,
            component: _PinOverlay__WEBPACK_IMPORTED_MODULE_10__["default"]
          }]),
          isPlacingPin: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addPath", function () {
      var canvas = _this.state.canvas;
      var path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
      path.set({
        left: 120,
        top: 120
      });
      canvas.add(path);

      _this.setState({
        canvas: canvas
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addArrow", function () {
      var canvas = _this.state.canvas;
      fabric.loadSVGFromURL("/static/images/arrow.svg", function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        canvas.add(obj).renderAll();
      });

      _this.setState({
        canvas: canvas
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showCanvas", function () {
      _this.setState({
        showCanvas: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hideCanvas", function () {
      _this.setState({
        showCanvas: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "instantiateCanvas", function (that) {
      var canvas = new fabric.Canvas(that.c);

      _this.setState({
        canvas: canvas
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "clear", function () {
      var canvas = _this.state.canvas;
      var canvas = canvas.clear();

      _this.setState({
        canvas: canvas
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_placePin", function (pin) {
      pin.id = shortid__WEBPACK_IMPORTED_MODULE_12___default.a.generate();
      var pins = _this.state.pins;
      pins.push(pin);

      _this.setState({
        pins: pins
      });

      console.log("Pin placed.");
      console.log(_this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_updatePinCommentByID", function (id, text, previousState) {
      var that = previousState;
      lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(that, {
        id: id
      }).comment = text;

      _this.setState({
        pins: that
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_loadStateFromHash", function (hash) {
      var hash = atob(hash);
      var previousState = _this.state;
      hash = JSON.parse(hash);
      console.log("Hash loaded.");
      console.log(hash);
      console.log(new _PinOverlay__WEBPACK_IMPORTED_MODULE_10__["default"]());

      if (hash.pins.length > 0) {
        previousState.overIframe = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.overIframe), [{
          belongsTo: "test",
          component: _ShowPins__WEBPACK_IMPORTED_MODULE_11__["default"]
        }, {
          belongsTo: "U1iLA0CXQ",
          component: _PinOverlay__WEBPACK_IMPORTED_MODULE_10__["default"]
        }]);
      }

      previousState.pins = hash.pins;
      previousState.toolbar = hash.toolbar;
      previousState.currentIframe = hash.currentIframe;
      previousState.isPlacingPin = false;
      console.log(previousState.currentIframe); // this.togglePinPlacement("test");

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setCurrentIframe", function (url) {
      _this.setState({
        currentIframe: url
      });
    });

    return _this;
  }

  return Global;
}(unstated__WEBPACK_IMPORTED_MODULE_9__["Container"]);



/***/ })

})
//# sourceMappingURL=reporting.js.ae1d66f26b64148a0471.hot-update.js.map