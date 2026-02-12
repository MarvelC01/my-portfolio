// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("osIxGQD6Gn9ZRITxR"); // 🔁 Replace with your actual Public Key
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
            const budget = document.getElementById('budget')?.value || 'Not specified';
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('⚠️ Please fill in all required fields.');
                return;
            }
            
            // Prepare template parameters (match your EmailJS template variables)
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                budget: budget,
                to_email: 'adegbulesina@gmail.com' // Your email
            };
            
            // Show sending status
            const submitBtn = contactForm.querySelector('.form-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.disabled = true;
            
            // Send email via EmailJS
            emailjs.send(
                'marvel.gmail', // 🔁 Replace with your Service ID
                'template_qjgr4y5', // 🔁 Replace with your Template ID
                templateParams
            ).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert(`✅ Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('❌ Oops! Something went wrong. Please try again or email me directly at adegbuletimilehin@gmail.com');
            }).finally(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});