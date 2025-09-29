let filter = document.querySelector(".filter")
let popClose = document.querySelector(".close")
let popupSel = document.querySelector(".filter-select")
let Import = document.querySelector(".import")
let heartAnchors = document.querySelectorAll('.heart-icon ');

filter.addEventListener("click", () => {
    document.querySelector(".filter-popup-wrap").style.display = "block";
    document.querySelector(".filter-popup-wrap").style.backgroundColor = "rgba(0,0,0,0.7)";
})
popClose.addEventListener("click", () => {
    document.querySelector(".filter-popup-wrap").style.display = "none";
})
Import.addEventListener("click", () => {
    document.querySelector(".filter-popup-wrap").style.display = "none";
})

const filterGroups = document.querySelectorAll('.filter-select');

filterGroups.forEach(group => {
    const options = group.querySelectorAll('p');

    options.forEach(option => {
        option.addEventListener('click', () => {

            const wasActive = option.classList.contains('active');


            options.forEach(item => {
                item.classList.remove('active');
            });


            if (!wasActive) {
                option.classList.add('active');
            }

        });
    });
});

heartAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        // a 태그의 기본 동작(페이지 이동 또는 새로고침)을 막습니다.
        event.preventDefault();

        // 클릭된 a 태그 바로 아래에 있는 img 태그를 찾습니다.
        const heartImage = this.querySelector('img');

        // 교체할 이미지 경로들을 변수에 저장합니다.
        const emptyHeart = './05.images/하트.png';
        const filledHeart = './05.images/하트-active.png'; // <-- 실제 채워진 하트 이미지 파일 경로로 수정해주세요.

        // 현재 이미지의 src 속성 값을 가져와서 빈 하트 이미지인지 확인합니다.
        if (heartImage.getAttribute('src') === emptyHeart) {
            // 현재 이미지가 빈 하트이면, 채워진 하트 이미지로 변경합니다.
            heartImage.setAttribute('src', filledHeart);
        } else {
            // 채워진 하트 이미지이면, 다시 빈 하트 이미지로 변경합니다.
            heartImage.setAttribute('src', emptyHeart);
        }
    });
});