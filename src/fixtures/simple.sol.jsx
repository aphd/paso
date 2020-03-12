export const code = `/***** [You can write, edit or copy and paste a smart contract code here] *******/

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
