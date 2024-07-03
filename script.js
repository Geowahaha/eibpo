function switchVideo(videoId) {
    const videoSrcMap = {
        'video1': 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/powerwall-store-use-save-carousel-01.mp4',
        'video2': 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/powerwall-store-use-save-carousel-02.mp4',
        'video3': 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/powerwall-store-use-save-carousel-03.mp4'
    };

    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrcMap[videoId];
    mainVideo.play();
}

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
