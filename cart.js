"use strict"

let addCartBtn = document.querySelectorAll(".add_to_cart");
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

cartProductsList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delBtn")){
        deleteProduct(e.target.closest(".cart_list_pos"));
    }
});