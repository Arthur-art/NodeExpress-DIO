const myPromise = () => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        const url = 'https://api.randomuser.me/?results=4';

        xhr.open("GET", url)
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Error')
                }
            }
        }
    })
}
myPromise().then(({ results }) => {
    console.log(results)
    results.map((value) => {
        console.log(value.name.first)
    })
})
    .catch((error) => {
        console.log(error)
    })

