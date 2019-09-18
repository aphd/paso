(window["webpackJsonpsolpar"] = window["webpackJsonpsolpar"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form */ "./src/components/form.jsx");
/* harmony import */ var _components_metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/metrics */ "./src/components/metrics.jsx");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error */ "./src/components/error.jsx");
/* harmony import */ var _utils_parse_sol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/parse-sol */ "./src/utils/parse-sol.jsx");
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/App.jsx";








class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFormSubmit = sc_code => {
      try {
        this.setState({
          metric: Object(_utils_parse_sol__WEBPACK_IMPORTED_MODULE_6__["parseSol"])(sc_code),
          errors: null
        });
      } catch (error) {
        this.setState({
          metric: null,
          errors: error.errors
        });
      }
    };

    this.render = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__["HelmetProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "SOLPAR"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onFormSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_metrics__WEBPACK_IMPORTED_MODULE_4__["default"], {
        metric: this.state.metric,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error__WEBPACK_IMPORTED_MODULE_5__["default"], {
        errors: this.state.errors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    };

    this.state = {};
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/error.jsx":
/*!**********************************!*\
  !*** ./src/components/error.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_json2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/json2html */ "./src/utils/json2html.js");
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/components/error.jsx";



class Error extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.render = () => {
      try {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "table table-hover",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, Object(_utils_json2html__WEBPACK_IMPORTED_MODULE_1__["json2html"])(this.props.errors[0])));
      } catch {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      }
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/components/form.jsx":
/*!*********************************!*\
  !*** ./src/components/form.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fixtures_simple_sol_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fixtures/simple.sol.jsx */ "./src/fixtures/simple.sol.jsx");
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/components/form.jsx";



class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "exampleFormControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Insert the solidity code in this textarea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      className: "form-control",
      id: "sc_code",
      rows: "10",
      defaultValue: _fixtures_simple_sol_jsx__WEBPACK_IMPORTED_MODULE_1__["code"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-primary mb-2",
      onClick: () => this.props.onFormSubmit(document.getElementById("sc_code").value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Submit"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/metrics.jsx":
/*!************************************!*\
  !*** ./src/components/metrics.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_json2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/json2html */ "./src/utils/json2html.js");
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/components/metrics.jsx";



class Metrics extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.render = () => {
      try {
        const _this$props$metric = this.props.metric,
              Version = _this$props$metric.Version,
              LOC = _this$props$metric.LOC,
              types = _this$props$metric.types;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "table table-hover",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, "Version Pragma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, Version || "Undefined")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "Source lines of code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, LOC)), Object(_utils_json2html__WEBPACK_IMPORTED_MODULE_1__["json2html"])(types)));
      } catch {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
      }
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Metrics);

/***/ }),

/***/ "./src/fixtures/simple.sol.jsx":
/*!*************************************!*\
  !*** ./src/fixtures/simple.sol.jsx ***!
  \*************************************/
/*! exports provided: code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
const code = "\n\npragma solidity ^0.4.10;\n\ncontract GasToken2 {\n    //////////////////////////////////////////////////////////////////////////\n    // RLP.sol\n    // Due to some unexplained bug, we get a slightly different bytecode if\n    // we use an import, and are then unable to verify the code in Etherscan\n    //////////////////////////////////////////////////////////////////////////\n\n    uint256 constant ADDRESS_BYTES = 20;\n    uint256 constant MAX_SINGLE_BYTE = 128;\n    uint256 constant MAX_NONCE = 256**9 - 1;\n\n    // count number of bytes required to represent an unsigned integer\n    function count_bytes(uint256 n) constant internal returns (uint256 c) {\n        uint i = 0;\n        uint mask = 1;\n        while (n >= mask) {\n            i += 1;\n            mask *= 256;\n        }\n\n        return i;\n    }\n\n    function mk_contract_address(address a, uint256 n) constant internal returns (address rlp) {\n\n        /*\n        * make sure the RLP encoding fits in one word:\n        * total_length      1 byte\n        * address_length    1 byte\n        * address          20 bytes\n        * nonce_length      1 byte (or 0)\n        * nonce           1-9 bytes\n        *                ==========\n        *                24-32 bytes\n        */\n       require(n <= MAX_NONCE);\n\n       // number of bytes required to write down the nonce\n       uint256 nonce_bytes;\n       // length in bytes of the RLP encoding of the nonce\n       uint256 nonce_rlp_len;\n\n       if (0 < n && n < MAX_SINGLE_BYTE) {\n           // nonce fits in a single byte\n           // RLP(nonce) = nonce\n           nonce_bytes = 1;\n           nonce_rlp_len = 1;\n       } else {\n           // RLP(nonce) = [num_bytes_in_nonce nonce]\n           nonce_bytes = count_bytes(n);\n           nonce_rlp_len = nonce_bytes + 1;\n       }\n\n       // [address_length(1) address(20) nonce_length(0 or 1) nonce(1-9)]\n       uint256 tot_bytes = 1 + ADDRESS_BYTES + nonce_rlp_len;\n\n       // concatenate all parts of the RLP encoding in the leading bytes of\n       // one 32-byte word\n       uint256 word = ((192 + tot_bytes) * 256**31) +\n                      ((128 + ADDRESS_BYTES) * 256**30) +\n                      (uint256(a) * 256**10);\n\n       if (0 < n && n < MAX_SINGLE_BYTE) {\n           word += n * 256**9;\n       } else {\n           word += (128 + nonce_bytes) * 256**9;\n           word += n * 256**(9 - nonce_bytes);\n       }\n    }\n}\n";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/utils/json2html.js":
/*!********************************!*\
  !*** ./src/utils/json2html.js ***!
  \********************************/
/*! exports provided: json2html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json2html", function() { return json2html; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/antonio/github/aphd/solpar/src/utils/json2html.js";

function json2html(types) {
  const items = [];
  Object.keys(types).map((v, i) => items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, v), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, types[v]))));
  return items;
}
;

/***/ }),

/***/ "./src/utils/parse-sol.jsx":
/*!*********************************!*\
  !*** ./src/utils/parse-sol.jsx ***!
  \*********************************/
/*! exports provided: parseSol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSol", function() { return parseSol; });
/* harmony import */ var solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solidity-parser-antlr/dist */ "./node_modules/solidity-parser-antlr/dist/index.js");
/* harmony import */ var solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0__);

function parseSol(code) {
  const root = solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0___default.a.parse(code, {
    loc: true
  });
  window.code = code;
  window.root = root;
  window.parse = solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0___default.a;
  const types = root.children.slice(1).map(v => v.subNodes.map(w => w.type)).flat();
  return {
    types: get_occurrences(types),
    LOC: root.loc.end.line,
    Version: root.children[0].value
  };
}

const get_occurrences = array => {
  const tmp_o = {};
  array.forEach(v => tmp_o[v] ? tmp_o[v]++ : tmp_o[v] = 1);
  return tmp_o;
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/antonio/github/aphd/solpar/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/antonio/github/aphd/solpar/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map