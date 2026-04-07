// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between menu and x
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Reveal Sections on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', reveal);

// Initial call to reveal sections already in view
reveal();

// Nav Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(10, 15, 20, 0.95)';
    } else {
        nav.style.padding = '0';
        nav.style.background = 'rgba(10, 15, 20, 0.8)';
    }
});

// Adding styles for mobile menu active state
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--nav-height);
            left: 0;
            width: 100%;
            background: rgba(10, 15, 20, 0.95);
            padding: 20px;
            border-bottom: 1px solid var(--glass-border);
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    }
`;
document.head.append(style);

// Simple form submission handler
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message (simulated) has been sent.');
        form.reset();
    });
}
