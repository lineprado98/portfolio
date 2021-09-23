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

/***/ "./public/images/atena.png":
/*!*********************************!*\
  !*** ./public/images/atena.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/atena-659025fedb10456b89df749523d492ad.png";

/***/ }),

/***/ "./public/images/perfil-3.jpeg":
/*!*************************************!*\
  !*** ./public/images/perfil-3.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/perfil-3-52b7d835281450b1ebf48e261558cf96.jpeg";

/***/ }),

/***/ "./src/components/About/index.js":
/*!***************************************!*\
  !*** ./src/components/About/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/About/style.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\About\\index.js";



const Sobre = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Sobre);

/***/ }),

/***/ "./src/components/About/style.js":
/*!***************************************!*\
  !*** ./src/components/About/style.js ***!
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
  componentId: "sc-5bplgx-0"
})(["text-aling:center;color:white;text-justify:center;font-size:30px;margin:7% 5% 0% 0%;@media(max-width:768px){width:300px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Sobre);

/***/ }),

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
/* harmony import */ var _public_images_perfil_3_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/images/perfil-3.jpeg */ "./public/images/perfil-3.jpeg");
/* harmony import */ var _public_images_perfil_3_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_perfil_3_jpeg__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Avatar\\index.js";



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Avatar_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _public_images_perfil_3_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
})(["img{object-fit:cover;border-radius:50%;width:250px;height:250px;}"]);
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
})(["display:flex;justify-content:space-around;.item{text-align:center;font-size:1.5em;height:50%;margin-top:11%;width:35%;span{margin:5px;color:white;}.content{padding:30px;}}@media(max-width:768px){display:flex;flex-direction:column;.item span{margin:5px;}}"]);
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

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/style */ "./src/components/Header/style.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu/index.js");

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Header\\index.js";




const Header = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/style.js":
/*!****************************************!*\
  !*** ./src/components/Header/style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Header",
  componentId: "sc-1wwns07-0"
})(["position:fixed;width:100%;height:9%;background:#111111;.opac{opacity:1;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/style */ "./src/components/Menu/style.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\components\\Menu\\index.js";





const Menu = () => {
  // margin - right: auto;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sociais",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLinkedinIn"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 30
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaGithub"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 30
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
            activeClass: "active",
            to: "inicio",
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            children: "Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
            activeClass: "active",
            to: "about",
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
            activeClass: "active",
            to: "exp",
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Menu/style.js":
/*!**************************************!*\
  !*** ./src/components/Menu/style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Menu",
  componentId: "sc-5a4hvt-0"
})(["font-size:25px;.sociais{display:flex;margin-right:auto;}li{color:#acb5b5;padding:5px 0px 5px 60px;}li:hover{color:white;opacity:1!important;}ul{justify-content:flex-end;padding-right:13%;margin:5px 0px 0px 0px;list-style:none;display:flex;}@media(max-width:768px){li{padding:10px;}ul{justify-content:center;padding-right:10%;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (Menu);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    background: background,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
/* harmony import */ var _public_images_atena_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/images/atena.png */ "./public/images/atena.png");
/* harmony import */ var _public_images_atena_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_atena_png__WEBPACK_IMPORTED_MODULE_2__);



const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__Section",
  componentId: "hd1tow-0"
})(["background:", ";height:660px;width:-webkit - fill - available;.item-faixa{height:482px;margin-top:35%!important;}h3{margin:0px!important;}.section-header{background-Image:url(", ");background-repeat:no-repeat;background-size:100%;height:100%}.experiencias{justify-content:center;font-size:25px;display:flex;padding:5% 5% 5% 35%;.item-exp{width:70%;}}@media(max-width:768px){height:100%;.item-faixa{height:10%;}.section-header{height:100%;}.experiencias{justfy-content:center;padding:0px;.item-exp{width:90%}}}"], props => props.background ? props.background : "#222929", _public_images_atena_png__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Section);

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
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About */ "./src/components/About/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Faixa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Faixa */ "./src/components/Faixa/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Projetos-ALINE\\portfolio\\src\\pages\\index.js";












function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section___WEBPACK_IMPORTED_MODULE_3__["default"], {
      background: '#1b1c23',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "inicio",
        className: "section-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Faixa__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "item item-faixa subir",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "  Aline Prado Barbosa  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "flex",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  styled: "font-size:20px",
                  children: " Desenvolvedora"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section___WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "about",
        className: "experiencias correr ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "item-exp ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Sou desenvolvedora Junior, com dois anos de experi\xEAncia na empresa DOWHILE. Tenho 22 anos, atualmente estou cursando An\xE1lise e desenvolvimento de Sistemas no 4\xBA semestre na Institui\xE7\xE3o Fadergs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

{
  /* <script> */
}
console.log('aqui'); // </script>

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

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9hdGVuYS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9wZXJmaWwtMy5qcGVnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fib3V0L3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F2YXRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdmF0YXIvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWl4YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWl4YS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU29icmUiLCJjaGlsZHJlbiIsIlN0eWxlZCIsImRpdiIsImltZyIsIkF2YXRhciIsIkNvbnRhaW5lciIsIkZhaXhhIiwiU2VjdGlvbiIsIkhlYWRlciIsInN0eWxlZCIsIk1lbnUiLCJiYWNrZ3JvdW5kIiwicHJvcHMiLCJmdW5kbyIsIkluZGV4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLG1GOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXRlbmEtNjU5MDI1ZmVkYjEwNDU2Yjg5ZGY3NDk1MjNkNDkyYWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BlcmZpbC0zLTUyYjdkODM1MjgxNDUwYjFlYmY0OGUyNjE1NThjZjk2LmpwZWdcIjsiLCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IFNvYnJlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPFN0eWxlPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICA8L1N0eWxlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2JyZSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBTb2JyZSA9IFN0eWxlZC5kaXZgXHJcblxyXG4gIHRleHQtYWxpbmc6Y2VudGVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtanVzdGlmeTpjZW50ZXI7XHJcbiAgZm9udC1zaXplOjMwcHg7XHJcbiAgbWFyZ2luOiA3JSA1JSAwJSAwJTtcclxuICBcclxuICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFNvYnJlIiwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vQXZhdGFyL3N0eWxlJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvcGVyZmlsLTMuanBlZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0F2YXRhcj4pXHJcblxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQXZhdGFyID0gU3R5bGVkLmRpdmBcclxuXHJcbiAgICBcclxuICBpbWd7XHJcbiAgIG9iamVjdC1maXQ6IGNvdmVyOyAgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6MjUwcHg7XHJcbiAgfSAgXHJcblxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhclxyXG4iLCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vQ29udGFpbmVyL3N0eWxlJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPFN0eWxlPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGU+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lciIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG5cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgLml0ZW0geyAgICAgIFxyXG5cdC8qIE8gZmxleDogMTsgw6kgbmVjZXNzw6FyaW8gcGFyYSBxdWUgY2FkYSBpdGVtIHNlIGV4cGFuZGEgb2N1cGFuZG8gbyB0YW1hbmhvIG3DoXhpbW8gZG8gY29udGFpbmVyLiAqL1xyXG4vL1x0ZmxleDogMC4zOyBcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMSU7XHJcbiAgICB3aWR0aDozNSU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5pdGVtIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXIiLCJcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL0ZhaXhhL3N0eWxlJ1xyXG5cclxuY29uc3QgRmFpeGEgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8U3R5bGUgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICA8L1N0eWxlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWl4YSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBTZWN0aW9uID0gU3R5bGVkLmRpdmBcclxuXHJcblxyXG5tYXJnaW4tcmlndGg6NSU7XHJcblxyXG4gIFxyXG4gICAgXHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL0hlYWRlci9zdHlsZSdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgIDwvU3R5bGU+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuIHBvc2l0aW9uOmZpeGVkO1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6OSU7XHJcbiBiYWNrZ3JvdW5kOiMxMTExMTE7XHJcblxyXG4gLm9wYWMge1xyXG4gICAgb3BhY2l0eSA6IDE7XHJcbiB9XHJcblxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9NZW51L3N0eWxlJ1xyXG5pbXBvcnQgeyBMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgRmFMaW5rZWRpbkluLCBGYUdpdGh1YiwgRmFJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgLy8gbWFyZ2luIC0gcmlnaHQ6IGF1dG87XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhaXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8RmFMaW5rZWRpbkluIC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxGYUdpdGh1YiAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPEZhSW5zdGFncmFtIC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cImluaWNpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5TdGFydDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cImFib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiZXhwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNvbnRhY3Q8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9TdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnUiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkLmRpdmBcclxuXHJcbmZvbnQtc2l6ZToyNXB4O1xyXG4gLnNvY2lhaXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gfVxyXG4gbGl7XHJcbiAgICAgY29sb3I6I2FjYjViNTtcclxuICAgICBwYWRkaW5nOjVweCAwcHggNXB4IDYwcHg7XHJcbiB9XHJcbiBsaTpob3ZlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eToxIWltcG9ydGFudDtcclxuIH1cclxuIHVse1xyXG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMTMlO1xyXG4gICAgIG1hcmdpbjo1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgbGlzdC1zdHlsZTogbm9uZTsgLy8gcmVtb3ZlIGEgbWFyY2HDp8OjbyBkZSBsaXN0YVxyXG4gICAgIGRpc3BsYXk6ZmxleDtcclxuIH1cclxuXHJcbiBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB9IFxyXG4gICAgdWwge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnUiLCJcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL1NlY3Rpb24vc3R5bGUnXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGJhY2tncm91bmQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8IFN0eWxlIGJhY2tncm91bmQ9e2JhY2tncm91bmR9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgIDwvU3R5bGUgPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGZ1bmRvIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2F0ZW5hLnBuZ1wiXHJcbmNvbnN0IFNlY3Rpb24gPSBTdHlsZWQuZGl2YFxyXG5cclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAkeyAocHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZCA/IHByb3BzLmJhY2tncm91bmQgOiBcIiMyMjI5MjlcIil9O1xyXG5cclxuICAgIGhlaWdodDogNjYwcHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdCAtIGZpbGwgLSBhdmFpbGFibGU7XHJcbiAgICAuaXRlbS1mYWl4YSB7XHJcbiAgICBoZWlnaHQ6IDQ4MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzUlIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgIGJhY2tncm91bmQtSW1hZ2U6dXJsKCR7ZnVuZG99KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAuZXhwZXJpZW5jaWFzIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA1JSA1JSA1JSAzNSU7XHJcblxyXG4gICAgICAgIC5pdGVtLWV4cCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5pdGVtLWZhaXhhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgLy8gRWZlaXRvIGNvcnRlIGZhaXhhIGRvIGF2YXRhclxyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4cGVyaWVuY2lhc3tcclxuICAgICAgICAgICBqdXN0ZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIC5pdGVtLWV4cHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiBcclxuXHJcblxyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXZhdGFyJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24vJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcidcclxuaW1wb3J0IEZhaXhhIGZyb20gJy4uL2NvbXBvbmVudHMvRmFpeGEnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IHsgQnNTbGFzaCwgQnNDb2RlU2xhc2gsIEJzQ29kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXHJcbmltcG9ydCB7IEZhQW5nbGVMZWZ0LCBGYUFuZ2xlUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNZW51PjwvTWVudT5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8U2VjdGlvbiBiYWNrZ3JvdW5kPXsnIzFiMWMyMyd9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbmljaW9cIiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWl4YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtIGl0ZW0tZmFpeGEgc3ViaXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPjwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFpeGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gIEFsaW5lIFByYWRvIEJhcmJvc2EgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVkPVwiZm9udC1zaXplOjIwcHhcIj4gRGVzZW52b2x2ZWRvcmE8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BYm91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8U2VjdGlvbiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJleHBlcmllbmNpYXMgY29ycmVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1leHAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291IGRlc2Vudm9sdmVkb3JhIEp1bmlvciwgY29tIGRvaXMgYW5vcyBkZSBleHBlcmnDqm5jaWEgbmEgZW1wcmVzYSBET1dISUxFLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuaG8gMjIgYW5vcywgYXR1YWxtZW50ZSBlc3RvdSBjdXJzYW5kbyBBbsOhbGlzZSBlIGRlc2Vudm9sdmltZW50byBkZSBTaXN0ZW1hcyBubyA0wrogc2VtZXN0cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hIEluc3RpdHVpw6fDo28gRmFkZXJncy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcblxyXG59XHJcbnsvKiA8c2NyaXB0PiAqLyB9XHJcbmNvbnNvbGUubG9nKCdhcXVpJyk7XHJcbi8vIDwvc2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9