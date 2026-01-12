/*
 * Main JavaScript for portfolio site.
 * Handles responsive navigation toggle, year update and simple form
 * submission feedback. All interactions are client‑side since GitHub
 * Pages does not support server‑side logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the navigation menu on small screens
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Update the year in the footer automatically
    const yearEl = document.getElementById('year');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.textContent = currentYear;
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.elements['name'].value.trim();
            alert(`Thank you${name ? ', ' + name : ''}! Your message has been prepared. Please send via your email client.`);
            // Optionally, open a mailto link prefilled with subject and body
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();
            const mailtoLink = `mailto:omkar.mandve.work@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20<${encodeURIComponent(email)}>\n`;
            window.location.href = mailtoLink;
        });
    }
});