document.addEventListener("DOMContentLoaded", () => {
    const starryBg = document.querySelector(".starry-bg");

    const numStars = 200; // Number of stars
    const createStar = () => {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        starryBg.appendChild(star);
    };

    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});
