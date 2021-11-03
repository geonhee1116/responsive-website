'use strict';

//넷바 색상 변경
/*
let // 변하는 상수
const // 변하지 않는 상수
*/

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark'); 
    }
});

//넷바 메뉴 선택시 해당 부분으로 이동하기

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//contact me 버튼 이동하기

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior : 'smooth'});
}

const contactMe = document.querySelector(".home__contact");
contactMe,addEventListener("click", () => {
    scrollIntoView("#contact");
});