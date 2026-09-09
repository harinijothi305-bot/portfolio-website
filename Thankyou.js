// Welcome message

window.addEventListener("load", () => {

    console.log(
        "✨ Thank you for visiting my professional portfolio! 🤎"
    );

});


// Create extra glowing particles

for (let i = 0; i < 15; i++) {

    const particle = document.createElement("span");

    particle.innerHTML = "✦";

    particle.style.position = "fixed";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.color = "#8b4e2d";
    particle.style.fontSize =
        Math.random() * 12 + 8 + "px";

    particle.style.opacity = "0.4";

    particle.style.pointerEvents = "none";

    particle.style.animation =
        "particleMove " +
        (Math.random() * 5 + 4) +
        "s ease-in-out infinite";

    particle.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(particle);
}