// Array task
let arr1 = [1, 4, 3, 2, 5, 6, 7, 8, 9, 10]
let arr2 = [132, 232, 332, 42, 51, 26, 73, 8, 19, 10]

function firstTask(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(num => num * 3)
        .sort(function(a, b) {
            return a - b;
        })
        .reverse()
        .concat(arr
            .filter(num => num % 2 === 1)
            .map(num => num / 2)
        )
}

console.log(firstTask(arr1))
console.log(firstTask(arr2))