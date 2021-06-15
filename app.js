const hamburger = document.querySelector('.fa');
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () =>{
    mobileMenu.classList.toggle('hidden')
})
