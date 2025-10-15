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