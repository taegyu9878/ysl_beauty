//video-wrap
//버튼 누르면 다음 섹션으로 이동
document.querySelector(".video-btn a").addEventListener("click", function(e){
  const nextSection = document.querySelector(".video-wrap").nextElementSibling;
  if(nextSection){
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
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