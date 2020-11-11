gsap.registerPlugin(ScrollTrigger);
// animation du header

gsap.from("header .red_rectangle", {duration: .7, width: 0, opacity: 0, delay: 0.2});
gsap.from("header h1", {duration: 1, y: 150, delay: 1});
gsap.from("header img", {duration: .7, x: 100, opacity: 0, delay: 1});

gsap.from("header h3", {duration: .5, opacity: 0, y:-30, delay: 1.5});
gsap.from("header p", {duration: 1, y: 100,  delay: 1.5});


gsap.from("header button", {duration: .3, x:-10, opacity: 0,  delay: 1.5});
gsap.from("nav", {duration: 1, y: -100, delay: 2});


gsap.to(".right", {
    scrollTrigger:{
        trigger: '.right',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});
gsap.to(".images", {
    scrollTrigger:{
        trigger: '.images',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});
gsap.to(".left", {
    scrollTrigger:{
        trigger: '.left',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});





