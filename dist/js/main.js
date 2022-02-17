/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';\nvar suggestions = document.querySelector('.suggestions');\nvar searchForm = document.querySelector('.search-form');\nvar search = document.getElementById('search');\nvar cities = [];\n\nif (window.fetch) {\n  fetch(endpoint).then(function (response) {\n    if (response.status === 200) {\n      response.json().then(function (result) {\n        cities.push.apply(cities, _toConsumableArray(result)); // évite d'écrire une boucle\n      });\n    } else {\n      console.error(\"Oops ! \".concat(response.status));\n    }\n  })[\"catch\"](function (error) {\n    console.log(\"Ouch ! \".concat(error));\n  });\n} else {//\n}\n\nsearchForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n});\nsearch.addEventListener('keyup', function (e) {\n  displayMatches(e.currentTarget.value); // TODO vide\n});\n\nfunction findMatches(wordToMatch) {\n  return cities.filter(function (place) {\n    var regex = new RegExp(wordToMatch, 'gi'); // pattern : le mot qu'on recherche\n\n    return place.city.match(regex) || place.state.match(regex);\n  });\n}\n\nfunction numberWithSpace(x) {\n  return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\n}\n\nfunction displayMatches(wordToMatch) {\n  suggestions.innerHTML = findMatches(wordToMatch).map(function (item) {\n    var regex = new RegExp(wordToMatch, 'gi');\n    return \"<li>\\n                    <span class=\\\"name\\\">\\n                        \".concat(item.city.replace(regex, \"<span class=\\\"hl\\\">\".concat(wordToMatch, \"</span>\")), \",\\n                        \").concat(item.state.replace(regex, \"<span class=\\\"hl\\\">\".concat(wordToMatch, \"</span>\")), \"\\n                    </span>\\n                    <span class=\\\"population\\\">\").concat(numberWithSpace(item.population), \"</span>\\n                </li>\");\n  }).join('');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10cC1mZXRjaC1jaXRpZXMvLi9zcmMvanMvbWFpbi5qcz81Njg3Il0sIm5hbWVzIjpbImVuZHBvaW50Iiwic3VnZ2VzdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hGb3JtIiwic2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaXRpZXMiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXlNYXRjaGVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZmluZE1hdGNoZXMiLCJ3b3JkVG9NYXRjaCIsImZpbHRlciIsInBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJjaXR5IiwibWF0Y2giLCJzdGF0ZSIsIm51bWJlcldpdGhTcGFjZSIsIngiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJtYXAiLCJpdGVtIiwicG9wdWxhdGlvbiIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBRywySEFBakI7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFwQjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLElBQUdDLE1BQU0sQ0FBQ0MsS0FBVixFQUFpQjtBQUNiQSxFQUFBQSxLQUFLLENBQUNULFFBQUQsQ0FBTCxDQUNLVSxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsUUFBR0EsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXZCLEVBQTRCO0FBQ3hCRCxNQUFBQSxRQUFRLENBQUNFLElBQVQsR0FBZ0JILElBQWhCLENBQXFCLFVBQUFJLE1BQU0sRUFBSTtBQUMzQlAsUUFBQUEsTUFBTSxDQUFDUSxJQUFQLE9BQUFSLE1BQU0scUJBQVNPLE1BQVQsRUFBTixDQUQyQixDQUNKO0FBQzFCLE9BRkQ7QUFHSCxLQUpELE1BSU87QUFDSEUsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLGtCQUF3Qk4sUUFBUSxDQUFDQyxNQUFqQztBQUNIO0FBQ0osR0FUTCxXQVVXLFVBQUFLLEtBQUssRUFBSTtBQUNaRCxJQUFBQSxPQUFPLENBQUNFLEdBQVIsa0JBQXNCRCxLQUF0QjtBQUNILEdBWkw7QUFhSCxDQWRELE1BY08sQ0FDTjtBQUNBOztBQUdEYixVQUFVLENBQUNlLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztBQUN6Q0EsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0gsQ0FGRDtBQUdBaEIsTUFBTSxDQUFDYyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDQyxDQUFELEVBQU87QUFDcENFLEVBQUFBLGNBQWMsQ0FBQ0YsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxLQUFqQixDQUFkLENBRG9DLENBQ0U7QUFDekMsQ0FGRDs7QUFJQSxTQUFTQyxXQUFULENBQXFCQyxXQUFyQixFQUFrQztBQUM5QixTQUFPbkIsTUFBTSxDQUFDb0IsTUFBUCxDQUFjLFVBQUFDLEtBQUssRUFBSTtBQUMxQixRQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXSixXQUFYLEVBQXdCLElBQXhCLENBQWQsQ0FEMEIsQ0FDa0I7O0FBQzVDLFdBQU9FLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLENBQWlCSCxLQUFqQixLQUEyQkQsS0FBSyxDQUFDSyxLQUFOLENBQVlELEtBQVosQ0FBa0JILEtBQWxCLENBQWxDO0FBQ0gsR0FITSxDQUFQO0FBSUg7O0FBRUQsU0FBU0ssZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsU0FBT0EsQ0FBQyxDQUFDQyxRQUFGLEdBQWFDLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDLEdBQTlDLENBQVA7QUFDSDs7QUFFRCxTQUFTZixjQUFULENBQXdCSSxXQUF4QixFQUFxQztBQUNqQ3pCLEVBQUFBLFdBQVcsQ0FBQ3FDLFNBQVosR0FBd0JiLFdBQVcsQ0FBQ0MsV0FBRCxDQUFYLENBQXlCYSxHQUF6QixDQUE2QixVQUFBQyxJQUFJLEVBQUk7QUFDekQsUUFBTVgsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBV0osV0FBWCxFQUF3QixJQUF4QixDQUFkO0FBQ0EsOEZBRWtCYyxJQUFJLENBQUNULElBQUwsQ0FBVU0sT0FBVixDQUFrQlIsS0FBbEIsK0JBQTRDSCxXQUE1QyxhQUZsQix3Q0FHa0JjLElBQUksQ0FBQ1AsS0FBTCxDQUFXSSxPQUFYLENBQW1CUixLQUFuQiwrQkFBOENILFdBQTlDLGFBSGxCLDJGQUt1Q1EsZUFBZSxDQUFDTSxJQUFJLENBQUNDLFVBQU4sQ0FMdEQ7QUFPSCxHQVR1QixFQVNyQkMsSUFUcUIsQ0FTaEIsRUFUZ0IsQ0FBeEI7QUFVSCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vTWlzZXJsb3UvYzVjZDgzNjRiZjliMjQyMGJiMjkvcmF3LzJiZjI1ODc2M2NkZGRkNzA0ZjhmZmQzZWE5YTNlODFkMjVlMmM2ZjYvY2l0aWVzLmpzb24nXG5jb25zdCBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWdnZXN0aW9ucycpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgY2l0aWVzID0gW11cblxuaWYod2luZG93LmZldGNoKSB7XG4gICAgZmV0Y2goZW5kcG9pbnQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0aWVzLnB1c2goLi4ucmVzdWx0KSAvLyDDqXZpdGUgZCfDqWNyaXJlIHVuZSBib3VjbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBPb3BzICEgJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdWNoICEgJHtlcnJvcn1gKVxuICAgICAgICB9KVxufSBlbHNlIHtcbiAvL1xufVxuXG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbn0pXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGRpc3BsYXlNYXRjaGVzKGUuY3VycmVudFRhcmdldC52YWx1ZSkgLy8gVE9ETyB2aWRlXG59KVxuXG5mdW5jdGlvbiBmaW5kTWF0Y2hlcyh3b3JkVG9NYXRjaCkge1xuICAgIHJldHVybiBjaXRpZXMuZmlsdGVyKHBsYWNlID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCAnZ2knKSAvLyBwYXR0ZXJuIDogbGUgbW90IHF1J29uIHJlY2hlcmNoZVxuICAgICAgICByZXR1cm4gcGxhY2UuY2l0eS5tYXRjaChyZWdleCkgfHwgcGxhY2Uuc3RhdGUubWF0Y2gocmVnZXgpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbnVtYmVyV2l0aFNwYWNlKHgpIHtcbiAgICByZXR1cm4geC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcgJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYXRjaGVzKHdvcmRUb01hdGNoKSB7XG4gICAgc3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gZmluZE1hdGNoZXMod29yZFRvTWF0Y2gpLm1hcChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCAnZ2knKVxuICAgICAgICByZXR1cm4gYDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uY2l0eS5yZXBsYWNlKHJlZ2V4LGA8c3BhbiBjbGFzcz1cImhsXCI+JHt3b3JkVG9NYXRjaH08L3NwYW4+YCl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnN0YXRlLnJlcGxhY2UocmVnZXgsIGA8c3BhbiBjbGFzcz1cImhsXCI+JHt3b3JkVG9NYXRjaH08L3NwYW4+YCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1bGF0aW9uXCI+JHtudW1iZXJXaXRoU3BhY2UoaXRlbS5wb3B1bGF0aW9uKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5gXG4gICAgfSkuam9pbignJylcbn1cblxuIl0sImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtdHAtZmV0Y2gtY2l0aWVzLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2E3NjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjs_tp_fetch_cities"] = self["webpackChunkjs_tp_fetch_cities"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;