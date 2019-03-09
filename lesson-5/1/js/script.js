let menuBox = document.querySelector('nav .menu'),
    menuBtns = document.getElementsByClassName('menu-item'),
    menuBtn = document.createElement('li'),
    text = document.createTextNode('Пятый пункт');
    
    let menuBtnNew = menuBtns[1];
    
    menuBox.replaceChild(menuBtns[2], menuBtns[1]);
    menuBox.insertBefore(menuBtnNew, menuBtns[2]);
    menuBtn.classList.add('menu-item');
    menuBtn.appendChild(text);
    menuBox.appendChild(menuBtn);

    document.body.style.backgroundImage = "url(\'./img/apple_true.jpg\')";

let header = document.querySelector(".title");
header.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
// promo.parentNode.removeChild(promo);
adv.parentNode.removeChild(adv);

let promo = document.querySelector('.prompt');
let answer = prompt("Как вы относитесь к технике Apple?");
promo.textContent = answer;


