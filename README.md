Create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application. License This contract is using the MIT License.

Prerequisites Solidity ^0.8.0

Contract Details module2 of solidity intermediate

Terminal commands to deploy the contract

"npm i" Install the required dependencies by running npm install in your project directory.

"npx hardhat compile" Compile your smart contract by running npx hardhat compile in your project directory. This will compile your Solidity code and generate the necessary artifacts.

"npx hardhat node" Start a local Ethereum node by running npx hardhat node in your project directory. This will start a local blockchain network for testing and development purposes

"npx hardhat run scripts/deploy.js --network localhost" Deploy your smart contract to the local network by running npx hardhat run scripts/deploy.js --network localhost in your project directory. Make sure you have a deployment script (deploy.js) in the scripts directory that specifies the deployment logic.

"npm run dev" Finally, start your development server by running npm run dev in your project directory. This will start your application and make it accessible in your local development environment.

SimpleContract.sol The SimpleContract is a Solidity smart contract that allows users to register, retrieve, and delete user information. Here's a short explanation of how it works:

The contract defines a User struct with three properties: name, email, and password.
The contract uses a mapping called users to store user information. The key of the mapping is the user's email, and the value is an instance of the User struct.
The contract also maintains an array called userIds to keep track of the registered user emails.
The setUser function allows users to register by providing their name, email, and password. It creates a new User struct with the provided information and adds it to the users mapping using the email as the key. It also adds the email to the userIds array.
The getAllUsers function returns an array of all registered users. It iterates over the userIds array and retrieves the corresponding User struct from the users mapping.
The deleteUser function allows users to delete their registration by providing their email. It removes the user's information from the users mapping and updates the userIds array by swapping the email with the last element and then removing the last element. This contract provides basic functionality for user registration and management.
index.js React component that provides a user registration interface for interacting with the SimpleContract smart contract. Here's a short summary of how it works:

The component initializes the contract state variable using the contract ABI and address.
The component defines state variables for user, users, and deleteName to manage user input and retrieved user data.
The useEffect hook is used to instantiate the contract instance when the component mounts.
The component provides input fields for the user to enter their name, email, and password.
The handleSetUser function is called when the "Register User" button is clicked. It invokes the setUser function of the contract, passing the user's name, email, and password. The transaction is sent from a specific Ethereum address.
The handleGetUsers function is called when the "Get All Users" button is clicked. It retrieves all registered users using the getAllUsers function of the contract and updates the users state variable.
The handleDeleteName function is called when the "Delete User" button is clicked. It invokes the deleteUser function of the contract, passing the email of the user to be deleted. The transaction is sent from a specific Ethereum address. After deletion, the users state variable is updated by calling handleGetUsers.
The component renders the user registration form, the "Register User," "Delete User," and "Get All Users" buttons, and a list of registered users. This code provides a basic user registration interface that interacts with the SimpleContract smart contract.
deploy.js deploy.js code is a script written using the Hardhat framework to compile and deploy the SimpleContract smart contract. Here's a short summary of how it works:

The script imports the ethers module from the Hardhat library.
The main function is defined as an async function.
Inside the main function, the MyContract variable is assigned the contract factory of the SimpleContract contract using ethers.getContractFactory.
The script logs a message indicating that the contract is being compiled.
The myContract variable is assigned the deployed instance of the SimpleContract contract using MyContract.deploy.
The script logs a message indicating that the contract is being deployed.
The await myContract.deployed() statement waits for the contract to be mined and deployed to the blockchain.
The script logs the deployed address of the contract using myContract.address.
The main function is called, and the script exits with a status code of 0 if successful.
If an error occurs, the error is logged, and the script exits with a status code of 1. The script compiles and deploys the SimpleContract smart contract using the Hardhat framework.
