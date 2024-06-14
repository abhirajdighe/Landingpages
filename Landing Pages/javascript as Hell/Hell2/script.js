let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let btn = document.querySelector("button")

btn.addEventListener("click",function (){
    var src1 = img1.src;
    img1.src = img2.src;
    img2.src = src1;
})