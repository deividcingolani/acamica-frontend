webpackHotUpdate("static/development/pages/payments.js",{

/***/ "./components/payments/Filter.js":
/*!***************************************!*\
  !*** ./components/payments/Filter.js ***!
  \***************************************/
/*! exports provided: PaymentsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsFilter", function() { return PaymentsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/home/admin/Desktop/acamica/client/components/payments/Filter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PaymentsFilter = function PaymentsFilter(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])(),
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
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    className: "col-sm-2 col-lg-5 submitButtonFilter btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Apply Filter"));
};

/***/ }),

/***/ "./pages/payments.js":
/*!***************************!*\
  !*** ./pages/payments.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _components_payments_Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/payments/Filter */ "./components/payments/Filter.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* harmony import */ var _lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/isLoggedIn */ "./lib/isLoggedIn.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/admin/Desktop/acamica/client/pages/payments.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Payments = function Payments(props) {
  var payments = props.payments;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.payments),
      paymentsFilter = _useState[0],
      setPaymentsFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      pageActual = _useState2[0],
      setpageActual = _useState2[1];

  var sizePage = 2;
  var paymentsShow = paymentsFilter.filter(function (payment) {
    return payment.id > (pageActual - 1) * sizePage && payment.id <= pageActual * sizePage;
  });
  var paymentsRender = paymentsShow.map(function (payment, key) {
    return __jsx("tr", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, payment.name), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, payment.paymentDescription), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, payment.dues_value ? payment.dues_value : "-"), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, payment.email), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, payment.career), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, payment.country), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, payment.city), __jsx("td", {
      className: "d-none d-sm-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/payment/[id]",
      as: "/payment/".concat(payment.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Edit Payment"))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_lib_isLoggedIn__WEBPACK_IMPORTED_MODULE_9__["isLoggedIn"])() ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    title: "Payments of Students",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_payments_Filter__WEBPACK_IMPORTED_MODULE_5__["PaymentsFilter"], {
    students: payments,
    careers: props.careers,
    countries: props.countries,
    setstudents: setPaymentsFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/payment/new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "New Payment")), __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    striped: true,
    bordered: true,
    hover: true,
    responsive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Name"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Type Payment"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Dues"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Email"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Career"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Country"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "City"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, paymentsRender)), __jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationTable"], {
    lengthArray: paymentsFilter.length,
    sizePage: sizePage,
    setpageActual: setpageActual,
    pageActual: pageActual,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })) : __jsx(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
    statusCode: 403,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }));
};

Payments.getInitialProps = function _callee() {
  var resPayments, resCareer, resCountry, payments, careers, countries;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://0.0.0.0:8000/api/payments/"));

        case 2:
          resPayments = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://0.0.0.0:8000/api/students/careers/"));

        case 5:
          resCareer = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://0.0.0.0:8000/api/students/countries/"));

        case 8:
          resCountry = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resPayments.data);

        case 11:
          payments = _context.sent;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCareer.data);

        case 14:
          careers = _context.sent;
          _context.next = 17;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resCountry.data);

        case 17:
          countries = _context.sent;
          return _context.abrupt("return", {
            payments: payments,
            careers: careers,
            countries: countries
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Payments);

/***/ })

})
//# sourceMappingURL=payments.js.d173cf6b1aba31dedb35.hot-update.js.map