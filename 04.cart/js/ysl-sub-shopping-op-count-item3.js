
document.addEventListener("DOMContentLoaded", function () {
    // 버튼 및 요소 선택
    let item3MinusBtn = document.querySelector(".cart-op-count-minus.item3");
    let item3PlusBtn = document.querySelector(".cart-op-count-plus.item3");
    let item3Total = document.querySelector(".cart-op-content-item-price.item3 span");
    let item3BaseSpan = document.querySelector(".cart-op-content-item-count.item3 span");

    // 기본 수량, 가격 설정
    let item3BaseCount = 1;
    let item3BasePrice = 198000;

    // 초기화
    item3BaseSpan.textContent = item3BaseCount;
    item3Total.textContent = (item3BaseCount * item3BasePrice).toLocaleString();

    // 가격 업데이트 함수
    function item3updateTotal() {
        let item3TotalSum = item3BasePrice * item3BaseCount;
        item3Total.textContent = item3TotalSum.toLocaleString();
    }

    // 더하기
    item3PlusBtn.addEventListener("click", () => {
        item3BaseCount++;
        item3BaseSpan.textContent = item3BaseCount;
        item3updateTotal();
    });

    // 빼기
    item3MinusBtn.addEventListener("click", () => {
        if (item3BaseCount > 1) {
            item3BaseCount--;
            item3BaseSpan.textContent = item3BaseCount;
            item3updateTotal();
        }
    });
});
