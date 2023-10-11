document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Add code to create the pause button with SVG icon
        const pauseButton = document.createElement('button');

        // Create an SVG icon for the pause button
        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgIcon.setAttribute('width', '18');
        svgIcon.setAttribute('height', '18');
        svgIcon.setAttribute('viewBox', '0 0 14 14');

        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'black'); // Set the fill color to bl
        path.setAttribute('d', 'M3.5 1.5v13l9-6.5z'); // SVG path for a play icon
        
        svgIcon.appendChild(path);


        pauseButton.appendChild(svgIcon);

        pauseButton.classList.add('pause-button');

        // Append the pause button to the parent of the video element
        video.parentElement.appendChild(pauseButton);

        // Add an event listener to the pause button
        pauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Initially hide the pause button if the video is playing
        if (!video.paused) {
            pauseButton.style.display = 'none';
        }

        // Add event listeners to hide/show the pause button
        video.addEventListener('play', () => {
            pauseButton.style.display = 'none';
        });

        video.addEventListener('pause', () => {
            pauseButton.style.display = 'block';
        });
    });
});