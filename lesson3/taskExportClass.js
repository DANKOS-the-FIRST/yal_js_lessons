class User{
    #name = "NoName"
    constructor(name){
        this.#name = name
    }
    sayHiToMirror(){
        console.log(`Hi, ${this.#name}!`)
    }
}

module.exports = User;