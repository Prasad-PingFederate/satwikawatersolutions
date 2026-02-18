document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Animation on Scroll
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Navigation Toggle (World-Class Clean logic)
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }

                const offsetTop = target.offsetTop - 90;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Ultra-Smooth Entrance Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Apply animation classes to all major components - Updated for Luxury Theme
    document.querySelectorAll('.hero-text, .hero-image, .feature-card, .product-card, .contact-left, .contact-right, .section-head').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });

    // 5. Intelligent Form Submission Handling
    const handleForm = (formId, type = "Sales") => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loader"></span> SUBMITTING...';
            submitBtn.disabled = true;

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));

                const interest = data.interest || data.message || "General Support";
                alert(`Thank you, ${data.name}! Your ${type} request has been received. Our expert will call you shortly.`);
                form.reset();

                const phone = '919912951505';
                const message = encodeURIComponent(`Hi Sathwika Water Solutions, I just submitted a ${type} request. Name: ${data.name}. Topic: ${interest}`);
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

            } catch (error) {
                alert('Connection timed out. Please contact us directly via WhatsApp!');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    };

    handleForm('contactForm', 'Sales');
    handleForm('supportForm', 'Support');

    // 6. Dynamic Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
