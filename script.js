// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#1a1a1a';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#1a1a1a';
        navbar.style.boxShadow = 'none';
    }
});

// Prayer modal functionality
const openPrayerModal = document.getElementById('openPrayerModal');
const prayerModal = document.getElementById('prayerModal');
const closeModal = document.getElementById('closeModal');
const prayerForm = document.getElementById('prayerForm');

openPrayerModal.addEventListener('click', () => {
    prayerModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    prayerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === prayerModal) {
        prayerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Prayer form submission
prayerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const prayer = document.getElementById('prayer').value;
    
    // Simulate form submission
    alert(`Terima kasih ${name}! Permohonan doa Anda telah dikirim. Kami akan berdoa untuk Anda. 🙏`);
    
    // Reset form and close modal
    prayerForm.reset();
    prayerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Simulate form submission
    alert(`Pesan dari ${name} (${email}) telah terkirim! Terima kasih telah menghubungi kami. 📧`);
    
    // Reset form
    contactForm.reset();
});

// Gallery lightbox effect (simple click to enlarge)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            max-width: 90vw;
            max-height: 90vh;
            z-index: 3000;
            border-radius: 15px;
            box-shadow: 0 25px 100px rgba(0, 0, 0, 0.8);
            cursor: pointer;
            transition: transform 0.3s ease;
        `;
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 2500;
            backdrop-filter: blur(5px);
        `;
        
        overlay.appendChild(img);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        
        // Close on click
        const closeLightbox = () => {
            document.body.removeChild(overlay);
            document.body.style.overflow = 'auto';
        };
        
        overlay.addEventListener('click', closeLightbox);
        img.addEventListener('click', closeLightbox);
        
        // Zoom effect
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'translate(-50%, -50%) scale(1.05)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.schedule-card, .event-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-content h1');
//     typeWriter(heroTitle, heroTitle.textContent, 80);
// });

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

console.log('Gereja Muda website loaded successfully! 🚀');
