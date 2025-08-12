document.addEventListener('DOMContentLoaded', function() {

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Kinetic Hero Text Logic ---
    const kineticTextElements = document.querySelectorAll('.kinetic-text');
    if (kineticTextElements.length > 0) {
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mousemove', e => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const moveX = (clientX / innerWidth - 0.5) * 40;
            const moveY = (clientY / innerHeight - 0.5) * 40;
            kineticTextElements.forEach((el, index) => {
                const direction = index === 0 ? -1 : 1;
                el.style.transform = `translate(${moveX * direction}px, ${moveY * direction}px)`;
            });
        });
    }

    // --- Scroll-Reveal Animation Logic ---
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- Smooth scrolling for links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetEl = document.querySelector(this.getAttribute('href'));
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});