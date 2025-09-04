// Language management
let currentLanguage = 'en';

// Language translations
const translations = {
    en: {
        // Navigation
        'Main': 'Main',
        'Products': 'Products',
        'About': 'About',
        'Contact': 'Contact',
        'Downloads': 'Downloads',
        
        // Hero section
        'Liability • Efficiency • Management': 'Liability • Efficiency • Management',
        'An Innovative company in worldwide trading and service providing': 'An Innovative company in worldwide trading and service providing',
        'We are an Innovative worldwide trade and service providing company operating with global sales and services network to deliver maximum value to all our customers.': 'We are an Innovative worldwide trade and service providing company operating with global sales and services network to deliver maximum value to all our customers.',
        'A high level of expertise allows us to offer our customers a wide range of industrial minerals and fertilizers. We believe that Innovation should drive business results. In today\'s fast-paced and increasingly competitive marketplace our Innovative company is continually finding new ways to add value to our customers and make them benefit from our experience combined with new ideas.': 'A high level of expertise allows us to offer our customers a wide range of industrial minerals and fertilizers. We believe that Innovation should drive business results. In today\'s fast-paced and increasingly competitive marketplace our Innovative company is continually finding new ways to add value to our customers and make them benefit from our experience combined with new ideas.',
        'We are committed to achieve our customers requirements and work together for constant improvement. We deliver high-quality and competitively priced products to our customers in time.': 'We are committed to achieve our customers requirements and work together for constant improvement. We deliver high-quality and competitively priced products to our customers in time.',
        'Industrial': 'Industrial',
        'Office': 'Office',
        
        // Products section
        'Minerals': 'Minerals',
        'We offer a comprehensive range of minerals including Ukrainian origin and African collective concentrate processed in China:': 'We offer a comprehensive range of minerals including Ukrainian origin and African collective concentrate processed in China:',
        'Ilmenite concentrate': 'Ilmenite concentrate',
        'Rutile sand': 'Rutile sand',
        'Zircon sand': 'Zircon sand',
        'Kyanite-sillimanite sand': 'Kyanite-sillimanite sand',
        'Learn More': 'Learn More',
        
        // About section
        'Liability Efficiency Management CORE': 'Liability Efficiency Management CORE',
        'Our main priorities - Liability, Efficiency and Management, are at the very CORE of our operation activity and the name of our company.': 'Our main priorities - Liability, Efficiency and Management, are at the very CORE of our operation activity and the name of our company.',
        'Arsenal Minerals is based in the heart of Europe, in the Netherlands, the place which has been an unchangeable world trade center since ancient times. Concentrated on the prompt delivery with a quality control, our company performs the role of the bridge between suppliers and customers, by assuming all issues regarding languages, standards and time zones. We are connecting right customers with right goods.': 'Arsenal Minerals is based in the heart of Europe, in the Netherlands, the place which has been an unchangeable world trade center since ancient times. Concentrated on the prompt delivery with a quality control, our company performs the role of the bridge between suppliers and customers, by assuming all issues regarding languages, standards and time zones. We are connecting right customers with right goods.',
        'Arsenal Minerals is a performance-oriented company that strives for continuous improvement. We see ourselves as being cosmopolitan, which in turn implies a cross-cultural attitude, tolerance, as well as a decent and respectful demeanor.': 'Arsenal Minerals is a performance-oriented company that strives for continuous improvement. We see ourselves as being cosmopolitan, which in turn implies a cross-cultural attitude, tolerance, as well as a decent and respectful demeanor.',
        
        // Contact section
        'Feel free to contact us. We are ready to respond your requests 24/7': 'Feel free to contact us. We are ready to respond your requests 24/7',
        'Name': 'Name',
        'Email': 'Email',
        'Message': 'Message',
        'Send Request': 'Send Request',
        
        // Downloads section
        'Product Catalog for Zircon Materials': 'Product Catalog for Zircon Materials',
        'Product Catalog for Rutile, Fluorspar and Kyanite-Sillimanite Material': 'Product Catalog for Rutile, Fluorspar and Kyanite-Sillimanite Material',
        'Download PDF': 'Download PDF',
        
        // Footer
        '&copy; 2025 Copyright by Arsenal Minerals Limited | All rights reserved.': '&copy; 2025 Copyright by Arsenal Minerals Limited | All rights reserved.',
        
        // Notifications
        'Please fill in all fields': 'Please fill in all fields',
        'Please enter a valid email address': 'Please enter a valid email address',
        'Thank you! Your message has been sent successfully.': 'Thank you! Your message has been sent successfully.'
    },
    sk: {
        // Navigation
        'Main': 'Hlavná',
        'Products': 'Produkty',
        'About': 'O nás',
        'Contact': 'Kontakt',
        'Downloads': 'Súbory na stiahnutie',
        
        // Hero section
        'Liability • Efficiency • Management': 'Zodpovednosť • Efektívnosť • Manažment',
        'An Innovative company in worldwide trading and service providing': 'Inovatívna spoločnosť v celosvetovom obchode a poskytovaní služieb',
        'We are an Innovative worldwide trade and service providing company operating with global sales and services network to deliver maximum value to all our customers.': 'Sme inovatívna celosvetová obchodná a servisná spoločnosť pôsobiaca s globálnou predajnou a servisnou sieťou na dodanie maximálnej hodnoty všetkým našim zákazníkom.',
        'A high level of expertise allows us to offer our customers a wide range of industrial minerals and fertilizers. We believe that Innovation should drive business results. In today\'s fast-paced and increasingly competitive marketplace our Innovative company is continually finding new ways to add value to our customers and make them benefit from our experience combined with new ideas.': 'Vysoká úroveň odbornosti nám umožňuje ponúkať našim zákazníkom širokú škálu priemyselných minerálov a hnojív. Veríme, že inovácie by mali poháňať obchodné výsledky. V dnešnom rýchlom a čoraz konkurenčnejšom trhu naša inovatívna spoločnosť neustále hľadá nové spôsoby, ako pridať hodnotu našim zákazníkom a priniesť im úžitok z našej skúsenosti kombinovanej s novými nápadmi.',
        'We are committed to achieve our customers requirements and work together for constant improvement. We deliver high-quality and competitively priced products to our customers in time.': 'Zaviazali sme sa splniť požiadavky našich zákazníkov a spolupracovať na neustálom zlepšovaní. Dodávame našim zákazníkom kvalitné a cenovo konkurencieschopné produkty včas.',
        'Industrial': 'Priemyselné',
        'Office': 'Kancelária',
        
        // Products section
        'Minerals': 'Minerály',
        'We offer a comprehensive range of minerals including Ukrainian origin and African collective concentrate processed in China:': 'Ponúkame komplexnú škálu minerálov vrátane ukrajinského pôvodu a afrického kolektívneho koncentrátu spracovaného v Číne:',
        'Ilmenite concentrate': 'Ilmenitový koncentrát',
        'Rutile sand': 'Rutilový piesok',
        'Zircon sand': 'Zirkónový piesok',
        'Kyanite-sillimanite sand': 'Kyanit-sillimanitový piesok',
        'Learn More': 'Viac informácií',
        
        // About section
        'Liability Efficiency Management CORE': 'Zodpovednosť Efektívnosť Manažment JADRO',
        'Our main priorities - Liability, Efficiency and Management, are at the very CORE of our operation activity and the name of our company.': 'Naše hlavné priority - Zodpovednosť, Efektívnosť a Manažment, sú v samom JADRE našej operatívnej činnosti a názvu našej spoločnosti.',
        'Arsenal Minerals is based in the heart of Europe, in the Netherlands, the place which has been an unchangeable world trade center since ancient times. Concentrated on the prompt delivery with a quality control, our company performs the role of the bridge between suppliers and customers, by assuming all issues regarding languages, standards and time zones. We are connecting right customers with right goods.': 'Arsenal Minerals má sídlo v srdci Európy, v Holandsku, na mieste, ktoré je od staroveku nezmeniteľným svetovým obchodným centrom. Sústredení na rýchle dodanie s kontrolou kvality, naša spoločnosť plní úlohu mosta medzi dodávateľmi a zákazníkmi, pričom prevzala všetky otázky týkajúce sa jazykov, noriem a časových pásiem. Spájame správnych zákazníkov so správnym tovarom.',
        'Arsenal Minerals is a performance-oriented company that strives for continuous improvement. We see ourselves as being cosmopolitan, which in turn implies a cross-cultural attitude, tolerance, as well as a decent and respectful demeanor.': 'Arsenal Minerals je výkonovo orientovaná spoločnosť, ktorá sa snaží o neustále zlepšovanie. Vidíme sa ako kozmopolitní, čo zase znamená medzikultúrny prístup, toleranciu, ako aj slušné a rešpektujúce správanie.',
        
        // Contact section
        'Feel free to contact us. We are ready to respond your requests 24/7': 'Neváhajte nás kontaktovať. Sme pripravení odpovedať na vaše požiadavky 24/7',
        'Name': 'Meno',
        'Email': 'Email',
        'Message': 'Správa',
        'Send Request': 'Odoslať požiadavku',
        
        // Downloads section
        'Product Catalog for Zircon Materials': 'Katalóg produktov pre zirkónové materiály',
        'Product Catalog for Rutile, Fluorspar and Kyanite-Sillimanite Material': 'Katalóg produktov pre rutil, fluorspar a kyanit-sillimanitový materiál',
        'Download PDF': 'Stiahnuť PDF',
        
        // Footer
        '&copy; 2025 Copyright by Arsenal Minerals Limited | All rights reserved.': '&copy; 2025 Copyright by Arsenal Minerals Limited | Všetky práva vyhradené.',
        
        // Notifications
        'Please fill in all fields': 'Prosím vyplňte všetky polia',
        'Please enter a valid email address': 'Prosím zadajte platnú emailovú adresu',
        'Thank you! Your message has been sent successfully.': 'Ďakujeme! Vaša správa bola úspešne odoslaná.'
    }
};

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const title = document.querySelector('title');
    if (title && title.getAttribute(`data-${lang}`)) {
        title.textContent = title.getAttribute(`data-${lang}`);
    }
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en], [data-sk]').forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language selector text
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.innerHTML = `${lang.toUpperCase()} <i class="fas fa-chevron-down"></i>`;
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update form validation messages
    updateFormValidationMessages(lang);
}

// Update form validation messages
function updateFormValidationMessages(lang) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    
    if (nameInput) {
        nameInput.setAttribute('placeholder', translations[lang]['Name']);
    }
    if (emailInput) {
        emailInput.setAttribute('placeholder', translations[lang]['Email']);
    }
    if (messageTextarea) {
        messageTextarea.setAttribute('placeholder', translations[lang]['Message']);
    }
}

// Initialize language system
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            currentLanguage = browserLang;
        }
    }
    
    // Apply initial language
    switchLanguage(currentLanguage);
    
    // Add event listeners for language switching
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            if (translations[lang]) {
                switchLanguage(lang);
            }
        });
    });
}

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Navigation functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification(translations[currentLanguage]['Please fill in all fields'], 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification(translations[currentLanguage]['Please enter a valid email address'], 'error');
            return;
        }
        
        // Simulate form submission
        showNotification(translations[currentLanguage]['Thank you! Your message has been sent successfully.'], 'success');
        
        // Reset form
        this.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add intersection observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .about-content, .contact-form, .contact-info, .download-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Add keyboard support for navigation
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Tab key navigation
    if (e.key === 'Tab') {
        // Handle focus management for accessibility
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Add touch feedback for mobile devices
if ('ontouchstart' in window) {
    const touchElements = document.querySelectorAll('.btn, .nav-link, .product-card, .download-item');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = '';
        });
    });
}

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        // Handle scroll-based animations if needed
    }, 16); // ~60fps
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeMineralButton();
});

// Mineral button functionality
function initializeMineralButton() {
    const mineralBtns = document.querySelectorAll('.mineral-btn');
    
    mineralBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Find the description within the same list item
            const listItem = this.closest('.mineral-dropdown');
            const description = listItem.querySelector('.mineral-description');
            
            if (description) {
                const isVisible = description.style.display !== 'none';
                
                // Hide all descriptions first
                document.querySelectorAll('.mineral-description').forEach(desc => {
                    desc.style.display = 'none';
                });
                
                // Remove active class from all buttons
                mineralBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                if (!isVisible) {
                    // Show description and activate button
                    description.style.display = 'block';
                    this.classList.add('active');
                }
            }
        });
    });
}

// Console welcome message
console.log('🚀 Welcome to Arsenal Minerals s.r.o.!');
console.log('💼 Professional industrial minerals and fertilizers trading company');
console.log('🌍 Global reach with local expertise');
console.log('📧 Contact us at sales@arsenalmin.com or finance@arsenalmin.com');
console.log('📞 Call us at +421951914231');
console.log('📍 Located in Bratislava, Slovakia');

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);
