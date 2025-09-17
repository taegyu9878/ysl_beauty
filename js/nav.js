//header
//main-tab 각 버튼으로 열기
const menus = document.querySelectorAll(".main-menu li");
const tabs = document.querySelectorAll(".main-tab div");

menus.forEach(menu => {
    menu.addEventListener("mouseenter", () => {
        // 모든 탭 숨김
        tabs.forEach(tab => tab.classList.remove("active"));

        // 현재 메뉴의 data-tab 읽어서 해당 탭만 보이기
        let targetClass = menu.getAttribute("data-tab");
        document.querySelector(`.tab-content.${targetClass}`).classList.add("active");
    });
    //탭에서 벗어나면 원래 상태로 돌리기
    tabs.forEach(tab => {
        tab.addEventListener("mouseleave", () => {
            tab.classList.remove("active");
        });
    });
});


//검색창 열고 닫기
// 검색창 누르면 검색창이 뜨고 닫기버튼을 누르면 닫힘
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-wrap");
const closeBtn = document.getElementById("close-btn");

// 아이콘 클릭 → 검색창 열기/닫기
searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});

// 닫기 버튼 클릭 → 닫기
closeBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
});

