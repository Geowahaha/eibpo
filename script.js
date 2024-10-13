// Function to switch the main video source
function switchVideo(videoSrc) { 
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrc;
    mainVideo.play();
}

// Function to toggle the navigation menu on mobile
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update the footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();

    // Add click event listeners to video features
    document.querySelectorAll('.video-feature').forEach(feature => {
        feature.addEventListener('click', () => {
            const videoSrc = feature.getAttribute('data-video');
            switchVideo(videoSrc);
        });
    });
});
