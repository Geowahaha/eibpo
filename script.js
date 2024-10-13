document.addEventListener('scroll', function() {
    const videoSections = document.querySelectorAll('.video-feature video');
    videoSections.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});
