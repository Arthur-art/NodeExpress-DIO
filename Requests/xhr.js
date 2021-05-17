const myPromise = () => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        const url = 'https://api.randomuser.me/?results=3';

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
myPromise().then((response) => {
    console.log(response)
})
    .catch((error) => {
        console.log(error)
    })