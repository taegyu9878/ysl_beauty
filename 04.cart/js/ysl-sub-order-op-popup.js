let orderOpWrap = document.querySelector(".order-op-popup-wrap");
let orderOpCloseBtn = document.querySelector(".order-op-popup-header-close-btn>a");
let orderOpOpenBtn = document.querySelector(".cart-order-request-select");

orderOpOpenBtn.addEventListener("click",()=>{
    orderOpWrap.classList.add("active");
})
orderOpCloseBtn.addEventListener("click",()=>{
    orderOpWrap.classList.remove("active");
})