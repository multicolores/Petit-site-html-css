gsap.registerPlugin(ScrollTrigger);
// animation du header

gsap.from("header h1", {duration: 1, y: 100, delay: .5});
gsap.from("header p", {duration: 1, y: 100,  delay: 1});
gsap.from("header img", {duration: .7, x: 100, opacity: 0, delay: .5});
gsap.from("header button", {duration: .3, x:-10, opacity: 0,  delay: 1.5});
gsap.from("nav", {duration: 1, y: -100, delay: 1});

gsap.to(".right", {
    scrollTrigger:{
        trigger: '.right',
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





