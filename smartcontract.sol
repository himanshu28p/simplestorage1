// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    struct User {
        string name;
        string email;
        string password;
    }

    mapping(string => User) private users;
    string[] private userIds;

    function setUser(string memory _name, string memory _email, string memory _password) public {
        User memory newUser = User({ name: _name, email: _email, password: _password });
        users[_email] = newUser;
        userIds.push(_email);
    }

    function getAllUsers() public view returns (User[] memory) {
        User[] memory usersArray = new User[](userIds.length);
        for(uint256 i = 0; i < userIds.length; i++) {
            usersArray[i] = users[userIds[i]];
        }
        return usersArray;
    }

    function deleteUser(string memory _email) public {
        delete users[_email];
        for(uint256 i = 0; i < userIds.length; i++) {
            if (keccak256(bytes(userIds[i])) == keccak256(bytes(_email))) {
                userIds[i] = userIds[userIds.length - 1];
                userIds.pop();
                break;
            }
        }
    }
}
