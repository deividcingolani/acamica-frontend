webpackHotUpdate("static/development/pages/payment/[id].js",{

/***/ "./pages/payment/[id].js":
/*!*******************************!*\
  !*** ./pages/payment/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/isLoggedIn */ "./lib/isLoggedIn.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");

var _jsxFileName = "/home/admin/Desktop/acamica/client/pages/payment/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Payment = function Payment(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = function onSubmit(values) {
    console.log("submit");
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (router.query.id) {
    console.log(Object(_lib_api__WEBPACK_IMPORTED_MODULE_6__["paymentStudent"])(router.query.id));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, Object(_lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_4__["isLoggedIn"])() && router.query.id ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    title: "Payment Id: ".concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "row formFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "form-group  col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Name"), __jsx("input", {
    name: "name",
    className: "form-control",
    type: "text",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "form-group  col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Email"), __jsx("input", {
    name: "email",
    className: "form-control",
    type: "text",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Career"), __jsx("select", {
    className: "form-control",
    name: "career",
    multiple: false,
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("option", {
    value: "All",
    key: -99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "All"), props.careers.map(function (career) {
    return __jsx("option", {
      value: career.description,
      key: career.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, career.description);
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Country"), __jsx("select", {
    className: "form-control",
    name: "country",
    multiple: false,
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("option", {
    value: "All",
    key: -99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "All"), props.countries.map(function (country) {
    return __jsx("option", {
      value: country.description,
      key: country.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, country.description);
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "city",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "City"), __jsx("select", {
    className: "form-control",
    name: "city",
    multiple: false,
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("option", {
    value: "All",
    key: -99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "All"), props.countries.map(function (city) {
    return __jsx("option", {
      value: country.description,
      key: country.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, country.description);
  }))))) : __jsx(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
    statusCode: 403,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }));
};

Payment.getInitialProps = function _callee() {
  var resCareer, resCountry, careers, countries;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://0.0.0.0:8000/api/students/careers/"));

        case 2:
          resCareer = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://0.0.0.0:8000/api/students/countries/"));

        case 5:
          resCountry = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCareer.data);

        case 8:
          careers = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCountry.data);

        case 11:
          countries = _context.sent;
          return _context.abrupt("return", {
            careers: careers,
            countries: countries
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

Payment.getInitialProps = function _callee2() {
  var resCareer, resCountry, careers, countries;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://0.0.0.0:8000/api/students/careers/"));

        case 2:
          resCareer = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://0.0.0.0:8000/api/students/countries/"));

        case 5:
          resCountry = _context2.sent;
          _context2.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCareer.data);

        case 8:
          careers = _context2.sent;
          _context2.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCountry.data);

        case 11:
          countries = _context2.sent;
          return _context2.abrupt("return", {
            careers: careers,
            countries: countries
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ })

})
//# sourceMappingURL=[id].js.86327b601ca150c7f9d8.hot-update.js.map