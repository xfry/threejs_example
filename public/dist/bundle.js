/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./public/javascripts/src/app.js":
/*!***************************************!*\
  !*** ./public/javascripts/src/app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst canvas = document.querySelector(\"canvas.webgl\");\r\nconst Renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\r\n  canvas: canvas\r\n});\r\n\r\nlet settings = {\r\n  width: 800,\r\n  height: 600,\r\n  near: 1,\r\n  far: 1000,\r\n  aspect: 0,\r\n  fov: 45,\r\n};\r\nsettings.aspect = (settings.width/settings.height);\r\n\r\nconst Scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nconst cubeGeo = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1,1,1);\r\nconst cubeMat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\r\n  color: 0x0ff0000,\r\n});\r\n\r\nlet cubeMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(cubeGeo, cubeMat);\r\n\r\nconst Camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( settings.fov, settings.aspect, settings.near, settings.far);\r\nCamera.position.z = 3;\r\n\r\nScene.add(Camera);\r\nScene.add(cubeMesh);\r\nRenderer.setSize(settings.width, settings.height);\r\nRenderer.render(Scene, Camera);\n\n//# sourceURL=webpack://1-basic/./public/javascripts/src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/src/app.js");
/******/ 	
/******/ })()
;