"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./food.jpeg */ "./src/food.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! dog-cheff.jpeg */ "./src/dog-cheff.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@300;400&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n}\n\n.container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  align-items: center;\n  font-size: 1.3rem;\n  border-bottom: 3px solid burlywood;\n  font-weight: bolder;\n}\n.navbar div {\n  cursor: pointer;\n}\n.navbar :hover {\n  color: burlywood;\n}\n\n.content {\n  overflow-y: scroll;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu {\n  background-color: white;\n  color: black;\n}\n\n.homeContainer {\n  font-size: 1.2rem;\n  color: white;\n  display: grid;\n  width: 50%;\n  background-color: rgba(0, 0, 0, 0.4);\n  gap: 1rem;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n}\n.homeContainer img {\n  border-radius: 50%;\n  height: 15rem;\n  width: 15rem;\n  display: block;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.about {\n  color: black;\n}\n\n.aboutContainer {\n  font-size: 1.2rem;\n  color: white;\n  display: grid;\n  width: 50%;\n  background-color: rgba(0, 0, 0, 0.4);\n  gap: 1rem;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n}\n\n.menu {\n  background-color: white;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.menu-item {\n  max-width: 30rem;\n  text-align: center;\n}\n\n.menu-item * {\n  margin-top: 1rem;\n}\n\n.golden {\n  color: #c59d5f;\n}\n\n.gray {\n  color: #262626;\n}\n\nh1 {\n  font-size: 64px;\n  font-weight: bold;\n  margin-top: -72px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cursive {\n  font-family: \"Herr Von Muellerhoff\", cursive;\n  font-size: 96px;\n  text-align: center;\n  text-transform: capitalize;\n}\n\np {\n  line-height: 150%;\n}\n\nhr {\n  width: 280px;\n  border-top: 0.2rem solid #c59d5f;\n  margin: 24px auto;\n  margin: 24px auto;\n}\n\n.head-hr {\n  width: 300px;\n  border-top: 0.4rem solid #c59d5f;\n  margin: 24px auto;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 3px solid burlywood;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,YAAA;AADF;;AAKA;EACE,aAAA;EACA,aAAA;EACA,+BAAA;EACA,yDAAA;EACA,sBAAA;AAFF;;AAKA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,mBAAA;EACA,iBAAA;EACA,kCAAA;EACA,mBAAA;AAFF;AAIE;EACE,eAAA;AAFJ;AAKE;EACE,gBAAA;AAHJ;;AAQA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALF;;AAQA;EACE,uBAAA;EACA,YAAA;AALF;;AAQA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,oCAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AALF;AAOE;EACE,kBAAA;EACA,aAAA;EACA,YAAA;EACA,cAAA;EACA,gDAAA;AALJ;;AASA;EACE,YAAA;AANF;;AASA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,oCAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AANF;;AAUA;EACE,uBAAA;EACA,sBAAA;EACA,sBAAA;AAPF;;AAWA;EACE,gBAAA;EACA,kBAAA;AARF;;AAWA;EACE,gBAAA;AARF;;AAYA;EACE,cAAA;AATF;;AAYA;EACE,cAAA;AATF;;AAYA;EACE,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;AATF;;AAYA;EACE,4CAAA;EACA,eAAA;EACA,kBAAA;EACA,0BAAA;AATF;;AAYA;EACE,iBAAA;AATF;;AAcA;EACE,YAAA;EACA,gCAAA;EACA,iBAAA;EAAoB,iBAAA;AAVtB;;AAaA;EACE,YAAA;EACA,gCAAA;EACA,iBAAA;AAVF;;AAcA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,+BAAA;AAXF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@300;400&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n}\n\n\n.container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n  background-image: url('./food.jpeg');\n  background-size: cover;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  align-items: center;\n  font-size: 1.3rem;\n  border-bottom: 3px solid burlywood;\n  font-weight: bolder;\n\n  div {\n    cursor: pointer;\n  }\n\n  :hover {\n    color: burlywood;\n  }\n}\n\n\n.content {\n  overflow-y: scroll;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu {\n  background-color: white;\n  color: black;\n}\n\n.homeContainer {\n  font-size: 1.2rem;\n  color: white;\n  display: grid;\n  width: 50%;\n  background-color: rgba(0, 0, 0, 0.4);\n  gap: 1rem;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n\n  img {\n    border-radius: 50%;\n    height: 15rem;\n    width: 15rem;\n    display: block;\n    content: url(\"dog-cheff.jpeg\");\n  }\n}\n\n.about {\n  color: black;\n}\n\n.aboutContainer {\n  font-size: 1.2rem;\n  color: white;\n  display: grid;\n  width: 50%;\n  background-color: rgba(0, 0, 0, 0.4);\n  gap: 1rem;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n}\n\n\n.menu {\n  background-color: white;\n  flex-direction: column;\n  justify-content: start;\n\n}\n\n.menu-item {\n  max-width: 30rem;\n  text-align: center;\n}\n\n.menu-item * {\n  margin-top: 1rem;\n}\n\n\n.golden {\n  color: #c59d5f;\n}\n\n.gray {\n  color: #262626;\n}\n\nh1 {\n  font-size: 64px;\n  font-weight: bold;\n  margin-top: -72px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cursive {\n  font-family: \"Herr Von Muellerhoff\", cursive;\n  font-size: 96px;\n  text-align: center;\n  text-transform: capitalize;\n}\n\np {\n  line-height: 150%;\n}\n\n\n\nhr {\n  width: 280px;\n  border-top: 0.2rem solid #c59d5f;\n  margin: 24px auto;  margin: 24px auto;\n}\n\n.head-hr {\n  width: 300px;\n  border-top: 0.4rem solid #c59d5f;\n  margin: 24px auto;\n  //background-color: #c59d5f;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 3px solid burlywood;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let about = document.createElement("div");
about.classList.add("content");
about.classList.add("about");

let aboutContainer = document.createElement("div");
aboutContainer.classList.add("aboutContainer");

let phone = document.createElement("p");
phone.textContent = "Call us: 📞 123 456 789";
aboutContainer.appendChild(phone);

let address = document.createElement("p");
address.textContent =
  "🏠 5 Bel Air South Pkwy Ste  1615, Bel Air, MD 21015-6089";

aboutContainer.appendChild(address);

const container = document.createElement("div");
container.setAttribute("class", "map-container");
const display = document.createElement("div");
display.setAttribute("class", "map-display");
const frame = document.createElement("iframe");
frame.setAttribute("class", "map-frame");
frame.setAttribute(
  "src",
  "https://www.google.com/maps/embed/v1/search?q=tribe+red+deer&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
);
display.appendChild(frame);
container.appendChild(display);
aboutContainer.appendChild(container);

about.appendChild(aboutContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/dishesObj.js":
/*!**************************!*\
  !*** ./src/dishesObj.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let dishes = [
  {
    description:
      "These mini cheeseburgers are served on a fresh baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese. ",
    imageURL: "https://resize.hswstatic.com/w_907/gif/cheeseburger-1.jpg",
    title: "Mini Cheeseburgers",
    course: "Starters",
    id: 2,
    price: 8,
  },
  {
    description:
      "Large mushroom caps are filled a savory cream cheese, bacon and panko breadcrumb stuffing, topped with cheddar cheese. ",
    imageURL:
      "https://chocolatechocolateandmore.com/wp-content/uploads/2014/03/Crab-Stuffed-Mushrooms-from-ChocolateChocolateandmore-71a.jpg",
    title: "Panko Stuffed Mushrooms",
    course: "Starters",
    id: 10,
    price: 7,
  },
  {
    description:
      "Our New York Style Cheesecake is rich, smooth, and creamy. Available in various flavors, and with seasonal ",
    imageURL:
      "https://laurenslatest.com/wp-content/uploads/2020/02/cheesecake-recipe-5.jpg",
    title: "Cheesecake",
    course: "Desserts",
    id: 14,
    price: 9,
  },
  {
    description:
      "This platter is perfect for sharing! Enjoy our spicy buffalo wings, traditional nachos, and cheese quesadillas served with freshly made guacamole dip.",
    imageURL:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps13236_BHR153663C05_19_1b-696x696.jpg",
    title: "Fiesta Family Platter",
    course: "Entrees",
    id: 9,
    price: 16,
  },
  {
    description:
      "This classic cheese tortellini is cooked in a sundried tomato sauce. Served with bruschetta topped with a tomato and basil marinara.",
    imageURL:
      "https://aprettylifeinthesuburbs.com/wp-content/uploads/2015/05/Bruschetta-Pasta-Salad-1.jpg",
    title: "Tomato Bruschetta Tortellini",
    course: "Entrees",
    id: 12,
    price: 14,
  },
  {
    description:
      "Elegantly crafted creamy vanilla custard with a caramelized crunchy layer on top. Served with seasonal fruit.",
    imageURL: "https://www.yogurt-land.com/assets/584.png",
    title: "CrÃ¨me BrÃ»lÃ©e",
    course: "Desserts",
    id: 13,
    price: 9,
  },
  {
    description:
      "Made with local granny smith apples to bring you the freshest classic apple pie available.",
    imageURL:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg",
    title: "Apple Pie",
    course: "Desserts",
    id: 15,
    price: 5,
  },
  {
    description:
      "Our thin crust pizzas are made fresh daily and topped with your choices of fresh meats, veggies, cheese, and sauce. Price includes two toppings. Add $1 for each additional topping.",
    imageURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/09/91/f8/f9/topp-t-handcrafted-pizza.jpg",
    title: "Handcrafted Pizza",
    course: "Entrees",
    id: 16,
    price: 10,
  },
  {
    description:
      "Our barbecued skewers include tofu, cherry tomatoes, bell peppers, and zucchini marinated in a ginger sesame sauce and charbroiled. Served with steamed rice.",
    imageURL:
      "https://www.lastingredient.com/wp-content/uploads/2019/08/barbecue-tofu-veggie-skewers5.jpg",
    title: "Barbecued Tofu Skewers",
    course: "Entrees",
    id: 17,
    price: 10,
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dishes);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let footer = document.createElement("div");
footer.classList.add("footer");

let p = document.createElement("p");
p.textContent = "Developed with ♥ by jarryingnut";
footer.appendChild(p);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let home = document.createElement("div");
home.classList.add("content");
home.classList.add("home");

let homeContainer = document.createElement("div");
homeContainer.classList.add("homeContainer");

let heading = document.createElement("h2");
heading.textContent = "Pawwneer's";
homeContainer.appendChild(heading);

let para1 = document.createElement("p");
para1.textContent = "Best indian food in Bel Air!";
homeContainer.appendChild(para1);

let img = document.createElement("img");
homeContainer.appendChild(img);

let para2 = document.createElement("p");
para2.textContent = "Visit us anytime (24*7)";
homeContainer.appendChild(para2);

home.appendChild(homeContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");






let contentPage = _home__WEBPACK_IMPORTED_MODULE_1__["default"];

let body = document.querySelector("body");
body.classList.add("container");

let navbar = document.createElement("div");
navbar.classList.add("navbar");
let navItems = ["Home", "Menu", "About"];

function pageSelection(e) {
  let old = document.querySelector(".content");
  if (e.target.textContent === "Menu") {
    contentPage = _menu__WEBPACK_IMPORTED_MODULE_3__["default"];
    body.replaceChild(contentPage, old);
  } else if (e.target.textContent === "About") {
    contentPage = _about__WEBPACK_IMPORTED_MODULE_4__["default"];
    body.replaceChild(contentPage, old);
  } else {
    contentPage = _home__WEBPACK_IMPORTED_MODULE_1__["default"];
    body.replaceChild(contentPage, old);
  }
}

navItems.forEach((item) => {
  let navItemNode = document.createElement("div");
  navItemNode.addEventListener("click", pageSelection);
  navItemNode.textContent = item;
  navItemNode.classList.add("nav-item");
  navbar.appendChild(navItemNode);
});

body.appendChild(navbar);
body.appendChild(contentPage);
body.appendChild(_footer__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dishesObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishesObj */ "./src/dishesObj.js");


let menu = document.createElement("div");
menu.classList.add("content");
menu.classList.add("menu");

let head1 = document.createElement("p");
head1.textContent = "Pawwneer's";
head1.classList.add("cursive", "golden");
menu.appendChild(head1);

let head2 = document.createElement("h1");
head2.textContent = "menu";
head2.classList.add("gray");
menu.appendChild(head2);

let headHR = document.createElement("hr");
headHR.classList.add("head-hr");
menu.appendChild(headHR);

_dishesObj__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((dish) => {
  let menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  let menuHead = document.createElement("h2");
  menuHead.textContent = dish.title;
  menuHead.classList.add("golden");
  menuItem.appendChild(menuHead);

  let desc = document.createElement("p");
  desc.textContent = dish.description;
  desc.classList.add("gray");
  menuItem.appendChild(desc);

  let price = document.createElement("h2");
  price.textContent = `$ ${dish.price}`;
  price.classList.add("golden");
  menuItem.appendChild(price);

  let menuHR = document.createElement("hr");
  menuHR.classList.add("menu-hr");
  menuItem.appendChild(menuHR);

  menu.appendChild(menuItem);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/dog-cheff.jpeg":
/*!****************************!*\
  !*** ./src/dog-cheff.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fda6c3b71951932d805.jpeg";

/***/ }),

/***/ "./src/food.jpeg":
/*!***********************!*\
  !*** ./src/food.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "488759cb57891b770c24.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZGlzaGVzT2JqLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb29kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkb2ctY2hlZmYuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVycitWb24rTXVlbGxlcmhvZmYmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJ1cmx5d29vZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5uYXZiYXIgZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhciA6aG92ZXIge1xcbiAgY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5ob21lQ29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5ob21lQ29udGFpbmVyIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtICoge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmdvbGRlbiB7XFxuICBjb2xvcjogI2M1OWQ1ZjtcXG59XFxuXFxuLmdyYXkge1xcbiAgY29sb3I6ICMyNjI2MjY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogLTcycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uY3Vyc2l2ZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogOTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5wIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbn1cXG5cXG5ociB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBib3JkZXItdG9wOiAwLjJyZW0gc29saWQgI2M1OWQ1ZjtcXG4gIG1hcmdpbjogMjRweCBhdXRvO1xcbiAgbWFyZ2luOiAyNHB4IGF1dG87XFxufVxcblxcbi5oZWFkLWhyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3A6IDAuNHJlbSBzb2xpZCAjYzU5ZDVmO1xcbiAgbWFyZ2luOiAyNHB4IGF1dG87XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBidXJseXdvb2Q7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFMRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtBQUxKOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVVBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBUEY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtBQVJGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBVEY7O0FBWUE7RUFDRSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBVEY7O0FBWUE7RUFDRSxpQkFBQTtBQVRGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFBb0IsaUJBQUE7QUFWdEI7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQVZGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQVhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlcnIrVm9uK011ZWxsZXJob2ZmJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vZm9vZC5qcGVnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBidXJseXdvb2Q7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcblxcbiAgZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgOmhvdmVyIHtcXG4gICAgY29sb3I6IGJ1cmx5d29vZDtcXG4gIH1cXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5ob21lQ29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6IHVybChcXFwiZG9nLWNoZWZmLmpwZWdcXFwiKTtcXG4gIH1cXG59XFxuXFxuLmFib3V0IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFib3V0Q29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuXFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSAqIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcblxcbi5nb2xkZW4ge1xcbiAgY29sb3I6ICNjNTlkNWY7XFxufVxcblxcbi5ncmF5IHtcXG4gIGNvbG9yOiAjMjYyNjI2O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IC03MnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmN1cnNpdmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDk2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxucCB7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG59XFxuXFxuXFxuXFxuaHIge1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkICNjNTlkNWY7XFxuICBtYXJnaW46IDI0cHggYXV0bzsgIG1hcmdpbjogMjRweCBhdXRvO1xcbn1cXG5cXG4uaGVhZC1ociB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wOiAwLjRyZW0gc29saWQgI2M1OWQ1ZjtcXG4gIG1hcmdpbjogMjRweCBhdXRvO1xcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjYzU5ZDVmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgYnVybHl3b29kO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hYm91dC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcblxubGV0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dENvbnRhaW5lclwiKTtcblxubGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5waG9uZS50ZXh0Q29udGVudCA9IFwiQ2FsbCB1czog8J+TniAxMjMgNDU2IDc4OVwiO1xuYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG5sZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuYWRkcmVzcy50ZXh0Q29udGVudCA9XG4gIFwi8J+PoCA1IEJlbCBBaXIgU291dGggUGt3eSBTdGUgIDE2MTUsIEJlbCBBaXIsIE1EIDIxMDE1LTYwODlcIjtcblxuYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXAtY29udGFpbmVyXCIpO1xuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFwLWRpc3BsYXlcIik7XG5jb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5mcmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcC1mcmFtZVwiKTtcbmZyYW1lLnNldEF0dHJpYnV0ZShcbiAgXCJzcmNcIixcbiAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQvdjEvc2VhcmNoP3E9dHJpYmUrcmVkK2RlZXIma2V5PUFJemFTeUJGdzBRYnlxOXpURlRkLXRVWTZkWldUZ2FRenVVMTdSOFwiXG4pO1xuZGlzcGxheS5hcHBlbmRDaGlsZChmcmFtZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5hYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5hYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwibGV0IGRpc2hlcyA9IFtcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGVzZSBtaW5pIGNoZWVzZWJ1cmdlcnMgYXJlIHNlcnZlZCBvbiBhIGZyZXNoIGJha2VkIHByZXR6ZWwgYnVuIHdpdGggbGV0dHVjZSwgdG9tYXRvLCBhdm9jYWRvLCBhbmQgeW91ciBjaG9pY2Ugb2YgY2hlZXNlLiBcIixcbiAgICBpbWFnZVVSTDogXCJodHRwczovL3Jlc2l6ZS5oc3dzdGF0aWMuY29tL3dfOTA3L2dpZi9jaGVlc2VidXJnZXItMS5qcGdcIixcbiAgICB0aXRsZTogXCJNaW5pIENoZWVzZWJ1cmdlcnNcIixcbiAgICBjb3Vyc2U6IFwiU3RhcnRlcnNcIixcbiAgICBpZDogMixcbiAgICBwcmljZTogOCxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMYXJnZSBtdXNocm9vbSBjYXBzIGFyZSBmaWxsZWQgYSBzYXZvcnkgY3JlYW0gY2hlZXNlLCBiYWNvbiBhbmQgcGFua28gYnJlYWRjcnVtYiBzdHVmZmluZywgdG9wcGVkIHdpdGggY2hlZGRhciBjaGVlc2UuIFwiLFxuICAgIGltYWdlVVJMOlxuICAgICAgXCJodHRwczovL2Nob2NvbGF0ZWNob2NvbGF0ZWFuZG1vcmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL0NyYWItU3R1ZmZlZC1NdXNocm9vbXMtZnJvbS1DaG9jb2xhdGVDaG9jb2xhdGVhbmRtb3JlLTcxYS5qcGdcIixcbiAgICB0aXRsZTogXCJQYW5rbyBTdHVmZmVkIE11c2hyb29tc1wiLFxuICAgIGNvdXJzZTogXCJTdGFydGVyc1wiLFxuICAgIGlkOiAxMCxcbiAgICBwcmljZTogNyxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPdXIgTmV3IFlvcmsgU3R5bGUgQ2hlZXNlY2FrZSBpcyByaWNoLCBzbW9vdGgsIGFuZCBjcmVhbXkuIEF2YWlsYWJsZSBpbiB2YXJpb3VzIGZsYXZvcnMsIGFuZCB3aXRoIHNlYXNvbmFsIFwiLFxuICAgIGltYWdlVVJMOlxuICAgICAgXCJodHRwczovL2xhdXJlbnNsYXRlc3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL2NoZWVzZWNha2UtcmVjaXBlLTUuanBnXCIsXG4gICAgdGl0bGU6IFwiQ2hlZXNlY2FrZVwiLFxuICAgIGNvdXJzZTogXCJEZXNzZXJ0c1wiLFxuICAgIGlkOiAxNCxcbiAgICBwcmljZTogOSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIHBsYXR0ZXIgaXMgcGVyZmVjdCBmb3Igc2hhcmluZyEgRW5qb3kgb3VyIHNwaWN5IGJ1ZmZhbG8gd2luZ3MsIHRyYWRpdGlvbmFsIG5hY2hvcywgYW5kIGNoZWVzZSBxdWVzYWRpbGxhcyBzZXJ2ZWQgd2l0aCBmcmVzaGx5IG1hZGUgZ3VhY2Ftb2xlIGRpcC5cIixcbiAgICBpbWFnZVVSTDpcbiAgICAgIFwiaHR0cHM6Ly93d3cudGFzdGVvZmhvbWUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAxL2V4cHMxMzIzNl9CSFIxNTM2NjNDMDVfMTlfMWItNjk2eDY5Ni5qcGdcIixcbiAgICB0aXRsZTogXCJGaWVzdGEgRmFtaWx5IFBsYXR0ZXJcIixcbiAgICBjb3Vyc2U6IFwiRW50cmVlc1wiLFxuICAgIGlkOiA5LFxuICAgIHByaWNlOiAxNixcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGNsYXNzaWMgY2hlZXNlIHRvcnRlbGxpbmkgaXMgY29va2VkIGluIGEgc3VuZHJpZWQgdG9tYXRvIHNhdWNlLiBTZXJ2ZWQgd2l0aCBicnVzY2hldHRhIHRvcHBlZCB3aXRoIGEgdG9tYXRvIGFuZCBiYXNpbCBtYXJpbmFyYS5cIixcbiAgICBpbWFnZVVSTDpcbiAgICAgIFwiaHR0cHM6Ly9hcHJldHR5bGlmZWludGhlc3VidXJicy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDUvQnJ1c2NoZXR0YS1QYXN0YS1TYWxhZC0xLmpwZ1wiLFxuICAgIHRpdGxlOiBcIlRvbWF0byBCcnVzY2hldHRhIFRvcnRlbGxpbmlcIixcbiAgICBjb3Vyc2U6IFwiRW50cmVlc1wiLFxuICAgIGlkOiAxMixcbiAgICBwcmljZTogMTQsXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRWxlZ2FudGx5IGNyYWZ0ZWQgY3JlYW15IHZhbmlsbGEgY3VzdGFyZCB3aXRoIGEgY2FyYW1lbGl6ZWQgY3J1bmNoeSBsYXllciBvbiB0b3AuIFNlcnZlZCB3aXRoIHNlYXNvbmFsIGZydWl0LlwiLFxuICAgIGltYWdlVVJMOiBcImh0dHBzOi8vd3d3LnlvZ3VydC1sYW5kLmNvbS9hc3NldHMvNTg0LnBuZ1wiLFxuICAgIHRpdGxlOiBcIkNyw4PCqG1lIEJyw4PCu2zDg8KpZVwiLFxuICAgIGNvdXJzZTogXCJEZXNzZXJ0c1wiLFxuICAgIGlkOiAxMyxcbiAgICBwcmljZTogOSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWRlIHdpdGggbG9jYWwgZ3Jhbm55IHNtaXRoIGFwcGxlcyB0byBicmluZyB5b3UgdGhlIGZyZXNoZXN0IGNsYXNzaWMgYXBwbGUgcGllIGF2YWlsYWJsZS5cIixcbiAgICBpbWFnZVVSTDpcbiAgICAgIFwiaHR0cHM6Ly9mb29kLmZuci5zbmRpbWcuY29tL2NvbnRlbnQvZGFtL2ltYWdlcy9mb29kL2Z1bGxzZXQvMjAxMy82LzI4LzAvRk5LX0FwcGxlLVBpZV9zNHgzLmpwZy5yZW5kLmhndHZjb20uNjE2LjQ2Mi5zdWZmaXgvMTM4MjU0NTAzOTEwNy5qcGVnXCIsXG4gICAgdGl0bGU6IFwiQXBwbGUgUGllXCIsXG4gICAgY291cnNlOiBcIkRlc3NlcnRzXCIsXG4gICAgaWQ6IDE1LFxuICAgIHByaWNlOiA1LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk91ciB0aGluIGNydXN0IHBpenphcyBhcmUgbWFkZSBmcmVzaCBkYWlseSBhbmQgdG9wcGVkIHdpdGggeW91ciBjaG9pY2VzIG9mIGZyZXNoIG1lYXRzLCB2ZWdnaWVzLCBjaGVlc2UsIGFuZCBzYXVjZS4gUHJpY2UgaW5jbHVkZXMgdHdvIHRvcHBpbmdzLiBBZGQgJDEgZm9yIGVhY2ggYWRkaXRpb25hbCB0b3BwaW5nLlwiLFxuICAgIGltYWdlVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tcy8wOS85MS9mOC9mOS90b3BwLXQtaGFuZGNyYWZ0ZWQtcGl6emEuanBnXCIsXG4gICAgdGl0bGU6IFwiSGFuZGNyYWZ0ZWQgUGl6emFcIixcbiAgICBjb3Vyc2U6IFwiRW50cmVlc1wiLFxuICAgIGlkOiAxNixcbiAgICBwcmljZTogMTAsXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT3VyIGJhcmJlY3VlZCBza2V3ZXJzIGluY2x1ZGUgdG9mdSwgY2hlcnJ5IHRvbWF0b2VzLCBiZWxsIHBlcHBlcnMsIGFuZCB6dWNjaGluaSBtYXJpbmF0ZWQgaW4gYSBnaW5nZXIgc2VzYW1lIHNhdWNlIGFuZCBjaGFyYnJvaWxlZC4gU2VydmVkIHdpdGggc3RlYW1lZCByaWNlLlwiLFxuICAgIGltYWdlVVJMOlxuICAgICAgXCJodHRwczovL3d3dy5sYXN0aW5ncmVkaWVudC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFyYmVjdWUtdG9mdS12ZWdnaWUtc2tld2VyczUuanBnXCIsXG4gICAgdGl0bGU6IFwiQmFyYmVjdWVkIFRvZnUgU2tld2Vyc1wiLFxuICAgIGNvdXJzZTogXCJFbnRyZWVzXCIsXG4gICAgaWQ6IDE3LFxuICAgIHByaWNlOiAxMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc2hlcztcbiIsImxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbmxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5wLnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgd2l0aCDimaUgYnkgamFycnlpbmdudXRcIjtcbmZvb3Rlci5hcHBlbmRDaGlsZChwKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xuIiwibGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbmxldCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVDb250YWluZXJcIik7XG5cbmxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUGF3d25lZXInc1wiO1xuaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxubGV0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5wYXJhMS50ZXh0Q29udGVudCA9IFwiQmVzdCBpbmRpYW4gZm9vZCBpbiBCZWwgQWlyIVwiO1xuaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMSk7XG5cbmxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG5sZXQgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnBhcmEyLnRleHRDb250ZW50ID0gXCJWaXNpdCB1cyBhbnl0aW1lICgyNCo3KVwiO1xuaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMik7XG5cbmhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcblxubGV0IGNvbnRlbnRQYWdlID0gaG9tZTtcblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxubGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcbmxldCBuYXZJdGVtcyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQWJvdXRcIl07XG5cbmZ1bmN0aW9uIHBhZ2VTZWxlY3Rpb24oZSkge1xuICBsZXQgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XG4gICAgY29udGVudFBhZ2UgPSBtZW51O1xuICAgIGJvZHkucmVwbGFjZUNoaWxkKGNvbnRlbnRQYWdlLCBvbGQpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFib3V0XCIpIHtcbiAgICBjb250ZW50UGFnZSA9IGFib3V0O1xuICAgIGJvZHkucmVwbGFjZUNoaWxkKGNvbnRlbnRQYWdlLCBvbGQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRQYWdlID0gaG9tZTtcbiAgICBib2R5LnJlcGxhY2VDaGlsZChjb250ZW50UGFnZSwgb2xkKTtcbiAgfVxufVxuXG5uYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGxldCBuYXZJdGVtTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkl0ZW1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYWdlU2VsZWN0aW9uKTtcbiAgbmF2SXRlbU5vZGUudGV4dENvbnRlbnQgPSBpdGVtO1xuICBuYXZJdGVtTm9kZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZJdGVtTm9kZSk7XG59KTtcblxuYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50UGFnZSk7XG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iLCJpbXBvcnQgZGlzaGVzIGZyb20gXCIuL2Rpc2hlc09ialwiO1xuXG5sZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tZW51LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xubWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxubGV0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5oZWFkMS50ZXh0Q29udGVudCA9IFwiUGF3d25lZXInc1wiO1xuaGVhZDEuY2xhc3NMaXN0LmFkZChcImN1cnNpdmVcIiwgXCJnb2xkZW5cIik7XG5tZW51LmFwcGVuZENoaWxkKGhlYWQxKTtcblxubGV0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaGVhZDIudGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcbmhlYWQyLmNsYXNzTGlzdC5hZGQoXCJncmF5XCIpO1xubWVudS5hcHBlbmRDaGlsZChoZWFkMik7XG5cbmxldCBoZWFkSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5oZWFkSFIuY2xhc3NMaXN0LmFkZChcImhlYWQtaHJcIik7XG5tZW51LmFwcGVuZENoaWxkKGhlYWRIUik7XG5cbmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgbGV0IG1lbnVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtZW51SGVhZC50ZXh0Q29udGVudCA9IGRpc2gudGl0bGU7XG4gIG1lbnVIZWFkLmNsYXNzTGlzdC5hZGQoXCJnb2xkZW5cIik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVIZWFkKTtcblxuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiZ3JheVwiKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IGAkICR7ZGlzaC5wcmljZX1gO1xuICBwcmljZS5jbGFzc0xpc3QuYWRkKFwiZ29sZGVuXCIpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgbGV0IG1lbnVIUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgbWVudUhSLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhyXCIpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SFIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=