console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=uMYDtV63pfxo1Ck1Zp9NOtGnw9GHg05x&q=dogs&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);

    const images = [];
    for (let gif of data.data) {
        images.push(gif.images.original.url);
    }
    console.log(images);
    return images;
}

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");

fetchButton.addEventListener("click", async function() {
    const images = await getGifs();
    gifContainer.innerHTML = ""
    for (let image of images) {
        gifContainer.innerHTML += `<img src="${image}" class ="col-3 mb-3">`;
    }
});