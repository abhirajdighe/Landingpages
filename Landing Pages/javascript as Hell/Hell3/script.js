var form = document.querySelector("form")
var inp = document.querySelectorAll('input[type="text"]')
var h4 =document.querySelector("h4");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // if(inp[0].value === '' || inp[1].value===''){
    //     h4.textContent="Error,Some filled are blank";
    //     h4.style.color = "red";
    // }else{
    //     h4.textContent='';
    // }
})