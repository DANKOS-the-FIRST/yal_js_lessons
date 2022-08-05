// Task 1
let str21 = 'I like apple pie'

function secondTaskApple(str){
    return str.replaceAll(' apple', '')
}

console.log(secondTaskApple(str21))

// Task 2
function secondTaskNumbers(str){
    let resultStr = ''
    let numbersStr = str.replace(/\D/g, '')

    for (const char of numbersStr) {
        resultStr += String(Number(char) + 2)
    }
    return resultStr
}

let str22 = 'd312sa1edasdds121'
let str23 = '12ten39'

console.log('before ' + str22)
console.log('after: ' + secondTaskNumbers(str22))

console.log('before ' + str23)
console.log('after: ' + secondTaskNumbers(str23))
