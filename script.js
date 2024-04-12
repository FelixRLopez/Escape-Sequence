const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  const thumbnail = document.createElement("img");

  // 1.2 Customize the element
  thumbnail.src = imageSource;
  thumbnail.classList.add("thumbnail");

  // 1.3 Append the element
  document.getElementById("thumbnail-container").appendChild(thumbnail);

  // 1.4 Add the onclick
  thumbnail.onclick = () => {
    document.getElementById("fullsize-image").src = imageSource;
  }
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (const thumbnail of imageSources) {
    // 2.2 Call addThumbnail each iteration 
    addThumbnail(thumbnail);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
window.onload = () => {
  document.getElementById("fullsize-image").src = imageSources[0];
}