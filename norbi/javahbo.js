window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.addEventListener('click', (event) => {
            event.preventDefault();
            const youtubeLink = image.parentElement.querySelector('a').href;
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');
            const videoIframe = document.createElement('iframe');
            videoIframe.src = youtubeLink;
            videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            videoIframe.allowFullscreen = true;
            videoContainer.appendChild(videoIframe);
            image.parentElement.replaceChild(videoContainer, image);
        });
    });
});
