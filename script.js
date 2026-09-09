function showMessage() {
    alert("Welcome to my Portfolio!");
}
  // Typing Animation
const text = "Web Developer";
let index = 0;

function typingEffect() {
    const typingText = document.querySelector("#home h2");

    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 120);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#home h2").textContent = "";
    typingEffect();
});


// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden-section");
    revealObserver.observe(section);
});
// =============================
// SCROLL PROGRESS BAR
// =============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("scrollProgress").style.width =
        scrollPercentage + "%";
});


// =============================
// BACK TO TOP BUTTON
// =============================

window.addEventListener("scroll", () => {

    const backToTop = document.getElementById("backToTop");

    if (window.scrollY > 500) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});


// =============================
// SCROLL TO TOP
// =============================

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
/* =====================================================
   EDUCATION SCROLL ANIMATION
===================================================== */

const educationItems = document.querySelectorAll(".education-item");

const educationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);

educationItems.forEach((item) => {
    educationObserver.observe(item);
});


/* =====================================================
   EDUCATION CARD 3D TILT
===================================================== */

const educationCards =
    document.querySelectorAll(".education-card");

educationCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});
/* =====================================================
   MY HOBBIES - JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hobbyCards = document.querySelectorAll(".hobby-card");


    /* ================= CARD EFFECT ================= */

    hobbyCards.forEach((card) => {

        /* 3D TILT */

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-12px)`;
        });


        /* RESET CARD */

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        });


        /* ================= BUTTON ================= */

        const button = card.querySelector(".hobby-btn");

        if (button) {

            button.addEventListener("click", () => {

                /* Remove active class from other cards */

                hobbyCards.forEach((otherCard) => {

                    if (otherCard !== card) {
                        otherCard.classList.remove("hobby-active");

                        const otherButton =
                            otherCard.querySelector(".hobby-btn");

                        if (otherButton) {
                            otherButton.textContent = "Explore ✦";
                        }
                    }

                });


                /* Toggle current card */

                card.classList.toggle("hobby-active");


                if (card.classList.contains("hobby-active")) {

                    button.textContent = "Selected ✓";

                } else {

                    button.textContent = "Explore ✦";

                }

            });

        }

    });
// SHORT TIME GLOW
const shortCard = document.querySelector(".short-glow-card");

setInterval(() => {

    shortCard.classList.add("short-flash");

    setTimeout(() => {
        shortCard.classList.remove("short-flash");
    }, 400);

}, 3000);


// LONG TIME GLOW
const longCard = document.querySelector(".long-glow-card");

setInterval(() => {

    longCard.classList.add("dream-glow");

    setTimeout(() => {
        longCard.classList.remove("dream-glow");
    }, 2000);

}, 6000);