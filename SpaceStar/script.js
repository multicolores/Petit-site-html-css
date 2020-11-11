gsap.registerPlugin(ScrollTrigger);

// animation du header

gsap.from("header h1", {duration: 1, y: 200, delay: .5});
// gsap.from("header img", {duration: .7, x: 100, opacity: 0, delay: 1});
gsap.from("header p", {duration: 1, y: 100,  delay: 1.5});
gsap.from("header .a", {duration: 1, x: -200,  delay: 1.5});
gsap.from("header span img", {duration: 1, opacity: 0,  delay: 1.5});


gsap.from("nav", {duration: 1, y: -10, opacity: 0, delay: 1.5});


gsap.to(".right_text", {
    scrollTrigger:{
        trigger: '.right_text',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});

gsap.to(".left_text", {
    scrollTrigger:{
        trigger: '.left_text',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});

gsap.to(".left2", {
    scrollTrigger:{
        trigger: '.left2',
        start: "center bottom"
    },
    x: 0,
    opacity: 1,
    duration: 1,
});


gsap.to(".img", {
    scrollTrigger:{
        trigger: '.img',
        start: "center bottom"
    },
    opacity: 0.4,
    duration: 1,
    scale: 1,
});



