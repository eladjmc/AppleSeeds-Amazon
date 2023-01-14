const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");

const onEnter = (event,index) => {
    bigImage.style =`background: url("/assets/images/display_item${index}.jpg") no-repeat center center/cover;`
    smallImages.forEach(smallImage => {
        smallImage.classList.remove("image-active");
    });
    console.log(event);
    event.target.classList.add("image-active");
}

smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener('mouseenter',(event)=>onEnter(event,index))
});