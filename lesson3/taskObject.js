function mapOfValues(obj){
    let map = new Map();
    Object.entries(obj)
        .forEach(arrItem => map.set(arrItem[0], arrItem[1]))
    return map
}

const object = {
    keyStr: 'str value',
    keyInt: 2022,
    keyArr: []
};

console.log(mapOfValues(object))