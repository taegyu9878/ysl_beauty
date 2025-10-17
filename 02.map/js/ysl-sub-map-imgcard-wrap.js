let mapCard = document.querySelectorAll(".map-card");
let imgBox = document.querySelectorAll(".map-card-img-box");

mapCard.forEach((card, id) => {
    card.addEventListener("click", () => {
        const isActive = imgBox[id].classList.contains("active");

        // 먼저 전체 카드와 이미지에서 active 제거
        mapCard.forEach((c, i) => {
            c.classList.remove("active");
            imgBox[i].classList.remove("active");
        });

        // 클릭한 카드와 이미지에만 active 추가
        if (!isActive) {
            card.classList.add("active");
            imgBox[id].classList.add("active");
        }

    });
});
