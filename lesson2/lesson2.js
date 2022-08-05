function sayHello1() {
    console.log('Hello1')
    return '1'
}

let sayHello2 = function sayHello2() {
    console.log('Hello2')
    return '2'
}



console.log(sayHello1())
console.log(sayHello2())

let arr = [1, 2, 3, 4, 5, 6]

function findOdd(array) {
    let resultArr = []
    let i = 0

    function recursiveOdd() {
        if (i >= array.length) {
            return
        }
        if (array[i] % 2 === 0) {
            resultArr.push(array[i])
        }
        i++
        recursiveOdd()
    }

    recursiveOdd()
    return resultArr
}

const name = 'name'
let obj = {
    name: 'Object',
    'my name': 'My name is Object'
}

console.log(obj[name], obj["my name"])
console.log('keys:')
for (const objKey in obj) {
    console.log(objKey)
}