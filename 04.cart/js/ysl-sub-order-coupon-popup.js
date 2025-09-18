let couponSelect = document.querySelector(".cart-coupon-wrap>.cart-coupon-btn");
let couponPopup = document.querySelector(".dim-is-active");
let couponApplyBtn = document.querySelector(".coupon-popup-btn");
let couponCloseBtn = document.querySelector(".popup-close-btn");

couponSelect.addEventListener("click", function(){
    couponPopup.style.display = "block";
})

couponApplyBtn.addEventListener("click", ()=>{
    couponPopup.style.display = "none";
})
couponCloseBtn.addEventListener("click",()=>{
    couponPopup.style.display = "none";
})



// 쿠폰 선택 시 취소 버튼 생기는거
let coupon = document.querySelector(".coupon-text-box");

let couponSelBtn = document.getElementsByName("item-select");
console.log(couponSelBtn);

let couponDelBtn = document.querySelectorAll(".coupon-del-btn");

couponSelBtn.addEventListener("click",()=>{
    coupon.classList.add("coupon-del-btn");
})