function loadTest() {
    return loadTestN(1)
        .then((n) => loadTestN(n))
        .then((n) => loadTestN(n))
        .then((n) => loadTestN(n))
}

function loadTestN(number) {
    return new Promise((resolve) => {
        console.log(`step ${number}`)
        console.log(`after step ${number}`)
        resolve(++number)
    })
}

function finish21() {
    return new Promise((resolve) => {
        console.log('########finish21########');
        return setTimeout(resolve, 4000);
    });
}

function finish22() {
    return new Promise((resolve) => {
        console.log('########finish22########');
        return setTimeout(resolve, 1500);
    });
}

async function main() {
    await loadTest()
    await finish21()
    await new Promise((resolve) => setTimeout(resolve, 3000))
    await finish22()
}

(async () => {
    await new Promise((resolve) => {
        console.log('before timeout')
        return setTimeout(resolve, 2000);
    });
    await new Promise((resolve) => {
        console.log('########finish27########');
        return setTimeout(resolve, 2000);
    });
    await main();
})();