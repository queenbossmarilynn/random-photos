// Use the imageContainerEl and btnEl to call it within javascript 
const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

// Activate Button 
btnEl.addEventListener("click", () => {
    // Check to see btn clicks:
    // console.log("Clicked");

    // Adds 10 new images when button is clicked 
    // Can't use let=imageNum because it's outside the function, so need to erase "let" from the call 
    imageNum = 10;

    // Uses addNewImages function to add new images to container when button is clicked 
    addNewImages()

});

// Add more images to container 
function addNewImages() {
    // Add more then one image at a time: 
    for (let index = 0; index < imageNum; index++) {
        
        // Create new Element 
        const newImgEl = document.createElement("img")

        // Create new image using Src, but will use a Math.random code instead of 1, 2, or 3 as in the HTML links
        // Math.random will use a number between 0 and 2000  
        // Math.floor will round the number out 
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    
        // Add image within container 
        imageContainerEl.appendChild (newImgEl);
        
    }


   
}