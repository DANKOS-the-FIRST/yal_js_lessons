const params = {
    leg1: 7,
    leg2: 24
}

const HARDCODE_VALUE = 5
const hypotenuse = Math.sqrt(params.leg1 ** 2 + params.leg2 ** 2)
console.log(`Hypotenuse of triangle with legs ${params.leg1} and ${params.leg2} is ${hypotenuse}`)

const hypotenuse2 = hypotenuse - 1
if (hypotenuse2 === params.leg1 || hypotenuse2 === params.leg2) {
    console.log('Happy');
}
if (params.leg1 === HARDCODE_VALUE || params.leg2 === HARDCODE_VALUE) {
    console.log('Happy 5');
} else {
    console.log('Goodbye!')
}

switch (hypotenuse) {
    case 5:
        console.log('Happy 5')
        break
    case 13:
        console.log('Happy 13')
        break
    case 17:
        console.log('Happy 17')
        break
    case 25:
        console.log('Happy 25')
        break
    default:
        console.log('Not happy')
        break
}
const arr = [5, 13, 17, 25]

class HappyFinder {
    arr = [];
    happyCandidate = Number();
    #errors = new Set();

    constructor(candidate, happyValuesArray = [5, 13, 17, 25]) {
        this.happyCandidate = candidate;
        this.arr = happyValuesArray;
        this.validateHappyFinder();
        this.showErrorsToConsole();
    }

    validateHappyFinder() {
        this.validateHappyArray()
        this.validateHappyCandidate()
    }

    validateHappyArray() {
        if (!this.arr?.length) {
            this.#errors.add('Happy array can not be empty')
        } else {
            this.#errors.delete('Happy array can not be empty')
        }
    }

    validateHappyCandidate() {
        if (!this.happyCandidate || this.happyCandidate <= 0) {
            this.#errors.add('Happy candidate must be greater then 0')
        } else {
            this.#errors.delete('Happy candidate must be greater then 0')
        }
    }

    showErrorsToConsole() {
        for (let str of this.#errors) {
            console.log('Validation error: ' + str + '!')
        }
    }

    errorsNotEmpty(){
        return (this.#errors.size !== 0)
    }

    showHappyValueToConsole() {
        this.validateHappyFinder();
        this.showErrorsToConsole();
        if (this.errorsNotEmpty()){
            return
        }
        let forOfValue = this.findWithForOf()
        let whileValue = this.findWithWhile()
        let doWhileValue = this.findWithDoWhile()

        console.log(`Happy value is ${forOfValue} = ${whileValue} = ${doWhileValue}`)
    }

    findWithForOf() {
        for (const number of this.arr) {
            if (number === hypotenuse) {
                return number
            }
        }
        return null
    }

    findWithWhile() {
        let i = 0
        while (i < this.arr.length) {
            if (this.arr[i] === hypotenuse) {
                return this.arr[i]
            }
            i++
        }
        return null
    }

    findWithDoWhile() {
        let i = 0
        do {
            if (this.arr[i] === hypotenuse) {
                return this.arr[i]
            }
            i++
        } while (i < this.arr.length)
        return null
    }
}

let happyInstance = new HappyFinder(hypotenuse, null)
happyInstance.showHappyValueToConsole()
let a = 3
console.log(`${a === 2 ? 'DVA' : 'NE DVA'}`)
