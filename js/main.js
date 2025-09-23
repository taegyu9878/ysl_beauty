//fre section 클릭할때마다 카드 슬라이드
const track = document.querySelector(".fra-inner-right");
const slides = document.querySelectorAll(".fragrance");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

const totalSlides = slides.length; // 원본 6개
const visibleSlides = 3;
const gap = 30; 
const slideWidth = slides[0].offsetWidth + gap;

// 앞뒤 클론 생성
for (let i = 0; i < visibleSlides; i++) {
  const firstClone = slides[i].cloneNode(true);
  const lastClone = slides[totalSlides - 1 - i].cloneNode(true);
  track.appendChild(firstClone); // 뒤에 복제
  track.prepend(lastClone); // 앞에 복제
}

const allSlides = document.querySelectorAll(".fra-inner-right .fragrance");
let currentIndex = visibleSlides; // 클론 때문에 시작 index는 3부터
track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

// 슬라이드 이동 함수
function moveToSlide(index) {
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// transition 끝나면 루프 처리
track.addEventListener("transitionend", () => {
  if (currentIndex >= totalSlides + visibleSlides) {
    // 끝까지 갔을 때 → 원본 첫번째 위치로 점프
    track.style.transition = "none";
    currentIndex = visibleSlides;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  } else if (currentIndex < visibleSlides) {
    // 앞쪽으로 갔을 때 → 원본 마지막 위치로 점프
    track.style.transition = "none";
    currentIndex = totalSlides;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// 버튼 이벤트
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex++;
  moveToSlide(currentIndex);
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex--;
  moveToSlide(currentIndex);
});

//exclusive-wrap
let serviceList = document.querySelectorAll(".service-list>li");
let exTab = document.querySelectorAll(".ex-tab-wrap>div")

serviceList.forEach((tab, id) => {
    tab.addEventListener("click", () => {
        
        serviceList.forEach((t, i) => {
            t.classList.remove("active");
            exTab[i].classList.remove("active");
        })
        //이벤트가 발생된 버튼과 버튼과 같은 순서인 클래스 추가
        tab.classList.add("active");
        exTab[id].classList.add("active");
    })
})