"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Serving_index_js"],{

/***/ "./components/Serving/index.js":
/*!*************************************!*\
  !*** ./components/Serving/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Serving; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Serving(param) {\n    let { data  } = param;\n    var _data_location;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // const dataloctions = useSelector((state) => state.loctions);\n    const selecthandleclick = (locId, locName, locAddress, locationslug, locMinBookingAmount)=>{\n        localStorage.setItem(\"id\", locId);\n        localStorage.setItem(\"cityname\", locName);\n        localStorage.setItem(\"locAddress\", locAddress);\n        localStorage.setItem(\"loc_min_booking_amount\", locMinBookingAmount);\n        router.push(\"/\" + locationslug);\n        window.location.href = \"/\" + locationslug;\n    //Router.reload(window.location.pathname)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            fluid: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title-content text-center mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" font-familt-jost\",\n                        children: \"Serving In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"SERVINGin\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex flex-row\",\n                                style: {\n                                    width: \"60%\",\n                                    marginLeft: \"auto\",\n                                    marginRight: \"auto\"\n                                },\n                                children: data === null || data === void 0 ? void 0 : (_data_location = data.location) === null || _data_location === void 0 ? void 0 : _data_location.map((x, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"salonehome-all-Category\",\n                                            href: \"#\",\n                                            onClick: ()=>selecthandleclick(x.id, x.city, x.name, x.slug, x.price),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"salonehome-all-Category-box\",\n                                                    style: {\n                                                        backgroundColor: \"rgb(255, 255, 255)\"\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"salonehome-all-Category-images\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"https://admin.glamcode.in/user-uploads/locations/\".concat(x.image),\n                                                            width: 100,\n                                                            height: 100,\n                                                            alt: x.city,\n                                                            style: {\n                                                                objectFit: \"contain\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 29\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"salone-all-category-text\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        children: x.city\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Serving\\\\index.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Serving, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Serving;\nvar _c;\n$RefreshReg$(_c, \"Serving\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpbmcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRCO0FBQ1o7QUFDYjtBQUNlO0FBQ2I7QUFDaEIsU0FBU1EsUUFBUSxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjtRQW9DZkE7O0lBbkNmLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QiwrREFBK0Q7SUFDL0QsTUFBTUssb0JBQW9CLENBQ3hCQyxPQUNBQyxTQUNBQyxZQUNBQyxjQUNBQyxzQkFDRztRQUNIQyxhQUFhQyxPQUFPLENBQUMsTUFBTU47UUFDM0JLLGFBQWFDLE9BQU8sQ0FBQyxZQUFZTDtRQUNqQ0ksYUFBYUMsT0FBTyxDQUFDLGNBQWNKO1FBQ25DRyxhQUFhQyxPQUFPLENBQUMsMEJBQTBCRjtRQUUvQ04sT0FBT1MsSUFBSSxDQUFDLE1BQU1KO1FBQ2xCSyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxNQUFNUDtJQUM3Qix5Q0FBeUM7SUFDM0M7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ2Qsc0RBQVNBO1lBQUNzQixLQUFLOzs4QkFDZCw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFHRCxXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7OEJBRXBDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3ZCLGdEQUFHQTtrQ0FDRiw0RUFBQ0MsZ0RBQUdBO3NDQUNGLDRFQUFDcUI7Z0NBQ0NDLFdBQVU7Z0NBQ1ZFLE9BQU87b0NBQ0xDLE9BQU87b0NBQ1BDLFlBQVk7b0NBQ1pDLGFBQWE7Z0NBQ2Y7MENBRUNyQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxLQUFNWSxRQUFRLGNBQWRaLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQnNCLElBQUksQ0FBQ0MsR0FBR0MsSUFBTTtvQ0FDN0IscUJBQ0UsOERBQUNUO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDcEIsa0RBQUlBOzRDQUNIb0IsV0FBVTs0Q0FDVkgsTUFBSzs0Q0FDTFksU0FBUyxJQUNQdkIsa0JBQ0VxQixFQUFFRyxFQUFFLEVBQ0pILEVBQUVJLElBQUksRUFDTkosRUFBRUssSUFBSSxFQUNOTCxFQUFFTSxJQUFJLEVBQ05OLEVBQUVPLEtBQUs7OzhEQUlYLDhEQUFDZjtvREFDQ0MsV0FBVTtvREFDVkUsT0FBTzt3REFBRWEsaUJBQWlCO29EQUFxQjs4REFFL0MsNEVBQUNoQjt3REFBSUMsV0FBVTtrRUFRYiw0RUFBQ2dCOzREQUNDQyxLQUFLLG9EQUE0RCxPQUFSVixFQUFFVyxLQUFLOzREQUNoRWYsT0FBTzs0REFDUGdCLFFBQVE7NERBQ1JDLEtBQUtiLEVBQUVJLElBQUk7NERBQ1hULE9BQU87Z0VBQUVtQixXQUFXOzREQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzhEQUlwQyw4REFBQ3RCO29EQUFJQyxXQUFVOzhEQUNiLDRFQUFDc0I7a0VBQUlmLEVBQUVJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQXBDU0g7Ozs7O2dDQXlDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEIsQ0FBQztHQXZGdUJ6Qjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJ2aW5nL2luZGV4LmpzPzRhNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpbmcoeyBkYXRhIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IGRhdGFsb2N0aW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubG9jdGlvbnMpO1xuICBjb25zdCBzZWxlY3RoYW5kbGVjbGljayA9IChcbiAgICBsb2NJZCxcbiAgICBsb2NOYW1lLFxuICAgIGxvY0FkZHJlc3MsXG4gICAgbG9jYXRpb25zbHVnLFxuICAgIGxvY01pbkJvb2tpbmdBbW91bnRcbiAgKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCBsb2NJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5bmFtZVwiLCBsb2NOYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY0FkZHJlc3NcIiwgbG9jQWRkcmVzcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NfbWluX2Jvb2tpbmdfYW1vdW50XCIsIGxvY01pbkJvb2tpbmdBbW91bnQpO1xuXG4gICAgcm91dGVyLnB1c2goXCIvXCIgKyBsb2NhdGlvbnNsdWcpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIgKyBsb2NhdGlvbnNsdWc7XG4gICAgLy9Sb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50IHRleHQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIGZvbnQtZmFtaWx0LWpvc3RcIj5TZXJ2aW5nIEluPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU0VSVklOR2luXCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3dcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YT8ubG9jYXRpb24/Lm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYWxvbmVob21lLWFsbC1DYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RoYW5kbGVjbGljayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Fsb25laG9tZS1hbGwtQ2F0ZWdvcnktYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Fsb25laG9tZS1hbGwtQ2F0ZWdvcnktaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmdsYW1jb2RlLmluL3VzZXItdXBsb2Fkcy9sb2NhdGlvbnMvJHt4LmltYWdlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3guY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2FkbWluLmdsYW1jb2RlLmluL3VzZXItdXBsb2Fkcy9sb2NhdGlvbnMvJHt4LmltYWdlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3guY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb250YWluXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWxvbmUtYWxsLWNhdGVnb3J5LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt4LmNpdHl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwidXNlU2VsZWN0b3IiLCJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJTZXJ2aW5nIiwiZGF0YSIsInJvdXRlciIsInNlbGVjdGhhbmRsZWNsaWNrIiwibG9jSWQiLCJsb2NOYW1lIiwibG9jQWRkcmVzcyIsImxvY2F0aW9uc2x1ZyIsImxvY01pbkJvb2tpbmdBbW91bnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImZsdWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIiwieCIsImkiLCJvbkNsaWNrIiwiaWQiLCJjaXR5IiwibmFtZSIsInNsdWciLCJwcmljZSIsImJhY2tncm91bmRDb2xvciIsImltZyIsInNyYyIsImltYWdlIiwiaGVpZ2h0IiwiYWx0Iiwib2JqZWN0Rml0IiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Serving/index.js\n"));

/***/ })

}]);