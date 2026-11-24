/* ==========================================
   ORLANDO KAFULA - PORTFOLIO JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // 1. AUTOMATIC COPYRIGHT YEAR
    // ======================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ======================================
    // 2. SMOOTH NAVIGATION
    // ======================================

    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ======================================
    // 3. SCROLL REVEAL ANIMATIONS
    // ======================================

    const animatedElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-text, " +
        ".about-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".education-card, " +
        ".contact-item"
    );

    // Add the animation class to each element.
    animatedElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    // Check whether the visitor's browser supports
    // IntersectionObserver.
    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        // Stop observing once the element appears.
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        // Fallback for older browsers.
        animatedElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // ======================================
    // 4. DYNAMIC TYPING EFFECT
    // ======================================

    const typingElement = document.querySelector(".hero h2");

    if (typingElement) {

        const phrases = [
            "Software Engineering Student",
            "Aspiring Software Engineer",
            "Future Software Developer",
            "Technology Enthusiast"
        ];

        let phraseIndex = 0;
        let characterIndex = phrases[0].length;
        let deleting = true;

        function typeEffect() {

            const currentPhrase = phrases[phraseIndex];

            if (deleting) {

                characterIndex--;

                typingElement.textContent =
                    currentPhrase.substring(0, characterIndex);

                if (characterIndex <= 0) {

                    deleting = false;

                    phraseIndex =
                        (phraseIndex + 1) % phrases.length;

                    setTimeout(typeEffect, 400);
                    return;
                }

                setTimeout(typeEffect, 45);

            } else {

                const nextPhrase = phrases[phraseIndex];

                characterIndex++;

                typingElement.textContent =
                    nextPhrase.substring(0, characterIndex);

                if (characterIndex >= nextPhrase.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);
                    return;
                }

                setTimeout(typeEffect, 75);
            }

        }

        // Start after a short delay.
        setTimeout(typeEffect, 1800);
    }


    // ======================================
    // 5. BACK-TO-TOP BUTTON
    // ======================================

    const backToTop = document.createElement("button");

    backToTop.type = "button";
    backToTop.className = "back-to-top";
    backToTop.textContent = "↑";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.title = "Back to top";

    document.body.appendChild(backToTop);

    // Display the button when scrolling down.
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    // Return to the top when clicked.
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ======================================
    // 6. PROJECT CARD INTERACTIONS
    // ======================================

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transition =
                "transform 0.3s ease, border-color 0.3s ease";
        });

        card.addEventListener("click", function (event) {

            // Do not interfere with links inside the card.
            if (event.target.closest("a")) {
                return;
            }

            card.classList.toggle("project-selected");

        });

    });


    // ======================================
    // 7. PROFILE PICTURE FALLBACK
    // ======================================

    const profilePicture = document.querySelector(".profile-picture");

    if (profilePicture) {

        profilePicture.addEventListener("error", function () {

            console.warn(
                "Profile image could not be loaded. " +
                "Check images/profile.jpg."
            );

        });

    }


    // ======================================
    // 8. UNIVERSITY CREST FALLBACK
    // ======================================

    const universityCrest = document.querySelector(".university-crest");

    if (universityCrest) {

        universityCrest.addEventListener("error", function () {

            console.warn(
                "University crest could not be loaded. " +
                "Check images/zut-crest.png."
            );

        });

    }


    // ======================================
    // 9. WELCOME MESSAGE IN CONSOLE
    // ======================================

    console.log(
        "Welcome to Orlando Kafula's portfolio! " +
        "Keep learning. Keep building. Keep growing."
    );

});