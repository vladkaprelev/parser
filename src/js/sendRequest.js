export function sendRequest(url) {
    return fetch(url).then( response => {
        return  response.json()
    })
    // return new Promise(((resolve, reject) => {
    //     const xhr = new XMLHttpRequest()
    //
    //     xhr.open('GET', url)
    //     xhr.responseType = 'json'
    //
    //     xhr.onload = () => {
    //         if (xhr.status >= 400) {
    //             reject(xhr.response)
    //         } else {
    //             return resolve(xhr.response)
    //         }
    //     }
    //
    //     xhr.onerror = () => {
    //         reject(xhr.response)
    //     }
    //
    //     xhr.send()
    // }))
}