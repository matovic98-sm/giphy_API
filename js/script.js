console.log("script.js loaded");

//Created a function to send an API request and fetch GIF data from the API
//Updated code to include a search feature, passing searchTerm as an argument and refactoring the API endpoint to include it
async function getGifs(searchTerm) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=uMYDtV63pfxo1Ck1Zp9NOtGnw9GHg05x&q=${searchTerm}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    //Created an empty array to store image URLs by looping through GIF data and adding the URLs to the end of the array
    const images = [];
    for (let gif of data.data) {
        images.push(gif.images.original.url);
    }
    //Printed the images array to the console and returned it to be used later
    console.log(images);
    return images;
}
//Stored references to the gif-container, fetch-gif-btn, and search-input elements in variables 
const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

//Added a "click" event listener to the fetchButton that runs the function when the button is clicked
//Created variables to store the search input values and GIF image URLs
fetchButton.addEventListener("click", async function() {
    const searchTerm = searchInput.value;
    const images = await getGifs(searchTerm);
    //Used an empty string to clear the container's innerHTML to prevent previous GIFs from remaining on the page after addtional clicks
    gifContainer.innerHTML = "";
    //Looped through the images array to create image elements and add them to the container with a grid layout
    for (let image of images) {
        gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3">`;
    }
});

