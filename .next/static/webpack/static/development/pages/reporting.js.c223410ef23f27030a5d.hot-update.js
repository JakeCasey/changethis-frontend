webpackHotUpdate("static/development/pages/reporting.js",{

/***/ "./components/wrappers/withContainer.js":
/*!**********************************************!*\
  !*** ./components/wrappers/withContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/wrappers/withContainer.js";



function withContainers(Containers) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWithContainer, _React$Component);

        function ComponentWithContainer() {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ComponentWithContainer);

          return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ComponentWithContainer).apply(this, arguments));
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ComponentWithContainer, [{
          key: "render",
          value: function render() {
            var _this = this;

            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_6__["Subscribe"], {
              to: Containers,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            }, function () {
              for (var _len = arguments.length, containers = new Array(_len), _key = 0; _key < _len; _key++) {
                containers[_key] = arguments[_key];
              }

              console.log(containers);
              var containerObject = {}; // Object.values(containers).forEach(container => {
              //   let key = container.key;
              //   if (!key) {
              //     key = container.constructor.name;
              //   }
              //   // key = 'test';
              //   containerObject[key] = container;
              //   // containerObject[key] = 'test';
              // });

              containers.forEach(function (container, index) {
                var a = 'Global';
                containerObject[a] = container;
              });
              return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, containerObject, _this.props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              }));
            });
          }
        }]);

        return ComponentWithContainer;
      }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)
    );
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withContainers);

/***/ })

})
//# sourceMappingURL=reporting.js.c223410ef23f27030a5d.hot-update.js.map