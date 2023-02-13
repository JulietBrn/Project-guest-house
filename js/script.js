window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-list_active');
        })
    })
})