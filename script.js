
const pictures = [
    'assets/img2.jpeg',
    'assets/img3.jpeg',
    'assets/img5.jpeg'
    // Add more image URLs here
];

// Array of video sources
const videos = [
    'https://www.youtube.com/embed/Zjl2vmy02As',
    'https://www.youtube.com/embed/zXtHNpT6MJk',
    'https://www.youtube.com/embed/pCeYZ7eaeIw',
    // Add more video URLs as needed
];



function addImageToGallery(src) {
    const gallery = document.querySelector('.gallery');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'New Image';
    img.width = 300;
    img.height = 300;
    img.className = "";
    img.id = "one";
    img.addEventListener('click', () => toggleFullScreen(src));
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}
pictures.forEach(src => {
    addImageToGallery(src);
});

const videoPlayer = document.getElementById('videoPlayer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//  Using CORS ANYWHERE TO BYPASS CORS ERRORS

// const url = 'https://cors-anywhere.herokuapp.com/https://youtu.be/Zjl2vmy02As';

// fetch(url)
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

let currentVideoIndex = 0;

// Function to play the current video
function playVideo() {
    videoPlayer.src = videos[currentVideoIndex];
   
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    playVideo();
});

nextBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    playVideo();
});

// JavaScript for toggling fullscreen image
function toggleFullScreen(imageSrc) {
    const modal = document.getElementById('fullscreen-modal');
    const image = document.getElementById('fullscreen-image');

    if (modal.style.display === 'block') {
        // Close fullscreen
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling on the body
    } else {
        // Open fullscreen
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body
        image.src = imageSrc;
    }
}

// Close fullscreen if the modal is clicked or if the user clicks outside the image
document.getElementById('fullscreen-modal').addEventListener('click', function (event) {
    if (event.target === this) {
        toggleFullScreen();
    }
});



// Initial video playback
playVideo();