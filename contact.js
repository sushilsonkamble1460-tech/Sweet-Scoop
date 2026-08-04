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
          CONTACT FORM
=========================================*/


const contactForm =
document.getElementById("contactForm");



if(contactForm){



contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



let inputs =
contactForm.querySelectorAll("input, textarea");



let empty = false;



inputs.forEach(input=>{


if(input.value.trim()==""){


empty=true;


}


});





if(empty){


alert(
"⚠️ Please fill all fields!"
);



}

else{


alert(
"🍦 Thank You! Your message has been sent successfully."
);



contactForm.reset();


}



});


}









/*=========================================
          NEWSLETTER FORM
=========================================*/


const newsletterForm =
document.getElementById("newsletterForm");



if(newsletterForm){



newsletterForm.addEventListener("submit",(e)=>{


e.preventDefault();



let email =
newsletterForm.querySelector("input").value;



if(email===""){


alert(
"Please enter your email address"
);


}

else{


alert(
"🎉 Thank you for subscribing Sweet Scoop!"
);



newsletterForm.reset();


}



});


}







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
          NAVBAR EFFECT
=========================================*/


const header =
document.querySelector("header");



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
          SCROLL ANIMATION
=========================================*/


const animatedItems =
document.querySelectorAll(

".info-card, .support-card, .review-card, .form-box"

);



animatedItems.forEach(item=>{


item.style.opacity="0";


item.style.transform=
"translateY(50px)";


item.style.transition=
"0.8s";


});






function revealAnimation(){



animatedItems.forEach(item=>{


let position =
item.getBoundingClientRect().top;


let screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


item.style.opacity="1";


item.style.transform=
"translateY(0)";


}



});


}




window.addEventListener(
"scroll",
revealAnimation
);



revealAnimation();








/*=========================================
          PHONE NUMBER CLICK
=========================================*/


const phone =
document.querySelector(".fa-phone");



if(phone){


phone.addEventListener("click",()=>{


alert(
"📞 Call Us: +91 98765 43210"
);


});


}








/*=========================================
          PAGE LOAD
=========================================*/


window.addEventListener("load",()=>{


console.log(
"🍦 Sweet Scoop Contact Page Loaded Successfully"
);


});