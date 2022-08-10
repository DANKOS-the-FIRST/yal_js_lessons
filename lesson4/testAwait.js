async function loadTest() {
    await loadTestN(1)
    await loadTestN(2)
    await loadTestN(3)
    await loadTestN(4)
    await loadTestN(5)
}

function loadTestN(number) {
    return new Promise((resolve) => {
        console.log(`step ${number}`)
        console.log(`after step ${number}`)
        resolve(12)
    })
}

function finish21() {
    return new Promise((resolve) => {
        console.log('########finish21########');
        return setTimeout(resolve, 5000);
    });
}

async function finish22() {
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
    console.log('after 22')
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