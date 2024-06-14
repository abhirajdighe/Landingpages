var btn = document.querySelector("#start");
var h4 = document.querySelector("h4")
var stp = document.querySelector("#stop")
var int;

btn.addEventListener("click", function(){
    var count =0;
    int=setInterval(function(){
        h4.textContent = count;
        count++;
    },1000)
})

stp.addEventListener("click",()=>{
    clearInterval(int);
})