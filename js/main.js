// Burger Event
const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelector('.navbar')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')  
    menuItems.classList.toggle('max-height');
})
