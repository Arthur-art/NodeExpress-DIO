const myPromise = (num) => {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve('zero')
        } else {
            resolve('not zero')
        }
    })
}
myPromise(1)
    .then((response) => {
        console.log(response)
    })



// Com async

const funcAsync = async (num) => {
    if (num === 5) {
        return 'five'
    } else {
        return 'not five'
    }
}
funcAsync(5)
    .then((response) => {
        console.log(response)
    })