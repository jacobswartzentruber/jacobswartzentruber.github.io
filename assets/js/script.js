let lastScrollPosition = 0;
let lastDirection = "up";

//Hide and Reveal Navbar when scrolling
document.addEventListener('scroll', function(e) {
    let newScrollPosition = window.scrollY;
    
    if(lastDirection != "down" && newScrollPosition > lastScrollPosition){
        let d = document.querySelector('nav');
        d.style.top = (-d.offsetHeight-10) + "px";
        lastDirection = "down";
    }else if(lastDirection != "up" && newScrollPosition < lastScrollPosition){
        let d = document.querySelector('nav');
        d.style.top = "0px";
        lastDirection = "up";
    }

    lastScrollPosition = newScrollPosition;
});

//Smooth scrolling for nav links that accomodates nav-bar height
document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("click", (e) => {
        let sectionId = e.target.id.slice(4);
        let projectsY = document.querySelector("#"+sectionId).getBoundingClientRect().top;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollAmount = projectsY + scrollTop;
        if (projectsY < 0) scrollAmount -= document.querySelector("nav").offsetHeight;

        window.scrollTo({
            top: scrollAmount,
            left: 0,
            behavior: "smooth"
        })
    });
});