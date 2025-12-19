document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cursor Follow effect (Desktop only)
    const cursor = document.querySelector('.cursor-glow');
    if (window.matchMedia("(min-width: 992px)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // Scroll Animations (Fade Up)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.section-title, .project-card, .about-text, .skill-list span');

    // Add initial css class for hidden state
    const style = document.createElement('style');
    style.innerHTML = `
        .section-title, .project-card, .about-text {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card:nth-child(2) { transition-delay: 0.1s; }
        .project-card:nth-child(3) { transition-delay: 0.2s; }
    `;
    document.head.appendChild(style);

    animateElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Form submission removed to allow native Formspree submission
});
