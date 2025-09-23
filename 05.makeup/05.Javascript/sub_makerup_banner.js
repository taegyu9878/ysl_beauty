document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCounterCurrent = document.querySelector('.slide-counter-current');
    const slideCounterTotal = document.querySelector('.slide-counter-total');
    const sliderBar = document.querySelector('.slider-bar');
    const originalSlides = document.querySelectorAll('.slide');
    const originalSlideCount = originalSlides.length;

    let currentIndex = 1;
    const transitionTime = 500;
    const intervalTime = 3000;

    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[originalSlideCount - 1].cloneNode(true);
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.firstChild);
    const allSlides = document.querySelectorAll('.slide');

    function updateNav() {
        // 실제 순번을 currentIndex를 기준으로 다시 계산합니다.
        const realIndex = (currentIndex - 1 + originalSlideCount) % originalSlideCount;
        
        slideCounterCurrent.textContent = realIndex + 1;
        sliderBar.style.width = `${((realIndex + 1) / originalSlideCount) * 100}%`;
    }

    function setSlidePositions(withAnimation = true) {
        const slideWidth = allSlides[0].offsetWidth;
        const slidesGap = parseFloat(getComputedStyle(slides).gap);
        const moveDistance = slideWidth + slidesGap;
        const transformValue = -currentIndex * moveDistance;
        slides.style.transition = withAnimation ? `transform ${transitionTime}ms ease-in-out` : 'none';
        slides.style.transform = `translateX(${transformValue}px)`;
    }

    function moveSlide() {
        if (currentIndex >= originalSlideCount + 1) return; // 중복 실행 방지
        currentIndex++;
        setSlidePositions();
        updateNav();

        if (currentIndex === originalSlideCount + 1) {
            setTimeout(() => {
                currentIndex = 1;
                setSlidePositions(false);
            }, transitionTime);
        }
    }

    window.addEventListener('resize', () => setSlidePositions(false));

    slideCounterTotal.textContent = originalSlideCount;
    setSlidePositions(false);
    updateNav();
    slides.style.visibility = 'visible';
    setInterval(moveSlide, intervalTime);
});