webpackHotUpdate("main",{

/***/ "./src/fixtures/simple.sol.jsx":
/*!*************************************!*\
  !*** ./src/fixtures/simple.sol.jsx ***!
  \*************************************/
/*! exports provided: code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
const code = "pragma solidity ^0.4.10;\n\ncontract SimpleAuction {\n    event HighestBidIncreased(address bidder, uint amount); // Event\n    address public minter;\n    mapping (address => uint) public balances;\n    modifier onlySeller() { }\n      function bid() public payable {\n        emit HighestBidIncreased(msg.sender, msg.value); // Triggering event\n    }\n}";

/***/ })

})
//# sourceMappingURL=main.1e1f6b90fe4f96e5de7f.hot-update.js.map