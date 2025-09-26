let orderResultWrap = document.querySelector(".order-result-popup-wrap");
let payBtn = document.querySelector(".order-inner-right .cart-pay-btn");
let orderResultCloseBtn = document.querySelector(".order-result-popup-header-closeBtn>a");
let orderResultBtn = document.querySelector(".order-result-botom-btn>button");

payBtn.addEventListener("click", ()=>{
    orderResultWrap.classList.add("active");
})
orderResultCloseBtn.addEventListener("click",()=>{
    orderResultWrap.classList.remove("active");
})


// document.addEventListener("keydown", (e)=>{
//     popupBtn.value = e.key;
//     switch (e.key) {
//         case "esc" :
//             if(orderResultWrap.active){
//                 orderResultWrap.classList.remove("active");
//             }
//     }
// })