"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Maincategory_maincategory_js"],{

/***/ "./components/Maincategory/Card.js":
/*!*****************************************!*\
  !*** ./components/Maincategory/Card.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal_loction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/loction */ \"./components/Modal/loction.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Card(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const callurl = (slug, id)=>{\n        localStorage.setItem(\"mid\", id);\n        router.push(\"/category/\" + slug + \"/\" + localStorage.getItem(\"cityname\").toLowerCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: props.cname,\n                    onClick: ()=>setModalShow(true),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"salonehome-all-Category-box\",\n                            style: {\n                                backgroundColor: \"rgb(255, 255, 255)\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"salonehome-all-Category-images\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://admin.glamcode.in/user-uploads/maincategory/\".concat(props.image),\n                                    alt: props.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"salone-all-category-text mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"salone-all-category-text\",\n                                children: props.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_loction__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    show: modalShow,\n                    onHide: ()=>setModalShow(false),\n                    noRedirect: true,\n                    onSelect: (id, name)=>{\n                        localStorage.setItem(\"mid\", props.id);\n                        localStorage.setItem(\"tid\", id);\n                        router.push(\"/category/\" + props.slug + \"/\" + name.toLowerCase());\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\Card.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(Card, \"EV0MGmTTwwqHOXQpo05xZB0fEAg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5jYXRlZ29yeS9DYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNBO0FBQ3pCLFNBQVNHLEtBQUtDLEtBQUssRUFBRTs7SUFDbEMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHUCxxREFBYyxDQUFDLEtBQUs7SUFDdEQsTUFBTVMsVUFBVSxDQUFDQyxNQUFNQyxLQUFPO1FBQzVCQyxhQUFhQyxPQUFPLENBQUMsT0FBT0Y7UUFDNUJOLE9BQU9TLElBQUksQ0FDVCxlQUFlSixPQUFPLE1BQU1FLGFBQWFHLE9BQU8sQ0FBQyxZQUFZQyxXQUFXO0lBRTVFO0lBRUEscUJBQ0U7a0JBd0JFOzs4QkFDRSw4REFBQ0M7b0JBQUlDLFdBQVdkLE1BQU1lLEtBQUs7b0JBQUVDLFNBQVMsSUFBTWIsYUFBYSxJQUFJOztzQ0FDM0QsOERBQUNVOzRCQUNDQyxXQUFVOzRCQUNWRyxPQUFPO2dDQUFFQyxpQkFBaUI7NEJBQXFCO3NDQUUvQyw0RUFBQ0w7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNLO29DQUNDQyxLQUFLLHVEQUFtRSxPQUFacEIsTUFBTXFCLEtBQUs7b0NBQ3ZFQyxLQUFLdEIsTUFBTXVCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXJCLDhEQUFDVjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1U7Z0NBQUdWLFdBQVU7MENBQTRCZCxNQUFNdUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3hELDhEQUFDMUIsc0RBQVFBO29CQUNQNEIsTUFBTXZCO29CQUNOd0IsUUFBUSxJQUFNdkIsYUFBYSxLQUFLO29CQUNoQ3dCLFlBQVksSUFBSTtvQkFDaEJDLFVBQVUsQ0FBQ3JCLElBQUlnQixPQUFTO3dCQUN0QmYsYUFBYUMsT0FBTyxDQUFDLE9BQU9ULE1BQU1PLEVBQUU7d0JBQ3BDQyxhQUFhQyxPQUFPLENBQUMsT0FBT0Y7d0JBQzVCTixPQUFPUyxJQUFJLENBQUMsZUFBZVYsTUFBTU0sSUFBSSxHQUFHLE1BQU1pQixLQUFLWCxXQUFXO29CQUNoRTs7Ozs7Ozs7O0FBTVYsQ0FBQztHQWxFdUJiOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5jYXRlZ29yeS9DYXJkLmpzPzFlYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbHB1cCBmcm9tICcuLi9Nb2RhbC9sb2N0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNhbGx1cmwgPSAoc2x1ZywgaWQpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWlkJywgaWQpO1xuICAgIHJvdXRlci5wdXNoKFxuICAgICAgJy9jYXRlZ29yeS8nICsgc2x1ZyArICcvJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5bmFtZScpLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiB7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbGx1cmwocHJvcHMuc2x1ZywgcHJvcHMuaWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Fsb25laG9tZS1hbGwtQ2F0ZWdvcnktYm94XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbG9uZWhvbWUtYWxsLUNhdGVnb3J5LWltYWdlc1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYWRtaW4uZ2xhbWNvZGUuaW4vdXNlci11cGxvYWRzL21haW5jYXRlZ29yeS8ke3Byb3BzLmltYWdlfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Fsb25lLWFsbC1jYXRlZ29yeS10ZXh0IG10LTJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNhbG9uZS1hbGwtY2F0ZWdvcnktdGV4dFwiPntwcm9wcy5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKCAqL31cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbmFtZX0gb25DbGljaz17KCkgPT4gc2V0TW9kYWxTaG93KHRydWUpfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYWxvbmVob21lLWFsbC1DYXRlZ29yeS1ib3hcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgMjU1LCAyNTUpJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Fsb25laG9tZS1hbGwtQ2F0ZWdvcnktaW1hZ2VzXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2FkbWluLmdsYW1jb2RlLmluL3VzZXItdXBsb2Fkcy9tYWluY2F0ZWdvcnkvJHtwcm9wcy5pbWFnZX1gfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Fsb25lLWFsbC1jYXRlZ29yeS10ZXh0IG10LTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzYWxvbmUtYWxsLWNhdGVnb3J5LXRleHRcIj57cHJvcHMubmFtZX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFscHVwXG4gICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cbiAgICAgICAgICBub1JlZGlyZWN0PXt0cnVlfVxuICAgICAgICAgIG9uU2VsZWN0PXsoaWQsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtaWQnLCBwcm9wcy5pZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGlkJywgaWQpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9jYXRlZ29yeS8nICsgcHJvcHMuc2x1ZyArICcvJyArIG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICAgey8qICl9ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWxwdXAiLCJ1c2VSb3V0ZXIiLCJDYXJkIiwicHJvcHMiLCJyb3V0ZXIiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VTdGF0ZSIsImNhbGx1cmwiLCJzbHVnIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImdldEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImNsYXNzTmFtZSIsImNuYW1lIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDIiLCJzaG93Iiwib25IaWRlIiwibm9SZWRpcmVjdCIsIm9uU2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maincategory/Card.js\n"));

/***/ }),

/***/ "./components/Maincategory/maincategory.js":
/*!*************************************************!*\
  !*** ./components/Maincategory/maincategory.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Maincategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./components/Maincategory/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Maincategory(param) {\n    let { data  } = param;\n    _s();\n    const [showCategory, setShowcategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"small-card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"title font-familt-jost\",\n                        style: {\n                            width: \"100%\",\n                            textAlign: \"center\"\n                        },\n                        children: \"Home Salon Services\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                data === null || data === void 0 ? void 0 : data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        lg: \"2\",\n                        md: \"4\",\n                        sm: \"5\",\n                        className: \"mt-5 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            cname: \"salonehome-all-Category\",\n                            id: item.id,\n                            name: item.name,\n                            image: item.image,\n                            slug: item.slug\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shajib Hasan\\\\Desktop\\\\Tripati-vercel\\\\Archive (1)\\\\components\\\\Maincategory\\\\maincategory.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Maincategory, \"Rnrz4O1XLqNXpdP3scF5n34Tjt8=\");\n_c = Maincategory;\nvar _c;\n$RefreshReg$(_c, \"Maincategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5jYXRlZ29yeS9tYWluY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNEO0FBQ2hCO0FBQ1gsU0FBU0ssYUFBYSxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFFbkMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IscURBQWMsQ0FBQyxFQUFFO0lBRXpELHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDVixnREFBR0E7OzhCQUNGLDhEQUFDUztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLFdBQVc7d0JBQVM7a0NBQzdDOzs7Ozs7Ozs7OztnQkFJRlQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtvQkFDMUIscUJBQ0UsOERBQUNoQixnREFBR0E7d0JBQUNpQixJQUFHO3dCQUFJQyxJQUFHO3dCQUFJQyxJQUFHO3dCQUFJVixXQUFVO2tDQUNsQyw0RUFBQ1AsNkNBQUlBOzRCQUNIa0IsT0FBTTs0QkFDTkMsSUFBSU4sS0FBS00sRUFBRTs0QkFDWEMsTUFBTVAsS0FBS08sSUFBSTs0QkFDZkMsT0FBT1IsS0FBS1EsS0FBSzs0QkFDakJDLE1BQU1ULEtBQUtTLElBQUk7Ozs7Ozt1QkFOOEJSOzs7OztnQkFVckQ7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0EvQnVCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5jYXRlZ29yeS9tYWluY2F0ZWdvcnkuanM/MGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbmNhdGVnb3J5KHsgZGF0YSB9KSB7XG5cbiAgY29uc3QgW3Nob3dDYXRlZ29yeSwgc2V0U2hvd2NhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtY2FyZFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZSBmb250LWZhbWlsdC1qb3N0XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lIFNhbG9uIFNlcnZpY2VzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2wgbGc9XCIyXCIgbWQ9XCI0XCIgc209XCI1XCIgY2xhc3NOYW1lPVwibXQtNSBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBjbmFtZT1cInNhbG9uZWhvbWUtYWxsLUNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgc2x1Zz17aXRlbS5zbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdyIsIkNvbCIsInVzZVNlbGVjdG9yIiwiQ2FyZCIsIk1haW5jYXRlZ29yeSIsImRhdGEiLCJzaG93Q2F0ZWdvcnkiLCJzZXRTaG93Y2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3R5bGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxnIiwibWQiLCJzbSIsImNuYW1lIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maincategory/maincategory.js\n"));

/***/ })

}]);