webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Auth */ "./lib/Auth.js");
/* harmony import */ var _lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/isLoggedIn */ "./lib/isLoggedIn.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/admin/Desktop/acamica/client/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      backButton = _ref.backButton;
  var auth = new _lib_Auth__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var isLogged = Object(_lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_5__["isLoggedIn"])();
  return __jsx("div", {
    className: "jsx-33857308" + " " + "root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Acamica Students")), __jsx("header", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, backButton && __jsx("span", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.back();
    },
    className: "jsx-33857308" + " " + "back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u2B05"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Home")), isLogged && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/payments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Payments Information")), isLogged && __jsx("li", {
    className: "jsx-33857308" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return auth.logout();
    },
    className: "jsx-33857308" + " " + "logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Logout")), !isLogged && __jsx("li", {
    className: "jsx-33857308" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return auth.login();
    },
    className: "jsx-33857308" + " " + "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Login / Register"))), __jsx("h1", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, title), children, __jsx("footer", {
    className: "jsx-33857308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Acamica \xA9 ", new Date().getFullYear()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2065262670",
    __self: this
  }, ".root.jsx-33857308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header.jsx-33857308{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:1em;font-size:1.2rem;background:#005782;}header.jsx-33857308 a.jsx-33857308{color:darkgrey;-webkit-text-decoration:none;text-decoration:none;}header.jsx-33857308 a.jsx-33857308:hover{font-weight:bold;color:lightgrey;}.login.jsx-33857308,.logout.jsx-33857308{-webkit-text-decoration:none;text-decoration:none;}footer.jsx-33857308{padding:1em;}.list.jsx-33857308{list-style:none;}.back-button.jsx-33857308{font-size:0.9rem;padding-right:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluL0Rlc2t0b3AvYWNhbWljYS9jbGllbnQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURrQixBQUd3QixBQU1GLEFBUUksQUFJRSxBQUtJLEFBR1QsQUFHSSxBQUdDLFdBekJKLENBb0JmLEdBWnVCLENBZXZCLENBWGtCLEFBY0UsZ0JBYnBCLEVBY2lCLGVBVmpCLEFBV0EsZUFuQkEsU0FmeUIsV0FPTSx3RkFOVixtQ0FPUCxZQUNLLGlCQUNFLG1CQUNyQixVQVR3Qiw4RUFDeEIiLCJmaWxlIjoiL2hvbWUvYWRtaW4vRGVza3RvcC9hY2FtaWNhL2NsaWVudC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuLi9saWIvQXV0aFwiO1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gXCIuLi9saWIvaXNMb2dnZWRJblwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiwgYmFja0J1dHRvbiB9KSB7XG4gIGNvbnN0IGF1dGggPSBuZXcgQXV0aCgpO1xuICBjb25zdCBpc0xvZ2dlZCA9IGlzTG9nZ2VkSW4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWNhbWljYSBTdHVkZW50czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICB7YmFja0J1dHRvbiAmJiAoXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gUm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj5cbiAgICAgICAgICAgICYjeDJiMDU7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BheW1lbnRzXCI+XG4gICAgICAgICAgICA8YT5QYXltZW50cyBJbmZvcm1hdGlvbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ291dFwiIG9uQ2xpY2s9eygpID0+IGF1dGgubG9nb3V0KCl9PlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dpblwiIG9uQ2xpY2s9eygpID0+IGF1dGgubG9naW4oKX0+XG4gICAgICAgICAgICAgIExvZ2luIC8gUmVnaXN0ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPGZvb3Rlcj5BY2FtaWNhICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NzgyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBhIHtcbiAgICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciBhOmhvdmVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbixcbiAgICAgICAgLmxvZ291dCB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0IHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/admin/Desktop/acamica/client/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1553850139",
    __self: this
  }, "body{margin:0;font-size:110%;background:#f0f0f0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluL0Rlc2t0b3AvYWNhbWljYS9jbGllbnQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Z5QixBQUdvQixTQUNNLGVBQ0ksbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2FkbWluL0Rlc2t0b3AvYWNhbWljYS9jbGllbnQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vbGliL0F1dGhcIjtcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tIFwiLi4vbGliL2lzTG9nZ2VkSW5cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoeyB0aXRsZSwgY2hpbGRyZW4sIGJhY2tCdXR0b24gfSkge1xuICBjb25zdCBhdXRoID0gbmV3IEF1dGgoKTtcbiAgY29uc3QgaXNMb2dnZWQgPSBpc0xvZ2dlZEluKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFjYW1pY2EgU3R1ZGVudHM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAge2JhY2tCdXR0b24gJiYgKFxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IFJvdXRlci5iYWNrKCl9IGNsYXNzTmFtZT1cImJhY2stYnV0dG9uXCI+XG4gICAgICAgICAgICAmI3gyYjA1O1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXltZW50c1wiPlxuICAgICAgICAgICAgPGE+UGF5bWVudHMgSW5mb3JtYXRpb248L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvdXRcIiBvbkNsaWNrPXsoKSA9PiBhdXRoLmxvZ291dCgpfT5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWlzTG9nZ2VkICYmIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9naW5cIiBvbkNsaWNrPXsoKSA9PiBhdXRoLmxvZ2luKCl9PlxuICAgICAgICAgICAgICBMb2dpbiAvIFJlZ2lzdGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDxmb290ZXI+QWNhbWljYSAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNTc4MjtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYSB7XG4gICAgICAgICAgY29sb3I6IGRhcmtncmV5O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgYTpob3ZlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4sXG4gICAgICAgIC5sb2dvdXQge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/admin/Desktop/acamica/client/components/Layout.js */"));
}

/***/ }),

/***/ "./lib/Auth.js":
/*!*********************!*\
  !*** ./lib/Auth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth0-variables */ "./lib/auth0-variables.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);









var getQueryParams = function getQueryParams() {
  var params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
    params[$1] = $3;
  });
  return params;
};

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Auth);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "accessToken", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "idToken", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "expiresAt", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "auth0", new auth0_js__WEBPACK_IMPORTED_MODULE_5__["default"].WebAuth({
      domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].domain,
      clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].clientId,
      redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_6__["AUTH_CONFIG"].callbackUrl,
      responseType: "token id_token",
      scope: "openid profile email"
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "extractInfoFromHash", function () {
      if (process.server) return;

      var _getQueryParams = getQueryParams(),
          id_token = _getQueryParams.id_token;

      return {
        token: id_token,
        user_details: jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(id_token)
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getQueryParams", function () {
      var params = {};
      window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
        params[$1] = $3;
      });
      return params;
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
        _this.auth0.parseHash(function (err, authResult) {
          var user_details = _this.extractInfoFromHash();

          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult, user_details);

            resolve(true);
          } else if (err) {
            console.log(err);
            alert("Error: ".concat(err.error, ". Check the console for further details."));
            resolve(false);
            window.location.replace("/");
          }
        });
      });
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this.accessToken;
    }
  }, {
    key: "getIdToken",
    value: function getIdToken() {
      return this.idToken;
    }
  }, {
    key: "setSession",
    value: function setSession(authResult, user_details) {
      // Set isLoggedIn flag in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user_details.user_details)); // Set the time that the access token will expire at

      var expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;
      this.expiresAt = expiresAt; // navigate to the home route
      //history.replace('/home');
    }
  }, {
    key: "renewSession",
    value: function renewSession() {
      var _this2 = this;

      this.auth0.checkSession({}, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this2.setSession(authResult);
        } else if (err) {
          _this2.logout();

          console.log(err);
          alert("Could not get a new token (".concat(err.error, ": ").concat(err.error_description, ")."));
        }
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      // Remove tokens and expiry time
      this.accessToken = null;
      this.idToken = null;
      this.expiresAt = 0; // Remove isLoggedIn flag from localStorage

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user_details"); // navigate to the home route

      window.location.replace("/");
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = this.expiresAt;
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/auth0-variables.js":
/*!********************************!*\
  !*** ./lib/auth0-variables.js ***!
  \********************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
  domain: 'dev-acamica2.auth0.com',
  clientId: 'v1DwgMtY6lgeBJ9qglyAT1wANZJjX0gO',
  callbackUrl: 'http://localhost:3000/auth/callback'
};

/***/ }),

/***/ "./lib/isLoggedIn.js":
/*!***************************!*\
  !*** ./lib/isLoggedIn.js ***!
  \***************************/
/*! exports provided: isLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isLoggedIn = function isLoggedIn() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLogged = _useState[0],
      setIsLogged = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var user_data = localStorage.getItem("user_details");
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || !user_data) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  });
  return isLogged;
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/auth0-js/dist/auth0.min.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/auth0-js/dist/auth0.min.esm.js ***!
  \*****************************************************/
/*! exports provided: default, Authentication, Management, WebAuth, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authentication", function() { return Authentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Management", function() { return Management; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuth", function() { return WebAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/**
 * auth0-js v9.12.2
 * Author: Auth0
 * Date: 2020-01-14
 * License: MIT
 */

var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var urlJoin=createCommonjsModule(function(module){var context,definition;context=commonjsGlobal,definition=function(){function normalize(strArray){var resultArray=[];if(0===strArray.length)return"";if("string"!=typeof strArray[0])throw new TypeError("Url must be a string. Received "+strArray[0]);if(strArray[0].match(/^[^\/:]+:\/*$/)&&strArray.length>1){var first=strArray.shift();strArray[0]=first+strArray[0]}strArray[0].match(/^file:\/\/\//)?strArray[0]=strArray[0].replace(/^([^\/:]+):\/*/,"$1:///"):strArray[0]=strArray[0].replace(/^([^\/:]+):\/*/,"$1://");for(var i=0;i<strArray.length;i++){var component=strArray[i];if("string"!=typeof component)throw new TypeError("Url must be a string. Received "+component);""!==component&&(i>0&&(component=component.replace(/^[\/]+/,"")),component=i<strArray.length-1?component.replace(/[\/]+$/,""):component.replace(/[\/]+$/,"/"),resultArray.push(component))}var str=resultArray.join("/"),parts=(str=str.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return str=parts.shift()+(parts.length>0?"?":"")+parts.join("&")}return function(){return normalize("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},module.exports?module.exports=definition():context.urljoin=definition()}),has=Object.prototype.hasOwnProperty,isArray=Array.isArray,hexTable=function(){for(var array=[],i=0;i<256;++i)array.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return array}(),arrayToObject=function(source,options){for(var obj=options&&options.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(obj[i]=source[i]);return obj},utils={arrayToObject:arrayToObject,assign:function(target,source){return Object.keys(source).reduce(function(acc,key){return acc[key]=source[key],acc},target)},combine:function(a,b){return[].concat(a,b)},compact:function(value){for(var queue=[{obj:{o:value},prop:"o"}],refs=[],i=0;i<queue.length;++i)for(var item=queue[i],obj=item.obj[item.prop],keys=Object.keys(obj),j=0;j<keys.length;++j){var key=keys[j],val=obj[key];"object"==typeof val&&null!==val&&-1===refs.indexOf(val)&&(queue.push({obj:obj,prop:key}),refs.push(val))}return function(queue){for(;queue.length>1;){var item=queue.pop(),obj=item.obj[item.prop];if(isArray(obj)){for(var compacted=[],j=0;j<obj.length;++j)void 0!==obj[j]&&compacted.push(obj[j]);item.obj[item.prop]=compacted}}}(queue),value},decode:function(str,decoder,charset){var strWithoutPlus=str.replace(/\+/g," ");if("iso-8859-1"===charset)return strWithoutPlus.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(strWithoutPlus)}catch(e){return strWithoutPlus}},encode:function(str,defaultEncoder,charset){if(0===str.length)return str;var string=str;if("symbol"==typeof str?string=Symbol.prototype.toString.call(str):"string"!=typeof str&&(string=String(str)),"iso-8859-1"===charset)return escape(string).replace(/%u[0-9a-f]{4}/gi,function($0){return"%26%23"+parseInt($0.slice(2),16)+"%3B"});for(var out="",i=0;i<string.length;++i){var c=string.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?out+=string.charAt(i):c<128?out+=hexTable[c]:c<2048?out+=hexTable[192|c>>6]+hexTable[128|63&c]:c<55296||c>=57344?out+=hexTable[224|c>>12]+hexTable[128|c>>6&63]+hexTable[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&string.charCodeAt(i)),out+=hexTable[240|c>>18]+hexTable[128|c>>12&63]+hexTable[128|c>>6&63]+hexTable[128|63&c])}return out},isBuffer:function(obj){return!(!obj||"object"!=typeof obj||!(obj.constructor&&obj.constructor.isBuffer&&obj.constructor.isBuffer(obj)))},isRegExp:function(obj){return"[object RegExp]"===Object.prototype.toString.call(obj)},merge:function merge(target,source,options){if(!source)return target;if("object"!=typeof source){if(isArray(target))target.push(source);else{if(!target||"object"!=typeof target)return[target,source];(options&&(options.plainObjects||options.allowPrototypes)||!has.call(Object.prototype,source))&&(target[source]=!0)}return target}if(!target||"object"!=typeof target)return[target].concat(source);var mergeTarget=target;return isArray(target)&&!isArray(source)&&(mergeTarget=arrayToObject(target,options)),isArray(target)&&isArray(source)?(source.forEach(function(item,i){if(has.call(target,i)){var targetItem=target[i];targetItem&&"object"==typeof targetItem&&item&&"object"==typeof item?target[i]=merge(targetItem,item,options):target.push(item)}else target[i]=item}),target):Object.keys(source).reduce(function(acc,key){var value=source[key];return has.call(acc,key)?acc[key]=merge(acc[key],value,options):acc[key]=value,acc},mergeTarget)}},replace=String.prototype.replace,percentTwenties=/%20/g,Format={RFC1738:"RFC1738",RFC3986:"RFC3986"},formats=utils.assign({default:Format.RFC3986,formatters:{RFC1738:function(value){return replace.call(value,percentTwenties,"+")},RFC3986:function(value){return String(value)}}},Format),has$1=Object.prototype.hasOwnProperty,arrayPrefixGenerators={brackets:function(prefix){return prefix+"[]"},comma:"comma",indices:function(prefix,key){return prefix+"["+key+"]"},repeat:function(prefix){return prefix}},isArray$1=Array.isArray,push=Array.prototype.push,pushToArray=function(arr,valueOrArray){push.apply(arr,isArray$1(valueOrArray)?valueOrArray:[valueOrArray])},toISO=Date.prototype.toISOString,defaultFormat=formats.default,defaults={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:utils.encode,encodeValuesOnly:!1,format:defaultFormat,formatter:formats.formatters[defaultFormat],indices:!1,serializeDate:function(date){return toISO.call(date)},skipNulls:!1,strictNullHandling:!1},stringify=function stringify(object,prefix,generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly,charset){var obj=object;if("function"==typeof filter?obj=filter(prefix,obj):obj instanceof Date?obj=serializeDate(obj):"comma"===generateArrayPrefix&&isArray$1(obj)&&(obj=obj.join(",")),null===obj){if(strictNullHandling)return encoder&&!encodeValuesOnly?encoder(prefix,defaults.encoder,charset):prefix;obj=""}if(function(v){return"string"==typeof v||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v}(obj)||utils.isBuffer(obj))return encoder?[formatter(encodeValuesOnly?prefix:encoder(prefix,defaults.encoder,charset))+"="+formatter(encoder(obj,defaults.encoder,charset))]:[formatter(prefix)+"="+formatter(String(obj))];var objKeys,values=[];if(void 0===obj)return values;if(isArray$1(filter))objKeys=filter;else{var keys=Object.keys(obj);objKeys=sort?keys.sort(sort):keys}for(var i=0;i<objKeys.length;++i){var key=objKeys[i];skipNulls&&null===obj[key]||(isArray$1(obj)?pushToArray(values,stringify(obj[key],"function"==typeof generateArrayPrefix?generateArrayPrefix(prefix,key):prefix,generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly,charset)):pushToArray(values,stringify(obj[key],prefix+(allowDots?"."+key:"["+key+"]"),generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly,charset)))}return values},has$2=Object.prototype.hasOwnProperty,defaults$1={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:utils.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},interpretNumericEntities=function(str){return str.replace(/&#(\d+);/g,function($0,numberStr){return String.fromCharCode(parseInt(numberStr,10))})},parseKeys=function(givenKey,val,options){if(givenKey){var key=options.allowDots?givenKey.replace(/\.([^.[]+)/g,"[$1]"):givenKey,child=/(\[[^[\]]*])/g,segment=options.depth>0&&/(\[[^[\]]*])/.exec(key),parent=segment?key.slice(0,segment.index):key,keys=[];if(parent){if(!options.plainObjects&&has$2.call(Object.prototype,parent)&&!options.allowPrototypes)return;keys.push(parent)}for(var i=0;options.depth>0&&null!==(segment=child.exec(key))&&i<options.depth;){if(i+=1,!options.plainObjects&&has$2.call(Object.prototype,segment[1].slice(1,-1))&&!options.allowPrototypes)return;keys.push(segment[1])}return segment&&keys.push("["+key.slice(segment.index)+"]"),function(chain,val,options){for(var leaf=val,i=chain.length-1;i>=0;--i){var obj,root=chain[i];if("[]"===root&&options.parseArrays)obj=[].concat(leaf);else{obj=options.plainObjects?Object.create(null):{};var cleanRoot="["===root.charAt(0)&&"]"===root.charAt(root.length-1)?root.slice(1,-1):root,index=parseInt(cleanRoot,10);options.parseArrays||""!==cleanRoot?!isNaN(index)&&root!==cleanRoot&&String(index)===cleanRoot&&index>=0&&options.parseArrays&&index<=options.arrayLimit?(obj=[])[index]=leaf:obj[cleanRoot]=leaf:obj={0:leaf}}leaf=obj}return leaf}(keys,val,options)}},lib_parse=function(str,opts){var options=function(opts){if(!opts)return defaults$1;if(null!==opts.decoder&&void 0!==opts.decoder&&"function"!=typeof opts.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==opts.charset&&"utf-8"!==opts.charset&&"iso-8859-1"!==opts.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var charset=void 0===opts.charset?defaults$1.charset:opts.charset;return{allowDots:void 0===opts.allowDots?defaults$1.allowDots:!!opts.allowDots,allowPrototypes:"boolean"==typeof opts.allowPrototypes?opts.allowPrototypes:defaults$1.allowPrototypes,arrayLimit:"number"==typeof opts.arrayLimit?opts.arrayLimit:defaults$1.arrayLimit,charset:charset,charsetSentinel:"boolean"==typeof opts.charsetSentinel?opts.charsetSentinel:defaults$1.charsetSentinel,comma:"boolean"==typeof opts.comma?opts.comma:defaults$1.comma,decoder:"function"==typeof opts.decoder?opts.decoder:defaults$1.decoder,delimiter:"string"==typeof opts.delimiter||utils.isRegExp(opts.delimiter)?opts.delimiter:defaults$1.delimiter,depth:"number"==typeof opts.depth||!1===opts.depth?+opts.depth:defaults$1.depth,ignoreQueryPrefix:!0===opts.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof opts.interpretNumericEntities?opts.interpretNumericEntities:defaults$1.interpretNumericEntities,parameterLimit:"number"==typeof opts.parameterLimit?opts.parameterLimit:defaults$1.parameterLimit,parseArrays:!1!==opts.parseArrays,plainObjects:"boolean"==typeof opts.plainObjects?opts.plainObjects:defaults$1.plainObjects,strictNullHandling:"boolean"==typeof opts.strictNullHandling?opts.strictNullHandling:defaults$1.strictNullHandling}}(opts);if(""===str||null==str)return options.plainObjects?Object.create(null):{};for(var tempObj="string"==typeof str?function(str,options){var i,obj={},cleanStr=options.ignoreQueryPrefix?str.replace(/^\?/,""):str,limit=options.parameterLimit===1/0?void 0:options.parameterLimit,parts=cleanStr.split(options.delimiter,limit),skipIndex=-1,charset=options.charset;if(options.charsetSentinel)for(i=0;i<parts.length;++i)0===parts[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===parts[i]?charset="utf-8":"utf8=%26%2310003%3B"===parts[i]&&(charset="iso-8859-1"),skipIndex=i,i=parts.length);for(i=0;i<parts.length;++i)if(i!==skipIndex){var key,val,part=parts[i],bracketEqualsPos=part.indexOf("]="),pos=-1===bracketEqualsPos?part.indexOf("="):bracketEqualsPos+1;-1===pos?(key=options.decoder(part,defaults$1.decoder,charset),val=options.strictNullHandling?null:""):(key=options.decoder(part.slice(0,pos),defaults$1.decoder,charset),val=options.decoder(part.slice(pos+1),defaults$1.decoder,charset)),val&&options.interpretNumericEntities&&"iso-8859-1"===charset&&(val=interpretNumericEntities(val)),val&&options.comma&&val.indexOf(",")>-1&&(val=val.split(",")),has$2.call(obj,key)?obj[key]=utils.combine(obj[key],val):obj[key]=val}return obj}(str,options):str,obj=options.plainObjects?Object.create(null):{},keys=Object.keys(tempObj),i=0;i<keys.length;++i){var key=keys[i],newObj=parseKeys(key,tempObj[key],options);obj=utils.merge(obj,newObj,options)}return utils.compact(obj)},lib_stringify=function(object,opts){var objKeys,obj=object,options=function(opts){if(!opts)return defaults;if(null!==opts.encoder&&void 0!==opts.encoder&&"function"!=typeof opts.encoder)throw new TypeError("Encoder has to be a function.");var charset=opts.charset||defaults.charset;if(void 0!==opts.charset&&"utf-8"!==opts.charset&&"iso-8859-1"!==opts.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var format=formats.default;if(void 0!==opts.format){if(!has$1.call(formats.formatters,opts.format))throw new TypeError("Unknown format option provided.");format=opts.format}var formatter=formats.formatters[format],filter=defaults.filter;return("function"==typeof opts.filter||isArray$1(opts.filter))&&(filter=opts.filter),{addQueryPrefix:"boolean"==typeof opts.addQueryPrefix?opts.addQueryPrefix:defaults.addQueryPrefix,allowDots:void 0===opts.allowDots?defaults.allowDots:!!opts.allowDots,charset:charset,charsetSentinel:"boolean"==typeof opts.charsetSentinel?opts.charsetSentinel:defaults.charsetSentinel,delimiter:void 0===opts.delimiter?defaults.delimiter:opts.delimiter,encode:"boolean"==typeof opts.encode?opts.encode:defaults.encode,encoder:"function"==typeof opts.encoder?opts.encoder:defaults.encoder,encodeValuesOnly:"boolean"==typeof opts.encodeValuesOnly?opts.encodeValuesOnly:defaults.encodeValuesOnly,filter:filter,formatter:formatter,serializeDate:"function"==typeof opts.serializeDate?opts.serializeDate:defaults.serializeDate,skipNulls:"boolean"==typeof opts.skipNulls?opts.skipNulls:defaults.skipNulls,sort:"function"==typeof opts.sort?opts.sort:null,strictNullHandling:"boolean"==typeof opts.strictNullHandling?opts.strictNullHandling:defaults.strictNullHandling}}(opts);"function"==typeof options.filter?obj=(0,options.filter)("",obj):isArray$1(options.filter)&&(objKeys=options.filter);var arrayFormat,keys=[];if("object"!=typeof obj||null===obj)return"";arrayFormat=opts&&opts.arrayFormat in arrayPrefixGenerators?opts.arrayFormat:opts&&"indices"in opts?opts.indices?"indices":"repeat":"indices";var generateArrayPrefix=arrayPrefixGenerators[arrayFormat];objKeys||(objKeys=Object.keys(obj)),options.sort&&objKeys.sort(options.sort);for(var i=0;i<objKeys.length;++i){var key=objKeys[i];options.skipNulls&&null===obj[key]||pushToArray(keys,stringify(obj[key],key,generateArrayPrefix,options.strictNullHandling,options.skipNulls,options.encode?options.encoder:null,options.filter,options.sort,options.allowDots,options.serializeDate,options.formatter,options.encodeValuesOnly,options.charset))}var joined=keys.join(options.delimiter),prefix=!0===options.addQueryPrefix?"?":"";return options.charsetSentinel&&("iso-8859-1"===options.charset?prefix+="utf8=%26%2310003%3B&":prefix+="utf8=%E2%9C%93&"),joined.length>0?prefix+joined:""},componentEmitter=createCommonjsModule(function(module){function Emitter(obj){if(obj)return function(obj){for(var key in Emitter.prototype)obj[key]=Emitter.prototype[key];return obj}(obj)}module.exports=Emitter,Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){return this._callbacks=this._callbacks||{},(this._callbacks["$"+event]=this._callbacks["$"+event]||[]).push(fn),this},Emitter.prototype.once=function(event,fn){function on(){this.off(event,on),fn.apply(this,arguments)}return on.fn=fn,this.on(event,on),this},Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var cb,callbacks=this._callbacks["$"+event];if(!callbacks)return this;if(1==arguments.length)return delete this._callbacks["$"+event],this;for(var i=0;i<callbacks.length;i++)if((cb=callbacks[i])===fn||cb.fn===fn){callbacks.splice(i,1);break}return 0===callbacks.length&&delete this._callbacks["$"+event],this},Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};for(var args=new Array(arguments.length-1),callbacks=this._callbacks["$"+event],i=1;i<arguments.length;i++)args[i-1]=arguments[i];if(callbacks){i=0;for(var len=(callbacks=callbacks.slice(0)).length;i<len;++i)callbacks[i].apply(this,args)}return this},Emitter.prototype.listeners=function(event){return this._callbacks=this._callbacks||{},this._callbacks["$"+event]||[]},Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}});var isObject_1=function(obj){return null!==obj&&"object"==typeof obj},requestBase=RequestBase;function RequestBase(obj){if(obj)return function(obj){for(var key in RequestBase.prototype)obj[key]=RequestBase.prototype[key];return obj}(obj)}RequestBase.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},RequestBase.prototype.parse=function(fn){return this._parser=fn,this},RequestBase.prototype.responseType=function(val){return this._responseType=val,this},RequestBase.prototype.serialize=function(fn){return this._serializer=fn,this},RequestBase.prototype.timeout=function(options){if(!options||"object"!=typeof options)return this._timeout=options,this._responseTimeout=0,this;for(var option in options)switch(option){case"deadline":this._timeout=options.deadline;break;case"response":this._responseTimeout=options.response;break;default:console.warn("Unknown timeout option",option)}return this},RequestBase.prototype.retry=function(count,fn){return 0!==arguments.length&&!0!==count||(count=1),count<=0&&(count=0),this._maxRetries=count,this._retries=0,this._retryCallback=fn,this};var ERROR_CODES=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];RequestBase.prototype._shouldRetry=function(err,res){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var override=this._retryCallback(err,res);if(!0===override)return!0;if(!1===override)return!1}catch(e){console.error(e)}if(res&&res.status&&res.status>=500&&501!=res.status)return!0;if(err){if(err.code&&~ERROR_CODES.indexOf(err.code))return!0;if(err.timeout&&"ECONNABORTED"==err.code)return!0;if(err.crossDomain)return!0}return!1},RequestBase.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},RequestBase.prototype.then=function(resolve,reject){if(!this._fullfilledPromise){var self=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(innerResolve,innerReject){self.end(function(err,res){err?innerReject(err):innerResolve(res)})})}return this._fullfilledPromise.then(resolve,reject)},RequestBase.prototype.catch=function(cb){return this.then(void 0,cb)},RequestBase.prototype.use=function(fn){return fn(this),this},RequestBase.prototype.ok=function(cb){if("function"!=typeof cb)throw Error("Callback required");return this._okCallback=cb,this},RequestBase.prototype._isResponseOK=function(res){return!!res&&(this._okCallback?this._okCallback(res):res.status>=200&&res.status<300)},RequestBase.prototype.get=function(field){return this._header[field.toLowerCase()]},RequestBase.prototype.getHeader=RequestBase.prototype.get,RequestBase.prototype.set=function(field,val){if(isObject_1(field)){for(var key in field)this.set(key,field[key]);return this}return this._header[field.toLowerCase()]=val,this.header[field]=val,this},RequestBase.prototype.unset=function(field){return delete this._header[field.toLowerCase()],delete this.header[field],this},RequestBase.prototype.field=function(name,val){if(null==name)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),isObject_1(name)){for(var key in name)this.field(key,name[key]);return this}if(Array.isArray(val)){for(var i in val)this.field(name,val[i]);return this}if(null==val)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof val&&(val=""+val),this._getFormData().append(name,val),this},RequestBase.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},RequestBase.prototype._auth=function(user,pass,options,base64Encoder){switch(options.type){case"basic":this.set("Authorization","Basic "+base64Encoder(user+":"+pass));break;case"auto":this.username=user,this.password=pass;break;case"bearer":this.set("Authorization","Bearer "+user)}return this},RequestBase.prototype.withCredentials=function(on){return null==on&&(on=!0),this._withCredentials=on,this},RequestBase.prototype.redirects=function(n){return this._maxRedirects=n,this},RequestBase.prototype.maxResponseSize=function(n){if("number"!=typeof n)throw TypeError("Invalid argument");return this._maxResponseSize=n,this},RequestBase.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},RequestBase.prototype.send=function(data){var isObj=isObject_1(data),type=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),isObj&&!this._data)Array.isArray(data)?this._data=[]:this._isHost(data)||(this._data={});else if(data&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(isObj&&isObject_1(this._data))for(var key in data)this._data[key]=data[key];else"string"==typeof data?(type||this.type("form"),type=this._header["content-type"],this._data="application/x-www-form-urlencoded"==type?this._data?this._data+"&"+data:data:(this._data||"")+data):this._data=data;return!isObj||this._isHost(data)?this:(type||this.type("json"),this)},RequestBase.prototype.sortQuery=function(sort){return this._sort=void 0===sort||sort,this},RequestBase.prototype._finalizeQueryString=function(){var query=this._query.join("&");if(query&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+query),this._query.length=0,this._sort){var index=this.url.indexOf("?");if(index>=0){var queryArr=this.url.substring(index+1).split("&");"function"==typeof this._sort?queryArr.sort(this._sort):queryArr.sort(),this.url=this.url.substring(0,index)+"?"+queryArr.join("&")}}},RequestBase.prototype._appendQueryString=function(){console.trace("Unsupported")},RequestBase.prototype._timeoutError=function(reason,timeout,errno){if(!this._aborted){var err=new Error(reason+timeout+"ms exceeded");err.timeout=timeout,err.code="ECONNABORTED",err.errno=errno,this.timedout=!0,this.abort(),this.callback(err)}},RequestBase.prototype._setTimeouts=function(){var self=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){self._timeoutError("Timeout of ",self._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){self._timeoutError("Response timeout of ",self._responseTimeout,"ETIMEDOUT")},this._responseTimeout))};var utils$1_type=function(str){return str.split(/ *; */).shift()},utils$1_params=function(str){return str.split(/ *; */).reduce(function(obj,str){var parts=str.split(/ *= */),key=parts.shift(),val=parts.shift();return key&&val&&(obj[key]=val),obj},{})},utils$1_parseLinks=function(str){return str.split(/ *, */).reduce(function(obj,str){var parts=str.split(/ *; */),url=parts[0].slice(1,-1);return obj[parts[1].split(/ *= */)[1].slice(1,-1)]=url,obj},{})},responseBase=ResponseBase;function ResponseBase(obj){if(obj)return function(obj){for(var key in ResponseBase.prototype)obj[key]=ResponseBase.prototype[key];return obj}(obj)}function Agent(){this._defaults=[]}ResponseBase.prototype.get=function(field){return this.header[field.toLowerCase()]},ResponseBase.prototype._setHeaderProperties=function(header){var ct=header["content-type"]||"";this.type=utils$1_type(ct);var params=utils$1_params(ct);for(var key in params)this[key]=params[key];this.links={};try{header.link&&(this.links=utils$1_parseLinks(header.link))}catch(err){}},ResponseBase.prototype._setStatusProperties=function(status){var type=status/100|0;this.status=this.statusCode=status,this.statusType=type,this.info=1==type,this.ok=2==type,this.redirect=3==type,this.clientError=4==type,this.serverError=5==type,this.error=(4==type||5==type)&&this.toError(),this.created=201==status,this.accepted=202==status,this.noContent=204==status,this.badRequest=400==status,this.unauthorized=401==status,this.notAcceptable=406==status,this.forbidden=403==status,this.notFound=404==status,this.unprocessableEntity=422==status},["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(fn){Agent.prototype[fn]=function(){return this._defaults.push({fn:fn,arguments:arguments}),this}}),Agent.prototype._setDefaults=function(req){this._defaults.forEach(function(def){req[def.fn].apply(req,def.arguments)})};for(var agentBase=Agent,client=createCommonjsModule(function(module,exports){var root;function noop(){}"undefined"!=typeof window?root=window:"undefined"!=typeof self?root=self:(console.warn("Using browser-only version of superagent in non-browser environment"),root=commonjsGlobal);var request=exports=module.exports=function(method,url){return"function"==typeof url?new exports.Request("GET",method).end(url):1==arguments.length?new exports.Request("GET",method):new exports.Request(method,url)};exports.Request=Request,request.getXHR=function(){if(!(!root.XMLHttpRequest||root.location&&"file:"==root.location.protocol&&root.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};var trim="".trim?function(s){return s.trim()}:function(s){return s.replace(/(^\s*|\s*$)/g,"")};function serialize(obj){if(!isObject_1(obj))return obj;var pairs=[];for(var key in obj)pushEncodedKeyValuePair(pairs,key,obj[key]);return pairs.join("&")}function pushEncodedKeyValuePair(pairs,key,val){if(null!=val)if(Array.isArray(val))val.forEach(function(v){pushEncodedKeyValuePair(pairs,key,v)});else if(isObject_1(val))for(var subkey in val)pushEncodedKeyValuePair(pairs,key+"["+subkey+"]",val[subkey]);else pairs.push(encodeURIComponent(key)+"="+encodeURIComponent(val));else null===val&&pairs.push(encodeURIComponent(key))}function parseString(str){for(var pair,pos,obj={},pairs=str.split("&"),i=0,len=pairs.length;i<len;++i)-1==(pos=(pair=pairs[i]).indexOf("="))?obj[decodeURIComponent(pair)]="":obj[decodeURIComponent(pair.slice(0,pos))]=decodeURIComponent(pair.slice(pos+1));return obj}function isJSON(mime){return/[\/+]json($|[^-\w])/.test(mime)}function Response(req){this.req=req,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var status=this.xhr.status;1223===status&&(status=204),this._setStatusProperties(status),this.header=this.headers=function(str){for(var index,line,field,val,lines=str.split(/\r?\n/),fields={},i=0,len=lines.length;i<len;++i)-1!==(index=(line=lines[i]).indexOf(":"))&&(field=line.slice(0,index).toLowerCase(),val=trim(line.slice(index+1)),fields[field]=val);return fields}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&req._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function Request(method,url){var self=this;this._query=this._query||[],this.method=method,this.url=url,this.header={},this._header={},this.on("end",function(){var new_err,err=null,res=null;try{res=new Response(self)}catch(e){return(err=new Error("Parser is unable to parse the response")).parse=!0,err.original=e,self.xhr?(err.rawResponse=void 0===self.xhr.responseType?self.xhr.responseText:self.xhr.response,err.status=self.xhr.status?self.xhr.status:null,err.statusCode=err.status):(err.rawResponse=null,err.status=null),self.callback(err)}self.emit("response",res);try{self._isResponseOK(res)||(new_err=new Error(res.statusText||"Unsuccessful HTTP response"))}catch(custom_err){new_err=custom_err}new_err?(new_err.original=err,new_err.response=res,new_err.status=res.status,self.callback(new_err,res)):self.callback(null,res)})}function del(url,data,fn){var req=request("DELETE",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req}request.serializeObject=serialize,request.parseString=parseString,request.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},request.serialize={"application/x-www-form-urlencoded":serialize,"application/json":JSON.stringify},request.parse={"application/x-www-form-urlencoded":parseString,"application/json":JSON.parse},responseBase(Response.prototype),Response.prototype._parseBody=function(str){var parse=request.parse[this.type];return this.req._parser?this.req._parser(this,str):(!parse&&isJSON(this.type)&&(parse=request.parse["application/json"]),parse&&str&&(str.length||str instanceof Object)?parse(str):null)},Response.prototype.toError=function(){var req=this.req,method=req.method,url=req.url,msg="cannot "+method+" "+url+" ("+this.status+")",err=new Error(msg);return err.status=this.status,err.method=method,err.url=url,err},request.Response=Response,componentEmitter(Request.prototype),requestBase(Request.prototype),Request.prototype.type=function(type){return this.set("Content-Type",request.types[type]||type),this},Request.prototype.accept=function(type){return this.set("Accept",request.types[type]||type),this},Request.prototype.auth=function(user,pass,options){1===arguments.length&&(pass=""),"object"==typeof pass&&null!==pass&&(options=pass,pass=""),options||(options={type:"function"==typeof btoa?"basic":"auto"});var encoder=function(string){if("function"==typeof btoa)return btoa(string);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(user,pass,options,encoder)},Request.prototype.query=function(val){return"string"!=typeof val&&(val=serialize(val)),val&&this._query.push(val),this},Request.prototype.attach=function(field,file,options){if(file){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(field,file,options||file.name)}return this},Request.prototype._getFormData=function(){return this._formData||(this._formData=new root.FormData),this._formData},Request.prototype.callback=function(err,res){if(this._shouldRetry(err,res))return this._retry();var fn=this._callback;this.clearTimeout(),err&&(this._maxRetries&&(err.retries=this._retries-1),this.emit("error",err)),fn(err,res)},Request.prototype.crossDomainError=function(){var err=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");err.crossDomain=!0,err.status=this.status,err.method=this.method,err.url=this.url,this.callback(err)},Request.prototype.buffer=Request.prototype.ca=Request.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},Request.prototype.pipe=Request.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},Request.prototype._isHost=function(obj){return obj&&"object"==typeof obj&&!Array.isArray(obj)&&"[object Object]"!==Object.prototype.toString.call(obj)},Request.prototype.end=function(fn){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=fn||noop,this._finalizeQueryString(),this._end()},Request.prototype._end=function(){var self=this,xhr=this.xhr=request.getXHR(),data=this._formData||this._data;this._setTimeouts(),xhr.onreadystatechange=function(){var readyState=xhr.readyState;if(readyState>=2&&self._responseTimeoutTimer&&clearTimeout(self._responseTimeoutTimer),4==readyState){var status;try{status=xhr.status}catch(e){status=0}if(!status){if(self.timedout||self._aborted)return;return self.crossDomainError()}self.emit("end")}};var handleProgress=function(direction,e){e.total>0&&(e.percent=e.loaded/e.total*100),e.direction=direction,self.emit("progress",e)};if(this.hasListeners("progress"))try{xhr.onprogress=handleProgress.bind(null,"download"),xhr.upload&&(xhr.upload.onprogress=handleProgress.bind(null,"upload"))}catch(e){}try{this.username&&this.password?xhr.open(this.method,this.url,!0,this.username,this.password):xhr.open(this.method,this.url,!0)}catch(err){return this.callback(err)}if(this._withCredentials&&(xhr.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof data&&!this._isHost(data)){var contentType=this._header["content-type"],serialize=this._serializer||request.serialize[contentType?contentType.split(";")[0]:""];!serialize&&isJSON(contentType)&&(serialize=request.serialize["application/json"]),serialize&&(data=serialize(data))}for(var field in this.header)null!=this.header[field]&&this.header.hasOwnProperty(field)&&xhr.setRequestHeader(field,this.header[field]);return this._responseType&&(xhr.responseType=this._responseType),this.emit("request",this),xhr.send(void 0!==data?data:null),this},request.agent=function(){return new agentBase},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(method){agentBase.prototype[method.toLowerCase()]=function(url,fn){var req=new request.Request(method,url);return this._setDefaults(req),fn&&req.end(fn),req}}),agentBase.prototype.del=agentBase.prototype.delete,request.get=function(url,data,fn){var req=request("GET",url);return"function"==typeof data&&(fn=data,data=null),data&&req.query(data),fn&&req.end(fn),req},request.head=function(url,data,fn){var req=request("HEAD",url);return"function"==typeof data&&(fn=data,data=null),data&&req.query(data),fn&&req.end(fn),req},request.options=function(url,data,fn){var req=request("OPTIONS",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.del=del,request.delete=del,request.patch=function(url,data,fn){var req=request("PATCH",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.post=function(url,data,fn){var req=request("POST",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.put=function(url,data,fn){var req=request("PUT",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req}}),byteLength_1=(client.Request,function(b64){var lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1];return 3*(validLen+placeHoldersLen)/4-placeHoldersLen}),toByteArray_1=function(b64){var tmp,i,lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1],arr=new Arr(function(b64,validLen,placeHoldersLen){return 3*(validLen+placeHoldersLen)/4-placeHoldersLen}(0,validLen,placeHoldersLen)),curByte=0,len=placeHoldersLen>0?validLen-4:validLen;for(i=0;i<len;i+=4)tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)],arr[curByte++]=tmp>>16&255,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp;2===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4,arr[curByte++]=255&tmp);1===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp);return arr},fromByteArray_1=function(uint8){for(var tmp,len=uint8.length,extraBytes=len%3,parts=[],i=0,len2=len-extraBytes;i<len2;i+=16383)parts.push(encodeChunk(uint8,i,i+16383>len2?len2:i+16383));1===extraBytes?(tmp=uint8[len-1],parts.push(lookup[tmp>>2]+lookup[tmp<<4&63]+"==")):2===extraBytes&&(tmp=(uint8[len-2]<<8)+uint8[len-1],parts.push(lookup[tmp>>10]+lookup[tmp>>4&63]+lookup[tmp<<2&63]+"="));return parts.join("")},lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;function getLens(b64){var len=b64.length;if(len%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var validLen=b64.indexOf("=");return-1===validLen&&(validLen=len),[validLen,validLen===len?0:4-validLen%4]}function encodeChunk(uint8,start,end){for(var tmp,num,output=[],i=start;i<end;i+=3)tmp=(uint8[i]<<16&16711680)+(uint8[i+1]<<8&65280)+(255&uint8[i+2]),output.push(lookup[(num=tmp)>>18&63]+lookup[num>>12&63]+lookup[num>>6&63]+lookup[63&num]);return output.join("")}revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63;var base64Js={byteLength:byteLength_1,toByteArray:toByteArray_1,fromByteArray:fromByteArray_1};var base64Url={encode:function(str){return base64Js.fromByteArray(function(str){for(var arr=new Array(str.length),a=0;a<str.length;a++)arr[a]=str.charCodeAt(a);return arr}(str)).replace(/\+/g,"-").replace(/\//g,"_")},decode:function(str){return str=function(str){var mod=str.length%4;return 0===mod?str:str+new Array(4-mod+1).join("=")}(str).replace(/-/g,"+").replace(/_/g,"/"),function(array){for(var result="",i=0;i<array.length;i++)result+=String.fromCharCode(array[i]);return result}(base64Js.toByteArray(str))}},version={raw:"9.12.2"},toString=Object.prototype.toString;function attribute(o,attr,type,text){if(type="array"===type?"object":type,o&&typeof o[attr]!==type)throw new Error(text)}function variable(o,type,text){if(typeof o!==type)throw new Error(text)}function value(o,values,text){if(-1===values.indexOf(o))throw new Error(text)}var assert={check:function(o,config,attributes){if(config.optional&&!o||variable(o,config.type,config.message),"object"===config.type&&attributes)for(var keys=Object.keys(attributes),index=0;index<keys.length;index++){var a=keys[index];attributes[a].optional&&!o[a]||attributes[a].condition&&!attributes[a].condition(o)||(attribute(o,a,attributes[a].type,attributes[a].message),attributes[a].values&&value(o[a],attributes[a].values,attributes[a].value_message))}},attribute:attribute,variable:variable,value:value,isArray:function(array){return this.supportsIsArray()?Array.isArray(array):"[object Array]"===toString.call(array)},supportsIsArray:function(){return null!=Array.isArray}};function objectAssignPolyfill(target){if(null==target)throw new TypeError("Cannot convert first argument to object");for(var to=Object(target),i=1;i<arguments.length;i++){var nextSource=arguments[i];if(null!=nextSource)for(var keysArray=Object.keys(Object(nextSource)),nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex],desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);void 0!==desc&&desc.enumerable&&(to[nextKey]=nextSource[nextKey])}}return to}var objectAssign={get:function(){return Object.assign?Object.assign:objectAssignPolyfill},objectAssignPolyfill:objectAssignPolyfill};function pick(object,keys){return keys.reduce(function(prev,key){return object[key]&&(prev[key]=object[key]),prev},{})}function extend(){var params=function(obj){var values=[];for(var key in obj)values.push(obj[key]);return values}(arguments);return params.unshift({}),objectAssign.get().apply(void 0,params)}function getLocationFromUrl(href){var match=href.match(/^(https?:|file:|chrome-extension:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return match&&{href:href,protocol:match[1],host:match[2],hostname:match[3],port:match[4],pathname:match[5],search:match[6],hash:match[7]}}function trim(options,key){var trimmed=extend(options);return options[key]&&(trimmed[key]=options[key].trim()),trimmed}var objectHelper={toSnakeCase:function toSnakeCase(object,exceptions){return"object"!=typeof object||assert.isArray(object)||null===object?object:(exceptions=exceptions||[],Object.keys(object).reduce(function(p,key){return p[-1===exceptions.indexOf(key)?function(str){for(var code,newKey="",index=0,wasPrevNumber=!0,wasPrevUppercase=!0;index<str.length;)code=str.charCodeAt(index),!wasPrevUppercase&&code>=65&&code<=90||!wasPrevNumber&&code>=48&&code<=57?(newKey+="_",newKey+=str[index].toLowerCase()):newKey+=str[index].toLowerCase(),wasPrevNumber=code>=48&&code<=57,wasPrevUppercase=code>=65&&code<=90,index++;return newKey}(key):key]=toSnakeCase(object[key]),p},{}))},toCamelCase:function toCamelCase(object,exceptions,options){return"object"!=typeof object||assert.isArray(object)||null===object?object:(exceptions=exceptions||[],options=options||{},Object.keys(object).reduce(function(p,key){var parts,newKey=-1===exceptions.indexOf(key)?(parts=key.split("_")).reduce(function(p,c){return p+c.charAt(0).toUpperCase()+c.slice(1)},parts.shift()):key;return p[newKey]=toCamelCase(object[newKey]||object[key],[],options),options.keepOriginal&&(p[key]=toCamelCase(object[key],[],options)),p},{}))},blacklist:function(object,blacklistedKeys){return Object.keys(object).reduce(function(p,key){return-1===blacklistedKeys.indexOf(key)&&(p[key]=object[key]),p},{})},merge:function(object,keys){return{base:keys?pick(object,keys):object,with:function(object2,keys2){return object2=keys2?pick(object2,keys2):object2,extend(this.base,object2)}}},pick:pick,getKeysNotIn:function(obj,allowedKeys){var notAllowed=[];for(var key in obj)-1===allowedKeys.indexOf(key)&&notAllowed.push(key);return notAllowed},extend:extend,getOriginFromUrl:function(url){if(url){var parsed=getLocationFromUrl(url),origin=parsed.protocol+"//"+parsed.hostname;return parsed.port&&(origin+=":"+parsed.port),origin}},getLocationFromUrl:getLocationFromUrl,trimUserDetails:function(options){return function(options,keys){return keys.reduce(trim,options)}(options,["username","email","phoneNumber"])}};function RequestWrapper(req){this.request=req,this.method=req.method,this.url=req.url,this.body=req._data,this.headers=req._header}function RequestObj(req){this.request=req}function RequestBuilder(options){this._sendTelemetry=!1!==options._sendTelemetry||options._sendTelemetry,this._telemetryInfo=options._telemetryInfo||null,this._timesToRetryFailedRequests=options._timesToRetryFailedRequests,this.headers=options.headers||{},this._universalLoginPage=options.universalLoginPage}function getWindow(){return window}RequestWrapper.prototype.abort=function(){this.request.abort()},RequestWrapper.prototype.getMethod=function(){return this.method},RequestWrapper.prototype.getBody=function(){return this.body},RequestWrapper.prototype.getUrl=function(){return this.url},RequestWrapper.prototype.getHeaders=function(){return this.headers},RequestObj.prototype.set=function(key,value){return this.request=this.request.set(key,value),this},RequestObj.prototype.send=function(body){return this.request=this.request.send(objectHelper.trimUserDetails(body)),this},RequestObj.prototype.withCredentials=function(){return this.request=this.request.withCredentials(),this},RequestObj.prototype.end=function(cb){return this.request=this.request.end(cb),new RequestWrapper(this.request)},RequestBuilder.prototype.setCommonConfiguration=function(ongoingRequest,options){if(options=options||{},this._timesToRetryFailedRequests>0&&(ongoingRequest=ongoingRequest.retry(this._timesToRetryFailedRequests)),options.noHeaders)return ongoingRequest;var headers=this.headers;ongoingRequest=ongoingRequest.set("Content-Type","application/json");for(var keys=Object.keys(this.headers),a=0;a<keys.length;a++)ongoingRequest=ongoingRequest.set(keys[a],headers[keys[a]]);return this._sendTelemetry&&(ongoingRequest=ongoingRequest.set("Auth0-Client",this.getTelemetryData())),ongoingRequest},RequestBuilder.prototype.getTelemetryData=function(){var telemetryName=this._universalLoginPage?"auth0.js-ulp":"auth0.js",clientInfo={name:telemetryName,version:version.raw};this._telemetryInfo&&((clientInfo=objectHelper.extend({},this._telemetryInfo)).env=objectHelper.extend({},this._telemetryInfo.env),clientInfo.env[telemetryName]=version.raw);var jsonClientInfo=JSON.stringify(clientInfo);return base64Url.encode(jsonClientInfo)},RequestBuilder.prototype.get=function(url,options){return new RequestObj(this.setCommonConfiguration(client.get(url),options))},RequestBuilder.prototype.post=function(url,options){return new RequestObj(this.setCommonConfiguration(client.post(url),options))},RequestBuilder.prototype.patch=function(url,options){return new RequestObj(this.setCommonConfiguration(client.patch(url),options))};var windowHelper={redirect:function(url){getWindow().location=url},getDocument:function(){return getWindow().document},getWindow:getWindow,getOrigin:function(){var location=getWindow().location,origin=location.origin;return origin||(origin=objectHelper.getOriginFromUrl(location.href)),origin}};function DummyStorage(){}DummyStorage.prototype.getItem=function(){return null},DummyStorage.prototype.removeItem=function(){},DummyStorage.prototype.setItem=function(){};var js_cookie=createCommonjsModule(function(module,exports){var factory;factory=function(){function extend(){for(var i=0,result={};i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes)result[key]=attributes[key]}return result}function decode(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function init(converter){function api(){}function set(key,value,attributes){if("undefined"!=typeof document){"number"==typeof(attributes=extend({path:"/"},api.defaults,attributes)).expires&&(attributes.expires=new Date(1*new Date+864e5*attributes.expires)),attributes.expires=attributes.expires?attributes.expires.toUTCString():"";try{var result=JSON.stringify(value);/^[\{\[]/.test(result)&&(value=result)}catch(e){}value=converter.write?converter.write(value,key):encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),key=encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var stringifiedAttributes="";for(var attributeName in attributes)attributes[attributeName]&&(stringifiedAttributes+="; "+attributeName,!0!==attributes[attributeName]&&(stringifiedAttributes+="="+attributes[attributeName].split(";")[0]));return document.cookie=key+"="+value+stringifiedAttributes}}function get(key,json){if("undefined"!=typeof document){for(var jar={},cookies=document.cookie?document.cookie.split("; "):[],i=0;i<cookies.length;i++){var parts=cookies[i].split("="),cookie=parts.slice(1).join("=");json||'"'!==cookie.charAt(0)||(cookie=cookie.slice(1,-1));try{var name=decode(parts[0]);if(cookie=(converter.read||converter)(cookie,name)||decode(cookie),json)try{cookie=JSON.parse(cookie)}catch(e){}if(jar[name]=cookie,key===name)break}catch(e){}}return key?jar[key]:jar}}return api.set=set,api.get=function(key){return get(key,!1)},api.getJSON=function(key){return get(key,!0)},api.remove=function(key,attributes){set(key,"",extend(attributes,{expires:-1}))},api.defaults={},api.withConverter=init,api}(function(){})},module.exports=factory()});function CookieStorage(){}function Warn(options){this.disableWarnings=options.disableWarnings}function StorageHandler(options){if(this.warn=new Warn({}),this.storage=new CookieStorage,!0===options.__tryLocalStorageFirst)try{var localStorage=windowHelper.getWindow().localStorage;localStorage&&(this.storage=localStorage)}catch(e){this.warn.warning(e),this.warn.warning("Can't use localStorage. Using CookieStorage instead.")}}function Storage(options){this.handler=new StorageHandler(options)}function SSODataStorage(options){this.storage=new Storage(options)}function buildResponse(error,description){return{error:error,errorDescription:description}}CookieStorage.prototype.getItem=function(key){return js_cookie.get(key)},CookieStorage.prototype.removeItem=function(key){js_cookie.remove(key)},CookieStorage.prototype.setItem=function(key,value,options){var params=objectHelper.extend({expires:1},options);js_cookie.set(key,value,params)},Warn.prototype.warning=function(message){this.disableWarnings||console.warn(message)},StorageHandler.prototype.failover=function(){this.storage instanceof DummyStorage?this.warn.warning("DummyStorage: ignore failover"):this.storage instanceof CookieStorage?(this.warn.warning("CookieStorage: failing over DummyStorage"),this.storage=new DummyStorage):(this.warn.warning("LocalStorage: failing over CookieStorage"),this.storage=new CookieStorage)},StorageHandler.prototype.getItem=function(key){try{return this.storage.getItem(key)}catch(e){return this.warn.warning(e),this.failover(),this.getItem(key)}},StorageHandler.prototype.removeItem=function(key){try{return this.storage.removeItem(key)}catch(e){return this.warn.warning(e),this.failover(),this.removeItem(key)}},StorageHandler.prototype.setItem=function(key,value,options){try{return this.storage.setItem(key,value,options)}catch(e){return this.warn.warning(e),this.failover(),this.setItem(key,value,options)}},Storage.prototype.getItem=function(key){var value=this.handler.getItem(key);try{return JSON.parse(value)}catch(_){return value}},Storage.prototype.removeItem=function(key){return this.handler.removeItem(key)},Storage.prototype.setItem=function(key,value,options){var json=JSON.stringify(value);return this.handler.setItem(key,json,options)},SSODataStorage.prototype.set=function(connection,sub){var ssodata={lastUsedConnection:connection,lastUsedSub:sub};this.storage.setItem("auth0.ssodata",JSON.stringify(ssodata))},SSODataStorage.prototype.get=function(){var ssodata=this.storage.getItem("auth0.ssodata");if(ssodata)return JSON.parse(ssodata)};var error={buildResponse:buildResponse,invalidToken:function(description){return buildResponse("invalid_token",description)}};function wrapCallback(cb,options){return(options=options||{}).ignoreCasing=!!options.ignoreCasing&&options.ignoreCasing,function(err,data){var errObj;return err||data?(!err&&data.err&&(err=data.err,data=null),!err&&data.error&&(err=data,data=null),err?(errObj={original:err},err.response&&err.response.statusCode&&(errObj.statusCode=err.response.statusCode),err.response&&err.response.statusText&&(errObj.statusText=err.response.statusText),err.response&&err.response.body&&(err=err.response.body),err.err&&(err=err.err),errObj.code=err.code||err.error||err.error_code||err.status||null,errObj.description=err.errorDescription||err.error_description||err.description||err.error||err.details||err.err||null,options.forceLegacyError&&(errObj.error=errObj.code,errObj.error_description=errObj.description),err.name&&(errObj.name=err.name),err.policy&&(errObj.policy=err.policy),cb(errObj)):!data.type||"text/html"!==data.type&&"text/plain"!==data.type?options.ignoreCasing?cb(null,data.body||data):cb(null,objectHelper.toCamelCase(data.body||data,[],{keepOriginal:options.keepOriginalCasing})):cb(null,data.text)):cb(error.buildResponse("generic_error","Something went wrong"))}}var tokenParams=["realm","audience","client_id","client_secret","redirect_uri","scope","code","grant_type","username","password","refresh_token","assertion","client_assertion","client_assertion_type","code_verifier"],authorizeParams=["connection","connection_scope","auth0Client","owp","device","realm","protocol","_csrf","_intstate","login_ticket","client_id","response_type","response_mode","redirect_uri","audience","scope","state","nonce","display","prompt","max_age","ui_locales","claims_locales","id_token_hint","login_hint","acr_values","claims","registration","request","request_uri","code_challenge","code_challenge_method","access_type","display"];var parametersWhitelist={oauthTokenParams:function(warn,params){return objectHelper.pick(params,tokenParams)},oauthAuthorizeParams:function(warn,params){var notAllowed=objectHelper.getKeysNotIn(params,authorizeParams);return notAllowed.length>0&&warn.warning("Following parameters are not allowed on the `/authorize` endpoint: ["+notAllowed.join(",")+"]"),params}},t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(t,e){var r;t.exports=r=r||function(t,e){var r=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),i={},n=i.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++)e[i+o>>>2]|=(r[o>>>2]>>>24-o%4*8&255)<<24-(i+o)%4*8;else for(o=0;o<n;o+=4)e[i+o>>>2]=r[o>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r,i=[],n=function(e){e=e;var r=987654321,i=4294967295;return function(){var n=((r=36969*(65535&r)+(r>>16)&i)<<16)+(e=18e3*(65535&e)+(e>>16)&i)&i;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}},o=0;o<e;o+=4){var h=n(4294967296*(r||t.random()));r=987654071*h(),i.push(4294967296*h()|0)}return new s.init(i,e)}}),h=i.enc={},a=h.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new s.init(r,e/2)}},u=h.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++)i.push(String.fromCharCode(e[n>>>2]>>>24-n%4*8&255));return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new s.init(r,e)}},f=h.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},c=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,o=this.blockSize,h=n/(4*o),a=(h=e?t.ceil(h):t.max((0|h)-this._minBufferSize,0))*o,u=t.min(4*a,n);if(a){for(var f=0;f<a;f+=o)this._doProcessBlock(i,f);var c=i.splice(0,a);r.sigBytes-=u}return new s.init(c,u)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(n.Hasher=c.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}}),i.algo={});return i}(Math)}),i$1=e(function(t,e){var i;t.exports=(i=r,function(t){var e=i,r=e.lib,n=r.WordArray,o=r.Hasher,s=e.algo,h=[],a=[];!function(){function e(e){for(var r=t.sqrt(e),i=2;i<=r;i++)if(!(e%i))return!1;return!0}function r(t){return 4294967296*(t-(0|t))|0}for(var i=2,n=0;n<64;)e(i)&&(n<8&&(h[n]=r(t.pow(i,.5))),a[n]=r(t.pow(i,1/3)),n++),i++}();var u=[],f=s.SHA256=o.extend({_doReset:function(){this._hash=new n.init(h.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],h=r[4],f=r[5],c=r[6],p=r[7],l=0;l<64;l++){if(l<16)u[l]=0|t[e+l];else{var d=u[l-15],m=u[l-2];u[l]=((d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3)+u[l-7]+((m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10)+u[l-16]}var v=i&n^i&o^n&o,y=p+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&f^~h&c)+a[l]+u[l];p=c,c=f,f=h,h=s+y|0,s=o,o=n,n=i,i=y+(((i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22))+v)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+h|0,r[5]=r[5]+f|0,r[6]=r[6]+c|0,r[7]=r[7]+p|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;return r[n>>>5]|=128<<24-n%32,r[14+(n+64>>>9<<4)]=t.floor(i/4294967296),r[15+(n+64>>>9<<4)]=i,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=o._createHelper(f),e.HmacSHA256=o._createHmacHelper(f)}(Math),i.SHA256)}),n=e(function(t,e){var i,n;t.exports=(n=(i=r).lib.WordArray,i.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,h=0;h<4&&o+.75*h<r;h++)n.push(i.charAt(s>>>6*(3-h)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var e=t.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<r.length;o++)i[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var h=t.indexOf(s);-1!==h&&(e=h)}return function(t,e,r){for(var i=[],o=0,s=0;s<e;s++)if(s%4){var h=r[t.charCodeAt(s-1)]<<s%4*2,a=r[t.charCodeAt(s)]>>>6-s%4*2;i[o>>>2]|=(h|a)<<24-o%4*8,o++}return n.create(i,o)}(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},i.enc.Base64)}),o=e(function(t,e){t.exports=r.enc.Hex}),s=e(function(e,r){(function(){var t;function r(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):this.fromString(t,null==e&&"string"!=typeof t?256:e))}function i(){return new r(null)}var n="undefined"!=typeof navigator;n&&"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=function(t,e,r,i,n,o){for(var s=32767&e,h=e>>15;--o>=0;){var a=32767&this[t],u=this[t++]>>15,f=h*a+u*s;n=((a=s*a+((32767&f)<<15)+r[i]+(1073741823&n))>>>30)+(f>>>15)+h*u+(n>>>30),r[i++]=1073741823&a}return n},t=30):n&&"Netscape"!=navigator.appName?(r.prototype.am=function(t,e,r,i,n,o){for(;--o>=0;){var s=e*this[t++]+r[i]+n;n=Math.floor(s/67108864),r[i++]=67108863&s}return n},t=26):(r.prototype.am=function(t,e,r,i,n,o){for(var s=16383&e,h=e>>14;--o>=0;){var a=16383&this[t],u=this[t++]>>14,f=h*a+u*s;n=((a=s*a+((16383&f)<<14)+r[i]+n)>>28)+(f>>14)+h*u,r[i++]=268435455&a}return n},t=28),r.prototype.DB=t,r.prototype.DM=(1<<t)-1,r.prototype.DV=1<<t,r.prototype.FV=Math.pow(2,52),r.prototype.F1=52-t,r.prototype.F2=2*t-52;var o,s,h="0123456789abcdefghijklmnopqrstuvwxyz",a=new Array;for(o="0".charCodeAt(0),s=0;s<=9;++s)a[o++]=s;for(o="a".charCodeAt(0),s=10;s<36;++s)a[o++]=s;for(o="A".charCodeAt(0),s=10;s<36;++s)a[o++]=s;function u(t){return h.charAt(t)}function f(t,e){var r=a[t.charCodeAt(e)];return null==r?-1:r}function c(t){var e=i();return e.fromInt(t),e}function p(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}function l(t){this.m=t}function d(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function m(t,e){return t&e}function v(t,e){return t|e}function y(t,e){return t^e}function g(t,e){return t&~e}function w(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function T(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function b(){}function _(t){return t}function A(t){this.r2=i(),this.q3=i(),r.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}l.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},l.prototype.revert=function(t){return t},l.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},l.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},l.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},d.prototype.convert=function(t){var e=i();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(r.ZERO)>0&&this.m.subTo(e,e),e},d.prototype.revert=function(t){var e=i();return t.copyTo(e),this.reduce(e),e},d.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},d.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},d.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},r.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},r.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},r.prototype.fromString=function(t,e){var i;if(16==e)i=4;else if(8==e)i=3;else if(256==e)i=8;else if(2==e)i=1;else if(32==e)i=5;else{if(4!=e)return void this.fromRadix(t,e);i=2}this.t=0,this.s=0;for(var n=t.length,o=!1,s=0;--n>=0;){var h=8==i?255&t[n]:f(t,n);h<0?"-"==t.charAt(n)&&(o=!0):(o=!1,0==s?this[this.t++]=h:s+i>this.DB?(this[this.t-1]|=(h&(1<<this.DB-s)-1)<<s,this[this.t++]=h>>this.DB-s):this[this.t-1]|=h<<s,(s+=i)>=this.DB&&(s-=this.DB))}8==i&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&r.ZERO.subTo(this,this)},r.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},r.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},r.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},r.prototype.lShiftTo=function(t,e){var r,i=t%this.DB,n=this.DB-i,o=(1<<n)-1,s=Math.floor(t/this.DB),h=this.s<<i&this.DM;for(r=this.t-1;r>=0;--r)e[r+s+1]=this[r]>>n|h,h=(this[r]&o)<<i;for(r=s-1;r>=0;--r)e[r]=0;e[s]=h,e.t=this.t+s+1,e.s=this.s,e.clamp()},r.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,n=this.DB-i,o=(1<<i)-1;e[0]=this[r]>>i;for(var s=r+1;s<this.t;++s)e[s-r-1]|=(this[s]&o)<<n,e[s-r]=this[s]>>i;i>0&&(e[this.t-r-1]|=(this.s&o)<<n),e.t=this.t-r,e.clamp()}},r.prototype.subTo=function(t,e){for(var r=0,i=0,n=Math.min(t.t,this.t);r<n;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},r.prototype.multiplyTo=function(t,e){var i=this.abs(),n=t.abs(),o=i.t;for(e.t=o+n.t;--o>=0;)e[o]=0;for(o=0;o<n.t;++o)e[o+i.t]=i.am(0,n[o],e,o,0,i.t);e.s=0,e.clamp(),this.s!=t.s&&r.ZERO.subTo(e,e)},r.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},r.prototype.divRemTo=function(t,e,n){var o=t.abs();if(!(o.t<=0)){var s=this.abs();if(s.t<o.t)return null!=e&&e.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=i());var h=i(),a=this.s,u=t.s,f=this.DB-p(o[o.t-1]);f>0?(o.lShiftTo(f,h),s.lShiftTo(f,n)):(o.copyTo(h),s.copyTo(n));var c=h.t,l=h[c-1];if(0!=l){var d=l*(1<<this.F1)+(c>1?h[c-2]>>this.F2:0),m=this.FV/d,v=(1<<this.F1)/d,y=1<<this.F2,g=n.t,w=g-c,T=null==e?i():e;for(h.dlShiftTo(w,T),n.compareTo(T)>=0&&(n[n.t++]=1,n.subTo(T,n)),r.ONE.dlShiftTo(c,T),T.subTo(h,h);h.t<c;)h[h.t++]=0;for(;--w>=0;){var b=n[--g]==l?this.DM:Math.floor(n[g]*m+(n[g-1]+y)*v);if((n[g]+=h.am(0,b,n,w,0,c))<b)for(h.dlShiftTo(w,T),n.subTo(T,n);n[g]<--b;)n.subTo(T,n)}null!=e&&(n.drShiftTo(c,e),a!=u&&r.ZERO.subTo(e,e)),n.t=c,n.clamp(),f>0&&n.rShiftTo(f,n),a<0&&r.ZERO.subTo(n,n)}}},r.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},r.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},r.prototype.exp=function(t,e){if(t>4294967295||t<1)return r.ONE;var n=i(),o=i(),s=e.convert(this),h=p(t)-1;for(s.copyTo(n);--h>=0;)if(e.sqrTo(n,o),(t&1<<h)>0)e.mulTo(o,s,n);else{var a=n;n=o,o=a}return e.revert(n)},r.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,i=(1<<e)-1,n=!1,o="",s=this.t,h=this.DB-s*this.DB%e;if(s-- >0)for(h<this.DB&&(r=this[s]>>h)>0&&(n=!0,o=u(r));s>=0;)h<e?(r=(this[s]&(1<<h)-1)<<e-h,r|=this[--s]>>(h+=this.DB-e)):(r=this[s]>>(h-=e)&i,h<=0&&(h+=this.DB,--s)),r>0&&(n=!0),n&&(o+=u(r));return n?o:"0"},r.prototype.negate=function(){var t=i();return r.ZERO.subTo(this,t),t},r.prototype.abs=function(){return this.s<0?this.negate():this},r.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},r.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+p(this[this.t-1]^this.s&this.DM)},r.prototype.mod=function(t){var e=i();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(r.ZERO)>0&&t.subTo(e,e),e},r.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new l(e):new d(e),this.exp(t,r)},r.ZERO=c(0),r.ONE=c(1),b.prototype.convert=_,b.prototype.revert=_,b.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r)},b.prototype.sqrTo=function(t,e){t.squareTo(e)},A.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=i();return t.copyTo(e),this.reduce(e),e},A.prototype.revert=function(t){return t},A.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},A.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},A.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)};var S,D,B,x=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],k=(1<<26)/x[x.length-1];function E(){var t;t=(new Date).getTime(),D[B++]^=255&t,D[B++]^=t>>8&255,D[B++]^=t>>16&255,D[B++]^=t>>24&255,B>=N&&(B-=N)}if(r.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},r.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),n=c(r),o=i(),s=i(),h="";for(this.divRemTo(n,o,s);o.signum()>0;)h=(r+s.intValue()).toString(t).substr(1)+h,o.divRemTo(n,o,s);return s.intValue().toString(t)+h},r.prototype.fromRadix=function(t,e){this.fromInt(0),null==e&&(e=10);for(var i=this.chunkSize(e),n=Math.pow(e,i),o=!1,s=0,h=0,a=0;a<t.length;++a){var u=f(t,a);u<0?"-"==t.charAt(a)&&0==this.signum()&&(o=!0):(h=e*h+u,++s>=i&&(this.dMultiply(n),this.dAddOffset(h,0),s=0,h=0))}s>0&&(this.dMultiply(Math.pow(e,s)),this.dAddOffset(h,0)),o&&r.ZERO.subTo(this,this)},r.prototype.fromNumber=function(t,e,i){if("number"==typeof e)if(t<2)this.fromInt(1);else for(this.fromNumber(t,i),this.testBit(t-1)||this.bitwiseTo(r.ONE.shiftLeft(t-1),v,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(r.ONE.shiftLeft(t-1),this);else{var n=new Array,o=7&t;n.length=1+(t>>3),e.nextBytes(n),o>0?n[0]&=(1<<o)-1:n[0]=0,this.fromString(n,256)}},r.prototype.bitwiseTo=function(t,e,r){var i,n,o=Math.min(t.t,this.t);for(i=0;i<o;++i)r[i]=e(this[i],t[i]);if(t.t<this.t){for(n=t.s&this.DM,i=o;i<this.t;++i)r[i]=e(this[i],n);r.t=this.t}else{for(n=this.s&this.DM,i=o;i<t.t;++i)r[i]=e(n,t[i]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()},r.prototype.changeBit=function(t,e){var i=r.ONE.shiftLeft(t);return this.bitwiseTo(i,e,i),i},r.prototype.addTo=function(t,e){for(var r=0,i=0,n=Math.min(t.t,this.t);r<n;)i+=this[r]+t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i+=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i+=t[r],e[r++]=i&this.DM,i>>=this.DB;i+=t.s}e.s=i<0?-1:0,i>0?e[r++]=i:i<-1&&(e[r++]=this.DV+i),e.t=r,e.clamp()},r.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},r.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},r.prototype.multiplyLowerTo=function(t,e,r){var i,n=Math.min(this.t+t.t,e);for(r.s=0,r.t=n;n>0;)r[--n]=0;for(i=r.t-this.t;n<i;++n)r[n+this.t]=this.am(0,t[n],r,n,0,this.t);for(i=Math.min(t.t,e);n<i;++n)this.am(0,t[n],r,n,0,e-n);r.clamp()},r.prototype.multiplyUpperTo=function(t,e,r){var i=r.t=this.t+t.t- --e;for(r.s=0;--i>=0;)r[i]=0;for(i=Math.max(e-this.t,0);i<t.t;++i)r[this.t+i-e]=this.am(e-i,t[i],r,0,0,this.t+i-e);r.clamp(),r.drShiftTo(1,r)},r.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var i=this.t-1;i>=0;--i)r=(e*r+this[i])%t;return r},r.prototype.millerRabin=function(t){var e=this.subtract(r.ONE),n=e.getLowestSetBit();if(n<=0)return!1;var o=e.shiftRight(n);(t=t+1>>1)>x.length&&(t=x.length);for(var s=i(),h=0;h<t;++h){s.fromInt(x[Math.floor(Math.random()*x.length)]);var a=s.modPow(o,this);if(0!=a.compareTo(r.ONE)&&0!=a.compareTo(e)){for(var u=1;u++<n&&0!=a.compareTo(e);)if(0==(a=a.modPowInt(2,this)).compareTo(r.ONE))return!1;if(0!=a.compareTo(e))return!1}}return!0},r.prototype.clone=function(){var t=i();return this.copyTo(t),t},r.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},r.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},r.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},r.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},r.prototype.toByteArray=function(){var t=this.t,e=new Array;e[0]=this.s;var r,i=this.DB-t*this.DB%8,n=0;if(t-- >0)for(i<this.DB&&(r=this[t]>>i)!=(this.s&this.DM)>>i&&(e[n++]=r|this.s<<this.DB-i);t>=0;)i<8?(r=(this[t]&(1<<i)-1)<<8-i,r|=this[--t]>>(i+=this.DB-8)):(r=this[t]>>(i-=8)&255,i<=0&&(i+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(e[n++]=r);return e},r.prototype.equals=function(t){return 0==this.compareTo(t)},r.prototype.min=function(t){return this.compareTo(t)<0?this:t},r.prototype.max=function(t){return this.compareTo(t)>0?this:t},r.prototype.and=function(t){var e=i();return this.bitwiseTo(t,m,e),e},r.prototype.or=function(t){var e=i();return this.bitwiseTo(t,v,e),e},r.prototype.xor=function(t){var e=i();return this.bitwiseTo(t,y,e),e},r.prototype.andNot=function(t){var e=i();return this.bitwiseTo(t,g,e),e},r.prototype.not=function(){for(var t=i(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},r.prototype.shiftLeft=function(t){var e=i();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},r.prototype.shiftRight=function(t){var e=i();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},r.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+w(this[t]);return this.s<0?this.t*this.DB:-1},r.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=T(this[r]^e);return t},r.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},r.prototype.setBit=function(t){return this.changeBit(t,v)},r.prototype.clearBit=function(t){return this.changeBit(t,g)},r.prototype.flipBit=function(t){return this.changeBit(t,y)},r.prototype.add=function(t){var e=i();return this.addTo(t,e),e},r.prototype.subtract=function(t){var e=i();return this.subTo(t,e),e},r.prototype.multiply=function(t){var e=i();return this.multiplyTo(t,e),e},r.prototype.divide=function(t){var e=i();return this.divRemTo(t,e,null),e},r.prototype.remainder=function(t){var e=i();return this.divRemTo(t,null,e),e},r.prototype.divideAndRemainder=function(t){var e=i(),r=i();return this.divRemTo(t,e,r),new Array(e,r)},r.prototype.modPow=function(t,e){var r,n,o=t.bitLength(),s=c(1);if(o<=0)return s;r=o<18?1:o<48?3:o<144?4:o<768?5:6,n=o<8?new l(e):e.isEven()?new A(e):new d(e);var h=new Array,a=3,u=r-1,f=(1<<r)-1;if(h[1]=n.convert(this),r>1){var m=i();for(n.sqrTo(h[1],m);a<=f;)h[a]=i(),n.mulTo(m,h[a-2],h[a]),a+=2}var v,y,g=t.t-1,w=!0,T=i();for(o=p(t[g])-1;g>=0;){for(o>=u?v=t[g]>>o-u&f:(v=(t[g]&(1<<o+1)-1)<<u-o,g>0&&(v|=t[g-1]>>this.DB+o-u)),a=r;0==(1&v);)v>>=1,--a;if((o-=a)<0&&(o+=this.DB,--g),w)h[v].copyTo(s),w=!1;else{for(;a>1;)n.sqrTo(s,T),n.sqrTo(T,s),a-=2;a>0?n.sqrTo(s,T):(y=s,s=T,T=y),n.mulTo(T,h[v],s)}for(;g>=0&&0==(t[g]&1<<o);)n.sqrTo(s,T),y=s,s=T,T=y,--o<0&&(o=this.DB-1,--g)}return n.revert(s)},r.prototype.modInverse=function(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return r.ZERO;for(var i=t.clone(),n=this.clone(),o=c(1),s=c(0),h=c(0),a=c(1);0!=i.signum();){for(;i.isEven();)i.rShiftTo(1,i),e?(o.isEven()&&s.isEven()||(o.addTo(this,o),s.subTo(t,s)),o.rShiftTo(1,o)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;n.isEven();)n.rShiftTo(1,n),e?(h.isEven()&&a.isEven()||(h.addTo(this,h),a.subTo(t,a)),h.rShiftTo(1,h)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);i.compareTo(n)>=0?(i.subTo(n,i),e&&o.subTo(h,o),s.subTo(a,s)):(n.subTo(i,n),e&&h.subTo(o,h),a.subTo(s,a))}return 0!=n.compareTo(r.ONE)?r.ZERO:a.compareTo(t)>=0?a.subtract(t):a.signum()<0?(a.addTo(t,a),a.signum()<0?a.add(t):a):a},r.prototype.pow=function(t){return this.exp(t,new b)},r.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var i=e;e=r,r=i}var n=e.getLowestSetBit(),o=r.getLowestSetBit();if(o<0)return e;for(n<o&&(o=n),o>0&&(e.rShiftTo(o,e),r.rShiftTo(o,r));e.signum()>0;)(n=e.getLowestSetBit())>0&&e.rShiftTo(n,e),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return o>0&&r.lShiftTo(o,r),r},r.prototype.isProbablePrime=function(t){var e,r=this.abs();if(1==r.t&&r[0]<=x[x.length-1]){for(e=0;e<x.length;++e)if(r[0]==x[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<x.length;){for(var i=x[e],n=e+1;n<x.length&&i<k;)i*=x[n++];for(i=r.modInt(i);e<n;)if(i%x[e++]==0)return!1}return r.millerRabin(t)},r.prototype.square=function(){var t=i();return this.squareTo(t),t},r.prototype.Barrett=A,null==D){var M;if(D=new Array,B=0,"undefined"!=typeof window&&window.crypto)if(window.crypto.getRandomValues){var I=new Uint8Array(32);for(window.crypto.getRandomValues(I),M=0;M<32;++M)D[B++]=I[M]}else if("Netscape"==navigator.appName&&navigator.appVersion<"5"){var C=window.crypto.random(32);for(M=0;M<C.length;++M)D[B++]=255&C.charCodeAt(M)}for(;B<N;)M=Math.floor(65536*Math.random()),D[B++]=M>>>8,D[B++]=255&M;B=0,E()}function R(){if(null==S){for(E(),(S=new O).init(D),B=0;B<D.length;++B)D[B]=0;B=0}return S.next()}function j(){}function O(){this.i=0,this.j=0,this.S=new Array}j.prototype.nextBytes=function(t){var e;for(e=0;e<t.length;++e)t[e]=R()},O.prototype.init=function(t){var e,r,i;for(e=0;e<256;++e)this.S[e]=e;for(r=0,e=0;e<256;++e)i=this.S[e],this.S[e]=this.S[r=r+this.S[e]+t[e%t.length]&255],this.S[r]=i;this.i=0,this.j=0},O.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var N=256;e.exports={default:r,BigInteger:r,SecureRandom:j}}).call(t)}).BigInteger,h={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},a={sha256:i$1};function u(t,e){if(this.n=null,this.e=0,!(null!=t&&null!=e&&t.length>0&&e.length>0))throw new Error("Invalid key data");this.n=new s(t,16),this.e=parseInt(e,16)}u.prototype.verify=function(t,e){e=e.replace(/[^0-9a-f]|[\s\n]]/gi,"");var r=new s(e,16);if(r.bitLength()>this.n.bitLength())throw new Error("Signature does not match with the key modulus.");var i=function(t){for(var e in h){var r=h[e],i=r.length;if(t.substring(0,i)===r)return{alg:e,hash:t.substring(i)}}return[]}(r.modPowInt(this.e,this.n).toString(16).replace(/^1f+00/,""));if(0===i.length)return!1;if(!a.hasOwnProperty(i.alg))throw new Error("Hashing algorithm is not supported.");var n=a[i.alg](t).toString();return i.hash===n};for(var f=[],c=[],p="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,m=l.length;d<m;++d)f[d]=l[d],c[l.charCodeAt(d)]=d;function v(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function y(t,e,r){for(var i,n=[],o=e;o<r;o+=3)n.push(f[(i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+f[i>>12&63]+f[i>>6&63]+f[63&i]);return n.join("")}c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;var g={byteLength:function(t){var e=v(t),r=e[1];return 3*(e[0]+r)/4-r},toByteArray:function(t){var e,r,i=v(t),n=i[0],o=i[1],s=new p(3*(n+o)/4-o),h=0,a=o>0?n-4:n;for(r=0;r<a;r+=4)e=c[t.charCodeAt(r)]<<18|c[t.charCodeAt(r+1)]<<12|c[t.charCodeAt(r+2)]<<6|c[t.charCodeAt(r+3)],s[h++]=e>>16&255,s[h++]=e>>8&255,s[h++]=255&e;return 2===o&&(e=c[t.charCodeAt(r)]<<2|c[t.charCodeAt(r+1)]>>4,s[h++]=255&e),1===o&&(e=c[t.charCodeAt(r)]<<10|c[t.charCodeAt(r+1)]<<4|c[t.charCodeAt(r+2)]>>2,s[h++]=e>>8&255,s[h++]=255&e),s},fromByteArray:function(t){for(var e,r=t.length,i=r%3,n=[],o=0,s=r-i;o<s;o+=16383)n.push(y(t,o,o+16383>s?s:o+16383));return 1===i?n.push(f[(e=t[r-1])>>2]+f[e<<4&63]+"=="):2===i&&n.push(f[(e=(t[r-2]<<8)+t[r-1])>>10]+f[e>>4&63]+f[e<<2&63]+"="),n.join("")}};function w(t){var e=t.length%4;return 0===e?t:t+new Array(4-e+1).join("=")}function T(t){return t=w(t).replace(/\-/g,"+").replace(/_/g,"/"),decodeURIComponent(function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e}(g.toByteArray(t)).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function b(t){return function(t){for(var e="",r=0;r<t.length;r++){var i=t[r].toString(16);e+=2===i.length?i:"0"+i}return e}(g.toByteArray(w(t)))}var _=e(function(e,r){e.exports=function(){function e(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,n=void 0,o=void 0,s=function(t,e){l[i]=t,l[i+1]=e,2===(i+=2)&&(o?o(d):w())},h="undefined"!=typeof window?window:void 0,a=h||{},u=a.MutationObserver||a.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),c="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(d,1)}}var l=new Array(1e3);function d(){for(var t=0;t<i;t+=2)(0,l[t])(l[t+1]),l[t]=void 0,l[t+1]=void 0;i=0}var m,v,y,g,w=void 0;function T(t,e){var r=this,i=new this.constructor(A);void 0===i[_]&&N(i);var n=r._state;if(n){var o=arguments[n-1];s(function(){return j(n,i,o,r._result)})}else C(r,i,t,e);return i}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return k(e,t),e}f?w=function(){return process.nextTick(d)}:u?(v=0,y=new u(d),g=document.createTextNode(""),y.observe(g,{characterData:!0}),w=function(){g.data=v=++v%2}):c?((m=new MessageChannel).port1.onmessage=d,w=function(){return m.port2.postMessage(0)}):w=void 0===h?function(){try{var t=Function("return this")().require("vertx");return void 0!==(n=t.runOnLoop||t.runOnContext)?function(){n(d)}:p()}catch(t){return p()}}():p();var _=Math.random().toString(36).substring(2);function A(){}var S=void 0,D=1,B=2;function x(t,r,i){r.constructor===t.constructor&&i===T&&r.constructor.resolve===b?function(t,e){e._state===D?M(t,e._result):e._state===B?I(t,e._result):C(e,void 0,function(e){return k(t,e)},function(e){return I(t,e)})}(t,r):void 0===i?M(t,r):e(i)?function(t,e,r){s(function(t){var i=!1,n=function(r,n,o,s){try{r.call(n,function(r){i||(i=!0,e!==r?k(t,r):M(t,r))},function(e){i||(i=!0,I(t,e))})}catch(t){return t}}(r,e);!i&&n&&(i=!0,I(t,n))},t)}(t,r,i):M(t,r)}function k(t,e){if(t===e)I(t,new TypeError("You cannot resolve a promise with itself"));else if(n=typeof(i=e),null===i||"object"!==n&&"function"!==n)M(t,e);else{var r=void 0;try{r=e.then}catch(e){return void I(t,e)}x(t,e,r)}var i,n}function E(t){t._onerror&&t._onerror(t._result),R(t)}function M(t,e){t._state===S&&(t._result=e,t._state=D,0!==t._subscribers.length&&s(R,t))}function I(t,e){t._state===S&&(t._state=B,t._result=e,s(E,t))}function C(t,e,r,i){var n=t._subscribers,o=n.length;t._onerror=null,n[o]=e,n[o+D]=r,n[o+B]=i,0===o&&t._state&&s(R,t)}function R(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var i=void 0,n=void 0,o=t._result,s=0;s<e.length;s+=3)n=e[s+r],(i=e[s])?j(r,i,n,o):n(o);t._subscribers.length=0}}function j(t,r,i,n){var o=e(i),s=void 0,h=void 0,a=!0;if(o){try{s=i(n)}catch(t){a=!1,h=t}if(r===s)return void I(r,new TypeError("A promises callback cannot return that same promise."))}else s=n;r._state!==S||(o&&a?k(r,s):!1===a?I(r,h):t===D?M(r,s):t===B&&I(r,s))}var O=0;function N(t){t[_]=O++,t._state=void 0,t._result=void 0,t._subscribers=[]}var P=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[_]||N(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?M(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&M(this.promise,this._result))):I(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===S&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,i=r.resolve;if(i===b){var n=void 0,o=void 0,s=!1;try{n=t.then}catch(t){s=!0,o=t}if(n===T&&t._state!==S)this._settledAt(t._state,e,t._result);else if("function"!=typeof n)this._remaining--,this._result[e]=t;else if(r===V){var h=new r(A);s?I(h,o):x(h,t,n),this._willSettleAt(h,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(i(t),e)},t.prototype._settledAt=function(t,e,r){var i=this.promise;i._state===S&&(this._remaining--,t===B?I(i,r):this._result[e]=r),0===this._remaining&&M(i,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,function(t){return r._settledAt(D,e,t)},function(t){return r._settledAt(B,e,t)})},t}(),V=function(){function t(e){this[_]=O++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){k(t,e)},function(e){I(t,e)})}catch(e){I(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return e(t)?this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return V.prototype.then=T,V.all=function(t){return new P(this,t).promise},V.race=function(t){var e=this;return r(t)?new e(function(r,i){for(var n=t.length,o=0;o<n;o++)e.resolve(t[o]).then(r,i)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},V.resolve=b,V.reject=function(t){var e=new this(A);return I(e,t),e},V._setScheduler=function(t){o=t},V._setAsap=function(t){s=t},V._asap=s,V.polyfill=function(){var e=void 0;if(void 0!==t)e=t;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=e.Promise;if(r){var i=null;try{i=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===i&&!r.cast)return}e.Promise=V},V.Promise=V,V}()}),A=e(function(e){var r,i;r=t,i=function(){return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^\/:]+:\/*$/)&&t.length>1){var r=t.shift();t[0]=r+t[0]}t[0]=t[0].match(/^file:\/\/\//)?t[0].replace(/^([^\/:]+):\/*/,"$1:///"):t[0].replace(/^([^\/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var n=t[i];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(i>0&&(n=n.replace(/^[\/]+/,"")),n=n.replace(/[\/]+$/,i<t.length-1?"":"/"),e.push(n))}var o=e.join("/"),s=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():r.urljoin=i()});function S(t){if(t.ok)return t.json();var e=new Error(t.statusText);return e.response=t,Promise.reject(e)}function D(t){this.name="ConfigurationError",this.message=t||""}function B(t){this.name="TokenValidationError",this.message=t||""}_.polyfill(),D.prototype=Error.prototype,B.prototype=Error.prototype;var x=function(){};x.prototype.get=function(){return null},x.prototype.has=function(){return null},x.prototype.set=function(){return null};var k="RS256",E=function(t){return"number"==typeof t},M=function(){return new Date},I=60;function C(t){var e=t||{};if(this.jwksCache=e.jwksCache||new x,this.expectedAlg=e.expectedAlg||"RS256",this.issuer=e.issuer,this.audience=e.audience,this.leeway=0===e.leeway?0:e.leeway||I,this.jwksURI=e.jwksURI,this.maxAge=e.maxAge,this.__clock="function"==typeof e.__clock?e.__clock:M,this.leeway<0||this.leeway>300)throw new D("The leeway should be positive and lower than five minutes.");if(k!==this.expectedAlg)throw new D('Signature algorithm of "'+this.expectedAlg+'" is not supported. Expected the ID token to be signed with "'+k+'".')}function PluginHandler(webAuth,plugins){this.plugins=plugins;for(var a=0;a<this.plugins.length;a++){if(this.plugins[a].version!==version.raw){var pluginName="";throw this.plugins[a].constructor&&this.plugins[a].constructor.name&&(pluginName=this.plugins[a].constructor.name),new Error("Plugin "+pluginName+" version ("+this.plugins[a].version+") is not compatible with the SDK version ("+version.raw+")")}this.plugins[a].setWebAuth(webAuth)}}C.prototype.verify=function(t,e,r){if(!t)return r(new B("ID token is required but missing"),!1);var i=this.decode(t);if(i instanceof Error)return r(new B("ID token could not be decoded"),!1);var n=i.encoded.header+"."+i.encoded.payload,o=b(i.encoded.signature),s=i.header.alg,h=i.header.kid,a=i.payload.aud,u=i.payload.sub,f=i.payload.iss,c=i.payload.exp,p=i.payload.nbf,l=i.payload.iat,d=i.payload.azp,m=i.payload.auth_time,v=i.payload.nonce,y=this.__clock(),g=this;if(g.expectedAlg!==s)return r(new B('Signature algorithm of "'+s+'" is not supported. Expected the ID token to be signed with "'+k+'".'),!1);this.getRsaVerifier(f,h,function(t,s){if(t)return r(t);if(!s.verify(n,o))return r(new B("Invalid ID token signature."));if(!f||"string"!=typeof f)return r(new B("Issuer (iss) claim must be a string present in the ID token",!1));if(g.issuer!==f)return r(new B('Issuer (iss) claim mismatch in the ID token, expected "'+g.issuer+'", found "'+f+'"'),!1);if(!u||"string"!=typeof u)return r(new B("Subject (sub) claim must be a string present in the ID token"),!1);if(!a||"string"!=typeof a&&!Array.isArray(a))return r(new B("Audience (aud) claim must be a string or array of strings present in the ID token"));if(Array.isArray(a)&&!a.includes(g.audience))return r(new B('Audience (aud) claim mismatch in the ID token; expected "'+g.audience+'" but was not one of "'+a.join(", ")+'"'));if("string"==typeof a&&g.audience!==a)return r(new B('Audience (aud) claim mismatch in the ID token; expected "'+g.audience+'" but found "'+a+'"'),!1);if(e){if(!v||"string"!=typeof v)return r(new B("Nonce (nonce) claim must be a string present in the ID token"),!1);if(v!==e)return r(new B('Nonce (nonce) claim value mismatch in the ID token; expected "'+e+'", found "'+v+'"'),!1)}if(Array.isArray(a)&&a.length>1){if(!d||"string"!=typeof d)return r(new B("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values",!1));if(d!==g.audience)return r(new B('Authorized Party (azp) claim mismatch in the ID token; expected "'+g.audience+'", found "'+d+'"',!1))}if(!c||!E(c))return r(new B("Expiration Time (exp) claim must be a number present in the ID token",!1));if(!l||!E(l))return r(new B("Issued At (iat) claim must be a number present in the ID token"));var h=c+g.leeway,w=new Date(0);if(w.setUTCSeconds(h),y>w)return r(new B('Expiration Time (exp) claim error in the ID token; current time "'+y+'" is after expiration time "'+w+'"',!1));if(p&&E(p)){var T=p-g.leeway,b=new Date(0);if(b.setUTCSeconds(T),y<b)return r(new B('Not Before Time (nbf) claim error in the ID token; current time "'+y+'" is before the not before time "'+b+'"'))}if(g.maxAge){if(!m||!E(m))return r(new B("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"));var _=m+g.maxAge+g.leeway,A=new Date(0);if(A.setUTCSeconds(_),y>A)return r(new B('Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time "'+y+'" is after last auth time at "'+A+'"'))}return r(null,i.payload)})},C.prototype.getRsaVerifier=function(t,e,r){var i=this,n=t+e;if(this.jwksCache.has(n)){var o=this.jwksCache.get(n);r(null,new u(o.modulus,o.exp))}else!function(t,e){("undefined"==typeof fetch?function(t,e){return e=e||{},new Promise(function(r,i){var n=new XMLHttpRequest,o=[],s=[],h={},a=function(){return{ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:function(){return Promise.resolve(n.responseText)},json:function(){return Promise.resolve(JSON.parse(n.responseText))},blob:function(){return Promise.resolve(new Blob([n.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return s},get:function(t){return h[t.toLowerCase()]},has:function(t){return t.toLowerCase()in h}}}};for(var u in n.open(e.method||"get",t,!0),n.onload=function(){n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,r){o.push(e=e.toLowerCase()),s.push([e,r]),h[e]=h[e]?h[e]+","+r:r}),r(a())},n.onerror=i,n.withCredentials="include"==e.credentials,e.headers)n.setRequestHeader(u,e.headers[u]);n.send(e.body||null)})}:fetch)(t.jwksURI||A(t.iss,".well-known","jwks.json")).then(S).then(function(r){var i,n,o,s=null;for(i=0;i<r.keys.length&&null===s;i++)if((n=r.keys[i]).kid===t.kid&&(s=n),!s)return e(new Error('Could not find a public key for Key ID (kid) "'+t.kid+'"'));return e(null,{modulus:b((o=s).n),exp:b(o.e)})}).catch(function(t){e(t)})}({jwksURI:this.jwksURI,iss:t,kid:e},function(t,e){return t?r(t):(i.jwksCache.set(n,e),r(null,new u(e.modulus,e.exp)))})},C.prototype.decode=function(t){var e,r,i=t.split(".");if(3!==i.length)return new B("Cannot decode a malformed JWT");try{e=JSON.parse(T(i[0])),r=JSON.parse(T(i[1]))}catch(t){return new B("Token header or payload is not valid JSON")}return{header:e,payload:r,encoded:{header:i[0],payload:i[1],signature:i[2]}}},C.prototype.validateAccessToken=function(t,e,r,s){if(this.expectedAlg!==e)return s(new B('Signature algorithm of "'+e+'" is not supported. Expected "'+this.expectedAlg+'"'));var h,a=i$1(t),u=o.stringify(a),f=u.substring(0,u.length/2),c=o.parse(f),p=n.stringify(c);return s((h={"+":"-","/":"_","=":""},p.replace(/[+\/=]/g,function(t){return h[t]})!==r?new B("Invalid access_token"):null))},PluginHandler.prototype.get=function(extensibilityPoint){for(var a=0;a<this.plugins.length;a++)if(this.plugins[a].supports(extensibilityPoint))return this.plugins[a].init();return null};var random={randomString:function(length){var bytes=new Uint8Array(length),result=[],charset="0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",cryptoObj=windowHelper.getWindow().crypto||windowHelper.getWindow().msCrypto;if(!cryptoObj)return null;for(var random=cryptoObj.getRandomValues(bytes),a=0;a<random.length;a++)result.push(charset[random[a]%charset.length]);return result.join("")}},DEFAULT_NAMESPACE="com.auth0.auth.";function TransactionManager(options){var transaction=options.transaction||{};this.namespace=transaction.namespace||DEFAULT_NAMESPACE,this.keyLength=transaction.keyLength||32,this.storage=new Storage(options),this.options=options}function IframeHandler(options){if(this.url=options.url,this.callback=options.callback,this.timeout=options.timeout||6e4,this.timeoutCallback=options.timeoutCallback||null,this.eventListenerType=options.eventListenerType||"message",this.iframe=null,this.timeoutHandle=null,this._destroyTimeout=null,this.transientMessageEventListener=null,this.proxyEventListener=null,this.eventValidator=options.eventValidator||{isValid:function(){return!0}},"function"!=typeof this.callback)throw new Error("options.callback must be a function")}function WebMessageHandler(webAuth){this.webAuth=webAuth,this.warn=new Warn(webAuth.baseOptions)}function CrossOriginAuthentication(webAuth,options){this.webAuth=webAuth,this.baseOptions=options,this.request=new RequestBuilder(options),this.webMessageHandler=new WebMessageHandler(webAuth),this.storage=new Storage(options)}function createKey(origin,coId){return["co/verifier",encodeURIComponent(origin),encodeURIComponent(coId)].join("/")}function Redirect(auth0,options){this.webAuth=auth0,this.baseOptions=options,this.crossOriginAuthentication=new CrossOriginAuthentication(auth0,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}TransactionManager.prototype.process=function(options){if(!options.responseType)throw new Error("responseType is required");var lastUsedConnection=options.realm||options.connection,responseTypeIncludesIdToken=-1!==options.responseType.indexOf("id_token"),transaction=this.generateTransaction(options.appState,options.state,options.nonce,lastUsedConnection,responseTypeIncludesIdToken);return options.state||(options.state=transaction.state),responseTypeIncludesIdToken&&!options.nonce&&(options.nonce=transaction.nonce),options},TransactionManager.prototype.generateTransaction=function(appState,state,nonce,lastUsedConnection,generateNonce){return state=state||random.randomString(this.keyLength),nonce=nonce||(generateNonce?random.randomString(this.keyLength):null),windowHelper.getWindow().location.host===this.options.domain||this.storage.setItem(this.namespace+state,{nonce:nonce,appState:appState,state:state,lastUsedConnection:lastUsedConnection},{expires:1/48}),{state:state,nonce:nonce}},TransactionManager.prototype.getStoredTransaction=function(state){var transactionData;return transactionData=this.storage.getItem(this.namespace+state),this.clearTransaction(state),transactionData},TransactionManager.prototype.clearTransaction=function(state){this.storage.removeItem(this.namespace+state)},IframeHandler.prototype.init=function(){var _this=this,_window=windowHelper.getWindow();switch(this.iframe=_window.document.createElement("iframe"),this.iframe.style.display="none",this.proxyEventListener=function(e){_this.eventListener(e)},this.eventListenerType){case"message":this.eventSourceObject=_window;break;case"load":this.eventSourceObject=this.iframe;break;default:throw new Error("Unsupported event listener type: "+this.eventListenerType)}this.eventSourceObject.addEventListener(this.eventListenerType,this.proxyEventListener,!1),_window.document.body.appendChild(this.iframe),this.iframe.src=this.url,this.timeoutHandle=setTimeout(function(){_this.timeoutHandler()},this.timeout)},IframeHandler.prototype.eventListener=function(event){var eventData={event:event,sourceObject:this.eventSourceObject};this.eventValidator.isValid(eventData)&&(this.destroy(),this.callback(eventData))},IframeHandler.prototype.timeoutHandler=function(){this.destroy(),this.timeoutCallback&&this.timeoutCallback()},IframeHandler.prototype.destroy=function(){var _this=this;clearTimeout(this.timeoutHandle),this._destroyTimeout=setTimeout(function(){_this.eventSourceObject.removeEventListener(_this.eventListenerType,_this.proxyEventListener,!1),_this.iframe.parentNode&&_this.iframe.parentNode.removeChild(_this.iframe)},0)},WebMessageHandler.prototype.run=function(options,cb){var _this=this;options.responseMode="web_message",options.prompt="none";var currentOrigin=windowHelper.getOrigin(),redirectUriOrigin=objectHelper.getOriginFromUrl(options.redirectUri);if(redirectUriOrigin&&currentOrigin!==redirectUriOrigin)return cb({error:"origin_mismatch",error_description:"The redirectUri's origin ("+redirectUriOrigin+") should match the window's origin ("+currentOrigin+")."});!function(authorizeUrl,options,callback){new IframeHandler({url:authorizeUrl,eventListenerType:"message",callback:function(eventData){callback(null,eventData)},timeout:options.timeout,eventValidator:{isValid:function(eventData){return"authorization_response"===eventData.event.data.type&&options.state===eventData.event.data.response.state}},timeoutCallback:function(){callback({error:"timeout",error_description:"Timeout during executing web_message communication",state:options.state})}}).init()}(this.webAuth.client.buildAuthorizeUrl(options),options,function(err,eventData){var error=err;if(!err&&eventData.event.data.response.error&&(error=eventData.event.data.response),!error){var parsedHash=eventData.event.data.response;return _this.webAuth.validateAuthenticationResponse(options,parsedHash,cb)}return"consent_required"===error.error&&"localhost"===windowHelper.getWindow().location.hostname&&_this.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"),_this.webAuth.transactionManager.clearTransaction(error.state),cb(objectHelper.pick(error,["error","error_description"]))})},CrossOriginAuthentication.prototype.login=function(options,cb){var _this=this,url=urlJoin(this.baseOptions.rootUrl,"/co/authenticate");options.username=options.username||options.email,delete options.email;var authenticateBody={client_id:options.clientID||this.baseOptions.clientID,username:options.username};options.password&&(authenticateBody.password=options.password),options.otp&&(authenticateBody.otp=options.otp);var realm=options.realm||this.baseOptions.realm;if(realm){var credentialType=options.credentialType||this.baseOptions.credentialType||"http://auth0.com/oauth/grant-type/password-realm";authenticateBody.realm=realm,authenticateBody.credential_type=credentialType}else authenticateBody.credential_type="password";this.request.post(url).withCredentials().send(authenticateBody).end(function(err,data){if(err){var errorObject=err.response&&err.response.body||{error:"request_error",error_description:JSON.stringify(err)};return wrapCallback(cb,{forceLegacyError:!0})(errorObject)}var popupMode=!0===options.popup;options=objectHelper.blacklist(options,["password","credentialType","otp","popup"]);var authorizeOptions=objectHelper.merge(options).with({loginTicket:data.body.login_ticket}),key=createKey(_this.baseOptions.rootUrl,data.body.co_id);_this.storage.setItem(key,data.body.co_verifier,{expires:1/96}),popupMode?_this.webMessageHandler.run(authorizeOptions,wrapCallback(cb,{forceLegacyError:!0})):_this.webAuth.authorize(authorizeOptions)})},CrossOriginAuthentication.prototype.callback=function(){var targetOrigin=decodeURIComponent(function(name){var parts=("&"+windowHelper.getWindow().location.hash.substring(1)).split("&"+name+"=");if(2===parts.length)return parts.pop().split("&").shift()}("origin")),theWindow=windowHelper.getWindow(),_this=this;theWindow.addEventListener("message",function(evt){if("co_verifier_request"===evt.data.type){var key=createKey(evt.origin,evt.data.request.id),verifier=function(storage,key){try{var verifier=storage.getItem(key);return storage.removeItem(key),verifier||""}catch(e){return""}}(_this.storage,key);evt.source.postMessage({type:"co_verifier_response",response:{verifier:verifier}},evt.origin)}}),theWindow.parent.postMessage({type:"ready"},targetOrigin)},Redirect.prototype.loginWithCredentials=function(options,cb){options.realm=options.realm||options.connection,delete options.connection,this.crossOriginAuthentication.login(options,cb)},Redirect.prototype.signupAndLogin=function(options,cb){var _this=this;return this.webAuth.client.dbConnection.signup(options,function(err){return err?cb(err):(options.realm=options.realm||options.connection,delete options.connection,_this.webAuth.login(options,cb))})};var winchan=createCommonjsModule(function(module){var WinChan=function(){var RELAY_FRAME_NAME="__winchan_relay_frame",CLOSE_CMD="die";function addListener(w,event,cb){w.attachEvent?w.attachEvent("on"+event,cb):w.addEventListener&&w.addEventListener(event,cb,!1)}function removeListener(w,event,cb){w.detachEvent?w.detachEvent("on"+event,cb):w.removeEventListener&&w.removeEventListener(event,cb,!1)}function extractOrigin(url){/^https?:\/\//.test(url)||(url=window.location.href);var m=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);return m?m[1]:url}var isIE=function(){if("undefined"==typeof navigator)return!1;var rv=-1,ua=navigator.userAgent;"Microsoft Internet Explorer"===navigator.appName?null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(ua)&&(rv=parseFloat(RegExp.$1)):ua.indexOf("Trident")>-1&&null!==new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(ua)&&(rv=parseFloat(RegExp.$1));return rv>=8}();return"undefined"!=typeof window&&window.JSON&&window.JSON.stringify&&window.JSON.parse&&window.postMessage?{open:function(opts,cb){if(!cb)throw"missing required callback argument";var err,iframe;opts.url||(err="missing required 'url' parameter"),opts.relay_url||(err="missing required 'relay_url' parameter"),err&&setTimeout(function(){cb(err)},0),opts.window_name||(opts.window_name=null),opts.window_features&&!function(){try{var userAgent=navigator.userAgent;return-1!=userAgent.indexOf("Fennec/")||-1!=userAgent.indexOf("Firefox/")&&-1!=userAgent.indexOf("Android")}catch(e){}return!1}()||(opts.window_features=void 0);var messageTarget,origin=opts.origin||extractOrigin(opts.url);if(origin!==extractOrigin(opts.relay_url))return setTimeout(function(){cb("invalid arguments: origin of url and relay_url must match")},0);isIE&&((iframe=document.createElement("iframe")).setAttribute("src",opts.relay_url),iframe.style.display="none",iframe.setAttribute("name",RELAY_FRAME_NAME),document.body.appendChild(iframe),messageTarget=iframe.contentWindow);var w=opts.popup||window.open(opts.url,opts.window_name,opts.window_features);opts.popup&&(w.location.href=opts.url),messageTarget||(messageTarget=w);var closeInterval=setInterval(function(){w&&w.closed&&(cleanup(),cb&&(cb("User closed the popup window"),cb=null))},500),req=JSON.stringify({a:"request",d:opts.params});function cleanup(){if(iframe&&document.body.removeChild(iframe),iframe=void 0,closeInterval&&(closeInterval=clearInterval(closeInterval)),removeListener(window,"message",onMessage),removeListener(window,"unload",cleanup),w)try{w.close()}catch(securityViolation){messageTarget.postMessage(CLOSE_CMD,origin)}w=messageTarget=void 0}function onMessage(e){if(e.origin===origin){try{var d=JSON.parse(e.data)}catch(err){if(cb)return cb(err);throw err}"ready"===d.a?messageTarget.postMessage(req,origin):"error"===d.a?(cleanup(),cb&&(cb(d.d),cb=null)):"response"===d.a&&(cleanup(),cb&&(cb(null,d.d),cb=null))}}return addListener(window,"unload",cleanup),addListener(window,"message",onMessage),{originalPopup:w,close:cleanup,focus:function(){if(w)try{w.focus()}catch(e){}}}},onOpen:function(cb){var o="*",msgTarget=isIE?function(){window.location;for(var frames=window.opener.frames,i=frames.length-1;i>=0;i--)try{if(frames[i].location.protocol===window.location.protocol&&frames[i].location.host===window.location.host&&frames[i].name===RELAY_FRAME_NAME)return frames[i]}catch(e){}}():window.opener;if(!msgTarget)throw"can't find relay frame";function doPost(msg){msg=JSON.stringify(msg),isIE?msgTarget.doPost(msg,o):msgTarget.postMessage(msg,o)}function onDie(e){if(e.data===CLOSE_CMD)try{window.close()}catch(o_O){}}addListener(isIE?msgTarget:window,"message",function onMessage(e){var d;try{d=JSON.parse(e.data)}catch(err){}d&&"request"===d.a&&(removeListener(window,"message",onMessage),o=e.origin,cb&&setTimeout(function(){cb(o,d.d,function(r){cb=void 0,doPost({a:"response",d:r})})},0))}),addListener(isIE?msgTarget:window,"message",onDie);try{doPost({a:"ready"})}catch(e){addListener(msgTarget,"load",function(e){doPost({a:"ready"})})}var onUnload=function(){try{removeListener(isIE?msgTarget:window,"message",onDie)}catch(ohWell){}cb&&doPost({a:"error",d:"client closed window"}),cb=void 0;try{window.close()}catch(e){}};return addListener(window,"unload",onUnload),{detach:function(){removeListener(window,"unload",onUnload)}}}}:{open:function(url,winopts,arg,cb){setTimeout(function(){cb("unsupported browser")},0)},onOpen:function(cb){setTimeout(function(){cb("unsupported browser")},0)}}}();module.exports&&(module.exports=WinChan)});var urlHelper={extractOrigin:function(url){/^https?:\/\//.test(url)||(url=window.location.href);var m=/^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(url);return m?m[1]:url}};function PopupHandler(){this._current_popup=null}function Popup(webAuth,options){this.baseOptions=options,this.baseOptions.popupOrigin=options.popupOrigin,this.client=webAuth.client,this.webAuth=webAuth,this.transactionManager=new TransactionManager(this.baseOptions),this.crossOriginAuthentication=new CrossOriginAuthentication(webAuth,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}function SilentAuthenticationHandler(options){this.authenticationUrl=options.authenticationUrl,this.timeout=options.timeout||6e4,this.handler=null,this.postMessageDataType=options.postMessageDataType||!1,this.postMessageOrigin=options.postMessageOrigin||windowHelper.getWindow().location.origin||windowHelper.getWindow().location.protocol+"//"+windowHelper.getWindow().location.hostname+(windowHelper.getWindow().location.port?":"+windowHelper.getWindow().location.port:"")}function UsernamePassword(options){this.baseOptions=options,this.request=new RequestBuilder(options),this.transactionManager=new TransactionManager(this.baseOptions)}function HostedPages(client,options){this.baseOptions=options,this.client=client,this.baseOptions.universalLoginPage=!0,this.request=new RequestBuilder(this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}function defaultClock(){return new Date}function WebAuth(options){assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},clientID:{type:"string",message:"clientID option is required"},responseType:{optional:!0,type:"string",message:"responseType is not valid"},responseMode:{optional:!0,type:"string",message:"responseMode is not valid"},redirectUri:{optional:!0,type:"string",message:"redirectUri is not valid"},scope:{optional:!0,type:"string",message:"scope is not valid"},audience:{optional:!0,type:"string",message:"audience is not valid"},popupOrigin:{optional:!0,type:"string",message:"popupOrigin is not valid"},leeway:{optional:!0,type:"number",message:"leeway is not valid"},plugins:{optional:!0,type:"array",message:"plugins is not valid"},maxAge:{optional:!0,type:"number",message:"maxAge is not valid"},_disableDeprecationWarnings:{optional:!0,type:"boolean",message:"_disableDeprecationWarnings option is not valid"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"},_timesToRetryFailedRequests:{optional:!0,type:"number",message:"_timesToRetryFailedRequests option is not valid"}}),options.overrides&&assert.check(options.overrides,{type:"object",message:"overrides option is not valid"},{__tenant:{optional:!0,type:"string",message:"__tenant option is required"},__token_issuer:{optional:!0,type:"string",message:"__token_issuer option is required"},__jwks_uri:{optional:!0,type:"string",message:"__jwks_uri is required"}}),this.baseOptions=options,this.baseOptions.plugins=new PluginHandler(this,this.baseOptions.plugins||[]),this.baseOptions._sendTelemetry=!1!==this.baseOptions._sendTelemetry||this.baseOptions._sendTelemetry,this.baseOptions._timesToRetryFailedRequests=options._timesToRetryFailedRequests?parseInt(options._timesToRetryFailedRequests,0):0,this.baseOptions.tenant=this.baseOptions.overrides&&this.baseOptions.overrides.__tenant||this.baseOptions.domain.split(".")[0],this.baseOptions.token_issuer=this.baseOptions.overrides&&this.baseOptions.overrides.__token_issuer||"https://"+this.baseOptions.domain+"/",this.baseOptions.jwksURI=this.baseOptions.overrides&&this.baseOptions.overrides.__jwks_uri,this.transactionManager=new TransactionManager(this.baseOptions),this.client=new Authentication(this.baseOptions),this.redirect=new Redirect(this,this.baseOptions),this.popup=new Popup(this,this.baseOptions),this.crossOriginAuthentication=new CrossOriginAuthentication(this,this.baseOptions),this.webMessageHandler=new WebMessageHandler(this),this._universalLogin=new HostedPages(this,this.baseOptions),this.ssodataStorage=new SSODataStorage(this.baseOptions)}function PasswordlessAuthentication(request,options){this.baseOptions=options,this.request=request}function DBConnection(request,options){this.baseOptions=options,this.request=request}function Authentication(auth0,options){2===arguments.length?this.auth0=auth0:options=auth0,assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},clientID:{type:"string",message:"clientID option is required"},responseType:{optional:!0,type:"string",message:"responseType is not valid"},responseMode:{optional:!0,type:"string",message:"responseMode is not valid"},redirectUri:{optional:!0,type:"string",message:"redirectUri is not valid"},scope:{optional:!0,type:"string",message:"scope is not valid"},audience:{optional:!0,type:"string",message:"audience is not valid"},_disableDeprecationWarnings:{optional:!0,type:"boolean",message:"_disableDeprecationWarnings option is not valid"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"}}),this.baseOptions=options,this.baseOptions._sendTelemetry=!1!==this.baseOptions._sendTelemetry||this.baseOptions._sendTelemetry,this.baseOptions.rootUrl="https://"+this.baseOptions.domain,this.request=new RequestBuilder(this.baseOptions),this.passwordless=new PasswordlessAuthentication(this.request,this.baseOptions),this.dbConnection=new DBConnection(this.request,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings}),this.ssodataStorage=new SSODataStorage(this.baseOptions)}function Management(options){assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},token:{type:"string",message:"token option is required"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"}}),this.baseOptions=options,this.baseOptions.headers={Authorization:"Bearer "+this.baseOptions.token},this.request=new RequestBuilder(this.baseOptions),this.baseOptions.rootUrl=urlJoin("https://"+this.baseOptions.domain,"api","v2")}PopupHandler.prototype.calculatePosition=function(options){var width=options.width||500,height=options.height||600,_window=windowHelper.getWindow(),screenX=void 0!==_window.screenX?_window.screenX:_window.screenLeft,screenY=void 0!==_window.screenY?_window.screenY:_window.screenTop,outerWidth=void 0!==_window.outerWidth?_window.outerWidth:_window.document.body.clientWidth,outerHeight=void 0!==_window.outerHeight?_window.outerHeight:_window.document.body.clientHeight;return{width:width,height:height,left:options.left||screenX+(outerWidth-width)/2,top:options.top||screenY+(outerHeight-height)/2}},PopupHandler.prototype.preload=function(options){var _this=this,_window=windowHelper.getWindow(),popupPosition=this.calculatePosition(options.popupOptions||{}),popupOptions=objectHelper.merge(popupPosition).with(options.popupOptions),url=options.url||"about:blank",windowFeatures=lib_stringify(popupOptions,{encode:!1,delimiter:","});return this._current_popup&&!this._current_popup.closed?this._current_popup:(this._current_popup=_window.open(url,"auth0_signup_popup",windowFeatures),this._current_popup.kill=function(){this.close(),_this._current_popup=null},this._current_popup)},PopupHandler.prototype.load=function(url,relayUrl,options,cb){var _this=this,popupPosition=this.calculatePosition(options.popupOptions||{}),popupOptions=objectHelper.merge(popupPosition).with(options.popupOptions),winchanOptions=objectHelper.merge({url:url,relay_url:relayUrl,window_features:lib_stringify(popupOptions,{delimiter:",",encode:!1}),popup:this._current_popup}).with(options),popup=winchan.open(winchanOptions,function(err,data){if(!err||"SyntaxError"!==err.name)return _this._current_popup=null,cb(err,data)});return popup.focus(),popup},Popup.prototype.buildPopupHandler=function(){var pluginHandler=this.baseOptions.plugins.get("popup.getPopupHandler");return pluginHandler?pluginHandler.getPopupHandler():new PopupHandler},Popup.prototype.preload=function(options){options=options||{};var popup=this.buildPopupHandler();return popup.preload(options),popup},Popup.prototype.getPopupHandler=function(options,preload){return options.popupHandler?options.popupHandler:preload?this.preload(options):this.buildPopupHandler()},Popup.prototype.callback=function(options){var _this=this,theWindow=windowHelper.getWindow(),originUrl=(options=options||{}).popupOrigin||this.baseOptions.popupOrigin||windowHelper.getOrigin();theWindow.opener?winchan.onOpen(function(popupOrigin,r,cb){if(popupOrigin!==originUrl)return cb({error:"origin_mismatch",error_description:"The popup's origin ("+popupOrigin+") should match the `popupOrigin` parameter ("+originUrl+")."});_this.webAuth.parseHash(options||{},function(err,data){return cb(err||data)})}):theWindow.doPost=function(msg){theWindow.parent&&theWindow.parent.postMessage(msg,originUrl)}},Popup.prototype.authorize=function(options,cb){var url,relayUrl,popOpts={},pluginHandler=this.baseOptions.plugins.get("popup.authorize"),params=objectHelper.merge(this.baseOptions,["clientID","scope","domain","audience","tenant","responseType","redirectUri","_csrf","state","_intstate","nonce"]).with(objectHelper.blacklist(options,["popupHandler"]));return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),relayUrl=urlJoin(this.baseOptions.rootUrl,"relay.html"),options.owp?params.owp=!0:(popOpts.origin=urlHelper.extractOrigin(params.redirectUri),relayUrl=params.redirectUri),options.popupOptions&&(popOpts.popupOptions=objectHelper.pick(options.popupOptions,["width","height","top","left"])),pluginHandler&&(params=pluginHandler.processParams(params)),(params=this.transactionManager.process(params)).scope=params.scope||"openid profile email",delete params.domain,url=this.client.buildAuthorizeUrl(params),this.getPopupHandler(options).load(url,relayUrl,popOpts,wrapCallback(cb,{keepOriginalCasing:!0}))},Popup.prototype.loginWithCredentials=function(options,cb){options.realm=options.realm||options.connection,options.popup=!0,options=objectHelper.merge(this.baseOptions,["redirectUri","responseType","state","nonce"]).with(objectHelper.blacklist(options,["popupHandler","connection"])),options=this.transactionManager.process(options),this.crossOriginAuthentication.login(options,cb)},Popup.prototype.passwordlessVerify=function(options,cb){var _this=this;return this.client.passwordless.verify(objectHelper.blacklist(options,["popupHandler"]),function(err){if(err)return cb(err);options.username=options.phoneNumber||options.email,options.password=options.verificationCode,delete options.email,delete options.phoneNumber,delete options.verificationCode,delete options.type,_this.client.loginWithResourceOwner(options,cb)})},Popup.prototype.signupAndLogin=function(options,cb){var _this=this;return this.client.dbConnection.signup(options,function(err){if(err)return cb(err);_this.loginWithCredentials(options,cb)})},SilentAuthenticationHandler.create=function(options){return new SilentAuthenticationHandler(options)},SilentAuthenticationHandler.prototype.login=function(usePostMessage,callback){this.handler=new IframeHandler({auth0:this.auth0,url:this.authenticationUrl,eventListenerType:usePostMessage?"message":"load",callback:this.getCallbackHandler(callback,usePostMessage),timeout:this.timeout,eventValidator:this.getEventValidator(),timeoutCallback:function(){callback(null,"#error=timeout&error_description=Timeout+during+authentication+renew.")},usePostMessage:usePostMessage||!1}),this.handler.init()},SilentAuthenticationHandler.prototype.getEventValidator=function(){var _this=this;return{isValid:function(eventData){switch(eventData.event.type){case"message":return eventData.event.origin===_this.postMessageOrigin&&eventData.event.source===_this.handler.iframe.contentWindow&&(!1===_this.postMessageDataType||eventData.event.data.type&&eventData.event.data.type===_this.postMessageDataType);case"load":if("about:"===eventData.sourceObject.contentWindow.location.protocol)return!1;default:return!0}}}},SilentAuthenticationHandler.prototype.getCallbackHandler=function(callback,usePostMessage){return function(eventData){var callbackValue;callbackValue=usePostMessage?"object"==typeof eventData.event.data&&eventData.event.data.hash?eventData.event.data.hash:eventData.event.data:eventData.sourceObject.contentWindow.location.hash,callback(null,callbackValue)}},UsernamePassword.prototype.login=function(options,cb){var url,body;return url=urlJoin(this.baseOptions.rootUrl,"usernamepassword","login"),options.username=options.username||options.email,options=objectHelper.blacklist(options,["email"]),body=objectHelper.merge(this.baseOptions,["clientID","redirectUri","tenant","responseType","responseMode","scope","audience"]).with(options),body=this.transactionManager.process(body),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},UsernamePassword.prototype.callback=function(formHtml){var div,_document=windowHelper.getDocument();(div=_document.createElement("div")).innerHTML=formHtml,_document.body.appendChild(div).children[0].submit()},HostedPages.prototype.login=function(options,cb){if(windowHelper.getWindow().location.host!==this.baseOptions.domain)throw new Error("This method is meant to be used only inside the Universal Login Page.");var usernamePassword,params=objectHelper.merge(this.baseOptions,["clientID","redirectUri","tenant","responseType","responseMode","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),(usernamePassword=new UsernamePassword(this.baseOptions)).login(params,function(err,data){return err?cb(err):usernamePassword.callback(data)})},HostedPages.prototype.signupAndLogin=function(options,cb){var _this=this;return _this.client.client.dbConnection.signup(options,function(err){return err?cb(err):_this.login(options,cb)})},HostedPages.prototype.getSSOData=function(withActiveDirectories,cb){var url,params="";return"function"==typeof withActiveDirectories&&(cb=withActiveDirectories,withActiveDirectories=!1),assert.check(withActiveDirectories,{type:"boolean",message:"withActiveDirectories parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),withActiveDirectories&&(params="?"+lib_stringify({ldaps:1,client_id:this.baseOptions.clientID})),url=urlJoin(this.baseOptions.rootUrl,"user","ssodata",params),this.request.get(url,{noHeaders:!0}).withCredentials().end(wrapCallback(cb))},WebAuth.prototype.parseHash=function(options,cb){var parsedQs,err;cb||"function"!=typeof options?options=options||{}:(cb=options,options={});var _window=windowHelper.getWindow(),hashStr=void 0===options.hash?_window.location.hash:options.hash;if(hashStr=hashStr.replace(/^#?\/?/,""),(parsedQs=lib_parse(hashStr)).hasOwnProperty("error"))return err=error.buildResponse(parsedQs.error,parsedQs.error_description),parsedQs.state&&(err.state=parsedQs.state),cb(err);if(!parsedQs.hasOwnProperty("access_token")&&!parsedQs.hasOwnProperty("id_token")&&!parsedQs.hasOwnProperty("refresh_token"))return cb(null,null);var responseTypes=(this.baseOptions.responseType||options.responseType||"").split(" ");return responseTypes.length>0&&-1!==responseTypes.indexOf("token")&&!parsedQs.hasOwnProperty("access_token")?cb(error.buildResponse("invalid_hash","response_type contains `token`, but the parsed hash does not contain an `access_token` property")):responseTypes.length>0&&-1!==responseTypes.indexOf("id_token")&&!parsedQs.hasOwnProperty("id_token")?cb(error.buildResponse("invalid_hash","response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")):this.validateAuthenticationResponse(options,parsedQs,cb)},WebAuth.prototype.validateAuthenticationResponse=function(options,parsedHash,cb){var _this=this;options.__enableIdPInitiatedLogin=options.__enableIdPInitiatedLogin||options.__enableImpersonation;var state=parsedHash.state,transaction=this.transactionManager.getStoredTransaction(state),transactionState=options.state||transaction&&transaction.state||null,transactionStateMatchesState=transactionState===state;if(!(!state&&!transactionState&&options.__enableIdPInitiatedLogin)&&!transactionStateMatchesState)return cb({error:"invalid_token",errorDescription:"`state` does not match."});var transactionNonce=options.nonce||transaction&&transaction.nonce||null,appState=options.state||transaction&&transaction.appState||null,callback=function(err,payload){if(err)return cb(err);var sub;transaction&&transaction.lastUsedConnection&&(payload&&(sub=payload.sub),_this.ssodataStorage.set(transaction.lastUsedConnection,sub));return cb(null,function(qsParams,appState,token){return{accessToken:qsParams.access_token||null,idToken:qsParams.id_token||null,idTokenPayload:token||null,appState:appState||null,refreshToken:qsParams.refresh_token||null,state:qsParams.state||null,expiresIn:qsParams.expires_in?parseInt(qsParams.expires_in,10):null,tokenType:qsParams.token_type||null,scope:qsParams.scope||null}}(parsedHash,appState,payload))};return parsedHash.id_token?this.validateToken(parsedHash.id_token,transactionNonce,function(validationError,payload){if(!validationError)return parsedHash.access_token&&payload.at_hash?(new C).validateAccessToken(parsedHash.access_token,"RS256",payload.at_hash,function(err){return err?callback(error.invalidToken(err.message)):callback(null,payload)}):callback(null,payload);if("invalid_token"!==validationError.error||validationError.errorDescription&&validationError.errorDescription.indexOf("Nonce (nonce) claim value mismatch in the ID token")>-1)return callback(validationError);var decodedToken=(new C).decode(parsedHash.id_token);if("HS256"!==decodedToken.header.alg)return callback(validationError);if((decodedToken.payload.nonce||null)!==transactionNonce)return callback({error:"invalid_token",errorDescription:'Nonce (nonce) claim value mismatch in the ID token; expected "'+transactionNonce+'", found "'+decodedToken.payload.nonce+'"'});if(!parsedHash.access_token){return callback({error:"invalid_token",description:"The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token"})}return _this.client.userInfo(parsedHash.access_token,function(errUserInfo,profile){return errUserInfo?callback(errUserInfo):callback(null,profile)})}):callback(null,null)},WebAuth.prototype.validateToken=function(token,nonce,cb){new C({issuer:this.baseOptions.token_issuer,jwksURI:this.baseOptions.jwksURI,audience:this.baseOptions.clientID,leeway:this.baseOptions.leeway||60,maxAge:this.baseOptions.maxAge,__clock:this.baseOptions.__clock||defaultClock}).verify(token,nonce,function(err,payload){if(err)return cb(error.invalidToken(err.message));cb(null,payload)})},WebAuth.prototype.renewAuth=function(options,cb){var usePostMessage=!!options.usePostMessage,postMessageDataType=options.postMessageDataType||!1,postMessageOrigin=options.postMessageOrigin||windowHelper.getWindow().origin,timeout=options.timeout,_this=this,params=objectHelper.merge(this.baseOptions,["clientID","redirectUri","responseType","scope","audience","_csrf","state","_intstate","nonce"]).with(options);params.responseType=params.responseType||"token",params.responseMode=params.responseMode||"fragment",params=this.transactionManager.process(params),assert.check(params,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),params.prompt="none",params=objectHelper.blacklist(params,["usePostMessage","tenant","postMessageDataType","postMessageOrigin"]),SilentAuthenticationHandler.create({authenticationUrl:this.client.buildAuthorizeUrl(params),postMessageDataType:postMessageDataType,postMessageOrigin:postMessageOrigin,timeout:timeout}).login(usePostMessage,function(err,hash){if("object"==typeof hash)return cb(err,hash);_this.parseHash({hash:hash},cb)})},WebAuth.prototype.checkSession=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return"code"===params.responseType?cb({error:"error",error_description:"responseType can't be `code`"}):(options.nonce||(params=this.transactionManager.process(params)),params.redirectUri?(assert.check(params,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),params=objectHelper.blacklist(params,["usePostMessage","tenant","postMessageDataType"]),void this.webMessageHandler.run(params,wrapCallback(cb,{forceLegacyError:!0,ignoreCasing:!0}))):cb({error:"error",error_description:"redirectUri can't be empty"}))},WebAuth.prototype.changePassword=function(options,cb){return this.client.dbConnection.changePassword(options,cb)},WebAuth.prototype.passwordlessStart=function(options,cb){var authParams=objectHelper.merge(this.baseOptions,["responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options.authParams);return options.authParams=this.transactionManager.process(authParams),this.client.passwordless.start(options,cb)},WebAuth.prototype.signup=function(options,cb){return this.client.dbConnection.signup(options,cb)},WebAuth.prototype.authorize=function(options){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),(params=this.transactionManager.process(params)).scope=params.scope||"openid profile email",windowHelper.redirect(this.client.buildAuthorizeUrl(params))},WebAuth.prototype.signupAndAuthorize=function(options,cb){var _this=this;return this.client.dbConnection.signup(objectHelper.blacklist(options,["popupHandler"]),function(err){if(err)return cb(err);options.realm=options.connection,options.username||(options.username=options.email),_this.client.login(options,cb)})},WebAuth.prototype.login=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);params=this.transactionManager.process(params),windowHelper.getWindow().location.host===this.baseOptions.domain?(params.connection=params.realm,delete params.realm,this._universalLogin.login(params,cb)):this.crossOriginAuthentication.login(params,cb)},WebAuth.prototype.passwordlessLogin=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);if(params=this.transactionManager.process(params),windowHelper.getWindow().location.host===this.baseOptions.domain)this.passwordlessVerify(params,cb);else{var crossOriginOptions=objectHelper.extend({credentialType:"http://auth0.com/oauth/grant-type/passwordless/otp",realm:params.connection,username:params.email||params.phoneNumber,otp:params.verificationCode},objectHelper.blacklist(params,["connection","email","phoneNumber","verificationCode"]));this.crossOriginAuthentication.login(crossOriginOptions,cb)}},WebAuth.prototype.crossOriginAuthenticationCallback=function(){this.crossOriginVerification()},WebAuth.prototype.crossOriginVerification=function(){this.crossOriginAuthentication.callback()},WebAuth.prototype.logout=function(options){windowHelper.redirect(this.client.buildLogoutUrl(options))},WebAuth.prototype.passwordlessVerify=function(options,cb){var _this=this,params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),params=this.transactionManager.process(params),this.client.passwordless.verify(params,function(err){return err?cb(err):windowHelper.redirect(_this.client.passwordless.buildVerifyUrl(params))})},PasswordlessAuthentication.prototype.buildVerifyUrl=function(options){var params,qString;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},verificationCode:{type:"string",message:"verificationCode option is required"},phoneNumber:{optional:!1,type:"string",message:"phoneNumber option is required",condition:function(o){return!o.email}},email:{optional:!1,type:"string",message:"email option is required",condition:function(o){return!o.phoneNumber}}}),params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","protocol","nonce"]).with(options),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params=objectHelper.toSnakeCase(params,["auth0Client"]),qString=lib_stringify(params),urlJoin(this.baseOptions.rootUrl,"passwordless","verify_redirect","?"+qString)},PasswordlessAuthentication.prototype.start=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},send:{type:"string",message:"send option is required",values:["link","code"],value_message:"send is not valid ([link, code])"},phoneNumber:{optional:!0,type:"string",message:"phoneNumber option is required",condition:function(o){return"code"===o.send||!o.email}},email:{optional:!0,type:"string",message:"email option is required",condition:function(o){return"link"===o.send||!o.phoneNumber}},authParams:{optional:!0,type:"object",message:"authParams option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"passwordless","start"),(body=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope"]).with(options)).scope&&(body.authParams=body.authParams||{},body.authParams.scope=body.authParams.scope||body.scope),body.redirectUri&&(body.authParams=body.authParams||{},body.authParams.redirect_uri=body.authParams.redirectUri||body.redirectUri),body.responseType&&(body.authParams=body.authParams||{},body.authParams.response_type=body.authParams.responseType||body.responseType),delete body.redirectUri,delete body.responseType,delete body.scope,body=objectHelper.toSnakeCase(body,["auth0Client","authParams"]),this.request.post(url).send(body).end(wrapCallback(cb))},PasswordlessAuthentication.prototype.verify=function(options,cb){var url,cleanOption;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},verificationCode:{type:"string",message:"verificationCode option is required"},phoneNumber:{optional:!1,type:"string",message:"phoneNumber option is required",condition:function(o){return!o.email}},email:{optional:!1,type:"string",message:"email option is required",condition:function(o){return!o.phoneNumber}}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),cleanOption=objectHelper.pick(options,["connection","verificationCode","phoneNumber","email","auth0Client"]),cleanOption=objectHelper.toSnakeCase(cleanOption,["auth0Client"]),url=urlJoin(this.baseOptions.rootUrl,"passwordless","verify"),this.request.post(url).send(cleanOption).end(wrapCallback(cb))},DBConnection.prototype.signup=function(options,cb){var url,body,metadata;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},email:{type:"string",message:"email option is required"},password:{type:"string",message:"password option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"dbconnections","signup"),metadata=(body=objectHelper.merge(this.baseOptions,["clientID"]).with(options)).user_metadata||body.userMetadata,body=objectHelper.blacklist(body,["scope","userMetadata","user_metadata"]),body=objectHelper.toSnakeCase(body,["auth0Client"]),metadata&&(body.user_metadata=metadata),this.request.post(url).send(body).end(wrapCallback(cb))},DBConnection.prototype.changePassword=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},email:{type:"string",message:"email option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"dbconnections","change_password"),body=objectHelper.merge(this.baseOptions,["clientID"]).with(options,["email","connection"]),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.buildAuthorizeUrl=function(options){var params,qString;return assert.check(options,{type:"object",message:"options parameter is not valid"}),params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience"]).with(options),assert.check(params,{type:"object",message:"options parameter is not valid"},{clientID:{type:"string",message:"clientID option is required"},redirectUri:{optional:!0,type:"string",message:"redirectUri option is required"},responseType:{type:"string",message:"responseType option is required"},nonce:{type:"string",message:"nonce option is required",condition:function(o){return-1===o.responseType.indexOf("code")&&-1!==o.responseType.indexOf("id_token")}},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params.connection_scope&&assert.isArray(params.connection_scope)&&(params.connection_scope=params.connection_scope.join(",")),params=objectHelper.blacklist(params,["username","popupOptions","domain","tenant","timeout","appState"]),params=objectHelper.toSnakeCase(params,["auth0Client"]),params=parametersWhitelist.oauthAuthorizeParams(this.warn,params),qString=lib_stringify(params),urlJoin(this.baseOptions.rootUrl,"authorize","?"+qString)},Authentication.prototype.buildLogoutUrl=function(options){var params,qString;return assert.check(options,{optional:!0,type:"object",message:"options parameter is not valid"}),params=objectHelper.merge(this.baseOptions,["clientID"]).with(options||{}),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params=objectHelper.toSnakeCase(params,["auth0Client","returnTo"]),qString=lib_stringify(objectHelper.blacklist(params,["federated"])),options&&void 0!==options.federated&&!1!==options.federated&&"false"!==options.federated&&(qString+="&federated"),urlJoin(this.baseOptions.rootUrl,"v2","logout","?"+qString)},Authentication.prototype.loginWithDefaultDirectory=function(options,cb){return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),options.grantType="password",this.oauthToken(options,cb)},Authentication.prototype.login=function(options,cb){return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},realm:{type:"string",message:"realm option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),options.grantType="http://auth0.com/oauth/grant-type/password-realm",this.oauthToken(options,cb)},Authentication.prototype.oauthToken=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"oauth","token"),body=objectHelper.merge(this.baseOptions,["clientID","scope","audience"]).with(options),assert.check(body,{type:"object",message:"options parameter is not valid"},{clientID:{type:"string",message:"clientID option is required"},grantType:{type:"string",message:"grantType option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),body=objectHelper.toSnakeCase(body,["auth0Client"]),body=parametersWhitelist.oauthTokenParams(this.warn,body),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.loginWithResourceOwner=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},connection:{type:"string",message:"connection option is required"},scope:{optional:!0,type:"string",message:"scope option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"oauth","ro"),body=objectHelper.merge(this.baseOptions,["clientID","scope"]).with(options,["username","password","scope","connection","device"]),(body=objectHelper.toSnakeCase(body,["auth0Client"])).grant_type=body.grant_type||"password",this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.getSSOData=function(withActiveDirectories,cb){if(this.auth0||(this.auth0=new WebAuth(this.baseOptions)),windowHelper.getWindow().location.host===this.baseOptions.domain)return this.auth0._universalLogin.getSSOData(withActiveDirectories,cb);"function"==typeof withActiveDirectories&&(cb=withActiveDirectories),assert.check(cb,{type:"function",message:"cb parameter is not valid"});var clientId=this.baseOptions.clientID,ssodataInformation=this.ssodataStorage.get()||{};this.auth0.checkSession({responseType:"token id_token",scope:"openid profile email",connection:ssodataInformation.lastUsedConnection,timeout:5e3},function(err,result){return err?"login_required"===err.error?cb(null,{sso:!1}):("consent_required"===err.error&&(err.error_description="Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."),cb(err,{sso:!1})):ssodataInformation.lastUsedSub&&ssodataInformation.lastUsedSub!==result.idTokenPayload.sub?cb(err,{sso:!1}):cb(null,{lastUsedConnection:{name:ssodataInformation.lastUsedConnection},lastUsedUserID:result.idTokenPayload.sub,lastUsedUsername:result.idTokenPayload.email||result.idTokenPayload.name,lastUsedClientID:clientId,sessionClients:[clientId],sso:!0})})},Authentication.prototype.userInfo=function(accessToken,cb){var url;return assert.check(accessToken,{type:"string",message:"accessToken parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"userinfo"),this.request.get(url).set("Authorization","Bearer "+accessToken).end(wrapCallback(cb,{ignoreCasing:!0}))},Authentication.prototype.getChallenge=function(cb){if(assert.check(cb,{type:"function",message:"cb parameter is not valid"}),!this.baseOptions.state)return cb();var url=urlJoin(this.baseOptions.rootUrl,"usernamepassword","challenge");return this.request.post(url).send({state:this.baseOptions.state}).end(wrapCallback(cb,{ignoreCasing:!0}))},Authentication.prototype.delegation=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{grant_type:{type:"string",message:"grant_type option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"delegation"),body=objectHelper.merge(this.baseOptions,["clientID"]).with(options),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.getUserCountry=function(cb){var url;return assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"user","geoloc","country"),this.request.get(url).end(wrapCallback(cb))},Management.prototype.getUser=function(userId,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId),this.request.get(url).end(wrapCallback(cb,{ignoreCasing:!0}))},Management.prototype.patchUserMetadata=function(userId,userMetadata,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(userMetadata,{type:"object",message:"userMetadata parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId),this.request.patch(url).send({user_metadata:userMetadata}).end(wrapCallback(cb,{ignoreCasing:!0}))},Management.prototype.patchUserAttributes=function(userId,user,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(user,{type:"object",message:"user parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId),this.request.patch(url).send(user).end(wrapCallback(cb,{ignoreCasing:!0}))},Management.prototype.linkUser=function(userId,secondaryUserToken,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(secondaryUserToken,{type:"string",message:"secondaryUserToken parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId,"identities"),this.request.post(url).send({link_with:secondaryUserToken}).end(wrapCallback(cb,{ignoreCasing:!0}))};var index={Authentication:Authentication,Management:Management,WebAuth:WebAuth,version:version};/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=auth0.min.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(/*! ./atob */ "./node_modules/jwt-decode/lib/atob.js");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ "./node_modules/jwt-decode/lib/base64_url_decode.js");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fadmin%2FDesktop%2Facamica%2Fclient%2Fpages%2F_error.js!./":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fadmin%2FDesktop%2Facamica%2Fclient%2Fpages%2F_error.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _Map = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      return (0, _url.resolve)(pathname, parsedHref);
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      var isPrefetched = prefetched[this.getHref()];

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var href = this.getHref();

      _router["default"].prefetch(href);

      prefetched[href] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/home/admin/Desktop/acamica/client/pages/_error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    title: "Error!!!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, statusCode ? "Could not load your user data: Status Code ".concat(statusCode) : "Couldn't get that page, sorry!");
});

/***/ }),

/***/ 1:
/*!***************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fadmin%2FDesktop%2Facamica%2Fclient%2Fpages%2F_error.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fadmin%2FDesktop%2Facamica%2Fclient%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fadmin%2FDesktop%2Facamica%2Fclient%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.dbf95dc1455c8d5bede6.hot-update.js.map