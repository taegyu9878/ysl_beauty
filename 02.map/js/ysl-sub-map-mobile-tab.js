// 모바일 탭 버튼 변수 선언
let mobileTabLeft = document.querySelector(".tab-map-list");
let mobileTabRight = document.querySelector(".tab-map-img");

// 모바일 탭 변수 선언
let mapList = document.querySelector(".map-inner-right-bottom");
let mapImg = document.querySelector(".map-inner-left");


// 이벤트 추가
mobileTabRight.addEventListener("click",()=>{
    mobileTabLeft.classList.remove("active");
    mobileTabRight.classList.add("active");

    mapList.classList.remove("active");
    mapImg.classList.add("active");
})

mobileTabLeft.addEventListener("click",()=>{
    mobileTabRight.classList.remove("active");
    mobileTabLeft.classList.add("active");

    mapImg.classList.remove("active");
    mapList.classList.add("active");
})