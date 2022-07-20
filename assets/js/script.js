const burger = document.querySelector("#burger-menu");
const navigation = document.querySelector(".navigation");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

let lastScrollPosition = 0;
let lastDirection = "up";

//Hide and Reveal Navbar when scrolling
document.addEventListener('scroll', function(e) {
    //If on mobile screen, hide navbar
    navigation.classList.remove("show");

    let newScrollPosition = window.scrollY;
    
    if(lastDirection != "down" && newScrollPosition > lastScrollPosition){
        navbar.style.top = (-navbar.offsetHeight-10) + "px";
        lastDirection = "down";
    }else if(lastDirection != "up" && newScrollPosition < lastScrollPosition){
        navbar.style.top = "0px";
        lastDirection = "up";
    }

    lastScrollPosition = newScrollPosition;
});

//Smooth scrolling for nav links that accomodates nav-bar height
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        //If on mobile screen, hide navbar
        navigation.classList.remove("show");

        let sectionId = e.target.id.slice(4);
        let projectsY = document.querySelector("#"+sectionId).getBoundingClientRect().top;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollAmount = projectsY + scrollTop;
        if (projectsY < 0) scrollAmount -= navbar.offsetHeight;

        window.scrollTo({
            top: scrollAmount,
            left: 0,
            behavior: "smooth"
        })
    });
});

//Toggle nav bar links when burger menu clicked
burger.addEventListener("click", (e) => {
    navigation.classList.toggle("show");
});