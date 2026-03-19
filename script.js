// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Cursor Blob Animation
const blob = document.querySelector('.cursor-blob');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    blob.animate({
        left: `${clientX - 300}px`,
        top: `${clientY - 300}px`
    }, { duration: 3000, fill: "forwards" });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(5, 5, 5, 0.8)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'rgba(5, 5, 5, 0.5)';
    }
});
