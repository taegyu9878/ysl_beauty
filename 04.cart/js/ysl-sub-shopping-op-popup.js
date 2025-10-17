let item1OpBtn = document.querySelector(".cart-item-btn-wrap>.btn-left.item1");
let item1Opwrap = document.querySelector(".cart-op-popup-wrap.item1");
let item1OpCloseBtn = document.querySelector(".cart-op-popup-content-list.item1 .cart-op-close-btn.item1>a");
let item1OpMoreBtn = document.querySelector(".cart-op-content-icon-box.item1>a");
let item1OpTop = document.querySelector(".cart-op-content-item-title.item1");
let item1OpDepth = document.querySelector(".cart-op-content-item-depth.item1");


let item2OpBtn = document.querySelector(".cart-item-btn-wrap>.btn-left.item2");
let item2Opwrap = document.querySelector(".cart-op-popup-wrap.item2");
let item2OpCloseBtn = document.querySelector(".cart-op-popup-content-list.item2 .cart-op-close-btn.item2>a");
let item2OpMoreBtn = document.querySelector(".cart-op-content-icon-box.item2>a");
let item2OpTop = document.querySelector(".cart-op-content-item-title.item2");
let item2OpDepth = document.querySelector(".cart-op-content-item-depth.item2");


let item3OpBtn = document.querySelector(".cart-item-btn-wrap>.btn-left.item3");
let item3Opwrap = document.querySelector(".cart-op-popup-wrap.item3");
let item3OpCloseBtn = document.querySelector(".cart-op-popup-content-list.item3 .cart-op-close-btn.item3>a");
let item3OpMoreBtn = document.querySelector(".cart-op-content-icon-box.item3>a");
let item3OpTop = document.querySelector(".cart-op-content-item-title.item3");
let item3OpDepth = document.querySelector(".cart-op-content-item-depth.item3");


let popup1CloseBtn = document.querySelector(".cart-op-bottom-btn-left.item1");
let popup1SelBtn = document.querySelector(".cart-op-bottom-btn-right.item1");

let popup2CloseBtn = document.querySelector(".cart-op-bottom-btn-left.item2");
let popup2SelBtn = document.querySelector(".cart-op-bottom-btn-right.item2");

let popup3CloseBtn = document.querySelector(".cart-op-bottom-btn-left.item3");
let popup3SelBtn = document.querySelector(".cart-op-bottom-btn-right.item3");



item1OpBtn.addEventListener("click",()=>{
    item1Opwrap.classList.add("active");
})
item2OpBtn.addEventListener("click",()=>{
    item2Opwrap.classList.add("active");
})
item3OpBtn.addEventListener("click",()=>{
    item3Opwrap.classList.add("active");
})


item1OpCloseBtn.addEventListener("click",()=>{
    item1Opwrap.classList.remove("active");
})
item2OpCloseBtn.addEventListener("click",()=>{
    item2Opwrap.classList.remove("active");
})
item3OpCloseBtn.addEventListener("click",()=>{
    item3Opwrap.classList.remove("active");
})


item1OpMoreBtn.addEventListener("click",()=>{
    item1OpDepth.classList.toggle("active");
    item1OpTop.classList.toggle("active");
})
item2OpMoreBtn.addEventListener("click",()=>{
    item2OpDepth.classList.toggle("active");
    item2OpTop.classList.toggle("active");
})
item3OpMoreBtn.addEventListener("click",()=>{
    item3OpDepth.classList.toggle("active");
    item3OpTop.classList.toggle("active");
})



popup1CloseBtn.addEventListener("click",()=>{
    item1Opwrap.classList.remove("active");
})
popup2CloseBtn.addEventListener("click",()=>{
    item2Opwrap.classList.remove("active");
})
popup3CloseBtn.addEventListener("click",()=>{
    item3Opwrap.classList.remove("active");
})

popup1SelBtn.addEventListener("click",()=>{
    item1Opwrap.classList.remove("active");
})
popup2SelBtn.addEventListener("click",()=>{
    item2Opwrap.classList.remove("active");
})
popup3SelBtn.addEventListener("click",()=>{
    item3Opwrap.classList.remove("active");
})