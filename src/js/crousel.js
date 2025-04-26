const image = [
  "https://drapify.store/images/banner/1.png",
  "https://drapify.store/images/banner/2.png",
  "https://drapify.store/images/banner/3.png",
];

let currentIndex = 0;

const imageRef = document.getElementById("crousel-image");

function updateImage() {
  setInterval(() => {
    imageRef.src = image[currentIndex];
    currentIndex = (currentIndex + 1) % image.length;
  }, 3000);
}

updateImage();
