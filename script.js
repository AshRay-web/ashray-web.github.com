
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("projects-completed");
    let count = 0;
    const target = 15; // Target number
    const increment = 1; // Increment per step
    const interval = 100; // Interval in ms

    const animateCount = setInterval(() => {
        if (count < target) {
            count += increment;
            counter.textContent = count;
        } else {
            clearInterval(animateCount);
        }
    }, interval);
    // Hamburger menu dropdown functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Toggle nav menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    AOS.init({
        once: true, // Ensures animation happens only once
        duration: 1000, // Animation duration in milliseconds
      });
});




