webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");





var errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__["onError"])(function (_ref) {
  var graphQLErrors = _ref.graphQLErrors,
      networkError = _ref.networkError;

  if (networkError) {
    // Check if error response is JSON
    try {
      JSON.parse(networkError.bodyText);
    } catch (e) {
      // If not replace parsing error message with real one
      networkError.message = networkError.bodyText;
    }
  }
}); //https://github.com/apollographql/apollo-client/issues/4193

function createClient(_ref2) {
  var headers = _ref2.headers;
  console.log(headers);
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["default"]({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_3__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        credentials: 'include',
        // headers: { cookie: headers && headers.cookie },
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers),
        cookie: cookie
      });
    },
    //local data
    clientState: {
      resolvers: {},
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(createClient));

/***/ })

})
//# sourceMappingURL=_app.js.27c63272a4ed14ed0a64.hot-update.js.map