//hamger 연결하기
const hamburger = document.querySelector(".mo-ham");
const mainTab = document.querySelector(".main-tab");
const overlay = document.querySelector(".header-left");
const hamCloseBtn = document.querySelector(".ham-close-btn");

hamburger.addEventListener("click", () => {
  const isOpen = mainTab.classList.toggle("open");

  if (isOpen) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
});

//close 버튼 누르면 닫히게 하기
hamCloseBtn.addEventListener("click", (e) => {
  mainTab.classList.remove("open");
  overlay.style.display = "none";
})

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

//섹션 넘어가면 헤더 스타일 변경
const header = document.querySelector("header");
const firstSection = document.querySelector(".first");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 첫번째 섹션이 보일 때
        header.classList.remove("active");
      } else {
        // 첫번째 섹션을 지나치면
        header.classList.add("active");
      }
    });
  },
  { threshold: 0.15 } // 일정 비율이상 보일 때 감지
);

observer.observe(firstSection);


