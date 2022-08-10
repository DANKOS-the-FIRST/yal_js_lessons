let prom = Promise.resolve('hello').then((h) => console.dir(h))
console.dir(prom)