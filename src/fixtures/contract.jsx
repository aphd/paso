export const contract = `/***** [You can write, edit or copy and paste a smart contract code here] *******/

pragma solidity ^0.8.7;

contract CharitySplitterFactory {
    mapping (address => CharitySplitter) public charitySplitters;
    uint public errorCount;
    event ErrorHandled(string reason);
    event ErrorNotHandled(bytes reason);
    function createCharitySplitter(address charityOwner) public {
        try new CharitySplitter(charityOwner)
            returns (CharitySplitter newCharitySplitter) 
        {
            charitySplitters[msg.sender] = newCharitySplitter;
        } catch {
            errorCount++;
        }
    }
}`;
