const fs = require('fs')
const { resolve } = require('path')

// A primeira versão usa funções de retorno de chamada.

// fs.readFile('./files/txtOne.txt', 'utf-8', (err, data) => {
//     const oneText = data.toUpperCase();

//     fs.readFile('./files/txtSecond.txt', 'utf-8', (err, data) => {
//         const secondText = data.toUpperCase()
//         console.log(oneText, secondText)
//     })

// })


// A segunda versão usa sintaxe de promise nativa

const myPromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./files/txtOne.txt', 'utf-8', (err, data) => {

            setTimeout(() => {
                resolve(data)
            }, 2000)

            if (err) {
                reject(err)
            }
        })

    })

}
myPromise()
    .then((response) => {
        console.log('mypromise', response)
    })
    .catch((error) => {
        console.warn(error)
    })



// A terceira versão usa async...await.

const functionAsync = async () => {
    let firstSentence = await myPromise();

    resolve(console.log('async', firstSentence))
}
functionAsync()
    .then((response) => {
        return response
    })
    .catch((error) => {
        //console.log(error)
    })