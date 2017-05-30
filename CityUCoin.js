pragma solidity ^0.4.0;

contract CityUCoin {
    
    mapping(address=> unit) public balances;

    function CityUCoin() {
    	balances[msg.sender] = 1000;
    }

    function sendCoin(address receiver, uint sendAmount) {
    	if (balances[msg.sender] < sendAmount){
    		throw;
    	}
    	balances[msg.sender] -= sendAmount; 
    	balances[receiver] += sendAmount;
    }

    function getBalance() constant returns (unit) {
    	return balances[msg.sender];
    }
}