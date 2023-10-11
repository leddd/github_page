// cursor.js
// Get all the links on the page
document.addEventListener('DOMContentLoaded', () => {





const links = document.querySelectorAll('a');

// Get the custom cursor element
const cursor = document.querySelector('.cursor');

// Loop through each link
links.forEach(link => {
    // Add a mouseenter event listener to each link
    link.addEventListener('mouseenter', () => {
        // Increase the cursor size when hovering over a link
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.transition = 'width 0.3s ease, height 0.3s ease'; // Add a CSS transition
    });

    // Add a mouseleave event listener to each link
    link.addEventListener('mouseleave', () => {
        // Revert the cursor size when leaving a link
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursor.style.transition = 'width 0.3s ease, height 0.3s ease'; // Add a CSS transition
    });
});

document.addEventListener('mousemove', e => {
    // Calculate the cursor position including the scroll position
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    // Set the cursor's position
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});





});
