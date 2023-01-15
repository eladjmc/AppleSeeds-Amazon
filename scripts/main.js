const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");
const karuselaCurrentPage = document.querySelector(".current-page");
const karuselaToggleLeft = document.querySelector(".left-carousel-button");
const karuselaToggleRight = document.querySelector(".right-carousel-button");
const karuselaPageItems1 = document.querySelectorAll(".karosela-page1");
const karuselaPageItems2 = document.querySelectorAll(".karosela-page2");
let KaruselaPage = 1;
let totalPrice = document.querySelector(".total-price-amount");

karuselaToggleLeft.addEventListener('click', () => {
    if(KaruselaPage != 1){
        karuselaPageItems1.forEach(card => {
            card.style = `display : block;`;
        });

        karuselaPageItems2.forEach(card => {
            card.style = `display : none;`;
        });
         KaruselaPage = 1;
         karuselaCurrentPage.innerHTML='Page 1'
    }
});
karuselaToggleRight.addEventListener('click', () => {
    if(KaruselaPage != 2){
        karuselaPageItems2.forEach(card => {
            card.style = `display : block;`;
        });
         
        karuselaPageItems1.forEach(card => {
            card.style = `display : none;`;
        });
        KaruselaPage = 2;
        karuselaCurrentPage.innerHTML='Page 2'
    }
});




const onEnter = (event,index) => {
    bigImage.style =`background: url("/assets/images/display_item${index}.jpg") no-repeat center center/cover;`
    smallImages.forEach(smallImage => {
        smallImage.classList.remove("image-active");
    });
    event.target.classList.add("image-active");
}

smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener('mouseenter',(event)=>onEnter(event,index))
});