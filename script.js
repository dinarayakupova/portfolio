//Animation
//Hello there

gsap.from(".hello", {
    x:-100,
    delay:1
})

gsap.from (".hero-image", {x: 100})

gsap.from(".steps-full", {y:100})


//links, gradual appearance
gsap.from (".link", {
    opacity:0,
    duration:2,
    delay:2,
    stagger: 0.6
})

// Sections on scroll
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    gsap.from(section, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top bottom-=200",
            end: "bottom center",
            toggleActions: "play none none reverse"
        }
    });
});


var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

//headline appearing
let text = "I am Dinara, a web developer skilled in design";
let index = 0;
let speed = 150;

function type() {
    if(index < text.length) {
        document.querySelector("#text").textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
    
    }
}

type();

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

//date for footer

function Footer () {
let year = new Date().getFullYear();
    document.querySelector(".footerYear").textContent = year;

}

Footer();
