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

    })
