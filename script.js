const contactForm = document.querySelector('.contact-info');
 
if (contactForm) {
  // Add a status message element under the form if one isn't already there
  let status = document.getElementById('form-status');
  if (!status) {
    status = document.createElement('p');
    status.id = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    contactForm.appendChild(status);
  }
 
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
 
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
 
    if (!email || !message) {
      status.textContent = 'Please fill in both your email and message before sending.';
      status.style.color = '#B5533C';
      return;
    }
 
    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.style.color = '#B5533C';
      return;
    }
 
    // Placeholder success behavior until a real backend/email service is connected
    status.textContent = 'Thanks! Your message is ready to send — connect a service like Formspree or EmailJS to actually deliver it.';
    status.style.color = '#2E5F8A';
    contactForm.reset();
  });
}