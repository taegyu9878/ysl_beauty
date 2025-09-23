//hamger 연결하기
const hamburger = document.querySelector(".mo-ham");
const mainTab = document.querySelector(".main-tab");
const overlay = document.querySelector(".header-left");

hamburger.addEventListener("click", () => {
  const isOpen = mainTab.classList.toggle("open");

  if (isOpen) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
});

// 오버레이 클릭하면 닫히게 하기
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    mainTab.classList.remove("open");
    overlay.style.display = "none";
  }
});

//main-tab 각 버튼으로 열기
const menus = document.querySelectorAll(".main-menu li");
const tabs = document.querySelectorAll(".tab-content");

function hideAllTabs() {
  tabs.forEach(tab => tab.classList.remove("active"));
}

function moveTab(menu, tab) {
  menu.insertAdjacentElement("afterend", tab);
}

function resetTabs() {
  tabs.forEach(tab => {
    mainTab.appendChild(tab); // 원래 자리로 복귀
    tab.classList.remove("active");
  });
}

function applyEvents() {
  // 이벤트 초기화
  menus.forEach(menu => {
    menu.onclick = null;
    menu.onmouseenter = null;
  });

  if (window.matchMedia("(max-width: 1400px)").matches) {
    // 📱 태블릿: 클릭 토글
    menus.forEach(menu => {
      menu.onclick = (e) => {
        e.preventDefault();
        let targetClass = menu.getAttribute("data-tab");
        let tab = document.querySelector(`.tab-content.${targetClass}`);
        if (!tab) return;

        if (tab.classList.contains("active")) {
          tab.classList.remove("active");
        } else {
          hideAllTabs();
          tab.classList.add("active");
          moveTab(menu, tab);
        }
      };
    });
  } else {
    // PC: hover
    resetTabs(); // 탭 원래 위치로 되돌림
    menus.forEach(menu => {
      menu.onmouseenter = () => {
        hideAllTabs();
        let targetClass = menu.getAttribute("data-tab");
        let tab = document.querySelector(`.tab-content.${targetClass}`);
        if (tab) tab.classList.add("active");
      };
    });
    // PC에서 탭과 메뉴 둘 다 벗어나면 닫힘
    mainTab.onmouseleave = () => {
      hideAllTabs();
    };
  }
}

// 초기 실행
applyEvents();

// 창 크기 변경 시 실행
window.addEventListener("resize", applyEvents);


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

//언어 선택 탭
const language = document.querySelector(".language");
const langList = document.querySelector(".la-list");
const langItems = document.querySelectorAll(".la-list li");

// hover 열기 / 닫기
language.addEventListener("mouseenter", () => {
  language.classList.add("open");
});
language.addEventListener("mouseleave", () => {
  language.classList.remove("open");
});

// 언어 선택
langItems.forEach(li => {
  li.addEventListener("click", () => {
    // active 초기화
    langItems.forEach(item => item.classList.remove("active"));
    li.classList.add("active");

    // 클릭된 언어를 맨 위로 이동
    langList.prepend(li);

    // 즉시 닫기
    language.classList.remove("open");
  });
});





