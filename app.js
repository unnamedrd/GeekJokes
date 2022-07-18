
const url = "https://geek-jokes.sameerkumar.website/api?format=json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    //document.querySelector('img')
    document.querySelector('currentJoke') = data.joke
  })
  .catch((err) => {
    console.log(`error ${error}`);
  });