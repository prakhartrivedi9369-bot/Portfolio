// ================================
// Cursor Glow
// ================================

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (e) => {
    if (window.innerWidth > 900 && cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    }
});


// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});


// ================================
// Dynamic Footer Year
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================================
// Mobile Navigation
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("open");
    });
});


// ================================
// Toast Notification
// ================================

const toast = document.getElementById("toast");
let toastTimer;

document.querySelectorAll("[data-toast]").forEach((element) => {

    element.addEventListener("click", (event) => {

        // Prevent "#" links from jumping to the top
        if (element.getAttribute("href") === "#") {
            event.preventDefault();
        }

        if (!toast) return;

        toast.textContent = element.dataset.toast;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2800);
    });

});


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

});