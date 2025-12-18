// ========================================
// MODERN ARABIC PLATFORM - SIMPLE JS
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // === Language Switcher ===
    const langButtons = document.querySelectorAll('.btn-lang');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Get selected language
            const lang = this.textContent.includes('العربية') || this.textContent === 'AR' ? 'ar' : 'fr';
            console.log('Language switched to:', lang);

            // Simple visual feedback
            this.style.fontWeight = '700';
            setTimeout(() => {
                this.style.fontWeight = 'normal';
            }, 200);
        });
    });

    // === Simple Navbar Scroll Effect ===
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // === Console Welcome Message ===
    console.log('🌟 المنصة الرقمية للمشاريع');
});
