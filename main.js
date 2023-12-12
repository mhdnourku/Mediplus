/*---------------------------start  preloader-------------------------------------------------------*/ 


var loader = document.getElementById("preloader")
window.addEventListener("load",()=>loader.style.display="none")

/*---------------------------end preloader-------------------------------------------------------*/ 
const scrollers=document.querySelectorAll('.scroller');
        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            addanimation();
        }
        function addanimation(){
            scrollers.forEach(scroller =>{
                scroller.setAttribute("data-animated",true);
                const scrollerinner= scroller.querySelector(".scroller__inner");
                const scrollerContent= Array.from(scrollerinner.children);
                scrollerContent.forEach((item) => {
                    const duble =item.cloneNode(true);
                    duble.setAttribute('aria-hidden',true);
                    scrollerinner.appendChild(duble)
                })
            })
        }
/*---------------------------start userapi-------------------------------------------------------*/ 
 
         
/*---------------------------end userapi-------------------------------------------------------*/ 
/*---------------------------start scroll-------------------------------------------------------*/ 
window.onscroll = function() {myFunction()};
console.log("y====0");
var i=0;
var y=0;
var rooms= 0;
var doctors= 0;
var patients= 0;
var years= 0;
var outputrooms = document.getElementById("rooms");
var outputdoctors= document.getElementById("doctors");
var outputpatients= document.getElementById("patients");
var outputyears= document.getElementById("years");
var btn=document.getElementById("btn")
var Interval;

outputrooms.innerHTML="00";
outputdoctors.innerHTML="00";
outputpatients.innerHTML="00";
outputyears.innerHTML="00";

function myFunction(){
  console.log("infunction");
  if(y==0){
    console.log("y====0");
    var testDivFromTop = document.getElementById("counter").offsetTop;
    var pageHeight =  window.innerHeight;
    if (document.body.scrollTop > testDivFromTop - pageHeight || (document.documentElement.scrollTop)-300 > testDivFromTop - pageHeight) {
      console.log("start");
      console.log(document.body.scrollTop);
      console.log(testDivFromTop - pageHeight);
      Interval=setInterval(startTime,10);
    }
  }
  else{
    return;
  }
}

window.addEventListener("scroll",() => {
  i++
  // if(i>70000000){
  // Interval=setInterval(startTime,10);
  // }
})
function startTime(){
  i++;
  if(i >= 3468){
      outputrooms.innerHTML="3468";
  }
  else{
    outputrooms.innerHTML=i;
    y=1;
  }
  if(i>=557){
      outputdoctors.innerHTML="557";
    }
  else{
      outputdoctors.innerHTML=i;
    }
  if(i>=4379){
      outputpatients.innerHTML="4379";
      stopTime();
    }
  else{
      outputpatients.innerHTML=i;
    }

    if(i>=37){
      outputyears.innerHTML="37";
      
    }
   else{
    outputyears.innerHTML=i;
    }
    
  }

  function stopTime(){
    clearInterval(Interval);
  }

/*---------------------------end scroll-------------------------------------------------------*/ 



/*---------------------------start burger-------------------------------------------------------*/ 
const burgerIcone=document.querySelector('#burger')
const navbarMenu=document.querySelector('#links')
burgerIcone.addEventListener("click",()=>{
  navbarMenu.classList.toggle("is-active")
})
/*---------------------------start main slider-------------------------------------------------------*/ 


/*---------------------------end burger-------------------------------------------------------*/ 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/*---------------------------end main slider-------------------------------------------------------*/ 




