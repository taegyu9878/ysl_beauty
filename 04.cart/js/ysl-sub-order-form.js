let couponSelect = document.querySelector(".cart-coupon-wrap>.cart-coupon-btn");
let couponPopup = document.querySelector(".dim-is-active");
let couponCloseBtn = document.querySelector(".coupon-popup-btn");

couponSelect.addEventListener("click", function(){
    couponPopup.style.display = "block";
})

couponCloseBtn.addEventListener("click", ()=>{
    couponPopup.style.display = "none";
})