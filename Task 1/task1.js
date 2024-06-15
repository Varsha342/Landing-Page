window.addEventListener("scroll",function(){
    var a=document.querySelector("header");
    a.classList.toggle("sticky", window.scrollY>0);
})