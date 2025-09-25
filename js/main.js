

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