webpackHotUpdate("main",{

/***/ "./src/components/load-contract-form.jsx":
/*!***********************************************!*\
  !*** ./src/components/load-contract-form.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadContractForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fixtures_simple_sol_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fixtures/simple.sol.jsx */ "./src/fixtures/simple.sol.jsx");
/* harmony import */ var _utils_getContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getContract */ "./src/utils/getContract.js");
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/components/load-contract-form.jsx";



class LoadContractForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleLoadSCFormSubmit = address => {
      Object(_utils_getContract__WEBPACK_IMPORTED_MODULE_2__["getContractFromAddress"])(address).then(data => {
        try {
          document.getElementById("sc_code").value = data;
        } catch (error) {
          console.log("error:", error);
        }
      });
    };
  }

  componentDidMount() {
    document.getElementById("sc_code").value = _fixtures_simple_sol_jsx__WEBPACK_IMPORTED_MODULE_1__["code"];
  }

  checkAddress(addr) {
    document.getElementById("invalid").classList.remove("d-block");
    !!addr.match(/^0x[a-zA-Z0-9]{40}$/) || document.getElementById("invalid").classList.add("d-block");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-control form-control-sm font-weight-light",
      id: "sc_address",
      placeholder: "Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback ml-2",
      id: "invalid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Please choose a valid address.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-sm btn-secondary btn-block",
      onClick: () => {
        const addr = document.getElementById("sc_address").value;
        this.checkAddress(addr);
        this.handleLoadSCFormSubmit(addr);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Upload a Smart Contract from an address")))));
  }

}

/***/ })

})
//# sourceMappingURL=main.6a2eb6c82c774fa3db7f.hot-update.js.map