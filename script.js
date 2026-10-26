/* =========================================
   LMK.STUDIO — PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. SMOOTH NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        // Ignore links that don't point to a section
        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   2. ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navigationLinks = document.querySelectorAll(
    ".nav-link"
);

const observerOptions = {
    root: null,
    threshold: 0.35
};

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentSection =
                    entry.target.getAttribute("id");

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentSection}`
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    observerOptions
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================
   3. HERO VISUAL MOUSE MOVEMENT
========================================= */

const heroVisual =
    document.querySelector(".hero-visual");

const visualFrame =
    document.querySelector(".visual-frame");

if (heroVisual && visualFrame) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const moveX =
                (x - centerX) / 35;

            const moveY =
                (y - centerY) / 35;


            visualFrame.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            visualFrame.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================================
   4. TERMINAL-STYLE HOVER EFFECT
========================================= */

const terminalElements =
    document.querySelectorAll(
        ".disciplines a, .explore-button"
    );


terminalElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            element.style.textShadow =
                "0 0 8px rgba(255, 31, 45, 0.8)";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            element.style.textShadow =
                "none";

        }
    );

});


/* =========================================
   5. SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .process-item, .about-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   6. TERMINAL CURSOR EFFECT
========================================= */

const cursors =
    document.querySelectorAll(".cursor");

let cursorVisible = true;

setInterval(() => {

    cursorVisible = !cursorVisible;

    cursors.forEach(cursor => {

        cursor.style.opacity =
            cursorVisible ? "1" : "0";

    });

}, 500);


/* =========================================
   7. DYNAMIC YEAR
========================================= */

const footerText =
    document.querySelector(".site-footer p");

if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} LMK.STUDIO`;

}


/* =========================================
   8. HERO LOAD ANIMATION
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);