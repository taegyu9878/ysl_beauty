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

// 요소 선택
const searchForm = document.getElementById("search-form"); // form
const searchInput = document.getElementById("search-input"); // input
const recentBox = document.querySelector(".word-history"); // 최근 검색어 표시 영역
const clearBtn = document.querySelector(".word-box p a"); // 전체삭제 버튼

// localStorage에서 불러오기
let recentKeywords = JSON.parse(localStorage.getItem("recentKeywords")) || [];

// 최근 검색어 렌더링
function renderRecentKeywords() {
  recentBox.innerHTML = ""; // 초기화

  recentKeywords.forEach(keyword => {
    const p = document.createElement("p");
    p.innerHTML = `<a href="#">${keyword}</a>`;
    recentBox.appendChild(p);
  });
}

// 검색어 추가
function addKeyword(keyword) {
  if (!keyword.trim()) return;

  // 중복 제거 후 맨 앞에 추가
  recentKeywords = recentKeywords.filter(k => k !== keyword);
  recentKeywords.unshift(keyword);

  // 최대 10개까지만 유지
  if (recentKeywords.length > 6) {
    recentKeywords.pop();
  }

  // 저장
  localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));

  renderRecentKeywords();
}

// 검색 실행 (submit 이벤트)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 새로고침 막기
  const keyword = searchInput.value.trim();
  if (keyword) {
    addKeyword(keyword);
    searchInput.value = "";
  }
});

// 전체삭제 버튼
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  recentKeywords = [];
  localStorage.removeItem("recentKeywords");
  renderRecentKeywords();
});

// 초기 렌더링
renderRecentKeywords();