// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("osIxGQD6Gn9ZRITxR"); // Your Public Key
})();

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('⚠️ Please fill in all required fields.');
                return;
            }
            
            // Prepare template parameters (budget removed)
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'adegbulesina@gmail.com' // Your email
            };
            
            // Show sending status
            const submitBtn = contactForm.querySelector('.form-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.disabled = true;
            
            // Send email via EmailJS
            emailjs.send(
                'marvel.gmail', // Your Service ID
                'template_qjgr4y5', // Your Template ID
                templateParams
            ).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert(`✅ Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('❌ Oops! Something went wrong. Please try again or email me directly at adegbulesina@gmail.com');
            }).finally(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});