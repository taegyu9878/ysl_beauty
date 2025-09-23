fetch("../00.header_footer/sub-header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;


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


        // 메인메뉴 탭
        let tabTitles = document.querySelectorAll(".main-menu>li");
        let tabContents = document.querySelectorAll(".tab");
        let menuWrapper = document.querySelector(".main-tab");

        tabTitles.forEach((tab, id) => {
            console.log(tabTitles);
            tab.addEventListener("mouseenter", () => {
                tabTitles.forEach((t, i) => {
                    t.classList.remove("active");
                    tabContents[i].classList.remove("active");
                })
                tab.classList.add("active");
                tabContents[id].classList.add("active");
            })
        })
        menuWrapper.addEventListener("mouseleave", () => {
            tabTitles.forEach((t, i) => {
                t.classList.remove("active");
                tabContents[i].classList.remove("active");
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
    })
