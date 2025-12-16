// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    
    // Get all images with the lightbox-trigger class
    const galleryImages = document.querySelectorAll('.lightbox-trigger');
    
    // Open lightbox when an image is clicked
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxCaption.innerHTML = this.alt;
        });
    });
    
    // Close lightbox when the close button is clicked
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});
