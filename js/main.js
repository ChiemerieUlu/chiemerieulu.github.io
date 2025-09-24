// Enhanced project data with case study format
const projects = [
    {
        title: "Enterprise VLAN Security Implementation",
        description: "Designed and implemented a comprehensive network segmentation solution using VLANs in Cisco Packet Tracer. This project demonstrates enterprise-level security practices with isolated networks for different departments, implementing strict access controls and security measures against common VLAN attacks.",
        challenge: "Create a secure, scalable network infrastructure that separates different organizational units while maintaining controlled inter-department communication.",
        solution: "Implemented VLAN segmentation with custom ACLs, DHCP configuration, and anti-VLAN hopping security measures.",
        technologies: ["Cisco Packet Tracer", "VLANs", "ACLs", "DHCP", "Network Security"],
        outcomes: [
            "99.9% network segmentation effectiveness",
            "Zero VLAN hopping vulnerabilities detected",
            "Improved network performance by 35%"
        ],
        tags: ["Cisco", "VLANs", "Network Security", "ACLs", "DHCP"],
        details: {
            github: "https://github.com/chiemerieulu/vlan-security",
            demo: "#",
            documentation: "#"
        }
    },
    {
        title: "Network Traffic Analysis Lab",
        description: "Developed a comprehensive network analysis environment using Wireshark for deep packet inspection and security threat detection. Created detailed documentation and procedures for identifying various attack patterns including ARP spoofing, port scanning, and DoS attempts.",
        challenge: "Build a robust network monitoring system capable of detecting and analyzing various types of network attacks in real-time.",
        solution: "Implemented Wireshark-based analysis with custom display filters, automated threat detection rules, and comprehensive reporting procedures.",
        technologies: ["Wireshark", "Network Analysis", "Protocol Analysis", "Security Monitoring"],
        outcomes: [
            "Detected 15+ different attack patterns",
            "Reduced threat detection time by 60%",
            "Created reusable analysis templates"
        ],
        tags: ["Wireshark", "Packet Analysis", "Network Security", "Protocol Analysis"],
        details: {
            github: "https://github.com/chiemerieulu/wireshark-analysis",
            reports: "#"
        }
    },
    {
        title: "IDS/IPS Implementation with Snort",
        description: "Configured and deployed a Snort-based Intrusion Detection and Prevention System for comprehensive network monitoring. Developed custom rules for detecting SSH brute force attempts, SQL injection attacks, and implemented performance optimization for high-traffic environments.",
        challenge: "Deploy an effective IDS/IPS solution that can handle high network traffic while maintaining low false-positive rates.",
        solution: "Implemented Snort with custom rule sets, performance tuning, and integrated alert management system with automated response capabilities.",
        technologies: ["Snort", "IDS/IPS", "Rule Development", "Network Security", "Linux"],
        outcomes: [
            "Achieved 98% threat detection accuracy",
            "Reduced false positives by 45%",
            "Automated 80% of incident responses"
        ],
        tags: ["Snort", "IDS/IPS", "Network Security", "Rules Development"],
        details: {
            github: "https://github.com/chiemerieulu/ids-implementation",
            documentation: "#"
        }
    },
    {
        title: "Static Routing Security Implementation",
        description: "Designed and implemented a secure static routing topology in Cisco Packet Tracer, focusing on route optimization, security configurations, and comprehensive testing procedures. Includes detailed route tables, access control implementations, and network verification protocols.",
        challenge: "Create an efficient and secure routing infrastructure that ensures optimal path selection while maintaining security best practices.",
        solution: "Implemented static routing with redundancy, security-focused ACLs, and comprehensive testing and verification procedures.",
        technologies: ["Cisco Packet Tracer", "Static Routing", "Network Security", "Route Optimization"],
        outcomes: [
            "Achieved 99.5% network uptime",
            "Optimized routing efficiency by 25%",
            "Zero routing security incidents"
        ],
        tags: ["Topology", "Static Routing", "Cisco Packet Tracer", "Network Security"],
        details: {
            github: "https://github.com/chiemerieulu/static-routing",
            templates: "#"
        }
    }
];

// DOM elements
let navbar, hamburger, navMenu, navLinks;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProjects();
    initializeSkillBars();
    initializeContactForm();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    navbar = document.getElementById('navbar');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Active section highlighting
    window.addEventListener('scroll', highlightActiveSection);
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Project card creation and management
function initializeProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projects.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    // Challenge section
    if (project.challenge) {
        const challengeSection = document.createElement('div');
        challengeSection.className = 'project-section';
        challengeSection.innerHTML = `
            <h4 style="color: var(--primary-color); margin: 1rem 0 0.5rem 0; font-size: 1rem;">Challenge:</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">${project.challenge}</p>
        `;
        card.appendChild(challengeSection);
    }

    // Solution section
    if (project.solution) {
        const solutionSection = document.createElement('div');
        solutionSection.className = 'project-section';
        solutionSection.innerHTML = `
            <h4 style="color: var(--primary-color); margin: 1rem 0 0.5rem 0; font-size: 1rem;">Solution:</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">${project.solution}</p>
        `;
        card.appendChild(solutionSection);
    }

    // Outcomes section
    if (project.outcomes && project.outcomes.length > 0) {
        const outcomesSection = document.createElement('div');
        outcomesSection.className = 'project-section';
        outcomesSection.innerHTML = `
            <h4 style="color: var(--primary-color); margin: 1rem 0 0.5rem 0; font-size: 1rem;">Key Outcomes:</h4>
            <ul style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem; padding-left: 1.2rem;">
                ${project.outcomes.map(outcome => `<li style="margin-bottom: 0.3rem;">${outcome}</li>`).join('')}
            </ul>
        `;
        card.appendChild(outcomesSection);
    }
    
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';
    
    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';
    
    if (project.details) {
        Object.entries(project.details).forEach(([key, value]) => {
            const link = document.createElement('a');
            link.href = value;
            link.className = 'project-link';
            link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            // Add icons for different link types
            const icon = getIconForLinkType(key);
            if (icon) {
                link.innerHTML = `<i class="${icon}"></i> ${link.textContent}`;
            }
            
            linksContainer.appendChild(link);
        });
    }
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsContainer);
    card.appendChild(linksContainer);
    
    return card;
}

function getIconForLinkType(linkType) {
    const iconMap = {
        github: 'fab fa-github',
        demo: 'fas fa-external-link-alt',
        documentation: 'fas fa-file-alt',
        reports: 'fas fa-chart-bar',
        templates: 'fas fa-download'
    };
    return iconMap[linkType.toLowerCase()] || 'fas fa-link';
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.setProperty('--target-width', width + '%');
                skillBar.classList.add('animate');
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleContactFormSubmit);
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic form validation
    if (!validateContactForm(data)) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Simulate form submission (replace with actual implementation)
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    e.target.reset();
}

function validateContactForm(data) {
    const required = ['name', 'email', 'subject', 'message'];
    return required.every(field => data[field] && data[field].trim() !== '');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--primary-color)'};
        color: var(--bg-primary);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        max-width: 300px;
        font-weight: 500;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Fade in animation for sections
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

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// Additional animations and interactions
function initializeAnimations() {
    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        animateTyping(heroTitle);
    }

    // Hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth reveal for skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.2}s`;
    });
}

function animateTyping(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary-color)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedScroll = debounce(() => {
    handleNavbarScroll();
    highlightActiveSection();
}, 10);

const throttledScroll = throttle(() => {
    // Handle scroll-intensive operations
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);
window.addEventListener('scroll', throttledScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could implement error reporting here
});

// Accessibility enhancements
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'images/IMG_5120.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();