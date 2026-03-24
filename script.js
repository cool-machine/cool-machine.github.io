// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    function getTheme() {
        return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#ffffff');
        }

        if (themeToggle) {
            const icon = themeToggle.querySelector('.theme-toggle-icon');
            const label = themeToggle.querySelector('.theme-toggle-label');
            const nextTheme = theme === 'dark' ? 'light' : 'dark';

            themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
            themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));

            if (icon) {
                icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }

            if (label) {
                label.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
            }
        }
    }

    applyTheme(getTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
        });
    }

    // Add active state to nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function setActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // Fade in animation for project cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to project cards
    const projectCards = document.querySelectorAll('.project-card, .research-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        setTimeout(() => {
            tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 50);
    });
});
