
gsap.from(".hero h1", {
opacity:0,
y:80,
duration:1.5
});

gsap.from(".cta",{
opacity:0,
y:40,
delay:0.6,
duration:1
});

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});
