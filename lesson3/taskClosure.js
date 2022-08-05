class User {
    #name
    #age

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    incrementAgeByTwo() {
        this.#age += 2
        console.log(`My name is ${this.#name} and my age is ${this.#age} now!`)
        return this
    }
    get age(){
        return this.#age
    }
}

let user = new User('Dannissimo', 21)
console.log('user age from outside = ' + user.incrementAgeByTwo().age)
