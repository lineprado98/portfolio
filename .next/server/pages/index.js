module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/Avatar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar/style */ "./src/components/Avatar/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Avatar\\index.js";


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Avatar_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://scontent.fpoa31-1.fna.fbcdn.net/v/t1.0-9/123576236_3477206379011214_6172465767219113644_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHnpFTpl0-8xpl6XkXXwWNWhJYi2glVCraEliLaCVUKtrhQecpD3weIA-XWQP3C7NeuIPaJCp_95FVLExMBjo01&_nc_ohc=_JcFLvEi7dgAX9j6BH1&_nc_ht=scontent.fpoa31-1.fna&oh=8dc1d7ea60989ebe245022ddbb645aad&oe=60042F71"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./src/components/Avatar/style.js":
/*!****************************************!*\
  !*** ./src/components/Avatar/style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Avatar",
  componentId: "sc-1sfo98v-0"
})(["img{border-radius:50%;width:250px;height:250px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container/style */ "./src/components/Container/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Container\\index.js";



const Container = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Container_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Container/style.js":
/*!*******************************************!*\
  !*** ./src/components/Container/style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1nn40a8-0"
})(["display:flex;justify-content:space-around;.item{flex:0.3;text-align:center;font-size:1.5em;span{margin:5px;color:white;}.content{padding:30px;}}@media(max-width:768px){display:grid!important;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Faixa/index.js":
/*!***************************************!*\
  !*** ./src/components/Faixa/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Faixa_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Faixa/style */ "./src/components/Faixa/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Faixa\\index.js";



const Faixa = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Faixa_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Faixa);

/***/ }),

/***/ "./src/components/Faixa/style.js":
/*!***************************************!*\
  !*** ./src/components/Faixa/style.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Section",
  componentId: "sndk69-0"
})(["margin-rigth:5%;"]);
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Section/index.js":
/*!*****************************************!*\
  !*** ./src/components/Section/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section/style */ "./src/components/Section/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Section\\index.js";



const Section = ({
  children,
  background
}) => {
  console.log('--', background);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    background: background,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Section/style.js":
/*!*****************************************!*\
  !*** ./src/components/Section/style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Section",
  componentId: "hd1tow-0"
})(["background:", ";height:320px;display:inline - grid;width:-webkit - fill - available;.item-faixa{background:#030323;height:482px;}"], props => props.background ? props.background : "#222929");
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Sobre/index.js":
/*!***************************************!*\
  !*** ./src/components/Sobre/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sobre_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sobre/style */ "./src/components/Sobre/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Sobre\\index.js";



const Sobre = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sobre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Sobre);

/***/ }),

/***/ "./src/components/Sobre/style.js":
/*!***************************************!*\
  !*** ./src/components/Sobre/style.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Sobre = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Sobre",
  componentId: "sc-1xehc2i-0"
})(["text-aling:center;color:white;text-justify:center;font-size:30px;padding:30px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Sobre);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Avatar */ "./src/components/Avatar/index.js");
/* harmony import */ var _components_Section___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section/ */ "./src/components/Section/index.js");
/* harmony import */ var _components_Sobre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sobre */ "./src/components/Sobre/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Faixa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Faixa */ "./src/components/Faixa/index.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\pages\\index.js";







function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section___WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Faixa__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item item-faixa",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sobre__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Aline Prado Barbosa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "spann",
              children: " Dev Full Stack"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section___WEBPACK_IMPORTED_MODULE_3__["default"], {
      background: "#dedeea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXZhdGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F2YXRhci9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZhaXhhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZhaXhhL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb2JyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb2JyZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkF2YXRhciIsIlN0eWxlZCIsImRpdiIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiRmFpeGEiLCJTZWN0aW9uIiwiYmFja2dyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIlNvYnJlIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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SDs7QUFFY0Esb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL0F2YXRhci9zdHlsZSdcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Njb250ZW50LmZwb2EzMS0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTIzNTc2MjM2XzM0NzcyMDYzNzkwMTEyMTRfNjE3MjQ2NTc2NzIxOTExMzY0NF9vLmpwZz9fbmNfY2F0PTEwOCZjY2I9MiZfbmNfc2lkPTA5Y2JmZSZfbmNfZXVpMj1BZUhucEZUcGwwLTh4cGw2WGtYWHdXTldoSllpMmdsVkNyYUVsaUxhQ1ZVS3RyaFFlY3BEM3dlSUEtWFdRUDNDN05ldUlQYUpDcF85NUZWTEV4TUJqbzAxJl9uY19vaGM9X0pjRkx2RWk3ZGdBWDlqNkJIMSZfbmNfaHQ9c2NvbnRlbnQuZnBvYTMxLTEuZm5hJm9oPThkYzFkN2VhNjA5ODllYmUyNDUwMjJkZGJiNjQ1YWFkJm9lPTYwMDQyRjcxXCI+PC9pbWc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZXVhbWlnb3BldC5jb20uYnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvcGl0YnVsbC10ZXJyaWVyLWFtJUMzJUE5cmljYWluLTgwOTE2ODQzLmpwZ1wiPjwvaW1nPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BdmF0YXI+KVxyXG5cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEF2YXRhciA9IFN0eWxlZC5kaXZgXHJcblxyXG4gICAgXHJcbiAgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDoyNTBweDtcclxuICB9ICBcclxuXHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXHJcbiIsIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9Db250YWluZXIvc3R5bGUnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8U3R5bGU+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgIDwvU3R5bGU+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lciIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIFxyXG4gICAgLml0ZW0geyAgICAgIFxyXG5cdC8qIE8gZmxleDogMTsgw6kgbmVjZXNzw6FyaW8gcGFyYSBxdWUgY2FkYSBpdGVtIHNlIGV4cGFuZGEgb2N1cGFuZG8gbyB0YW1hbmhvIG3DoXhpbW8gZG8gY29udGFpbmVyLiAqL1xyXG5cdGZsZXg6IDAuMzsgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICBjb2xvciA6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgIGRpc3BsYXk6IGdyaWQhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyIiwiXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9GYWl4YS9zdHlsZSdcclxuXHJcbmNvbnN0IEZhaXhhID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPFN0eWxlID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgPC9TdHlsZT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFpeGEiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IFN0eWxlZC5kaXZgXHJcblxyXG5cclxubWFyZ2luLXJpZ3RoOjUlO1xyXG5cclxuICBcclxuICAgIFxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25cclxuIiwiXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9TZWN0aW9uL3N0eWxlJ1xyXG5cclxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBiYWNrZ3JvdW5kIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCctLScsIGJhY2tncm91bmQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDwgU3R5bGUgYmFja2dyb3VuZD17YmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgPC9TdHlsZSA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuXHJcbmNvbnN0IFNlY3Rpb24gPSBTdHlsZWQuZGl2YFxyXG5cclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAkeyAocHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZCA/IHByb3BzLmJhY2tncm91bmQgOiBcIiMyMjI5MjlcIil9O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZSAtIGdyaWQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdCAtIGZpbGwgLSBhdmFpbGFibGU7XHJcblxyXG5cclxuICAgIC5pdGVtLWZhaXhhIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMzAzMjM7XHJcbiAgICBoZWlnaHQ6IDQ4MnB4O1xyXG5cclxufVxyXG5cclxuYFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uXHJcbiIsIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9Tb2JyZS9zdHlsZSdcclxuXHJcbmNvbnN0IFNvYnJlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPFN0eWxlPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICA8L1N0eWxlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2JyZSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBTb2JyZSA9IFN0eWxlZC5kaXZgXHJcblxyXG4gIHRleHQtYWxpbmc6Y2VudGVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtanVzdGlmeTpjZW50ZXI7XHJcbiAgZm9udC1zaXplOjMwcHg7XHJcbiAgcGFkZGluZzozMHB4O1xyXG5cclxuXHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgU29icmUiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL0F2YXRhcidcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLydcclxuaW1wb3J0IFNvYnJlIGZyb20gJy4uL2NvbXBvbmVudHMvU29icmUnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInXHJcbmltcG9ydCBGYWl4YSBmcm9tICcuLi9jb21wb25lbnRzL0ZhaXhhJ1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFpeGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtIGl0ZW0tZmFpeGEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj48L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhaXhhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFsaW5lIFByYWRvIEJhcmJvc2E8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbm5cIj4gRGV2IEZ1bGwgU3RhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU29icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZXVhbWlnb3BldC5jb20uYnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvcGl0YnVsbC10ZXJyaWVyLWFtJUMzJUE5cmljYWluLTgwOTE2ODQzLmpwZ1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIGJhY2tncm91bmQ9XCIjZGVkZWVhXCI+PC9TZWN0aW9uPlxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==