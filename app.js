const url = "https://geek-jokes.sameerkumar.website/api?format=json";

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${error}`)
    })