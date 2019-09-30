webpackHotUpdate("static/development/pages/reporting.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wrappers_withContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wrappers/withContainer */ "./components/wrappers/withContainer.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Global */ "./components/special/Global.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DesignCanvas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DesignCanvas */ "./components/special/DesignCanvas.js");
/* harmony import */ var _Toolbar_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Toolbar.js */ "./components/special/Toolbar.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_18__);








var _jsxFileName = "/Users/jakecasey/Documents/Projects/Bugs/skeleton-key-frontend/components/special/Reporting.js";











var Frame = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].iframe.withConfig({
  displayName: "Reporting__Frame",
  componentId: "sc-5smu6h-0"
})(["position:absolute;top:0px;left:0px;right:0px;bottom:0px;width:100%;height:100%;max-width:", ";"], function (props) {
  return props.width;
});
var WorkArea = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "Reporting__WorkArea",
  componentId: "sc-5smu6h-1"
})(["display:flex;margin-bottom:30px;"]);
var UrlBar = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "Reporting__UrlBar",
  componentId: "sc-5smu6h-2"
})(["display:flex;padding:40px 0px;"]);
var URL = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].input.withConfig({
  displayName: "Reporting__URL",
  componentId: "sc-5smu6h-3"
})(["width:100%;"]);
var CanvasContainer = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "Reporting__CanvasContainer",
  componentId: "sc-5smu6h-4"
})(["position:relative;width:100%;height:100%;min-height:1000px;min-width:1000px;overflow-y:hidden;"]);

var Test = function Test(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Test"), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(router.query), props.children);
};

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
      url: 'http://bugherd.com',
      urlSelected: 'http://localhost:7777/api/proxy?url=aHR0cDovL2J1Z2hlcmQuY29t'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "reloadIframe", function () {
      var urlString = 'http://localhost:7777/api/proxy?url=' + btoa(_this.state.url);

      _this.props.Global.setCurrentIframe(urlString);

      _this.setState({
        urlSelected: urlString
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateUrl", function (e) {
      var url = e.target.value;

      _this.setState({
        url: url
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'Enter') {
        _this.reloadIframe();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function (e) {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reporting, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.Global) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Loading...");
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(UrlBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(URL, {
        value: this.state.url,
        onChange: function onChange(e) {
          _this2.updateUrl(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.handleKeyDown(e);
        },
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onClick: function onClick() {
          _this2.reloadIframe();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Go")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(WorkArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CanvasContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.props.Global.state.overIframe.map(function (OverIframe, i) {
        var OverIframeComponent = OverIframe.component;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(OverIframeComponent, {
          key: i,
          id: OverIframe.belongsTo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        });
      }), ' ', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Frame, {
        id: "iframe",
        width: this.props.Global.state.iframe.width,
        src: this.props.Global.state.currentIframe,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Toolbar_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })));
    }
  }]);

  return Reporting;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrappers_withContainer__WEBPACK_IMPORTED_MODULE_12__["default"])([_Global__WEBPACK_IMPORTED_MODULE_13__["default"]])(Reporting));

/***/ }),

/***/ "./node_modules/deprecated-decorator/bld/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/SchemaError.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/chainResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/forEachField.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/implementsAbstractType.js":
false,

/***/ "./node_modules/graphql-tools/dist/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/isEmptyObject.js":
false,

/***/ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
false,

/***/ "./node_modules/graphql-tools/dist/makeExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/mergeDeep.js":
false,

/***/ "./node_modules/graphql-tools/dist/mock.js":
false,

/***/ "./node_modules/graphql-tools/dist/schemaVisitor.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/errors.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumResponse.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExtractField.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transformSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transforms.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/visitSchema.js":
false,

/***/ "./node_modules/graphql/error/formatError.mjs":
false,

/***/ "./node_modules/graphql/error/index.mjs":
false,

/***/ "./node_modules/graphql/error/locatedError.mjs":
false,

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/didYouMean.mjs":
false,

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isNullish.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/polyfills/find.mjs":
false,

/***/ "./node_modules/graphql/polyfills/flatMap.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidJSValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidLiteralValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/schemaPrinter.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectives.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/graphql/version.mjs":
false,

/***/ "./node_modules/iterall/index.mjs":
false,

/***/ "./node_modules/uuid/index.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v1.js":
false,

/***/ "./node_modules/uuid/v4.js":
false

})
//# sourceMappingURL=reporting.js.e5a882ea7f62c3670df3.hot-update.js.map