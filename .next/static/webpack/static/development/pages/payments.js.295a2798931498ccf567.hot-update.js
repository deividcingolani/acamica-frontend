webpackHotUpdate("static/development/pages/payments.js",{

/***/ "./components/payments/Filter.js":
/*!***************************************!*\
  !*** ./components/payments/Filter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");

var _jsxFileName = "/home/admin/Desktop/acamica/client/components/payments/Filter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var PaymentsFilter = function PaymentsFilter(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = function onSubmit(values) {
    var studentsFilter = props.students;
    /* Filter by name */

    if (values.name.trim() !== "") {
      studentsFilter = studentsFilter.filter(function (student) {
        return student.name.toLowerCase().includes(values.name.toLowerCase());
      });
    }

    if (values.email.trim() !== "") {
      studentsFilter = studentsFilter.filter(function (student) {
        return student.email.toLowerCase().includes(values.email.toLowerCase());
      });
    }

    if (values.country.trim() !== "" && values.country.trim() !== "All") {
      studentsFilter = studentsFilter.filter(function (student) {
        return student.country == values.country;
      });
    }

    if (values.career.trim() !== "" && values.career.trim() !== "All") {
      studentsFilter = studentsFilter.filter(function (student) {
        return student.career == values.career;
      });
    }

    props.setstudents(studentsFilter);
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "row formFilter ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "form-group  col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Name"), __jsx("input", {
    name: "name",
    className: "form-control",
    type: "text",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "form-group  col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Email"), __jsx("input", {
    name: "email",
    className: "form-control",
    type: "text",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Career"), __jsx("select", {
    className: "form-control",
    name: "career",
    multiple: false,
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("option", {
    value: "All",
    key: -99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "All"), props.careers.map(function (career) {
    return __jsx("option", {
      value: career.description,
      key: career.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, career.description);
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Country"), __jsx("select", {
    className: "form-control",
    name: "country",
    multiple: false,
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("option", {
    value: "All",
    key: -99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "All"), props.countries.map(function (country) {
    return __jsx("option", {
      value: country.description,
      key: country.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, country.description);
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    className: "col-sm-2 col-lg-5 submitButtonFilter btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Apply Filter"));
};

PaymentsFilter.getInitialProps = function _callee() {
  var resCareer, resCountry, careers, countries;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("http://0.0.0.0:8000/api/students/careers/"));

        case 2:
          resCareer = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("http://0.0.0.0:8000/api/students/countries/"));

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

/* harmony default export */ __webpack_exports__["default"] = (PaymentsFilter);

/***/ })

})
//# sourceMappingURL=payments.js.295a2798931498ccf567.hot-update.js.map