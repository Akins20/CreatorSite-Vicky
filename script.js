
const pictures = [
    'https://w0.peakpx.com/wallpaper/960/845/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg',
    'https://w0.peakpx.com/wallpaper/456/27/HD-wallpaper-nature-nature-thumbnail.jpg',
    'https://w0.peakpx.com/wallpaper/42/267/HD-wallpaper-nature-scenery-scenery-nature-thumbnail.jpg'
    // Add more image URLs here
];

// Array of video sources
const videos = [
    'https://cors-anywhere.herokuapp.com/https://youtu.be/Zjl2vmy02As',
    'https://cors-anywhere.herokuapp.com/https://youtu.be/zXtHNpT6MJk',
    'https://cors-anywhere.herokuapp.com/https://youtu.be/t5RcEsvdMIc',
    // Add more video URLs as needed
];


function addImageToGallery(src) {
    const gallery = document.querySelector('.gallery');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'New Image';
    img.width = 400;
    img.height = 300;
    img.className = ""
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
    videoPlayer.play();
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

// Initial video playback
playVideo();


// Call the function to load content when the page loads
window.addEventListener('load', loadContent);
