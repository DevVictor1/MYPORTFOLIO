document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    if (isOpen) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        hamburgerIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});
});


