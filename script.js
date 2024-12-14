
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("projects-completed");
    let count = 0;
    const target = 13; // Target number
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
});



