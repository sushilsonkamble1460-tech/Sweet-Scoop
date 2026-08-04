/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


/*=========================================
      CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*=========================================
          STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


/*=========================================
      ACTIVE NAVIGATION LINK
=========================================*/

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(link => {

            link.classList.remove("active");

        });

        item.classList.add("active");

    });

});


/*=========================================
        HERO IMAGE EFFECT
=========================================*/

const heroImage = document.querySelector(".hero-image img");

heroImage.addEventListener("mouseenter", () => {

    heroImage.style.transform = "scale(1.08) rotate(-4deg)";

});

heroImage.addEventListener("mouseleave", () => {

    heroImage.style.transform = "";

});


/*=========================================
        SEARCH ICON
=========================================*/

const searchIcon = document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click", () => {

    alert("Search Feature Coming Soon!");

});


/*=========================================
          CART ICON
=========================================*/

const cartIcon = document.querySelector(".fa-cart-shopping");

cartIcon.addEventListener("click", () => {

    alert("Your Cart is Empty!");

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=========================================
          SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(".feature,.hero-text,.hero-image");

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
      BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#6B3E26";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

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
      HERO TEXT FADE
=========================================*/

window.addEventListener("load",()=>{

    document.querySelector(".hero-text").style.opacity="1";

    document.querySelector(".hero-image").style.opacity="1";

});


/*=========================================
      CONSOLE MESSAGE
=========================================*/

console.log("🍦 Sweet Scoop Website Loaded Successfully");