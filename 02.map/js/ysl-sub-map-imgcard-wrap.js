let mapCard = document.querySelectorAll(".map-card");
let imgBox = document.querySelectorAll(".map-card-img-box");

mapCard.forEach((card, id) => {
    card.addEventListener("click", () => {
        // 먼저 전체 카드와 이미지에서 active 제거
        mapCard.forEach((c, i) => {
            c.classList.remove("active");
            imgBox[i].classList.remove("active");
        });

        // 클릭한 카드와 이미지에만 active 추가
        card.classList.add("active");
        imgBox[id].classList.add("active");
    });
});
