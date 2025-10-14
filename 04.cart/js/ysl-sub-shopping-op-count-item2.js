
document.addEventListener("DOMContentLoaded", function () {
    // 버튼 및 요소 선택
    let item2MinusBtn = document.querySelector(".cart-op-count-minus.item2");
    let item2PlusBtn = document.querySelector(".cart-op-count-plus.item2");
    let item2Total = document.querySelector(".cart-op-content-item-price.item2 span");
    let item2BaseSpan = document.querySelector(".cart-op-content-item-count.item2 span");

    // 기본 수량, 가격 설정
    let item2BaseCount = 1;
    let item2BasePrice = 112000;

    // 초기화
    item2BaseSpan.textContent = item2BaseCount;
    item2Total.textContent = (item2BaseCount * item2BasePrice).toLocaleString();

    // 가격 업데이트 함수
    function item2updateTotal() {
        let item2TotalSum = item2BasePrice * item2BaseCount;
        item2Total.textContent = item2TotalSum.toLocaleString();
    }

    // 더하기
    item2PlusBtn.addEventListener("click", () => {
        item2BaseCount++;
        item2BaseSpan.textContent = item2BaseCount;
        item2updateTotal();
    });

    // 빼기
    item2MinusBtn.addEventListener("click", () => {
        if (item2BaseCount > 1) {
            item2BaseCount--;
            item2BaseSpan.textContent = item2BaseCount;
            item2updateTotal();
        }
    });
});
