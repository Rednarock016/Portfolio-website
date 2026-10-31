// Google Analytics: replace G-XXXXXXXXXX with your Measurement ID to enable tracking.
const analyticsId = 'G-XXXXXXXXXX';
if (/^G-[A-Z0-9]+$/.test(analyticsId) && analyticsId !== 'G-XXXXXXXXXX') {
    const analyticsScript = document.createElement('script');
    analyticsScript.async = true;
    analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(analyticsScript);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', analyticsId);
}

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

// Preloader
window.addEventListener('load', () => {
if (window.AOS) AOS.refreshHard();
const preloader = document.getElementById('preloader');
    if(preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Theme Toggle Logic
const themeCheckbox = document.getElementById('theme-checkbox');
        
// Determine saved theme or default
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Back to Top Button visibility
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});