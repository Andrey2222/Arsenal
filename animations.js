// Dynamic Animation System for Site Blocks
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only animate once
                if (!entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    
                    // Add specific animation classes based on data attributes
                    const animationType = entry.target.dataset.animation;
                    if (animationType) {
                        entry.target.classList.add(animationType);
                    }
                    
                    // Add staggered delays for child elements
                    const staggerChildren = entry.target.querySelectorAll('[data-stagger]');
                    staggerChildren.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.15}s`;
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Auto-add animation classes to main sections with smooth fade-in and slide-up
    const sections = document.querySelectorAll('section, .hero, .products, .about, .contact, .downloads');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        section.dataset.animation = 'fade-in-up'; // Smooth fade-in and slide-up for all sections
        
        // Set initial state for smooth animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
    });

    // Add staggered animations to grid items with enhanced timing
    const gridItems = document.querySelectorAll('.product-card, .download-item');
    gridItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.dataset.animation = 'fade-in-up';
        item.dataset.stagger = index;
        
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
    });

    // Add slide animations to contact forms
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');
    
    if (contactForm) {
        contactForm.classList.add('animate-on-scroll');
        contactForm.dataset.animation = 'slide-left';
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateX(-50px)';
    }
    
    if (contactInfo) {
        contactInfo.classList.add('animate-on-scroll');
        contactInfo.dataset.animation = 'slide-right';
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateX(50px)';
    }

    // Add scale animation to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('animate-on-scroll');
        title.dataset.animation = 'scale-in';
        title.style.opacity = '0';
        title.style.transform = 'scale(0.9)';
    });

    // Add bounce animation to hero elements with enhanced timing
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-text, .hero-images');
    heroElements.forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.dataset.animation = 'bounce-in';
        element.dataset.stagger = index;
        
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
    });

    // Enhanced hover effects with smooth transitions
    const interactiveElements = document.querySelectorAll('.product-card, .download-item, .contact-form, .contact-info, .image-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Smooth parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.3; // Smoother parallax
                    hero.style.transform = `translateY(${rate}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Smooth reveal for text elements with enhanced timing
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
        if (!element.closest('.hero')) { // Skip hero elements as they have their own animations
            element.classList.add('animate-on-scroll');
            element.dataset.animation = 'fade-in-up';
            element.dataset.stagger = index % 8; // Cycle through stagger delays
            
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });

    // Loading state animations
    function addLoadingState(element) {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.remove('loading');
        }, 2000);
    }

    // Trigger loading animation on page load
    window.addEventListener('load', () => {
        const mainContent = document.querySelector('.container');
        if (mainContent) {
            addLoadingState(mainContent);
        }
    });

    // Performance optimization: pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.style.animationPlayState = 'paused';
        } else {
            document.body.style.animationPlayState = 'running';
        }
    });

    // Add entrance animation to navigation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.animation = 'slideDown 0.8s ease-out';
    }

    // Add entrance animation to footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.classList.add('animate-on-scroll');
        footer.dataset.animation = 'fade-in-up';
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
    }

    // Console log for debugging
    console.log('🎭 Enhanced Dynamic Animation System Loaded!');
    console.log('📱 Smooth fade-in and slide-up effects active');
    console.log('✨ Each section animates only once when in view');
    console.log('⏱️ Enhanced staggered timing for better flow');
});

// Utility function to manually trigger animations
function triggerAnimation(element, animationType = 'fade-in-up') {
    element.classList.remove('animated');
    element.dataset.animation = animationType;
    
    // Force reflow
    element.offsetHeight;
    
    element.classList.add('animated');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { triggerAnimation };
}
