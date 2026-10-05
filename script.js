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
 
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    status.textContent = 'Sending...';
    status.style.color = '#2E5F8A';

    try {
        const response = await fetch('https://formspree.io/f/xljgevwz', {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.textContent = 'Thanks! Your message has been sent.';
            status.style.color = '#1a7f4b';
            contactForm.reset();
        } else {
            status.textContent = 'Something went wrong. Please try again.';
            status.style.color = '#c0392b';
        }
    } catch (error) {
        status.textContent = 'Network error. Please try again later.';
        status.style.color = '#c0392b';
    }
});
}