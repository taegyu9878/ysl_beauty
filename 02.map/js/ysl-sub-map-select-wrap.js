// select depth 0
let selectBtn = document.querySelector(".sel-inner-right>a");
let selDepth = document.querySelector(".select-depth");
let selWrap = document.querySelector(".select>button");

selectBtn.addEventListener("click", ()=>{
    selDepth.classList.toggle("active");
    selWrap.classList.toggle("active");
})

// select depth 1
let selectBtn1 = document.querySelector(".sel-inner-right1>a");
let selDepth1 = document.querySelector(".select-depth1");
let selWrap1 = document.querySelector(".select1>button");

selectBtn1.addEventListener("click",()=>{
    selDepth1.classList.toggle("active");
    selWrap1.classList.toggle("active");
})




// map filter popup active
let mapFilterBtn = document.querySelector(".filter a");
let mapDim = document.querySelector(".map-filter-popup-wrap");
let mapFilterCloseBtn = document.querySelector(".map-filter-popup-closeBtn>a");
let mapFilterApply = document.querySelector(".map-filter-btn>.map-apply-btn");

mapFilterBtn.addEventListener("click",()=>{
    mapDim.classList.add("active");
})
mapFilterCloseBtn.addEventListener("click",()=>{
    mapDim.classList.remove("active");
})
mapFilterApply.addEventListener("click", function(){
    mapDim.classList.remove("active");
})




// map card img active
let mapCard = document.querySelectorAll(".map-card");
let mapCardImg = document.querySelectorAll(".map-card:all-child:after");
