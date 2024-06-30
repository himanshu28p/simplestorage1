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
