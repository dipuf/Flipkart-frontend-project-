let place = document.querySelector(".topul ul");
let address = document.querySelector(".panel");
let cross = document.querySelector(".cross img");
place.addEventListener("click", function () {
    address.classList.add("active")
});                              
place.addEventListener("mouseover",function(){
    place.style.cursor =  "default"
})                                                                                                                                                                  
cross.addEventListener("click",function(){
    address.classList.remove("active");
})
let history = document.querySelector(".history");
let input = document.querySelector(".input");
input.addEventListener("click",function(){
    history.classList.add("active");
})
let nav = document.querySelector("nav");
nav.addEventListener("click",function(){
    history.classList.remove("active");
})
let boxe = document.querySelector(".boxes");
function slide(){
    boxe.style.transition = "transform 0.5s ease";
    boxe.style.transform = `translateX(-${440}px)`;
    setTimeout(() => {
        boxe.style.transition = "none";
        let firstimage = boxe.firstElementChild;
        boxe.appendChild(firstimage)
        boxe.style.transform = `translateX(0px)`;
    },500);
}
setInterval(slide,3000);
