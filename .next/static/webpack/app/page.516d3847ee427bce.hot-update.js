"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/marker/marker.tsx":
/*!******************************************!*\
  !*** ./app/components/marker/marker.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoLocationSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IoLocationSharp!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n\n\n\nconst convertBufferToImage = (imageData)=>{\n    if (!imageData) {\n        return null;\n    }\n    const uint8Array = new Uint8Array(imageData.data);\n    const blob = new Blob([\n        uint8Array\n    ], {\n        type: imageData.type\n    });\n    const imageUrl = URL.createObjectURL(blob);\n    return imageUrl;\n};\nconst MyComponent = (param)=>{\n    let { factory } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute w-[200px] h-[400px] ml-[50px] cursor-pointer group\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-5 h-5 bg-white rounded-full object-fill\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-5 h-5 rounded-full\",\n                    src: convertBufferToImage(factory.featuredImage),\n                    alt: factory.name\n                }, void 0, false, {\n                    fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content z-50 absolute rounded-xl bottom-0 left-0 w-[300px] bg-[#1F93C7] text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[275px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: factory.shortVideo,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: factory.name\n                            }, void 0, false, {\n                                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mt-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLocationSharp_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoLocationSharp, {\n                                        size: 18,\n                                        color: \"white\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"ml-1 text-xs\",\n                                        children: factory.address\n                                    }, void 0, false, {\n                                        fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs mt-2 text-wrap\",\n                                children: factory.description\n                            }, void 0, false, {\n                                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-white text-[#FE3B1F] text-sm px-4 py-2 rounded-full\",\n                                    children: \"View Tour\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pahadi/Desktop/polycab-frontend-page-router/polycab_user_frontend/app/components/marker/marker.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\nvar _c;\n$RefreshReg$(_c, \"MyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21hcmtlci9tYXJrZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUN3QjtBQUVsRCxNQUFNRSx1QkFBdUIsQ0FBQ0M7SUFDNUIsSUFBSSxDQUFDQSxXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUMsYUFBYSxJQUFJQyxXQUFXRixVQUFVRyxJQUFJO0lBQ2hELE1BQU1DLE9BQU8sSUFBSUMsS0FBSztRQUFDSjtLQUFXLEVBQUU7UUFBRUssTUFBTU4sVUFBVU0sSUFBSTtJQUFDO0lBQzNELE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQ0w7SUFDckMsT0FBT0c7QUFDVDtBQUVBLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7SUFDOUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7b0JBQXVCRSxLQUFLaEIscUJBQXFCWSxRQUFRSyxhQUFhO29CQUFHQyxLQUFLTixRQUFRTyxJQUFJOzs7Ozs7Ozs7OzswQkFJM0csOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJQyxLQUFLSixRQUFRUSxVQUFVOzRCQUFFRixLQUFJOzs7Ozs7Ozs7OztrQ0FFcEMsOERBQUNMO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087MENBQUlULFFBQVFPLElBQUk7Ozs7OzswQ0FDakIsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2YsbUdBQWVBO3dDQUFDdUIsTUFBTTt3Q0FBSUMsT0FBTTs7Ozs7O2tEQUNqQyw4REFBQ0M7d0NBQUVWLFdBQVU7a0RBQWdCRixRQUFRYSxPQUFPOzs7Ozs7Ozs7Ozs7MENBRTlDLDhEQUFDRDtnQ0FBRVYsV0FBVTswQ0FBMEJGLFFBQVFjLFdBQVc7Ozs7OzswQ0FDMUQsOERBQUNiO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYTtvQ0FBT2IsV0FBVTs4Q0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGO0tBMUJNSDtBQTRCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYXJrZXIvbWFya2VyLnRzeD84MmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJb0xvY2F0aW9uU2hhcnAgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnO1xuXG5jb25zdCBjb252ZXJ0QnVmZmVyVG9JbWFnZSA9IChpbWFnZURhdGEpID0+IHtcbiAgaWYgKCFpbWFnZURhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoaW1hZ2VEYXRhLmRhdGEpO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3VpbnQ4QXJyYXldLCB7IHR5cGU6IGltYWdlRGF0YS50eXBlIH0pO1xuICBjb25zdCBpbWFnZVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIHJldHVybiBpbWFnZVVybDtcbn07XG5cbmNvbnN0IE15Q29tcG9uZW50ID0gKHsgZmFjdG9yeSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVsyMDBweF0gaC1bNDAwcHhdIG1sLVs1MHB4XSBjdXJzb3ItcG9pbnRlciBncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBvYmplY3QtZmlsbFwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsXCIgc3JjPXtjb252ZXJ0QnVmZmVyVG9JbWFnZShmYWN0b3J5LmZlYXR1cmVkSW1hZ2UpfSBhbHQ9e2ZhY3RvcnkubmFtZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB7LyogaG92ZXIgY29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB6LTUwIGFic29sdXRlIHJvdW5kZWQteGwgYm90dG9tLTAgbGVmdC0wIHctWzMwMHB4XSBiZy1bIzFGOTNDN10gdGV4dC13aGl0ZSBwLTMgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNzVweF1cIj5cbiAgICAgICAgICA8aW1nIHNyYz17ZmFjdG9yeS5zaG9ydFZpZGVvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgPGgzPntmYWN0b3J5Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTFcIj5cbiAgICAgICAgICAgIDxJb0xvY2F0aW9uU2hhcnAgc2l6ZT17MTh9IGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMSB0ZXh0LXhzXCI+e2ZhY3RvcnkuYWRkcmVzc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBtdC0yIHRleHQtd3JhcFwiPntmYWN0b3J5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bI0ZFM0IxRl0gdGV4dC1zbSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+VmlldyBUb3VyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklvTG9jYXRpb25TaGFycCIsImNvbnZlcnRCdWZmZXJUb0ltYWdlIiwiaW1hZ2VEYXRhIiwidWludDhBcnJheSIsIlVpbnQ4QXJyYXkiLCJkYXRhIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwiaW1hZ2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJNeUNvbXBvbmVudCIsImZhY3RvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJmZWF0dXJlZEltYWdlIiwiYWx0IiwibmFtZSIsInNob3J0VmlkZW8iLCJoMyIsInNpemUiLCJjb2xvciIsInAiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/marker/marker.tsx\n"));

/***/ })

});