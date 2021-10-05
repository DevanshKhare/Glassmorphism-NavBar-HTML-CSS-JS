const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");
const clc = document.querySelector(".clc")
const clc2 = document.querySelector(".clc2")
btn.addEventListener("click", ()=>{
    if(btn.checked == true){
        menu.classList.add("active");
        clc.classList.add("clr");
        clc2.classList.add("clr2")
    }
    else{
        menu.classList.remove("active");
        clc.classList.remove("clr");
        clc2.classList.remove("clr2")
    }
});