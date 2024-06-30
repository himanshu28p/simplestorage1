SimpleStorage DApp
Overview
The SimpleStorage DApp is a basic decentralized application that allows users to set and get a value stored on the Ethereum blockchain. This project demonstrates a simple smart contract interaction with a frontend application.

Smart Contract
SimpleStorage.sol
The SimpleStorage contract has two functions:

setValue(uint256 value): Sets the stored value.
getValue() public view returns (uint256): Retrieves the stored value.
solidity
Copy code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;

    function setValue(uint256 value) public {
        storedValue = value;
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}
Frontend Application
index.html
The HTML file provides a simple user interface to interact with the smart contract.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Storage</title>
</head>
<body>
    <h1>Simple Storage DApp</h1>
    <div>
        <label for="valueInput">Set Value:</label>
        <input type="number" id="valueInput">
        <button onclick="setValue()">Set</button>
    </div>
    <div>
        <button onclick="getValue()">Get Value</button>
        <p id="valueDisplay"></p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
app.js
The JavaScript file handles the interaction between the frontend and the smart contract.


// Ensure you are using your own contract's ABI and address
const contractABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';

// Connect to the Ethereum blockchain
if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}

const simpleStorageContract = new web3.eth.Contract(contractABI, contractAddress);

async function setValue() {
    const value = document.getElementById('valueInput').value;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    simpleStorageContract.methods.setValue(value).send({ from: account })
        .on('receipt', function (receipt) {
            console.log('Value set:', receipt);
        })
        .on('error', function (error) {
            console.error('Error setting value:', error);
        });
}

async function getValue() {
    const value = await simpleStorageContract.methods.getValue().call();
    document.getElementById('valueDisplay').innerText = 'Stored Value: ' + value;
}
Getting Started
Prerequisites
Solidity ^0.8.0
Node.js and npm
MetaMask extension for the browser
Deployment
Deploy the Contract:

Use Remix to deploy the SimpleStorage contract on the Ethereum blockchain.
Update the Frontend:

Replace 'YOUR_CONTRACT_ADDRESS_HERE' in app.js with the deployed contract address.
Ensure the ABI matches the deployed contract.
Serve the Frontend:

Open index.html in a browser with MetaMask installed and connected to the appropriate network.
Usage
Set Value:

Enter a value in the input field and click the "Set" button to store the value on the blockchain.
Get Value:

Click the "Get Value" button to retrieve and display the stored value.
