fetch("../00.header_footer/sub-header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;
        
        // 요소 선택
        const hamBtn = document.querySelector(".mo-ham a"); // 햄버거 버튼
        const headerLeft = document.querySelector(".header-left");  // 사이드 전체 랩
        const hamCloseBtn = document.querySelector(".ham-close-btn a"); // 닫기 버튼

        // 모바일: 햄버거 클릭 시 메뉴 열기
        if (hamBtn) {
            hamBtn.addEventListener("click", (e) => {
                e.preventDefault();
                headerLeft.style.display = "block";
                headerLeft.classList.add("open"); // 애니메이션용
                document.body.style.overflow = "hidden"; // 스크롤 방지
            });
        }

        // 닫기 버튼 클릭 시 메뉴 닫기
        if (hamCloseBtn) {
            hamCloseBtn.addEventListener("click", (e) => {
                e.preventDefault();
                headerLeft.classList.remove("open");
                // 닫힘 애니메이션 후 display:none 처리
                setTimeout(() => {
                    headerLeft.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 300);
            });
        }

        // 반응형: 리사이즈 시 초기화
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1400) {
                headerLeft.style.display = "flex";
                document.body.style.overflow = "auto";
            } else {
                headerLeft.style.display = "none";
            }
        });

        // 메인메뉴 탭
        let tabTitles = document.querySelectorAll(".main-menu>li");
        let tabContents = document.querySelectorAll(".tab");
        let menuWrapper = document.querySelector(".main-tab");

        // PC (마우스 오버)
        tabTitles.forEach((tab, id) => {
            tab.addEventListener("mouseenter", () => {
                if (window.innerWidth > 1400) {
                    tabTitles.forEach((t, i) => {
                        t.classList.remove("active");
                        tabContents[i].classList.remove("active");
                    });
                    tab.classList.add("active");
                    tabContents[id].classList.add("active");
                }
            });
        });

        menuWrapper.addEventListener("mouseleave", () => {
            if (window.innerWidth > 1400) {
                tabTitles.forEach((t, i) => {
                    t.classList.remove("active");
                    tabContents[i].classList.remove("active");
                });
            }
        });

        // 모바일 (클릭 시 바로 아래에 서브메뉴 표시 / 두 번 클릭 시 닫힘)
        tabTitles.forEach((tab, id) => {
            tab.addEventListener("click", (e) => {
                if (window.innerWidth <= 1400) {
                    e.preventDefault();

                    const currentTab = tabContents[id];
                    const isActive = tab.classList.contains("active");

                    // 모든 메뉴 초기화
                    tabTitles.forEach((t, i) => {
                        t.classList.remove("active");
                        tabContents[i].classList.remove("active");

                        // 열린 탭을 다시 원위치로 되돌림
                        if (tabContents[i].parentNode !== menuWrapper) {
                            menuWrapper.appendChild(tabContents[i]);
                        }
                    });

                    // 이미 열려 있던 메뉴였다면 닫고 종료 (toggle)
                    if (isActive) return;

                    // 클릭한 메뉴 열기
                    tab.classList.add("active");
                    currentTab.classList.add("active");

                    // 클릭한 li 바로 아래에 이동
                    tab.insertAdjacentElement("afterend", currentTab);
                }
            });
        });

        //언어선택 탭
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

        //검색창 열고 닫기
        // 검색창 누르면 검색창이 뜨고 닫기버튼을 누르면 닫힘
        const searchIcon = document.querySelectorAll(".search-icon");
        const searchBox = document.getElementById("search-wrap");
        const closeBtn = document.getElementById("close-btn");

        // 아이콘 클릭 → 검색창 열기/닫기
        searchIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                searchBox.classList.toggle("active");
            });
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
    })
    .catch(err => console.error("헤더 로드 실패:", err));
