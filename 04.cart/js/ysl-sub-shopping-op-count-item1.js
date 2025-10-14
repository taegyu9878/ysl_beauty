
document.addEventListener("DOMContentLoaded", function () {
    // 버튼 및 요소 선택
    let item1MinusBtn = document.querySelector(".cart-op-count-minus.item1");
    let item1PlusBtn = document.querySelector(".cart-op-count-plus.item1");
    let item1Total = document.querySelector(".cart-op-content-item-price.item1 span");
    let item1BaseSpan = document.querySelector(".cart-op-content-item-count.item1 span");

    // 기본 수량, 가격 설정
    let item1BaseCount = 1;
    let item1BasePrice = 58000;

    // 초기화
    item1BaseSpan.textContent = item1BaseCount;
    item1Total.textContent = (item1BaseCount * item1BasePrice).toLocaleString();

    // 가격 업데이트 함수
    function item1updateTotal() {
        let item1TotalSum = item1BasePrice * item1BaseCount;
        item1Total.textContent = item1TotalSum.toLocaleString(); // "58,000" 이런 형식 - 한국 원 기준
    }

    // 더하기
    item1PlusBtn.addEventListener("click", () => {
        item1BaseCount++;
        item1BaseSpan.textContent = item1BaseCount;
        item1updateTotal();
    });

    // 빼기
    item1MinusBtn.addEventListener("click", () => {
        if (item1BaseCount > 1) {
            item1BaseCount--;
            item1BaseSpan.textContent = item1BaseCount;
            item1updateTotal();
        }
    });
});
