// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== HEADER BACKGROUND CHANGE ON SCROLL =====
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Change header background based on scroll position
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show header on scroll (optional - uncomment to enable)
        /*
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop;
    });

    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    let mobileMenuOpen = false;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuOpen = !mobileMenuOpen;
            
            if (mobileMenuOpen) {
                // Create mobile menu
                navLinks.style.display = 'flex';
                navLinks.style.position = 'fixed';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.height = '100vh';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.backdropFilter = 'blur(20px)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.justifyContent = 'center';
                navLinks.style.alignItems = 'center';
                navLinks.style.gap = '2rem';
                navLinks.style.zIndex = '999';
                navLinks.style.fontSize = '1.2rem';
                
                // Animate menu in
                navLinks.style.transform = 'translateY(-100%)';
                navLinks.style.transition = 'transform 0.3s ease';
                setTimeout(() => {
                    navLinks.style.transform = 'translateY(0)';
                }, 10);
                
                // Change toggle icon
                mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                // Hide mobile menu
                navLinks.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    navLinks.style.display = 'none';
                    navLinks.style.position = 'static';
                    navLinks.style.flexDirection = 'row';
                    navLinks.style.height = 'auto';
                    navLinks.style.backgroundColor = 'transparent';
                    navLinks.style.backdropFilter = 'none';
                }, 300);
                
                // Change toggle icon back
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuOpen) {
                    mobileMenuToggle.click();
                }
            });
        });
    }

    // ===== DYNAMIC TYPING EFFECT FOR HERO TITLE =====
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        const words = originalText.split('<br>');
        
        // Only apply typing effect on desktop
        if (window.innerWidth > 768) {
            heroTitle.innerHTML = '';
            let wordIndex = 0;
            let charIndex = 0;
            
            function typeWriter() {
                if (wordIndex < words.length) {
                    const currentWord = words[wordIndex];
                    if (charIndex < currentWord.length) {
                        heroTitle.innerHTML += currentWord.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeWriter, 100);
                    } else {
                        if (wordIndex < words.length - 1) {
                            heroTitle.innerHTML += '<br>';
                        }
                        wordIndex++;
                        charIndex = 0;
                        setTimeout(typeWriter, 200);
                    }
                }
            }
            
            // Start typing effect after a delay
            setTimeout(typeWriter, 1000);
        }
    }

    // ===== PARALLAX EFFECT FOR HERO BACKGROUND =====
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // ===== COUNTER ANIMATION FOR STATS =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                let currentNumber = 0;
                
                // Extract number from text (handle cases like "11.5+" or "24/7")
                let numericValue = parseFloat(finalNumber.match(/[\d.]+/)[0]);
                let suffix = finalNumber.replace(/[\d.]+/, '');
                
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= numericValue) {
                        currentNumber = numericValue;
                        clearInterval(timer);
                    }
                    
                    // Format number based on original format
                    let displayNumber = currentNumber.toFixed(finalNumber.includes('.') ? 1 : 0);
                    target.textContent = displayNumber + suffix;
                }, 40);
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ===== FLOATING CARDS INTERACTIVE EFFECT =====
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animationPlayState = 'paused';
            card.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animationPlayState = 'running';
            card.style.transform = '';
        });
    });

    // ===== SKILL TAGS HOVER EFFECT =====
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            tag.style.position = 'relative';
            tag.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===== EXPERIENCE CARDS STAGGER ANIMATION =====
    const experienceItems = document.querySelectorAll('.experience-item');
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                experienceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    experienceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease';
        experienceObserver.observe(item);
    });

    // ===== CONTACT FORM VALIDATION (if form exists) =====
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show success message (in real implementation, you'd send to server)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // ===== UTILITY FUNCTIONS =====
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        `;
        
        // Set background color based on type
        const colors = {
            success: 'linear-gradient(135deg, #10b981, #059669)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            info: 'linear-gradient(135deg, #667eea, #764ba2)'
        };
        notification.style.background = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // ===== THEME TOGGLE (Optional Feature) =====
    function initThemeToggle() {
        const themeToggle = document.querySelector('#theme-toggle');
        if (themeToggle) {
            const currentTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            themeToggle.addEventListener('click', () => {
                const theme = document.documentElement.getAttribute('data-theme');
                const newTheme = theme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Update toggle icon
                const icon = themeToggle.querySelector('i');
                icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            });
        }
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
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

    // Apply debouncing to scroll handlers
    const debouncedScrollHandler = debounce(() => {
        // Any heavy scroll operations go here
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScrollHandler);

    // ===== LAZY LOADING FOR IMAGES =====
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // ===== KEYBOARD NAVIGATION SUPPORT =====
    document.addEventListener('keydown', (e) => {
        // Navigate sections with arrow keys (optional)
        if (e.ctrlKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            const sections = document.querySelectorAll('section[id]');
            const currentSection = getCurrentSection();
            let targetIndex = 0;
            
            sections.forEach((section, index) => {
                if (section.id === currentSection) {
                    if (e.key === 'ArrowDown' && index < sections.length - 1) {
                        targetIndex = index + 1;
                    } else if (e.key === 'ArrowUp' && index > 0) {
                        targetIndex = index - 1;
                    } else {
                        targetIndex = index;
                    }
                }
            });
            
            sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });

    function getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = sections[0].id;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSection = section.id;
            }
        });
        
        return currentSection;
    }

    // ===== INITIALIZE OPTIONAL FEATURES =====
    initThemeToggle();

    // ===== ADD CSS ANIMATIONS DYNAMICALLY =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .notification {
            font-family: 'Inter', sans-serif;
        }
        
        /* Optional dark theme styles */
        [data-theme="dark"] {
            --bg-color: #1a1a1a;
            --text-color: #ffffff;
            --card-bg: #2d2d2d;
        }
        
        [data-theme="dark"] body {
            background-color: var(--bg-color);
            color: var(--text-color);
        }
        
        [data-theme="dark"] .skill-category,
        [data-theme="dark"] .experience-card,
        [data-theme="dark"] .stat-item {
            background-color: var(--card-bg);
            color: var(--text-color);
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 Portfolio website initialized successfully!');
});

// ===== SERVICE WORKER REGISTRATION (Optional for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}