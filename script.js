"use strict"

// Add product to cart / delete product from cart

let cartWindow = document.querySelector(".cart_menu");
let cartProductsList = document.querySelector(".cart_list");
let fullPrice = document.querySelector(".total_price");
let price = 0;
let product = document.querySelectorAll(".wrapElement");
let cartQuantiti = document.querySelector(".cart_quantiti");

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const plusFullPrice = (currentPrice) => {
    return price += +currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= +currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${price} BYN`;
};


product.forEach((el) =>{
    el.setAttribute("data-id", randomId());
});

const printQuantiti = () => {
    let prodLength = cartProductsList.children.length;
    cartQuantiti.textContent = prodLength;
};

function generteCartProduct(img, title, price, id) {
    return `
        <div class="cart_list_pos" data-id="${id}">
            <div class = "1">
                <img src="${img}" class="CartImgElement">
                <div class="cart_pos_counter">
                    <div class="cart_pos_counter_value">
                        1
                    </div>
                </div>
            </div>
            
            <div class = "2">
                <div class="pos_name">
                    ${title}
                </div>
                <div class="cart_list_price">
                    <span class="cartElemPrice">${price}</span>
                    <span class="cart_priceCurrency">BYN</span>
                </div>
            </div>

            <div class="del_pos", "delBtn">
                <img src="img/pngegg.png" alt="Удалить" class="delBtn">
            </div>
        </div>
    `;
};

const deleteProduct = (productParent) => {
    let id = cartWindow.querySelector(".cart_list_pos").dataset.id;
    let totalPrice = productParent.querySelector(".cartElemPrice").textContent;
    minusFullPrice(totalPrice);
    printFullPrice();
    productParent.remove();
    printQuantiti();


};

function addToCartBtn() {
    let addCartBtn = document.querySelectorAll(".add_to_cart");

    addCartBtn.forEach((el) =>{
        el.addEventListener("click", (e) =>{
            let self = e.currentTarget;
            let parent = self.closest(".priceAndDelivery").closest(".wrapElement");
            let id = parent.dataset.id;
            let img = parent.querySelector(".imgElement").getAttribute("src");
            let title = parent.querySelector(".title").textContent;
            let prodClass = parent.closest(".content").closest("body").querySelector(".brasH1").textContent;
            let prodPrice = self.closest(".priceAndDelivery").querySelector(".price").textContent;

            plusFullPrice(prodPrice);
            printFullPrice();
            cartProductsList.insertAdjacentHTML("afterbegin", generteCartProduct(img, title, prodPrice, id));
            printQuantiti();
        });
    });
};


cartProductsList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delBtn")){
        deleteProduct(e.target.closest(".cart_list_pos"));
    }
});


// burger-menu

let burger = document.querySelector(".burger");
let burgerSpan = document.querySelector(".burger span");
let menu = document.querySelector(".menu");

function showMenu() {
    burgerSpan.classList.toggle ("active");
    menu.classList.toggle ("animate");
};

burger.addEventListener('click', () =>{
    showMenu();
});


// Cart-menu

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

// Карточки товаров

const content = document.querySelector(".content")

class SideName {
    constructor(name, className) {
        this.name = name;
        this.className = className;
    }

    render() {
        const elem = document.createElement("div");
        elem.innerHTML = `
            <h1 class=${this.className}>
                ${this.name}
            </h1>
        `
        content.append(elem);
    }
}

class ProductCard {
    constructor(src, name, material, size, price) {
        this.src = src;
        this.name = name;
        this.material = material;
        this.size = size;
        this.price = price; 
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="wrapElement">
                <img src=${this.src} class="imgElement">
                <table>
                    <tbody>
                        <tr>
                            <td>Название:</td>
                            <td class="title">${this.name}</td>
                        </tr>
                        <tr>
                            <td>Материал:</td>
                            <td>${this.material}</td>
                        </tr>
                        <tr>
                            <td>Длина:</td>
                            <td>${this.size}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="priceAndDelivery">
                    <span class="price">${this.price}</span>
                    <span class="priceCurrency">BYN</span>
                    <div class="add_to_cart">В корзину</div>
                </div>
            </div>
        `;
        content.append(element);
    }
}

function clearingContent() {
    content.innerHTML = "";
};

// Braslets

function createBrasletsProductCards() {
    new SideName("Браслеты", "brasH1").render();

    new ProductCard(
        "img/1.png",
        "Хребет дракона",
        "нержавеющая сталь",
        "подбирается индивидуально",
        50
    ).render();
    
    new ProductCard(
        "img/3.png",
        "Анаконда",
        "нержавеющая сталь",
        "23 см",
        50
    ).render();
    
    new ProductCard(
        "img/4.png",
        "Сталь севера",
        "нержавеющая сталь",
        "21 см",
        50
    ).render();
}


document.querySelector(".braslets").addEventListener("click", () => {
    showMenu();
    clearingContent();
    createBrasletsProductCards();
    addToCartBtn();
});

// Earrings

function createEarringProductCards() {
    new SideName("Серьги", "brasH1").render();

    new ProductCard(
        "img/bQOzey9X08Q.jpg",
        "Небесный поток",
        "нержавеющая сталь",
        "4 см",
        20
    ).render();

    new ProductCard(
        "img/kxRANRt5Tz8.jpg",
        "Спираль",
        "нержавеющая сталь",
        "3 см",
        15
    ).render();
}

document.querySelector(".earrings").addEventListener("click", () => {
    showMenu();
    clearingContent();
    createEarringProductCards();
    addToCartBtn();
});

// Pendants

function createPendantProductCards() {
    new SideName("Кулоны", "brasH1").render();

    new ProductCard(
        "img/freedom.jpg",
        "Дух свободы",
        "нержавеющая сталь",
        "5 см",
        20
    ).render();
}

document.querySelector(".pendant").addEventListener("click", () => {
    showMenu();
    clearingContent();
    createPendantProductCards();
    addToCartBtn();
});

// Necklace

function createNecklaceProductCards() {
    new SideName("Колье", "brasH1").render();

    new ProductCard(
        "img/2.png",
        "Янтарный дракон",
        "нержавеющая сталь, медь, латунь, янтарь",
        "30 см",
        100
    ).render();

    new ProductCard(
        "img/5.png",
        "Око",
        "нержавеющая сталь, стекло",
        "30 см",
        80
    ).render();
}

document.querySelector(".necklace").addEventListener("click", () => {
    showMenu();
    clearingContent();
    createNecklaceProductCards();
    addToCartBtn();
});

// Chockers

function createChockerProductCards() {
    new SideName("Чокеры", "brasH1").render();

    new ProductCard(
        "img/hhignIIClIg.jpg",
        "Пентаграмма",
        "нержавеющая сталь",
        "подбирается индивидуально",
        60
    ).render();
}

document.querySelector(".chocker").addEventListener("click", () => {
    showMenu();
    clearingContent();
    createChockerProductCards();
    addToCartBtn();
});