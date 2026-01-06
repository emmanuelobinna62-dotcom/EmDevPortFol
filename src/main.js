import './style.css'

  // Get the current year
  const currentYear = new Date().getFullYear();
  // Insert it into the span
  document.getElementById('year').textContent = currentYear;

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-link');
  const icon = hamburger.querySelector('i');
  const links = document.querySelectorAll('.nav-link')

  function toggleMenu () {
    menu.classList.toggle('hidden')

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark')
  }

  function closeMenu () {
    menu.classList.toggle('hidden');

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark')
  }


  links.forEach (link => {
    link.addEventListener ('click', closeMenu)
  } )

  hamburger.addEventListener('click',toggleMenu)


  // Making the form move to whatsapp

  const form = document.getElementById('whatsappForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting normally

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare WhatsApp message
  const whatsappMessage = `New message from website:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Your WhatsApp number with country code (replace 2348120692042 with your number)
  const whatsappURL = `https://wa.me/2348120692042?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank');
});


