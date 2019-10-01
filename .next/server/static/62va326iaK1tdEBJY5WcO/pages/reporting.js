module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2FTe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "sc-4y3vr4-0"
})(["background:", ";color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:16px;padding:0.8rem 1.5rem;display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"], props => props.theme.button_color);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5c+8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrappers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6Lpl");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("km3s");





const PleaseSignIn = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
  query: _wrappers_User__WEBPACK_IMPORTED_MODULE_2__[/* CURRENT_USER_QUERY */ "a"]
}, ({
  data,
  loading
}) => {
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Loading... ");

  if (!data.me) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please Sign In before continuing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
  }

  return props.children;
});

/* harmony default export */ __webpack_exports__["a"] = (PleaseSignIn);

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6Lpl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query {
    me {
      id
      email
      name
      permissions
      plansSubscribed
    }
  }
`;

const User = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    query: CURRENT_USER_QUERY
  }), payload => props.children(payload));
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vN1k");


/***/ }),

/***/ "73fR":
/***/ (function(module, exports) {

module.exports = require("react-tippy");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "DMZp":
/***/ (function(module, exports) {

module.exports = require("fabric");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GUpV":
/***/ (function(module, exports) {

module.exports = require("react-clipboard.js");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "MSPE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return media; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 700
}; // Iterate through the sizes and create a media template

const media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sizes).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", "}"], sizes[label], Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {});



/***/ }),

/***/ "NLDS":
/***/ (function(module, exports) {

module.exports = require("btoa");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-1y94zw-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      "data-test": "graphql-error"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot! "), ' ', error.message.replace('GraphQL error: ', ''))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jrgU":
/***/ (function(module, exports) {

module.exports = require("unstated");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "km3s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
/* unused harmony export SIGNIN_MUTATION */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mzXK");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VUBQ");
/* harmony import */ var _wrappers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6Lpl");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_MediaQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MSPE");









const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Signin__Container",
  componentId: "gwycq-0"
})(["width:100%;display:flex;justify-content:center;align-items:center;"]);
class Signin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "t", void 0);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: SIGNIN_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _wrappers_User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
      }]
    }, (signin, {
      error,
      loading
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        method: "post",
        onSubmit: async e => {
          e.preventDefault();
          const res = await signin();
          console.log(res);
          this.setState({
            email: '',
            password: ''
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: '/static/images/login.jpg'
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
        disabled: loading,
        "aria-busy": loading
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Sign In"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        error: error
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "email",
        value: this.state.email,
        onChange: this.saveToState
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.saveToState
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit"
      }, "Sign In")))));
    }));
  }

}


/***/ }),

/***/ "mzXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_MediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MSPE");


const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1oofk7n-0"
})(["display:flex;justify-content:center;width:100%;border-radius:", ";box-shadow:0 5px 15px hsla(0,0%,0%,0.2);background:rgba(0,0,0,0.02);font-size:1.5rem;line-height:1.5;font-weight:600;.img-form{width:100%;display:flex;.img-container{width:50%;", "}.form-container{width:50%;display:flex;align-items:center;", "}", "}h2{font-size:32px;}img{width:100%;height:100%;border-top-left-radius:", ";border-bottom-left-radius:", ";}label{display:block;margin:24px 0px;}input,textarea,select{background-color:#f1f1f1;width:100%;padding:8px;font-size:1rem;border-radius:", ";border:1px solid #e1e1e1;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:100%;border-radius:", ";background:", ";color:white;border:0;font-size:16px;text-transform:uppercase;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:24px;width:100%;a &[disabled]{opacity:0.5;}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.borders, _styles_MediaQueries__WEBPACK_IMPORTED_MODULE_1__[/* media */ "a"].mobile`width: 100%`, _styles_MediaQueries__WEBPACK_IMPORTED_MODULE_1__[/* media */ "a"].mobile`width: 100%`, _styles_MediaQueries__WEBPACK_IMPORTED_MODULE_1__[/* media */ "a"].mobile`flex-direction: column`, props => props.theme.borders, props => props.theme.borders, props => props.theme.borders, props => props.theme.primary, props => props.theme.button_borders, props => props.theme.button_color, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndPoint; });
/* unused harmony export frontend */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return prodFrontend; });
/* unused harmony export perPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRIPE_PUBLIC_KEY; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:4444`; // export const prodEndPoint = `https://changethisbackend.deva.io`;

const prodEndPoint = `http://localhost:4444`;
const frontend = `http://localhost:7777`; // export const prodFrontend = 'https://changethisfrontend.deva.io';

const prodFrontend = 'http://localhost:7777';
const perPage = 4;
const STRIPE_PUBLIC_KEY = `pk_test_GAJsoqHqXOre1ItdV76GnDVU00eIVoGX5N`;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vN1k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/PleaseSignIn.js
var PleaseSignIn = __webpack_require__("5c+8");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: external "unstated"
var external_unstated_ = __webpack_require__("jrgU");

// CONCATENATED MODULE: ./components/wrappers/withContainer.js





function withContainers(Containers) {
  return function (Component) {
    return class ComponentWithContainer extends external_react_default.a.Component {
      render() {
        return external_react_default.a.createElement(external_unstated_["Subscribe"], {
          to: Containers
        }, (...containers) => {
          const containerObject = {};

          values_default()(containers).forEach(container => {
            let key = container.key;

            if (!key) {
              key = container.constructor.name;
            }

            containerObject[key] = container; // containerObject[key] = 'test';
          });

          return external_react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, containerObject, this.props));
        });
      }

    };
  };
}

/* harmony default export */ var withContainer = (withContainers);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");
var external_shortid_default = /*#__PURE__*/__webpack_require__.n(external_shortid_);

// EXTERNAL MODULE: ./components/styles/SickButton.js
var SickButton = __webpack_require__("2FTe");

// CONCATENATED MODULE: ./components/special/PinOverlay.js









const PinOverlayDiv = external_styled_components_default.a.div.withConfig({
  displayName: "PinOverlay__PinOverlayDiv",
  componentId: "sgig1q-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:2;pointer-events:", ";"], props => props.showPointerEvents ? 'auto' : 'none');

class PinOverlay_PinOverlay extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      showPointerEvents: true,
      pin: {
        x: '',
        y: ''
      }
    });

    Object(defineProperty["a" /* default */])(this, "_onMouseMove", e => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.

      var y = e.clientY - rect.top; //y position within the element.
      //get scroll position;

      var scroll;
      var iframeScrollPosition = document.getElementById('iframe').contentWindow.document.getElementById('iframeScrollPosition');

      if (iframeScrollPosition.getAttribute('y')) {
        scroll = iframeScrollPosition.getAttribute('y');
      } else {
        scroll = '0';
      } // this.setState({ pin: { ...this.state.pin, x: e.screenX, y: e.screenY } });


      this.setState({
        pin: Object(objectSpread["a" /* default */])({}, this.state.pin, {
          x: x,
          y: y,
          scrollPosition: {
            y: scroll
          }
        })
      });
    });

    Object(defineProperty["a" /* default */])(this, "_handlePinClick", Global => {
      Global._placePin(this.state.pin); // Global._placePin(this.state.pin);

    });

    Object(defineProperty["a" /* default */])(this, "_removePointerEvents", () => {
      this.setState({
        showPointerEvents: false
      });
    });
  }

  componentDidMount() {
    this.setState({
      pin: {
        belongsTo: this.props.id,
        x: '',
        y: '',
        comment: ''
      }
    });
  }

  render() {
    var block = this.props.block;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_unstated_["Subscribe"], {
      to: [Global]
    }, Global => external_react_default.a.createElement(PinOverlayDiv, {
      showPointerEvents: this.state.showPointerEvents,
      onClick: () => this._handlePinClick(Global),
      onMouseMove: e => this._onMouseMove(e)
    }, this.state.pin.x, "\" \"", this.state.pin.y)));
  }

} // export default withContainers([globalState])(PinOverlay);


/* harmony default export */ var special_PinOverlay = (PinOverlay_PinOverlay);
// CONCATENATED MODULE: ./lib/helpers.js
var getIframeScrollPosition = () => {
  var iframeScrollPosition = document.getElementById('iframe').contentWindow.document.getElementById('iframeScrollPosition');

  if (iframeScrollPosition.getAttribute('y')) {
    scroll = iframeScrollPosition.getAttribute('y');
  } else {
    scroll = '0';
  }

  return scroll;
};


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "react-tippy"
var external_react_tippy_ = __webpack_require__("73fR");

// CONCATENATED MODULE: ./components/special/TooltipWrapper.js





const Tip = external_styled_components_default.a.div.withConfig({
  displayName: "TooltipWrapper__Tip",
  componentId: "sc-1fwot0u-0"
})(["min-width:300px;min-height:300px;padding:20px;border-radius:10px;background:white;"]);

class TooltipWrapper_TooltipWrapper extends external_react_["Component"] {
  render() {
    return external_react_default.a.createElement(Tip, null, this.props.children);
  }

}

/* harmony default export */ var special_TooltipWrapper = (TooltipWrapper_TooltipWrapper);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./components/special/Comment.js







const Commentarea = external_styled_components_default.a.textarea.withConfig({
  displayName: "Comment__Commentarea",
  componentId: "dimpc7-0"
})(["width:100%;height:100%;"]);

class Comment_Comment extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "_getPlaceholder", () => {
      var placeholders = ['This needs more SPARKLE.', 'Can I get this in comic-sans?', 'I like everything about how this looks, except for how it looks.', 'How can we “spice” this page up?', 'Why don’t we add a few more colors into the mix?', 'This shit is gonna go viral', 'How about we just “spruce” this up a bit?'];
      return external_lodash_default.a.sample(placeholders); // return 'test';
    });

    Object(defineProperty["a" /* default */])(this, "_updateComment", (Global, e) => {
      var previousState = Global.state.pins;
      console.log(this.props.pin.id);
      console.log(e.target.value);
      console.log(previousState);

      Global._updatePinCommentByID(this.props.pin.id, e.target.value, previousState);
    });
  }

  render() {
    return external_react_default.a.createElement(Commentarea, {
      value: this.props.pin.comment,
      onChange: e => this._updateComment(this.props.Global, e),
      placeholder: this._getPlaceholder()
    });
  }

}

/* harmony default export */ var special_Comment = (Comment_Comment);
// CONCATENATED MODULE: ./components/special/Pin.js








const PinDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Pin__PinDiv",
  componentId: "sc-1edaed1-0"
})(["width:", ";height:", ";background-color:lightskyblue;position:absolute;top:", ";left:", ";transform:translateX(", ") translateY(", ");pointer-events:auto;"], props => props.width + 'px', props => props.height + 'px', props => props.pin.y + parse_int_default()(props.pin.scrollPosition.y) + 'px', props => props.pin.x + 'px', props => -props.width / 2 + 'px', props => -props.height / 2 + 'px');
const Pop = external_styled_components_default.a.div.withConfig({
  displayName: "Pin__Pop",
  componentId: "sc-1edaed1-1"
})(["width:300px;background:blue;"]);

class Pin_Pin extends external_react_["Component"] {
  render() {
    return external_react_default.a.createElement(PinDiv, {
      key: this.props.key,
      width: 25,
      height: 25,
      pin: this.props.pin
    }, external_react_default.a.createElement(external_react_tippy_["Tooltip"], {
      trigger: "click",
      interactive: true,
      html: external_react_default.a.createElement(special_TooltipWrapper, null, external_react_default.a.createElement(special_Comment, {
        pin: this.props.pin,
        global: this.props.Global
      }))
    }, external_react_default.a.createElement("div", {
      style: {
        width: '100%',
        height: '100%'
      }
    })));
  }

}

/* harmony default export */ var special_Pin = (Pin_Pin);
// CONCATENATED MODULE: ./components/special/ShowPins.js









const ShowPinsDiv = external_styled_components_default.a.div.withConfig({
  displayName: "ShowPins__ShowPinsDiv",
  componentId: "sc-1acb6tt-0"
})(["position:absolute;top:", ";left:0px;right:0px;bottom:0px;z-index:2;pointer-events:none;"], props => props.scrollTop ? props.scrollTop : '0px');
var timeout = '';

class ShowPins_ShowPins extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      scrollTop: 0
    });

    Object(defineProperty["a" /* default */])(this, "_updateScrollPosition", event => {
      var scroll = '';
      var iframeScrollPosition = document.getElementById('iframe').contentWindow.document.getElementById('iframeScrollPosition');

      if (iframeScrollPosition.getAttribute('y')) {
        scroll = -iframeScrollPosition.getAttribute('y');
      } else {
        scroll = 0;
      }

      this.setState({
        scrollTop: scroll + 'px'
      });
    });

    Object(defineProperty["a" /* default */])(this, "_handleScroll", () => {
      window.clearTimeout(timeout);
      timeout = setTimeout(() => {
        this._updateScrollPosition();

        setTimeout(this._updateScrollPosition(), 150);
      }, 150);

      this._updateScrollPosition();
    });
  }

  componentDidMount() {
    //get initial scroll pos
    this._updateScrollPosition(); //attach scroll listener


    var iframeScrollPosition = document.getElementById('iframe').contentWindow.document.addEventListener('scroll', this._handleScroll, false);
  } //polling is almost accurate but needs a trail off perhaps an interval or a while statement
  //that runs several more times over a few seconds.


  componentWillUnmount() {// window.removeEventListener('scroll', this._updateScrollPosition, false);
  }

  render() {
    var block = this.props.block;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_unstated_["Subscribe"], {
      to: [Global]
    }, Global => external_react_default.a.createElement(ShowPinsDiv, {
      scrollTop: this.state.scrollTop
    }, Global.state.pins.map((pin, i) => {
      return external_react_default.a.createElement(special_Pin, {
        key: i,
        pin: pin,
        global: Global
      });
    }))));
  }

} // export default withContainers([globalState])(ShowPins);


/* harmony default export */ var special_ShowPins = (ShowPins_ShowPins);
// CONCATENATED MODULE: ./components/special/Global.js









class Global_Global extends external_unstated_["Container"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      overIframe: [],
      currentIframe: 'https://changethisfrontend.deva.io/api/proxy?url=aHR0cDovL3d3dy5nb29nbGUuY29t',
      showPins: false,
      showCanvas: false,
      canvas: null,
      iframe: {
        size: {
          height: 0,
          width: 200
        }
      },
      showToolbarOverlay: false,
      toolbarOverlayContents: '',
      toolbar: [],
      isPlacingPin: false,
      pins: [],
      text: 'This is some text'
    });

    Object(defineProperty["a" /* default */])(this, "addSimpleTextBlock", () => {
      this.toggleToolbarOverlay();
      var simpleText = {
        id: external_shortid_default.a.generate(),
        type: 'text',
        value: 'test',
        label: 'test'
      };
      var toolbar = this.state.toolbar;
      toolbar.push(simpleText);
      this.setState({
        toolbar
      });
    });

    Object(defineProperty["a" /* default */])(this, "addPinBlock", () => {
      this.toggleToolbarOverlay();
      this.setState({
        overIframe: [...this.state.overIframe, {
          belongsTo: 'test',
          component: special_ShowPins
        }]
      });
      var pin = {
        id: external_shortid_default.a.generate(),
        type: 'pin'
      }; //place pin view over iframe

      var toolbar = this.state.toolbar;
      toolbar.push(pin);
      this.setState({
        toolbar
      });
    });

    Object(defineProperty["a" /* default */])(this, "putComponentInToolbar", component => {
      this.setState({
        toolbarOverlayContents: component
      });
    });

    Object(defineProperty["a" /* default */])(this, "toggleToolbarOverlay", () => {
      this.setState({
        showToolbarOverlay: !this.state.showToolbarOverlay
      });
    });

    Object(defineProperty["a" /* default */])(this, "togglePinPlacement", (id, block) => {
      if (this.state.isPlacingPin) {
        var stat = this.state.overIframe;
        stat = external_lodash_default.a.filter(stat, function (i) {
          return i.belongsTo != id;
        });
        this.setState({
          overIframe: stat,
          isPlacingPin: false
        });
      } else {
        this.setState({
          overIframe: [...this.state.overIframe, {
            belongsTo: id,
            component: special_PinOverlay
          }],
          isPlacingPin: true
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "addPath", () => {
      var canvas = this.state.canvas;
      var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
      path.set({
        left: 120,
        top: 120
      });
      canvas.add(path);
      this.setState({
        canvas
      });
    });

    Object(defineProperty["a" /* default */])(this, "addArrow", () => {
      var canvas = this.state.canvas;
      fabric.loadSVGFromURL('/static/images/arrow.svg', function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        canvas.add(obj).renderAll();
      });
      this.setState({
        canvas
      });
    });

    Object(defineProperty["a" /* default */])(this, "showCanvas", () => {
      this.setState({
        showCanvas: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "hideCanvas", () => {
      this.setState({
        showCanvas: false
      });
    });

    Object(defineProperty["a" /* default */])(this, "instantiateCanvas", that => {
      const canvas = new fabric.Canvas(that.c);
      this.setState({
        canvas
      });
    });

    Object(defineProperty["a" /* default */])(this, "clear", () => {
      var canvas = this.state.canvas;
      var canvas = canvas.clear();
      this.setState({
        canvas
      });
    });

    Object(defineProperty["a" /* default */])(this, "_placePin", pin => {
      pin.id = external_shortid_default.a.generate();
      var pins = this.state.pins;
      pins.push(pin);
      this.setState({
        pins
      });
    });

    Object(defineProperty["a" /* default */])(this, "_updatePinCommentByID", (id, text, previousState) => {
      var that = previousState;
      external_lodash_default.a.find(that, {
        id: id
      }).comment = text;
      this.setState({
        pins: that
      });
    });

    Object(defineProperty["a" /* default */])(this, "_loadStateFromHash", hash => {
      var test = atob(hash);
      var previousState = this.state;
      test = JSON.parse(test);

      if (test.pins.length > 0) {
        previousState.overIframe = [...this.state.overIframe, {
          belongsTo: 'test',
          component: special_ShowPins
        }];
      }

      previousState.pins = test.pins;
      previousState.toolbar = test.toolbar;
      this.setState(Object(objectSpread["a" /* default */])({}, previousState));
    });

    Object(defineProperty["a" /* default */])(this, "setCurrentIframe", url => {
      this.setState({
        currentIframe: url
      });
    });
  }

}


// EXTERNAL MODULE: external "fabric"
var external_fabric_ = __webpack_require__("DMZp");

// CONCATENATED MODULE: ./components/special/DesignCanvas.js







const CanvasContainer = external_styled_components_default.a.div.withConfig({
  displayName: "DesignCanvas__CanvasContainer",
  componentId: "br7asi-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:2;"]);

class DesignCanvas_DesignCanvas extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      canvas: null
    });
  }

  componentDidMount() {
    this.props.Global.instantiateCanvas(this);
  }

  render() {
    const {
      width,
      height
    } = this.props;
    var canvas = this.props.Global;
    return external_react_default.a.createElement(CanvasContainer, null, external_react_default.a.createElement("canvas", {
      ref: c => this.c = c,
      width: width,
      height: height
    }));
  }

}

Object(defineProperty["a" /* default */])(DesignCanvas_DesignCanvas, "defaultProps", {
  width: 1440,
  height: 1000
});

/* harmony default export */ var special_DesignCanvas = (withContainer([Global_Global])(DesignCanvas_DesignCanvas));
// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// CONCATENATED MODULE: ./components/special/ToolbarOverlay.js





const ToolbarOverlayDiv = external_styled_components_default.a.div.withConfig({
  displayName: "ToolbarOverlay__ToolbarOverlayDiv",
  componentId: "sc-1wlttng-0"
})(["padding:40px;background:#edf1f5;position:absolute;transform:translate3d(", " + '%',0,0);top:0;left:0;right:0;bottom:0;"], props => props.transform3d);

class ToolbarOverlay_ToolbarOverlay extends external_react_["Component"] {
  render() {
    return external_react_default.a.createElement("div", null, this.props.Global && external_react_default.a.createElement(external_react_spring_["Transition"], {
      items: this.props.Global.state.showToolbarOverlay,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }, show => show && (props => external_react_default.a.createElement(ToolbarOverlayDiv, {
      style: props
    }, external_react_default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "48",
      height: "48",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#000000",
      strokeWidth: "3",
      strokeLinecap: "square",
      strokeLinejoin: "arcs",
      onClick: () => this.props.Global.toggleToolbarOverlay()
    }, external_react_default.a.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), external_react_default.a.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })), this.props.Global.state.toolbarOverlayContents))));
  }

}

/* harmony default export */ var special_ToolbarOverlay = (withContainer([Global_Global])(ToolbarOverlay_ToolbarOverlay));
// CONCATENATED MODULE: ./components/special/BlockList.js






class BlockList_BlockList extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {});
  }

  render() {
    var block = this.props.block;
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => this.props.Global.addSimpleTextBlock()
    }, "Add Simple Text Block"), external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => this.props.Global.addPinBlock()
    }, "Add Pin Block"));
  }

}

/* harmony default export */ var special_BlockList = (withContainer([Global_Global])(BlockList_BlockList));
// EXTERNAL MODULE: external "btoa"
var external_btoa_ = __webpack_require__("NLDS");
var external_btoa_default = /*#__PURE__*/__webpack_require__.n(external_btoa_);

// EXTERNAL MODULE: external "react-clipboard.js"
var external_react_clipboard_js_ = __webpack_require__("GUpV");
var external_react_clipboard_js_default = /*#__PURE__*/__webpack_require__.n(external_react_clipboard_js_);

// CONCATENATED MODULE: ./components/special/SimpleTextBlock.js





class SimpleTextBlock_SimpleTextBlock extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {});
  }

  render() {
    var block = this.props.block;
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, block.label), external_react_default.a.createElement("p", null, block.value));
  }

}

/* harmony default export */ var special_SimpleTextBlock = (withContainer([Global_Global])(SimpleTextBlock_SimpleTextBlock));
// CONCATENATED MODULE: ./components/special/PinBlock.js






class PinBlock_PinBlock extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {});
  }

  render() {
    var block = this.props.block;
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, this.props.Global && this.props.Global.state.pins.map((p, index) => {
      if (p.belongsTo == this.props.block.id) {
        return external_react_default.a.createElement("p", {
          key: index
        }, p.comment);
      }
    }), external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => this.props.Global.togglePinPlacement(this.props.block.id)
    }, this.props.Global && this.props.Global.state.isPlacingPin ? 'Stop Placing Pins' : 'Place Pin'));
  }

}

/* harmony default export */ var special_PinBlock = (withContainer([Global_Global])(PinBlock_PinBlock));
// CONCATENATED MODULE: ./components/special/Toolbar.js










 // Blocks



const ToolbarDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Toolbar__ToolbarDiv",
  componentId: "sc-19q79xv-0"
})(["width:100%;max-width:300px;z-index:10;background-color:#d2ddec;padding:40px;position:relative;p{margin:0px;}"]);

class Toolbar_Toolbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      base64: ''
    });

    Object(defineProperty["a" /* default */])(this, "showBlocks", () => {
      //place component in state
      this.props.Global.putComponentInToolbar(external_react_default.a.createElement(special_BlockList, null)); //open toolbar

      this.props.Global.toggleToolbarOverlay();
    });

    Object(defineProperty["a" /* default */])(this, "showCanvasOptions", () => {});

    Object(defineProperty["a" /* default */])(this, "handlebase64Update", e => {
      this.setState({
        base64: e.target.value
      });
    });

    Object(defineProperty["a" /* default */])(this, "_updateState", () => {
      this.props.Global._loadStateFromHash(this.state.base64);
    });
  }

  render() {
    var canvas = this.props.Global; // var toolbar = this.props.Global.state.toolbar;

    return external_react_default.a.createElement(ToolbarDiv, null, this.props.Global && this.props.Global.state.toolbar.map((block, i) => {
      var type = block.type;

      switch (type) {
        case 'text':
          return external_react_default.a.createElement(special_SimpleTextBlock, {
            key: i,
            block: block
          });
          break;

        case 'pin':
          return external_react_default.a.createElement(special_PinBlock, {
            key: i,
            block: block
          });
          break;
      }
    }), external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => this.showBlocks()
    }, "Add Block"), external_react_default.a.createElement("p", {
      ref: textarea => this.textArea = textarea
    }), this.props.Global && external_react_default.a.createElement(external_react_clipboard_js_default.a, {
      component: SickButton["a" /* default */],
      "data-clipboard-text": external_btoa_default()(stringify_default()(this.props.Global.state))
    }, "copy to clipboard"), external_react_default.a.createElement("textarea", {
      onChange: e => this.handlebase64Update(e)
    }), external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => this._updateState()
    }, ' ', "Update State From String"), external_react_default.a.createElement(special_ToolbarOverlay, null));
  }

}

/* harmony default export */ var special_Toolbar = (withContainer([Global_Global])(Toolbar_Toolbar));
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__("bzos");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./components/special/Reporting.js














const Frame = external_styled_components_default.a.iframe.withConfig({
  displayName: "Reporting__Frame",
  componentId: "sc-5smu6h-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;width:100%;height:100%;max-width:", ";"], props => props.width);
const WorkArea = external_styled_components_default.a.div.withConfig({
  displayName: "Reporting__WorkArea",
  componentId: "sc-5smu6h-1"
})(["display:flex;margin-bottom:30px;"]);
const UrlBar = external_styled_components_default.a.div.withConfig({
  displayName: "Reporting__UrlBar",
  componentId: "sc-5smu6h-2"
})(["display:flex;padding:40px 0px;"]);
const URL = external_styled_components_default.a.input.withConfig({
  displayName: "Reporting__URL",
  componentId: "sc-5smu6h-3"
})(["width:100%;"]);
const Reporting_CanvasContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Reporting__CanvasContainer",
  componentId: "sc-5smu6h-4"
})(["position:relative;width:100%;height:100%;min-height:1000px;min-width:1000px;overflow-y:hidden;"]);

const Test = props => {
  var router = Object(router_["useRouter"])();
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Test"), stringify_default()(router.query), props.children);
};

const frontendUrl =  false ? undefined : config["c" /* prodFrontend */];

class Reporting_Reporting extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      url: 'http://bugherd.com',
      urlSelected: frontendUrl + '/api/proxy?url=aHR0cDovL2J1Z2hlcmQuY29t'
    });

    Object(defineProperty["a" /* default */])(this, "reloadIframe", () => {
      var urlString = frontendUrl + '/api/proxy?url=' + btoa(this.state.url);
      console.log(this.props); // if (this.props.Global) {

      this.props.Global.setCurrentIframe(urlString); // }

      this.setState({
        urlSelected: urlString
      });
    });

    Object(defineProperty["a" /* default */])(this, "updateUrl", e => {
      var url = e.target.value;
      this.setState({
        url
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleKeyDown", e => {
      if (e.key === 'Enter') {
        this.reloadIframe();
      }
    });

    Object(defineProperty["a" /* default */])(this, "handleScroll", e => {});
  }

  render() {
    // if (!this.props.Global) return <p>Loading...</p>;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(UrlBar, null, external_react_default.a.createElement(URL, {
      value: this.state.url,
      onChange: e => {
        this.updateUrl(e);
      },
      onKeyDown: e => this.handleKeyDown(e),
      type: "text"
    }), external_react_default.a.createElement(SickButton["a" /* default */], {
      onClick: () => {
        this.reloadIframe();
      }
    }, "Go")), external_react_default.a.createElement(WorkArea, null, external_react_default.a.createElement(Reporting_CanvasContainer, null, this.props.Global && this.props.Global.state.overIframe.map((OverIframe, i) => {
      var OverIframeComponent = OverIframe.component;
      return external_react_default.a.createElement(OverIframeComponent, {
        key: i,
        id: OverIframe.belongsTo
      });
    }), ' ', this.props.Global && this.props.Global.state && external_react_default.a.createElement(Frame, {
      id: "iframe",
      width: this.props.Global.state.iframe.size.width,
      src: this.props.Global.state.currentIframe
    })), external_react_default.a.createElement(special_Toolbar, null)));
  }

}

/* harmony default export */ var special_Reporting = (withContainer([Global_Global])(Reporting_Reporting));
// CONCATENATED MODULE: ./pages/reporting.js




const ProtectedPage = props => external_react_default.a.createElement("div", null, external_react_default.a.createElement(PleaseSignIn["a" /* default */], null, external_react_default.a.createElement(special_Reporting, null)));

/* harmony default export */ var reporting = __webpack_exports__["default"] = (ProtectedPage);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });