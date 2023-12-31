
//Smooth Scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


//Locomotive with ScrollTrigger
function locoinit(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoinit();

// Mouse Follower
var cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (details) => {
    gsap.to(cursor,{
        x: details.clientX,
        y: details.clientY,
        duration: .3,
        ease: Expo,
    })
}) //can add transition prop in css to change smoothness and movement



//Animations
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-text-container h1",
        scroller: ".main",
        start: "top 29%",
        end: "top 0%",
        scrub: 3,
    }
})

tl.to(".hero-text-container h1:nth-child(1)",{
    x: -200,
    ease: Power3,
},"anim")
tl.to(".hero-text-container h1:nth-child(2)",{
    x: 200,
    ease: Power3
},"anim")
tl.to("section video",{
    width:"99%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-text-container h1",
        scroller: ".main",
        start: "top -50%",
        end: "top -120%",
        scrub: 3,
    }
})
tl2.to(".main",{
    backgroundColor: "#fff",
    ease: Expo.easeInOut,
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-text-container h1",
        scroller: ".main",
        start: "top -350%",
        end: "top -380%",
        scrub: 3,
    }
})
tl3.to(".main",{
    backgroundColor: "#0f0d0d",
})

