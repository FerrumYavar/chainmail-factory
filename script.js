"use strict"


let burger = document.querySelector(".burger");
let burgerSpan = document.querySelector(".burger span");
let menu = document.querySelector(".menu");

burger.addEventListener('click', () =>{
    burgerSpan.classList.toggle ("active");
    menu.classList.toggle ("animate");
});



let cart = document.querySelector('.cart');
let cartMenu = document.querySelector('.cart_menu');

cart.addEventListener('click', () =>{
    cartMenu.classList.toggle ("cart_animate");
});

let cartCloseBtn = document.querySelector(".cartCloseBtn");

cartCloseBtn.addEventListener('click', () =>{
    cartMenu.classList.toggle ("cart_animate");
});

function toggleClasses(element, eventElem, className){
    element.addEventListener(eventElem, () =>{
        element.classList.toggle(className);
    });
};