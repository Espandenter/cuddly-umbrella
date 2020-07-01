
var slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let html = document.querySelector("html"),
MainMenuButton=document.querySelector("#MainMenuButoon"),
DopMenuButton=document.querySelector("#DopMenuButton"),
MainSideMenu=document.querySelector(".MainSideMenu"),
timerBlock = document.querySelector(".timer"),
DopSideMenu=document.querySelector(".DopSideMenu"),
issueForm=document.querySelector(".issueForm"),
ConnectWU=document.querySelector("#ConnectWU");

html.addEventListener("click",(e)=>{
    let target=e.target;
    if ( (!target.matches(".MainSideMenu") ||  !target.matches(".DopSideMenu")  )& document.body.clientWidth<800)
    {
MainSideMenu.style.display="none";
DopSideMenu.style.display="none";
    }
    if ( !target.matches(".pref,.next,a,.NewsHeader"))return;
    if (target.matches("#MainMenuButton") ){
        MainSideMenu.style.display="block";
    }
    else if(target.matches("#DopMenuButton") ){
        DopSideMenu.style.display="block";
    }
    else if(target.matches("#ConnectWU") ){
        issueForm.style.display="block";
    }

    else if(target.matches(".NewsHeader")){
        window.open("http://vk.com","_blank")
    }
})


function getTimer(dedline){
    let dateNow = new Date(),
    dateFuture = new Date(dedline),
    date= dateFuture- dateNow;
    ms=dateFuture-dateNow<0?0:dateFuture-dateNow,
    sec=Math.floor(ms/1000 % 60),
    min=Math.floor(ms/1000/60%60),
    hours=Math.floor(ms/1000/60/60);
    if (date<0){
        clearInterval(IsInterval);
        sec=0;
        min=0;
        hours=0;
    }
    return {
        sec,
        min,
        hours
    };
}
function setTimer(){
    const timer = getTimer('1 september 2020');
    let time=(timer.hours<10?"0":"")+timer.hours +":"+ (timer.min<10?"0":"")+timer.min +":"+ (timer.sec<10?"0":"")+timer.sec;
    timerBlock.textContent = time;
}
let IsInterval=setInterval(setTimer, 1000);