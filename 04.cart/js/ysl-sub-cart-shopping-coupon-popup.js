let couponSelect = document.querySelectorAll(".shopping-cart-coupon-btn>a");
let couponPopup = document.querySelector(".shopping-coupon-popup-wrap");
let couponApplyBtn = document.querySelector(".shopping-coupon-popup-btn");
let couponCloseBtn = document.querySelector(".shopping-coupon-popup-header .shopping-popup-close-btn");


couponSelect.forEach(coupon => {
    coupon.addEventListener("click", () => {
        couponPopup.classList.add("active");
    })
})

couponApplyBtn.addEventListener("click", () => {
    couponPopup.classList.remove("active");
})
couponCloseBtn.addEventListener("click", () => {
    couponPopup.classList.remove("active");
})