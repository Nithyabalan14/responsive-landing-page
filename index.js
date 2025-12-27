// Select all links with hashes
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector('textarea').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent successfully! (Demo only)");
  contactForm.reset();
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
