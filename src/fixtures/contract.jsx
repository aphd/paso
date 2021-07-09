export const contract = `/***** [You can write, edit or copy and paste a smart contract code here] *******/
// Solidity program to demonstrate pure functions
pragma solidity ^0.8.7;

// Defining a contract
contract Test {
    // Defining pure function to
    // calculate product and sum of 2 numbers
    function getResult() public pure returns(
        uint product, uint sum){
        uint num1 = 2;
        uint num2 = 4;
        product = num1 * num2;
        sum = num1 + num2;
    }
}
`;
