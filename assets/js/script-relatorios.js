const imgs = document.querySelectorAll('.img-slide');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
document.getElementById('ano-atual').textContent = anoAtual;

let currentImg =0;

function hideImg(){
    imgs.forEach(item => item.classList.remove('on'))
};

function showImg(){
    imgs[currentImg].classList.add('on')
};

function nextImg(){
    hideImg()
        if(currentImg === imgs.length -1){
            currentImg = 0
        } else {
            currentImg++
        }
        showImg()
};

function prevImg(){
    showImg()
        if(currentImg === 0){
            currentImg = imgs.length -1
        } else {
            currentImg--
        }
        showImg()
};

btnNext.addEventListener('click', nextImg);
btnPrev.addEventListener('click', prevImg)