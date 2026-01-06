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


