// Quote Carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.quote-nav.prev');
    const nextBtn = document.querySelector('.quote-nav.next');
    
    if (!slides.length || !dots.length) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Function to show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Next slide function
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= totalSlides) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Previous slide function
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = totalSlides - 1;
        }
        showSlide(prevIndex);
    }
    
    // Event listeners for navigation arrows
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-rotate quotes every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-rotation when hovering over quotes
    const quoteSection = document.querySelector('.quote-content');
    if (quoteSection) {
        quoteSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        quoteSection.addEventListener('mouseleave', () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            clearInterval(slideInterval);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            clearInterval(slideInterval);
        }
    });
});