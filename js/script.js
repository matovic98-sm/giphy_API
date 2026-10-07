console.log("script.js loaded");

async function getGifs(searchTerm) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=uMYDtV63pfxo1Ck1Zp9NOtGnw9GHg05x&q=${searchTerm}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
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
const searchInput = document.querySelector("#search-input");

fetchButton.addEventListener("click", async function() {
    const searchTerm = searchInput.value;
    const images = await getGifs(searchTerm);
    gifContainer.innerHTML = ""
    for (let image of images) {
        gifContainer.innerHTML += `<img src="${image}" class ="col-3 mb-3">`;
    }
});

