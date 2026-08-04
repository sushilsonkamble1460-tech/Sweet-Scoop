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
          PRODUCT SEARCH
=========================================*/


const searchInput =
document.querySelector(".search-box input");

const products =
document.querySelectorAll(".product-card");



if(searchInput){


searchInput.addEventListener("keyup",()=>{


let value =
searchInput.value.toLowerCase();



products.forEach(product=>{


let name =
product.querySelector("h3")
.innerText
.toLowerCase();



if(name.includes(value)){


product.style.display="block";


}

else{


product.style.display="none";


}



});


});


}





/*=========================================
          CATEGORY FILTER
=========================================*/


const categoryButtons =
document.querySelectorAll(".category button");



categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



let category =
button.innerText.toLowerCase();



products.forEach(product=>{


let title =
product.querySelector("h3")
.innerText
.toLowerCase();



if(category==="all"){


product.style.display="block";


}

else if(title.includes(category)){


product.style.display="block";


}

else{


product.style.display="none";


}



});



});


});






/*=========================================
          ADD TO CART
=========================================*/


const cartButtons =
document.querySelectorAll(".cart-btn");


let cartCount = 0;



cartButtons.forEach(button=>{


button.addEventListener("click",()=>{


cartCount++;


button.innerHTML =
"Added ✓";



button.style.background =
"#B86B2C";



alert(
"🍦 Ice Cream Added To Cart!"
);



setTimeout(()=>{


button.innerHTML =
"Add To Cart";


},1500);



});


});






/*=========================================
          WISHLIST BUTTON
=========================================*/


const wishButtons =
document.querySelectorAll(".wish-btn");



wishButtons.forEach(button=>{


button.addEventListener("click",()=>{


button.classList.toggle("liked");



if(button.classList.contains("liked")){


button.style.background="#B86B2C";

button.style.color="#fff";



alert(
"❤️ Added To Wishlist"
);



}

else{


button.style.background="#FFE5C7";

button.style.color="#B86B2C";


}



});


});







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
          NEWSLETTER
=========================================*/


const newsletter =
document.querySelector(".newsletter form");



if(newsletter){



newsletter.addEventListener("submit",(e)=>{


e.preventDefault();



let email =
newsletter.querySelector("input").value;



if(email===""){


alert(
"Please Enter Your Email"
);



}

else{


alert(
"🎉 Thank You For Subscribing Sweet Scoop!"
);



newsletter.reset();


}



});


}






/*=========================================
          SCROLL ANIMATION
=========================================*/


const animationItems =
document.querySelectorAll(

".product-card, .benefit-card, .review-card, .cart-box"

);



animationItems.forEach(item=>{


item.style.opacity="0";

item.style.transform=
"translateY(50px)";

item.style.transition=
"0.8s";


});





function scrollAnimation(){



animationItems.forEach(item=>{


let position =
item.getBoundingClientRect().top;



let screen =
window.innerHeight;



if(position < screen - 100){


item.style.opacity="1";


item.style.transform=
"translateY(0)";


}



});



}



window.addEventListener(
"scroll",
scrollAnimation
);


scrollAnimation();







/*=========================================
          NAVBAR SHADOW
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
          PAGE LOAD MESSAGE
=========================================*/


window.addEventListener("load",()=>{


console.log(
"🍦 Sweet Scoop Shop Page Loaded Successfully"
);


});