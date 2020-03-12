(this["webpackJsonpPASO"] = this["webpackJsonpPASO"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_metric_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/metric-form */ "./src/components/metric-form.jsx");
/* harmony import */ var _components_load_contract_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/load-contract-form */ "./src/components/load-contract-form.jsx");
/* harmony import */ var _components_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/metrics */ "./src/components/metrics.jsx");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error */ "./src/components/error.jsx");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/head */ "./src/components/head.jsx");
/* harmony import */ var _utils_sol_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sol-parser */ "./src/utils/sol-parser.mjs");
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/App.jsx";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFormSubmit = data_input => {
      try {
        this.setState({
          metric: Object(_utils_sol_parser__WEBPACK_IMPORTED_MODULE_6__["solParse"])(data_input)
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
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_load_contract_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_metric_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onFormSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_metrics__WEBPACK_IMPORTED_MODULE_3__["default"], {
        metric: this.state.metric,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error__WEBPACK_IMPORTED_MODULE_4__["default"], {
        errors: this.state.errors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    };

    this.state = {};
  }

}

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
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/components/error.jsx";



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

/***/ "./src/components/head.jsx":
/*!*********************************!*\
  !*** ./src/components/head.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Head; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/components/head.jsx";


class Head extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.render = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["HelmetProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "PASO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "text-center font-weight-lighter font-italic pt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "PASO (PArse SOlidity smart contract code)"));
    };
  }

}

/***/ }),

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
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
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
        lineNumber: 36
      },
      __self: this
    }, "Upload a Smart Contract from an address"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col pl-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback",
      id: "invalid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Please choose a valid contract address such as: 0x7de6783f26e024ef2db774a0fd02742b11891d3f")))));
  }

}

/***/ }),

/***/ "./src/components/metric-form.jsx":
/*!****************************************!*\
  !*** ./src/components/metric-form.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetricForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/components/metric-form.jsx";

class MetricForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      className: "form-control font-weight-light form-control-sm",
      id: "sc_code",
      rows: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-info btn-block",
      onClick: () => this.props.onFormSubmit(document.getElementById("sc_code").value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Compute the Solidity Metrics")));
  }

}

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
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/components/metrics.jsx";



class Metrics extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.render = () => {
      try {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "table table-hover table-sm table-bordered",
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
        }, Object(_utils_json2html__WEBPACK_IMPORTED_MODULE_1__["json2html"])(this.props.metric)));
      } catch (error) {
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
const code = `/***** [You can write, edit or copy and paste a smart contract code here] *******/

pragma solidity ^0.4.10;

contract SimpleAuction {
    event HighestBidIncreased(address bidder, uint amount); // Event
    address public minter;
    mapping (address => uint) public balances;
    modifier onlySeller() { }
      function bid() public payable {
        emit HighestBidIncreased(msg.sender, msg.value); // Triggering event
    }
}

interface Token {
  function transfer(address recipient, uint amount) public;
}

library Set {
}`;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
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
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/index.js";






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

/***/ "./src/utils/getContract.js":
/*!**********************************!*\
  !*** ./src/utils/getContract.js ***!
  \**********************************/
/*! exports provided: getContractFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContractFromAddress", function() { return getContractFromAddress; });
function getContractFromAddress(address) {
  let url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2`;
  return fetch(url).then(response => response.json()).then(data => data.result[0].SourceCode);
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
var _jsxFileName = "/Users/antonio/github/aphd/paso/src/utils/json2html.js";

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

/***/ "./src/utils/sol-parser.mjs":
/*!**********************************!*\
  !*** ./src/utils/sol-parser.mjs ***!
  \**********************************/
/*! exports provided: solParse */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solParse", function() { return solParse; });
/* harmony import */ var solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solidity-parser-antlr/dist */ "./node_modules/solidity-parser-antlr/dist/index.js");

function solParse(code) {
  const ast_j = solidity_parser_antlr_dist__WEBPACK_IMPORTED_MODULE_0__.parse(code, {
    loc: true
  });
  const ast_s = JSON.stringify(ast_j);

  try {
    window.ast_j = ast_j;
  } catch {}

  const metrics = {
    mapping: '"type":"Mapping"',
    functions: '"type":"FunctionDefinition"',
    payable: '"stateMutability":"payable"',
    events: '"type":"EventDefinition"',
    modifiers: '"type":"ModifierDefinition"',
    contracts_definition: '"type":"ContractDefinition"',
    addresses: '"type":"ElementaryTypeName","name":"address"',
    contracts: '"kind":"contract"',
    libraries: '"kind":"library"',
    interfaces: '"kind":"interface"'
  };
  let result = {
    version: get_version(ast_s),
    total_lines: ast_j.loc.end.line,
    comments: get_comments(code),
    blanks: code.match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm).length
  };

  for (const metric in metrics) {
    let reg = metrics[metric];
    result[metric] = (ast_s.match(new RegExp(reg, "g")) || []).length;
  }

  return result;
}

const get_comments = code => {
  const match = code.match(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g);
  return match ? match.length : 0;
};

const get_version = ast_s => {
  let version = ast_s.match(/"name":"solidity","value":"\^(\d{1,}.\d{1,}.\d{1,})/);
  return version ? version[1] : "Not defined";
};

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/antonio/github/aphd/paso/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/antonio/github/aphd/paso/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/antonio/github/aphd/paso/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map