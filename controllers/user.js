'use strict';

class User{
    constructor(name){
        this.name = name;
    }
    getusername(){
        return "This is mu username " + this.name;
    }
}

module.exports = User;