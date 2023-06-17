const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline(); 

tl.to('#page1', {
    y:"100vh",
    scale: 0.4,
    duration: 0
})

tl.to('#page1',{
    y: "30vh",
    duration: 1.5,
    scale: 0.6,
    delay: 0
})

tl.to('#page1',{
    y: "0vh",
    duration: 1,
    scale: 0.7,
    delay: 0
})

tl.to('#page1',{
    y: "0vh",
    rotate:720,
    scale:1,
    duration: 1,
    delay: 0
})