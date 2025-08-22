// DOM Elements - Will be initialized after DOM loads
let modal, closeModal, leadForm, contactForm, hamburger, navMenu;
let chatbotToggle, chatbotWindow, chatbotClose, chatbotMessages, chatbotInput, chatbotSend;

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    modal = document.getElementById('leadModal');
    closeModal = document.querySelector('.close');
    leadForm = document.getElementById('leadForm');
    contactForm = document.getElementById('contactForm');
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    chatbotToggle = document.getElementById('chatbotToggle');
    chatbotWindow = document.getElementById('chatbotWindow');
    chatbotClose = document.getElementById('chatbotClose');
    chatbotMessages = document.getElementById('chatbotMessages');
    chatbotInput = document.getElementById('chatbotInput');
    chatbotSend = document.getElementById('chatbotSend');

    // Initialize Lead Capture Modal
    initializeLeadModal();
    
    // Initialize Contact Form
    initializeContactForm();
    
    // Initialize Mobile Navigation
    initializeMobileNav();
    
    // Initialize Smooth Scrolling
    initializeSmoothScrolling();
    
    // Initialize FAQ Tabs
    initializeFAQ();
    
    // Initialize Chatbot
    initializeChatbot();
    
    // Initialize UI Enhancements
    initializeUIEnhancements();
    
    // Initialize Google Maps
    // initializeGoogleMaps(); // Removed - using static map instead
});

// Lead Capture Modal Functions
function initializeLeadModal() {
    if (!modal) {
        console.log('Lead modal not found');
        return;
    }
    
    console.log('Initializing lead modal');
    
    // Show modal after 8 seconds
    setTimeout(() => {
        if (!localStorage.getItem('leadModalShown')) {
            console.log('Showing lead modal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }, 8000);

    // Close modal functionality
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Lead form submission
    if (leadForm) {
        leadForm.addEventListener('submit', handleLeadForm);
    }
}

function closeModalFunc() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('leadModalShown', 'true');
    }
}

function handleLeadForm(e) {
    e.preventDefault();
    const formData = new FormData(leadForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Lead captured:', data);
    
    // Show success message
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.innerHTML = `
            <h2>Thank You!</h2>
            <p>Welcome to Reyval Properties! We'll be in touch with exclusive offers and updates.</p>
            <button class="btn btn-primary" onclick="closeModalFunc()">Get Started</button>
        `;
    }
    
    // Store that modal has been shown
    localStorage.setItem('leadModalShown', 'true');
}

// Contact Form Functions
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Contact form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Mobile Navigation Functions
function initializeMobileNav() {
    if (!hamburger || !navMenu) return;
    
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
}

// Smooth Scrolling Functions
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// FAQ Tab Functions
function initializeFAQ() {
    const faqTabBtns = document.querySelectorAll('.faq-tab-btn');
    const faqContents = document.querySelectorAll('.faq-content');
    
    if (faqTabBtns.length > 0 && faqContents.length > 0) {
        faqTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                faqTabBtns.forEach(b => b.classList.remove('active'));
                faqContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding content
                const targetTab = btn.getAttribute('data-tab');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
}

// Chatbot Functions
function initializeChatbot() {
    if (!chatbotToggle || !chatbotWindow) return;
    
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

    if (chatbotSend && chatbotInput) {
        chatbotSend.addEventListener('click', sendMessage);
        
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Chatbot Responses - Now using Gemini API
let geminiApiKey = 'YOUR_GEMINI_API_KEY'; // Replace with your actual API key

// Chatbot Message Handling
function addMessage(message, isUser = false) {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function getGeminiResponse(userMessage) {
    try {
        // For demo purposes, using a fallback response system
        // In production, you would integrate with Gemini API here
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Enhanced response system with more context
        const message = userMessage.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! I'm your Reyval Properties AI assistant. I can help you with buying, selling, renting properties, property valuations, market insights, and more. How can I assist you today?";
        } else if (message.includes('sell') || message.includes('selling') || message.includes('cash offer')) {
            return "Great! We offer competitive cash offers for properties in any condition. Our process is simple: 1) Free property evaluation, 2) Cash offer within 24-48 hours, 3) Close in as little as 7 days. No repairs needed! Would you like to schedule a free consultation?";
        } else if (message.includes('buy') || message.includes('buying') || message.includes('purchase')) {
            return "Excellent! We have exclusive access to off-market properties and can help you find your dream home. We specialize in Los Angeles and surrounding areas. What's your budget range and preferred location? I can also help with financing options and market analysis.";
        } else if (message.includes('rent') || message.includes('renting') || message.includes('lease')) {
            return "Perfect! We have quality rental properties available throughout Los Angeles. Our rentals include single-family homes, condos, and apartments. What's your preferred location, budget, and move-in timeline? I can also explain our application process.";
        } else if (message.includes('valuation') || message.includes('price') || message.includes('worth')) {
            return "I can help you get a free property valuation! We use comprehensive market data, recent sales, and property analysis to provide accurate estimates. Would you like me to connect you with our valuation team? Just share your property address and basic details.";
        } else if (message.includes('market') || message.includes('trends') || message.includes('prices')) {
            return "Great question! The Los Angeles real estate market is currently experiencing steady growth with strong demand. Property values have increased by approximately 5-8% year-over-year. Would you like a detailed market report for a specific neighborhood?";
        } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('address')) {
            return "You can reach us at:\n📞 Phone: (323) 555-4821\n📧 Email: reyvalproperties@gmail.com\n📍 Office: 4821 Pacific Crest Ave, Los Angeles, CA 90017\n⏰ Hours: Monday-Friday 9AM-6PM, Saturday 10AM-4PM\n\nWould you like me to schedule a call or meeting?";
        } else if (message.includes('financing') || message.includes('loan') || message.includes('mortgage')) {
            return "We work with trusted lenders and can help you find the best financing options. We offer conventional loans, FHA, VA, and jumbo loans. Our team can pre-qualify you and help you understand your options. What type of property are you interested in?";
        } else if (message.includes('investment') || message.includes('roi') || message.includes('return')) {
            return "Investment properties can be excellent opportunities! We specialize in identifying properties with strong rental potential and appreciation prospects. We can analyze cash flow, cap rates, and market trends. What's your investment strategy and timeline?";
        } else {
            // For questions the chatbot can't answer, ask for contact information
            return "That's a great question! To provide you with the most accurate and personalized assistance, I'd recommend speaking directly with our expert team. They can give you detailed information and answer any specific questions you have. Would you like me to connect you with them? Just share your contact details and I'll have someone reach out to you promptly.";
        }
    } catch (error) {
        console.error('Error getting AI response:', error);
        return "I apologize, but I'm experiencing some technical difficulties. Please contact our team directly at (323) 555-4821 or reyvalproperties@gmail.com for immediate assistance.";
    }
}

function sendMessage() {
    if (!chatbotInput || !chatbotMessages) return;
    
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.innerHTML = '<p><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></p>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Get AI response
        getGeminiResponse(message).then(response => {
            // Remove typing indicator
            typingDiv.remove();
            addMessage(response);
        });
    }
}

// Google Maps Functions
function initializeGoogleMaps() {
    // Check if we're on the contact page
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (!mapPlaceholder) return;
    
    // Replace placeholder with actual map
    mapPlaceholder.innerHTML = `
        <div id="map" style="width: 100%; height: 400px; border-radius: 10px;"></div>
    `;
    
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Initialize Google Map (called by Google Maps API)
function initMap() {
    const reyvalLocation = { lat: 34.0522, lng: -118.2437 }; // Los Angeles coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: reyvalLocation,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });
    
    // Add marker for Reyval Properties
    const marker = new google.maps.Marker({
        position: reyvalLocation,
        map: map,
        title: 'Reyval Properties',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        }
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 5px 0; color: #d43c41;">Reyval Properties</h3>
                <p style="margin: 0 0 5px 0;">4821 Pacific Crest Ave</p>
                <p style="margin: 0 0 5px 0;">Los Angeles, CA 90017</p>
                <p style="margin: 0;"><strong>Phone:</strong> (323) 555-4821</p>
            </div>
        `
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// UI Enhancement Functions
function initializeUIEnhancements() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = 'var(--white)';
                navbar.style.backdropFilter = 'none';
            }
        }
    });

    // Intersection Observer for animations
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
    const animateElements = document.querySelectorAll('.service-card, .property-card, .review-card, .about-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') {
                this.style.opacity = '0.7';
                this.disabled = true;
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.disabled = false;
                }, 2000);
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .property-card, .review-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Accessibility improvements
    document.addEventListener('keydown', (e) => {
        // Escape key closes modals
        if (e.key === 'Escape') {
            if (modal && modal.style.display === 'block') {
                closeModalFunc();
            }
            if (chatbotWindow && chatbotWindow.classList.contains('active')) {
                chatbotWindow.classList.remove('active');
            }
        }
    });
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--bright-red)';
        } else {
            input.style.borderColor = 'var(--cream)';
        }
    });
    
    return isValid;
}

// Utility Functions
function searchProperties(type, filters = {}) {
    console.log(`Searching for ${type} properties with filters:`, filters);
    // This would typically connect to a backend API
    return [];
}

function signupNewsletter(email) {
    console.log('Newsletter signup:', email);
    // This would typically connect to a backend API
    return true;
}

function calculatePropertyValue(propertyDetails) {
    console.log('Calculating property value:', propertyDetails);
    // This would typically use property data and algorithms
    return {
        estimatedValue: '$500,000',
        confidence: '85%',
        factors: ['Location', 'Size', 'Condition', 'Property Value']
    };
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Test function to reset lead modal (for testing purposes)
function resetLeadModal() {
    localStorage.removeItem('leadModalShown');
    console.log('Lead modal reset - will show on next page load');
}
