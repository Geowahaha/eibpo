// Function to switch the main video source (YouTube embeds)
function switchVideo(videoSrc, clickedElement) { 
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrc;

    // Remove active class from all features
    document.querySelectorAll('.video-feature').forEach(feature => {
        feature.classList.remove('active');
    });

    // Add active class to the clicked feature
    clickedElement.classList.add('active');
}

// Function to toggle the navigation menu on mobile
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Execute when the DOM is fully loaded
window.addEventListener('load', () => {
    // Update the footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();

    // Add click event listeners to video features
    document.querySelectorAll('.video-feature').forEach(feature => {
        feature.addEventListener('click', () => {
            const videoSrc = feature.getAttribute('data-video');
            switchVideo(videoSrc, feature);
        });
    });
});
