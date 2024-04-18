let abMenu = document.getElementById('ab-menu');
let Menu = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');

abMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrir-menu')
});

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
});

overlayMenu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
});