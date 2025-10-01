let couponSelect = document.querySelector(".order-cart-coupon-wrap>.order-cart-coupon-btn>a");
let couponPopup = document.querySelector(".order-coupon-popup-wrap");
let couponApplyBtn = document.querySelector(".order-coupon-popup-btn");
let couponCloseBtn = document.querySelector(".order-coupon-popup-header .order-popup-close-btn");

couponSelect.addEventListener("click", ()=>{
    couponPopup.classList.add("active");
})

couponApplyBtn.addEventListener("click", ()=>{
    couponPopup.classList.remove("active");
})
couponCloseBtn.addEventListener("click",()=>{
    couponPopup.classList.remove("active");
})

// couponSelect.forEach(c => {
//     couponSelect.addEventListener("click", () => {
//         couponPopup.classList.add("active");
//     })
// })






// 쿠폰 선택 시 취소 버튼 생기는거
// let coupon = document.querySelector(".coupon-text-box");

// let couponSelBtn = document.getElementsByName("item-select");
// console.log(couponSelBtn);

// let couponDelBtn = document.querySelectorAll(".coupon-del-btn");

// couponSelBtn.addEventListener("click",()=>{
//     coupon.classList.add("coupon-del-btn");
// })