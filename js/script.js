'use strict'

const burgerMenu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
const menuHeader = document.querySelector('.menu-header');
const topHeader = document.querySelector('.top-header');
const findUsButton = document.querySelectorAll('.buttons-carousel__button')[1];
const findUsBlock = document.querySelector('.map');
const preLoader = document.querySelector('.preloader');
const topArrow = document.querySelector('.top-arrow');
const languageIcon = document.querySelector('.language svg');
const languageList = document.querySelector('.language__list');
const languageItem = document.querySelectorAll('.language__item');
const main = document.querySelector('.main');


window.addEventListener('load', function(event){
    // preLoader.style.top = '-100%';
    preLoader.style.zIndex = '-2';
    preLoader.style.opacity = '0';
})



burgerMenu.addEventListener('click', function(event){
    burgerMenu.classList.toggle('_active');
    menuHeader.classList.toggle('_active');
    topHeader.classList.toggle('_active');
    document.body.classList.toggle('_active');
});


findUsButton.addEventListener('click', function(event){
    findUsBlock.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
    });
});

topArrow.addEventListener('click', function(event){
    wrapper.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
    });
});

window.addEventListener("scroll", () => { 
    if (window.pageYOffset > 100) { 
      topArrow.classList.add("_active"); 
    } else { 
      topArrow.classList.remove("_active"); 
    } 
  });

languageIcon.addEventListener('click', function(event){
    languageList.classList.toggle('_active');

    languageItem.forEach((element) => {
        element.classList.toggle('_active');
    });
    

});


document.addEventListener('click', function(event){
    if(!event.target.closest('.language')){

        languageList.classList.remove('_active');


        languageItem.forEach((element) => {
            element.classList.remove('_active');
        });
    }   
});




//===================== SLIDER ======================//

$(document).ready(function(){
    $('.background-carousel').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true, 
        autoplaySpeed: 3000,
        speed: 2000,
    });
});

//===================== SLIDER ======================//
