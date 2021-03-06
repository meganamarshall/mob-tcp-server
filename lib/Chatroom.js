const uuid = require('uuid/v4');

class Chatroom {
    constructor() {
        this.allUsers = new Map();
    }
    add(client) {
        const id = uuid();
        client.userName = id;
        this.allUsers.set(`${id}`, client);
        return client;
    }
    getClient(userName) {
        return this.allUsers.get(userName);
    }
    rename(userName, newUserName) {
        if(this.allUsers.has(newUserName)) {
            return false;
        }
        const userToUpdate = this.allUsers.get(userName);
        const newUserObj = { ...userToUpdate };
        newUserObj.userName = newUserName;
        this.allUsers.delete(userName);
        this.allUsers.set(newUserName, newUserObj);
        return true;
    }
    allClients() {
        return [...this.allUsers.values()];
    }
}

module.exports = Chatroom;
