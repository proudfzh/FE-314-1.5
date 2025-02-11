const button = document.getElementById("btn");
const container = document.getElementById("hiddenblocks__id");
const rotatedImage = document.getElementById("rotatedImage");
let isFlipped = false;

button.addEventListener("click", () => {
    isFlipped = !isFlipped;
    if (container.style.display === "none") {
        container.style.display = "grid";
        button.querySelector("span").textContent = "Скрыть";
        
    } else {
        container.style.display = "none";
        button.querySelector("span").textContent = "Показать все";
    }
    
    rotatedImage.style.transform = isFlipped ? "rotate(180deg)" : "rotate(0deg)";
});
    
new Swiper ('.logo',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    freeMode: false,
    loop: false,
    breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slidesToShow: 1,
          slidesToScroll: 1,
        }, }
});



