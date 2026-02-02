// Cookie Bar functionality
function showCookieBar() {
    const cookieBar = document.getElementById('cookieBar');
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        setTimeout(() => {
            cookieBar.classList.add('show');
        }, 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBar').classList.remove('show');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieBar').classList.remove('show');
}

// Show cookie bar on page load
window.addEventListener('load', showCookieBar);
