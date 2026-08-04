/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

}

/*=========================================
        SEARCH
=========================================*/

const searchInput=document.querySelector(".search-box input");

const cards=document.querySelectorAll(".card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

/*=========================================
      CATEGORY FILTER
=========================================*/

const categoryButtons=document.querySelectorAll(".category button");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

categoryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category=button.innerText.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(category==="all"){

card.style.display="block";

}

else if(title.includes(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});

/*=========================================
        HEART BUTTON
=========================================*/

const hearts=document.querySelectorAll(".heart");

hearts.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("liked");

if(btn.classList.contains("liked")){

btn.style.background="#ff4b5c";
btn.style.color="#fff";

}

else{

btn.style.background="#FFE7E7";
btn.style.color="#ff4b5c";

}

});

});

/*=========================================
        ADD TO CART
=========================================*/

let cartCount=0;

const cartButtons=document.querySelectorAll(".cart");

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

alert("🍦 Item Added To Cart!\n\nTotal Items : "+cartCount);

});

});

/*=========================================
      STICKY HEADER
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveal=document.querySelectorAll(".card,.review-card,.offer,.newsletter");

function revealItems(){

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-120){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

reveal.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s";

});

window.addEventListener("scroll",revealItems);

revealItems();

/*=========================================
        LOADER
=========================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

/*=========================================
      BACK TO TOP BUTTON
=========================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#6B3E26";
topBtn.style.color="#fff";
topBtn.style.fontSize="18px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.25)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

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

/*=========================================
      SOCIAL ICON EFFECT
=========================================*/

const social=document.querySelectorAll(".social-icons a");

social.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px) rotate(360deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0)";

});

});

/*=========================================
        NEWSLETTER
=========================================*/

const form=document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=form.querySelector("input").value;

if(email===""){

alert("Please Enter Your Email");

}

else{

alert("🎉 Thank You For Subscribing!");

form.reset();

}

});

}

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("🍦 Sweet Scoop Flavours Page Loaded Successfully");