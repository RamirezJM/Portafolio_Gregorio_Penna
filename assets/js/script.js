
/*======== MENU TOGGLE =======*/

const menuButton = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('nav')

menuButton.addEventListener('click', () => {
  const isActive = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isActive))
  navMenu.classList.toggle('active')
})

/*======== LIGHTBOX =======*/

window.addEventListener('load', () => { 
  baguetteBox.run('.gallery', {
    buttons: true
  })
});

/*======== SLIDER =======*/

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/*======== CURRENT DATE =======*/

const calendar = document.getElementById('calendar')

const fecha = new Date()
const options = {
  year: 'numeric',
  month: 'long'
}
const nuevafecha = fecha.toLocaleDateString('es-CL', options)

const anno = fecha.getFullYear()
const month = (fecha.getMonth()+1).toString().padStart(2, '0')
 calendar.innerText = nuevafecha.at(0).toUpperCase() + nuevafecha.slice(1)
 calendar.setAttribute('datetime', `${month}-${anno}`)