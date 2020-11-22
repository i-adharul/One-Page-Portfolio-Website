const navs = document.querySelectorAll('.nav');

let x = '';
for(let nav of navs){
    nav.addEventListener('click', function(event) {
        const target = event.target;
  
        if (target.classList.contains('nav-me')) {
            x = '.hero'
        } else if(target.classList.contains('nav-about')){
            x = '.about'
        } else if(target.classList.contains('nav-portfolio')){
            x = '.portfolio'
        } else if(target.classList.contains('nav-contact')){
            x = '.contact'
        }

        document.querySelector(x).scrollIntoView({
            behavior: 'smooth'
        });;
    });
}

let heroOffsetTop = document.querySelector('.hero').offsetTop;
let aboutOffsetTop = document.querySelector('.about').offsetTop;
let portfolioOffsetTop = document.querySelector('.portfolio').offsetTop;
let portfolioOffsetBottom = portfolioOffsetTop + document.querySelector('.portfolio').offsetHeight - 30;

let navi = document.getElementById("navigation")
function removeActive(){
    let currentActive = navi.getElementsByClassName("active");
    currentActive[0].className = currentActive[0].className.replace(" active", "");
}

window.addEventListener("scroll", function(event) {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("navigation").className = "nav-bg";
      } else {
        document.getElementById("navigation").className = "";

        removeActive();

        let activePreparation = navi.getElementsByClassName("nav-me");
        activePreparation[0].classList.add("active");
    }

    if ((document.body.scrollTop >= aboutOffsetTop || 
        document.documentElement.scrollTop >= aboutOffsetTop) && 
        (document.body.scrollTop < portfolioOffsetTop || 
            document.documentElement.scrollTop < portfolioOffsetTop)) {
        removeActive();

        let activePreparation = navi.getElementsByClassName("nav-about");
        activePreparation[0].classList.add("active");
    }

    if ((document.body.scrollTop >= portfolioOffsetTop || 
        document.documentElement.scrollTop >= portfolioOffsetTop) && 
        (document.body.scrollTop < portfolioOffsetBottom || 
            document.documentElement.scrollTop < portfolioOffsetBottom)) {
        removeActive();

        let activePreparation = navi.getElementsByClassName("nav-portfolio");
        activePreparation[0].classList.add("active");
    }

    if ((document.body.scrollTop >= portfolioOffsetBottom || 
        document.documentElement.scrollTop >= portfolioOffsetBottom)) {
        removeActive();

        let activePreparation = navi.getElementsByClassName("nav-contact");
        activePreparation[0].classList.add("active");
    }
});