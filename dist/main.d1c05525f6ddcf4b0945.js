/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n\\tmargin:0;\\r\\n\\tpadding:0;\\r\\n\\tbox-sizing:border-box;\\r\\n}\\r\\nbody {\\r\\n\\tbackground: rgb(20,20,20);\\r\\n}\\r\\ncanvas {\\r\\n\\tposition:absolute;\\r\\n\\tbackground:black;\\r\\n\\tcursor:crosshair;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tic-tac-toe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/util/canvas.js":
/*!****************************!*\
  !*** ./src/util/canvas.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = class Canvas {\r\n\tconstructor(width, height) {\r\n\t\tthis.canvas = document.createElement('canvas')\r\n\t\tthis.ctx = this.canvas.getContext('2d')\r\n\t\tthis.ctx.textAlign = 'center'\r\n\t\tthis.canvas.width = width\r\n\t\tthis.canvas.height = height\r\n\t\tthis.scale = this.resize()\r\n\t\tdocument.body.appendChild(this.canvas)\r\n\t}\r\n\tresize() {\r\n\t\tlet winw = window.innerWidth\r\n\t\tlet winh = window.innerHeight\r\n\t\tlet scale = Math.min(winw / this.canvas.width, winh / this.canvas.height)\r\n\t\tthis.canvas.style.transform = 'scale(' + scale + ')'\r\n\t\tthis.canvas.style.left = ( winw - this.canvas.width ) / 2 + 'px'\r\n\t\tthis.canvas.style.top = ( winh - this.canvas.height ) / 2 + 'px'\r\n\t\treturn scale\r\n\t}\r\n\tlisten(type, callback) {\r\n\t\tthis.canvas.addEventListener(type, callback)\r\n\t}\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/canvas.js?");

/***/ }),

/***/ "./src/util/cell.js":
/*!**************************!*\
  !*** ./src/util/cell.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = class Cell {\r\n\tconstructor(type = 'none') {\r\n\t\tthis.type = type === 'none' ? 'none' : type\r\n\t\tthis.color = 0\r\n\t}\r\n\tavail() {\r\n\t\treturn this.type === 'none'\r\n\t}\r\n\toccupy(type) {\r\n\t\tthis.type = type\r\n\t}\r\n\tupdate({mouse, delta}) {\r\n\t\t//this.color -= delta * 255\r\n\t}\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/cell.js?");

/***/ }),

/***/ "./src/util/constants.js":
/*!*******************************!*\
  !*** ./src/util/constants.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module) => {

eval("const GAME_WIDTH = 1600\r\nconst GAME_HEIGHT = 900\r\nconst CENTER_X = GAME_WIDTH / 2\r\nconst CENTER_Y = GAME_HEIGHT / 2\r\nconst SIZE = 3\r\nconst BACKGROUND_COLOR = 'rgb(220,220,220)'\r\nconst PADDING = 200\r\nconst CELL_WIDTH = Math.round(400 / SIZE)\r\nconst CELL_HEIGHT = Math.round(400 / SIZE)\r\nmodule.exports = { GAME_WIDTH, GAME_HEIGHT, CELL_WIDTH, CELL_HEIGHT, BACKGROUND_COLOR, CENTER_X, CENTER_Y, SIZE, PADDING}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/constants.js?");

/***/ }),

/***/ "./src/util/grid.js":
/*!**************************!*\
  !*** ./src/util/grid.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/util/cell.js\")\r\nmodule.exports = class Grid {\r\n\tconstructor(size = 3, matrix = [[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()]]) {\r\n\t\tthis.size = size\r\n\t\tthis.matrix = matrix\r\n\t}\r\n\tupdateCells({mouse}) {\r\n\t\tfor(let row in this.matrix) {\r\n\t\t\tfor(let col in this.matrix[row]) {\r\n\t\t\t\tconst cell = this.matrix[row][col]\r\n\t\t\t\tcell.update({mouse})\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tcopy() {\r\n\t\treturn new Grid(this.size,this.matrix)\r\n\t}\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/grid.js?");

/***/ }),

/***/ "./src/util/mouse.js":
/*!***************************!*\
  !*** ./src/util/mouse.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = class Mouse {\r\n\tconstructor() {\r\n\t\tthis.x = -1\r\n\t\tthis.y = -1\r\n\t\tthis.on = false\r\n\t}\r\n\tupdate({event, canvas}) {\r\n\t\tconst bound = canvas.canvas.getBoundingClientRect()\r\n\t\tthis.x = Math.round((event.pageX - bound.left) / canvas.scale)\r\n\t\tthis.y = Math.round((event.pageY - bound.top) / canvas.scale)\r\n\t}\r\n\tdown() {\r\n\t\tthis.on = true\r\n\t}\r\n\tup() {\r\n\t\tthis.on = false\r\n\t}\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/mouse.js?");

/***/ }),

/***/ "./src/util/render.js":
/*!****************************!*\
  !*** ./src/util/render.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { CELL_WIDTH, CELL_HEIGHT, BACKGROUND_COLOR, CENTER_X, CENTER_Y, SIZE, GAME_WIDTH, GAME_HEIGHT, PADDING } = __webpack_require__(/*! ./constants */ \"./src/util/constants.js\")\r\nmodule.exports = function render({canvas, grid, mouse, turn}) {\r\n\tif(!grid || !canvas) throw new Error('called from render... canvas || grid is not defined')\r\n\tcanvas.ctx.fillStyle = BACKGROUND_COLOR\r\n\tcanvas.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)\r\n\t//drawing the box\r\n\tconst x = CENTER_X - (CELL_WIDTH * (SIZE / 2))\r\n\tconst y = CENTER_Y - (CELL_HEIGHT * (SIZE / 2)) //assuming every index has the same length\r\n\tcanvas.ctx.strokeStyle = 'black'\r\n\tcanvas.ctx.lineWidth = 7\r\n\tcanvas.ctx.strokeRect(x, y,CELL_WIDTH * SIZE, CELL_HEIGHT * SIZE )\r\n\tlet clicked = false\r\n\tfor (let row in grid.matrix) {\r\n\t\tfor (let col in grid.matrix[row]) {\r\n\t\t\tconst cell = grid.matrix[row][col]\r\n\t\t\tconst cellX = x + row * CELL_WIDTH - 1\r\n\t\t\tconst cellY = y + col * CELL_HEIGHT - 1\r\n\t\t\tconst width = CELL_WIDTH + 1\r\n\t\t\tconst height = CELL_HEIGHT + 1\r\n\t\t\tif(mouse.x > cellX && mouse.x < cellX + width && mouse.y > cellY && mouse.y < cellY + height && cell.type === 'none') {\r\n\t\t\t\t//sorry i know this shouldn't be in render, ill probably find an alternative solution later\r\n\t\t\t\tcanvas.ctx.lineWidth = 10\r\n\t\t\t\tif(!clicked && mouse.on) {\r\n\t\t\t\t\tcell.type = turn\r\n\t\t\t\t\tclicked = true\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tcanvas.ctx.strokeStyle = `rgb(${cell.color},${cell.color},${cell.color})`\r\n\t\t\tcanvas.ctx.strokeRect( cellX, cellY, width, height)\r\n\t\t\tif(cell.type === 'O') {\r\n\t\t\t\tcanvas.ctx.lineWidth = 10\r\n\t\t\t\tcanvas.ctx.beginPath()\r\n\t\t\t\tcanvas.ctx.arc(cellX + width / 2, cellY + height / 2, 45, 0, Math.PI * 2)\r\n\t\t\t\tcanvas.ctx.stroke()\r\n\t\t\t}\r\n\t\t\tif(cell.type === 'X') {\r\n\t\t\t\tcanvas.ctx.lineWidth = 10\r\n\t\t\t\tconst padding = 20 //this is for the x type\r\n\t\t\t\tcanvas.ctx.beginPath()\r\n\t\t\t\tcanvas.ctx.lineTo(cellX + padding, cellY + padding)\r\n\t\t\t\tcanvas.ctx.lineTo(cellX + width - padding, cellY + height - padding)\r\n\t\t\t\tcanvas.ctx.stroke()\r\n\t\t\t\tcanvas.ctx.beginPath()\r\n\t\t\t\tcanvas.ctx.lineTo(cellX + width - padding, cellY + padding)\r\n\t\t\t\tcanvas.ctx.lineTo(cellX + padding, cellY + height - padding)\r\n\t\t\t\tcanvas.ctx.stroke()\r\n\t\t\t}\r\n\t\t\tcanvas.ctx.lineWidth = 6\r\n\t\t}\r\n\t}\r\n\tcanvas.ctx.fillStyle = 'black'\r\n\tcanvas.ctx.font = '30px sans-serif'\r\n\tcanvas.ctx.fillText(`It's ${turn}'s Turn!`, GAME_HEIGHT - PADDING, CENTER_X)\r\n\treturn clicked ? true : false\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/render.js?");

/***/ }),

/***/ "./src/util/time.js":
/*!**************************!*\
  !*** ./src/util/time.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = class Time {\r\n\tconstructor() {\r\n\t\tthis.lastTime = 0\r\n\t\tthis.delta = 0\r\n\t}\r\n\tupdate(now) {\r\n\t\tthis.delta = (now - this.lastTime) / 1000\r\n\t\tthis.lastTime = now\r\n\t}\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/time.js?");

/***/ }),

/***/ "./src/util/update.js":
/*!****************************!*\
  !*** ./src/util/update.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function update({mouse, grid, delta}) {\r\n\tgrid.updateCells({mouse, delta})\r\n}\n\n//# sourceURL=webpack://tic-tac-toe/./src/util/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\")\r\nconst { GAME_WIDTH, GAME_HEIGHT } = __webpack_require__(/*! ./util/constants.js */ \"./src/util/constants.js\")\r\nconst Canvas = __webpack_require__(/*! ./util/canvas */ \"./src/util/canvas.js\")\r\nconst Grid = __webpack_require__(/*! ./util/grid */ \"./src/util/grid.js\")\r\nconst Mouse = __webpack_require__(/*! ./util/mouse */ \"./src/util/mouse.js\")\r\nconst Time = __webpack_require__(/*! ./util/time */ \"./src/util/time.js\")\r\nconst render = __webpack_require__(/*! ./util/render */ \"./src/util/render.js\")\r\nconst update = __webpack_require__(/*! ./util/update */ \"./src/util/update.js\")\r\nconst canvas = new Canvas(GAME_WIDTH, GAME_HEIGHT)\r\nconst grid = new Grid()\r\nconst mouse = new Mouse()\r\nconst time = new Time()\r\nlet turn = 'X'\r\n\r\nwindow.addEventListener('resize', ()=>{\r\n\tcanvas.resize()\r\n})\r\ncanvas.listen('mousemove', (event) => mouse.update({event, canvas}))\r\ncanvas.listen('mousedown', () => mouse.down())\r\ncanvas.listen('mouseup', () => mouse.up())\r\nfunction nextTurn(turn) {\r\n\treturn turn === 'X'? 'O': 'X'\r\n}\r\n(function run(now) {\r\n\ttime.update(now)\r\n\tupdate({mouse, grid, delta:time.delta})\r\n\tconst next = render({canvas, grid, mouse, turn})\r\n\tif(next) turn = nextTurn(turn)\r\n\trequestAnimationFrame(run)\r\n})()\n\n//# sourceURL=webpack://tic-tac-toe/./src/index.js?");
})();

/******/ })()
;