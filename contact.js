// Add zoom-in and out effect for images
document.querySelectorAll('.zoom-effect').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});
