/* ==================================
   JOSH TECH WEBSITE JAVASCRIPT
================================== */

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    const opened = navLinks.classList.toggle("active");

    menuBtn.textContent = opened ? "✕" : "☰";

    menuBtn.setAttribute("aria-expanded", opened);

});

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// SCROLL REVEAL ANIMATIONS

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if(entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(function(element) {

    revealObserver.observe(element);

});

// ANIMATED SKILL BARS

const skillObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if(entry.isIntersecting) {

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

            skillObserver.unobserve(bar);

        }

    });

}, {
    threshold: 0.5
});

document.querySelectorAll(".skill-level span").forEach(function(bar) {

    skillObserver.observe(bar);

});

// BACK TO TOP BUTTON

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function() {

    if(window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

// CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("visitorName").value;

    const email = document.getElementById("visitorEmail").value;

    const subject = document.getElementById("visitorSubject").value;

    const message = document.getElementById("visitorMessage").value;

    // CHANGE THIS TO YOUR REAL EMAIL ADDRESS BEFORE LAUNCH

    const recipient = "your-email@example.com";

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + emailSubject +
        "&body=" + emailBody;

});
