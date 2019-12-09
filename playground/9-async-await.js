const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            console.log(' add ')
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
     console.log(' await 1 ')
    const sum = await add(1, 99)
     console.log(' await 2 ')
    const sum2 = await add(sum, 50)
     console.log(' await 3 ')
    const sum3 = await add(sum2, 3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})

console.log('after dowork')