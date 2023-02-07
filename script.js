gsap.set("#imagehead", {
    opacity: 0,
    y: "-70%",
})

gsap.to("#imagehead", {

    opacity: 1,
    dalay: 2,
    y: "0%",
    duration: 3,
    ease: Expo.easeInOut,

})
gsap.set("#imagehead #circle", {
    opacity: 0,
    x: "-170%",
    rotate: "-360deg",

    scale: 3
})
gsap.to("#imagehead #circle", {

    opacity: 1,
    rotate: "0deg",

    x: "30%",
    duration: 3,
    scale: 1,
    // ease: Expo.easeInOut,

})

gsap.to("#imagtwo #right ", {

    scrollTrigger: {
        trigger: "#imagtwo",
        start: "top top",
        scrub: 1,
        end: "20% -10%",
        //    markers: true,

    },
    y: "10%",
    duration: 3,
    scrub: 1,
    ease: Power1

})
gsap.set("#imagthree #right ", {
    scale: 0.8,
})
gsap.from("#imagthree #right ", {

    scrollTrigger: {
        trigger: "#imagthree",
        start: "top top",
        scrub: 1,
        end: "20% 0%",
        //    markers: true,

    },
    scale: 1,
    duration: 3,
    scrub: 3,
    ease: Expo.easeInOut

})
gsap.from("#imagthree #left #circle ", {

    scrollTrigger: {
        trigger: "#imagthree  #left ",
        start: "-20% 50%",
        scrub: 1,

        //    markers:  true,

    },
    scale: 1.5,
    rotate: "360deg",
    delay: 1,
    duration: 10,
    scrub: 3,
    ease: Expo.easeInOut

})


document.querySelector("#imagefive #imgfor").addEventListener("mousemove", function () {
    document.querySelector("#imagefive #imgfor img").style.scale = 0.8;
    document.querySelector("#imagefive #imgfor img").style.transition = all, 2;

})
document.querySelector("#imagefive #imgfor").addEventListener("mouseleave", function () {
    document.querySelector("#imagefive #imgfor img").style.scale = 1;
    document.querySelector("#imagefive #imgfor img").style.transition = all, 2;
})




const toggle = document.getElementById("light");
const body = document.querySelector("body");
let circle=document.querySelector("#imagthree #left ")


toggle.addEventListener('click', function () {

    if (this.classList.toggle('light')) {
        toggle.classList.add("ri-moon-fill");
        toggle.classList.remove(`ri-sun-line`);
        body.style.background = "black";
        body.style.color = "white";
       circle.style.background = "black";
       document.querySelector("#row").style.background = "white";
       document.querySelector(".footer").style.background = "black";
       document.querySelector(".footer").style.color = "white";
       document.querySelector(".footer p").style.color = "white";
circle.style.background="black";
   }
    else {
        toggle.classList.add("ri-sun-line");
        toggle.classList.remove(`ri-moon-fill`);
        body.style.background = "white";
        body.style.color = "black";
        document.querySelector(".footer").style.background = "white";
        document.querySelector(".footer").style.color = "black";
        document.querySelector(".footer p").style.color = "black";
    
    }

})
