/*=========================================
          MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");


    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }


});

}



/*=========================================
          NAVBAR SCROLL EFFECT
=========================================*/


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

    header.style.boxShadow =
    "0 10px 25px rgba(0,0,0,.15)";

}

else{

    header.style.boxShadow =
    "0 5px 15px rgba(0,0,0,.08)";

}


});



/*=========================================
          STAT COUNTER
=========================================*/


const counters =
document.querySelectorAll(".stat-box h2");


let started = false;


function startCounter(){


const statsSection =
document.querySelector(".stats");


if(!statsSection) return;



const position =
statsSection.getBoundingClientRect().top;


const screen =
window.innerHeight;



if(position < screen - 100 && !started){


started = true;


counters.forEach(counter=>{


let target =
parseInt(counter.innerText);


let count = 0;



let speed =
target / 80;



function update(){


if(count < target){


count += speed;


counter.innerText =
Math.ceil(count) + "+";


setTimeout(update,20);


}

else{


counter.innerText =
target + "+";


}


}



update();



});


}



}



window.addEventListener(
"scroll",
startCounter
);



/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/


const revealElements =
document.querySelectorAll(
".choose-card, .team-card, .testimonial-card, .mission-box, .vision-box, .quality"
);



function reveal(){


revealElements.forEach(element=>{


let top =
element.getBoundingClientRect().top;


let height =
window.innerHeight;



if(top < height - 100){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}


});


}



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(50px)";

element.style.transition=
"0.8s";


});



window.addEventListener(
"scroll",
reveal
);


reveal();



/*=========================================
          BACK TO TOP BUTTON
=========================================*/


const topBtn =
document.getElementById("topBtn");



if(topBtn){



window.addEventListener("scroll",()=>{


if(window.scrollY > 400){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}


});




topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});



}



/*=========================================
             PAGE LOADER
=========================================*/


window.addEventListener("load",()=>{


const loader =
document.getElementById("loader");


if(loader){


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},600);


}


});



/*=========================================
        IMAGE LAZY EFFECT
=========================================*/


const images =
document.querySelectorAll("img");


images.forEach(img=>{


img.addEventListener("load",()=>{


img.style.opacity="1";


});


img.style.opacity="0";

img.style.transition=".5s";


});



/*=========================================
        FOOTER NEWSLETTER
=========================================*/


const footerForm =
document.querySelector(".footer-form");



if(footerForm){


const input =
footerForm.querySelector("input");



const button =
footerForm.querySelector("button");



button.addEventListener("click",(e)=>{


e.preventDefault();



if(input.value===""){


alert(
"Please Enter Your Email Address"
);


}

else{


alert(
"🎉 Thank You For Subscribing To Sweet Scoop!"
);



input.value="";


}


});


}



/*=========================================
       TESTIMONIAL AUTO EFFECT
=========================================*/


const testimonialCards =
document.querySelectorAll(".testimonial-card");



testimonialCards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform =
"translateY(-15px)";


});



card.addEventListener("mouseleave",()=>{


card.style.transform =
"translateY(0)";


});


});



/*=========================================
          CONSOLE MESSAGE
=========================================*/


console.log(
"🍦 Sweet Scoop About Page Loaded Successfully"
);