// Frontend JavaScript code
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('http://localhost:3000/submit', { // Adjust URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Thank you for contacting us!');
        contactForm.reset(); // Optionally reset the form
      } else {
        alert('There was a problem with your submission.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  });
}
