let filter = document.querySelector(".filter")
let popClose = document.querySelector(".close")
let popupSel = document.querySelector(".filter-select")
let Import = document.querySelector(".import")
let heart = document.querySelector(".heart-icon")

filter.addEventListener("click",()=>{
    document.querySelector(".filter-popup-wrap").style.display="block";
    document.querySelector(".filter-popup-wrap").style.backgroundColor="rgba(0,0,0,0.7)";
})
popClose.addEventListener("click",()=>{
    document.querySelector(".filter-popup-wrap").style.display="none";
})
Import.addEventListener("click",()=>{
    document.querySelector(".filter-popup-wrap").style.display="none";
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

heart.addEventListener("click",()=>{
    document.querySelector(".heart-icon").sty
})