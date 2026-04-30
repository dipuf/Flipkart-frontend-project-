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

