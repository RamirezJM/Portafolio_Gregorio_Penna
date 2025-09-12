const menuButton = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('nav')

menuButton.addEventListener('click', () => {
  const isActive = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isActive))
  navMenu.classList.toggle('active')
})


window.addEventListener('load', () => { 
  baguetteBox.run('.gallery', {
    buttons: true
  })
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const calendar = document.getElementById('calendar')

const fecha = new Date()
const options = {
  year: 'numeric',
  month: 'long'
}
const nuevafecha = fecha.toLocaleDateString('es-CL', options)

const anno = fecha.getFullYear()
const month = (fecha.getMonth()+1).toString().padStart(2, '0')
 calendar.innerText = nuevafecha
 calendar.setAttribute('datetime', `${month}-${anno}`)