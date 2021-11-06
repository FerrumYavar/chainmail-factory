"use strict"

let instagram = document.querySelector(".instagram");

toggleClasses(instagram, "mouseover", 'instagramActive');
toggleClasses(instagram, "mouseout", 'instagramActive');


let burger = document.querySelector(".burger");
let burgerSpan = document.querySelector(".burger span");
let menu = document.querySelector(".menu");

burger.addEventListener('click', () =>{
    burgerSpan.classList.toggle ("active");
    menu.classList.toggle ("animate");
});


let inCart = document.querySelectorAll(".add_to_cart");

inCart.forEach((item) =>{
    toggleClasses(item, "mouseover", 'add_to_cart_active');
    toggleClasses(item, "mouseout", 'add_to_cart_active');
});


let cart = document.querySelector('.cart');
let cartMenu = document.querySelector('.cart_menu');

cart.addEventListener('click', () =>{
    cartMenu.classList.toggle ("cart_animate");
});


function toggleClasses(element, eventElem, className){
    element.addEventListener(eventElem, () =>{
        element.classList.toggle(className);
    });
};


// let content = document.querySelector(".content");
// let brasBtn = document.querySelector(".braslets");
// let footer = document.querySelector("footer");

// brasBtn.addEventListener("click", () =>{
//     content.remove();

//     footer.insertAdjacentHTML("beforebegin", `
//     <h1 class="brasH1">
//         Браслеты
//     </h1>


//     <div class="content">
//         <div class="wrapElement">
//             <img src="img/1.png" class="imgElement">
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Название:</td>
//                         <td class="title">"Хребет дракона"</td>
//                     </tr>
//                     <tr>
//                         <td>Материал:</td>
//                         <td>нержавеющая сталь</td>
//                     </tr>
//                     <tr>
//                         <td>Длина:</td>
//                         <td>подбирается индивидуально</td>
//                     </tr>
//                 </tbody>
//             </table>

//             <div class="priceAndDelivery">
//                 <span class="price">50</span>
//                 <span class="priceCurrency">BYN</span>
//                 <div class="add_to_cart">В корзину</div>
//             </div>
//         </div>
   

//         <div class="wrapElement">
//             <img src="img/3.png" class="imgElement">
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Название:</td>
//                         <td class="title">"Анаконда"</td>
//                     </tr>
//                     <tr>
//                         <td>Материал:</td>
//                         <td>нержавеющая сталь</td>
//                     </tr>
//                     <tr>
//                         <td>Длина:</td>
//                         <td>23 см</td>
//                     </tr>
//                 </tbody>
//             </table>

//             <div class="priceAndDelivery">
//                 <span class="price">50</span>
//                 <span class="priceCurrency">BYN</span>
//                 <div class="add_to_cart">В корзину</div>
//             </div>
//         </div>


//         <div class="wrapElement">
//             <img src="img/4.png" class="imgElement">
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Название:</td>
//                         <td class="title">"Сталь севера"</td>
//                     </tr>
//                     <tr>
//                         <td>Материал:</td>
//                         <td>нержавеющая сталь</td>
//                     </tr>
//                     <tr>
//                         <td>Длина:</td>
//                         <td>21 см</td>
//                     </tr>
//                 </tbody>
//             </table>
            
//             <div class="priceAndDelivery">
//                 <span class="price">50</span>
//                 <span class="priceCurrency">BYN</span>
//                 <div class="add_to_cart">В корзину</div>
//             </div>
//         </div>
//     </div>`);

// });
