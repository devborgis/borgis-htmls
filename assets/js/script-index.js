let abMenu = document.getElementById('ab-menu');
let Menu = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');
let rlsBorgis = document.getElementById('rlsBorgis');

abMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrir-menu')
});

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
});

overlayMenu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
});

rlsBorgis.addEventListener('click', () => {
    window.location.href = 'https://borgis.com.br/htmls/relatorios.html';
});