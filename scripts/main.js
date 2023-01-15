const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");
const karuselaCurrentPage = document.querySelector(".current-page");
const karuselaToggleLeft = document.querySelector(".left-carousel-button");
const karuselaToggleRight = document.querySelector(".right-carousel-button");
const karuselaPageItems1 = document.querySelectorAll(".karosela-page1");
const karuselaPageItems2 = document.querySelectorAll(".karosela-page2");
const checkboxItem1 = document.querySelector(".buy-check1");
const checkboxItem2 = document.querySelector(".buy-check2");
let KaruselaPage = 1;

karuselaToggleLeft.addEventListener("click", () => {
    if (KaruselaPage != 1) {
        karuselaPageItems1.forEach((card) => {
            card.style = `display : block;`;
        });
        
        karuselaPageItems2.forEach((card) => {
            card.style = `display : none;`;
        });
        KaruselaPage = 1;
        karuselaCurrentPage.innerHTML = "Page 1";
    }
});
karuselaToggleRight.addEventListener("click", () => {
    if (KaruselaPage != 2) {
        karuselaPageItems2.forEach((card) => {
            card.style = `display : block;`;
        });
        
        karuselaPageItems1.forEach((card) => {
            card.style = `display : none;`;
        });
        KaruselaPage = 2;
        karuselaCurrentPage.innerHTML = "Page 2";
    }
});

const addsUpSum = () => {
    let changingSum = 29.38;
    const totalPrice = document.querySelector(".lol");
    const itemPrice1 = 17.99;
    const itemPrice2 = 11.39;
  if (!checkboxItem1.checked || !checkboxItem2.checked) {
    document.querySelector('.add-sign-container').style = "display:none";
    if(!checkboxItem1.checked ){
        document.querySelector('.item1').style = "display:none";
        
    }
    if(!checkboxItem2.checked)
    document.querySelector('.item2').style = "display:none";
  }
  if(checkboxItem1.checked && checkboxItem2.checked){
    document.querySelector('.item2').style = "display:flex";
    document.querySelector('.item1').style = "display:flex";
    document.querySelector('.add-sign-container').style = "display:flex";
    document.querySelector('.price-and-buy').style = "display:block";
  }
  if(!checkboxItem1.checked && !checkboxItem2.checked){
    document.querySelector('.price-and-buy').style = "display:none";
  }
  if(checkboxItem1.checked) {
    document.querySelector('.item1').style = "display:flex";
  }
  if(checkboxItem2.checked) {
    document.querySelector('.item2').style = "display:flex";
  }
};

const onEnter = (event, index) => {
  bigImage.style = `background: url("/assets/images/display_item${index}.jpg") no-repeat center center/cover;`;
  smallImages.forEach((smallImage) => {
    smallImage.classList.remove("image-active");
  });
  event.target.classList.add("image-active");
};

smallImages.forEach((smallImage, index) => {
  smallImage.addEventListener("mouseenter", (event) => onEnter(event, index));
});
