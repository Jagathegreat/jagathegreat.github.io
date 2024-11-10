// Smooth scroll to sections on clicking navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add more interactivity as needed

// Example: Dynamic content or form validation
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to demonstrate an example
    alert("Thank you for contacting me! I will get back to you soon.");
});
