// function FeatherScroll(){
//   const scroll = new FeatherScroll();
// } FeatherScroll();


function locomotive() {
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
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
} locomotive();

function loadingAnnmation() {

  const tl = gsap.timeline()

  tl.to(".page1 .imgsec .imges6 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5
  })

  tl.to(".page1 .imgsec .imges2 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5
  })

  tl.to(".page1 .imgsec .imges3 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: -0.3
  })
  tl.to(".page1 .imgsec .imges4 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
  })

  tl.to(".page1 .imgsec .imges5 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: -0.2
  })

  tl.from(".centertext h1 span", {
    opacity: 0,
    y: 50,
    duration: 0.3,
    delay: -0.3,
    stagger: {
      ease: "power3.inOut",
      amount: 0.3
    }
  })
  tl.from("nav .left , .right , .page1 .bottom", {
    y: 100,
    duration: 0.5,
    delay: -0.5,
    stagger: {
      amount: 0.3
    }
  })

  tl.to(".page1 .imgsec .imges1 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: -0.4
  })
  tl.to(".page1 .imgsec .imges7 img", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: -0.3
  })



}
loadingAnnmation();

function scorllAnnmation() {
  var time = gsap.timeline({
    scrollTrigger: {
      trigger: `.page1`,
      start: `top top`,
      scrub: 2,
      scroller: `.main`,
      pin: true
    }
  })

  time.to(".page1 .imgsec .imges7 img", {
    top: `100%`,
    left: `70%`,
    duration: 0.5,
  })


  time.to(".page1 .imgsec .imges1 img", {
    top: `100%`,
    left: `-25%`,
    duration: 0.5,
    delay: -0.49
  })
  time.to(".page1 .imgsec .imges2 img", {
    top: `-15%`,
    left: `-15%`,
    duration: 0.5,
    delay: -0.48
  })

  time.to(".page1 .imgsec .imges5 img", {
    top: `-10%`,
    left: `105%`,
    duration: 0.5,
    delay: -0.47
  })

  time.to(".page1 .imgsec .imges4 img", {
    top: `100%`,
    left: `65%`,
    duration: 0.5,
    delay: -0.46
  })

  time.to(".page1 .imgsec .imges6 img", {
    top: `-42%`,
    left: `59%`,
    duration: 0.5,
    delay: -0.45
  })

  time.to(".page1 .imgsec .imges3 img", {
    top: `-47%`,
    left: `27%`,
    duration: 0.5,
    delay: -0.44
  })

  gsap.to("nav .right , .page1 .bottom", {
    opacity: 0,
    duration: 0.4,
    stagger: {
      amount: 0.1
    },
    scrollTrigger: {
      trigger: `.page1`,
      scroller: `.main`,
      start: `top 0%`,
      end: `top -5%`,
      scrub: 3,

    }
  })
}
scorllAnnmation();

function page2lines() {
  gsap.to(".page2 .secondline", {
    scale: 1,
    scrollTrigger: {
      trigger: `.page2 .secondline`,
      start: `top 100%`,
      scroller: `.main`,
      scrub: 2,
    }
  })

  gsap.to(".page2 .page2center .title2 h1", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      start: `top 95%`,
      trigger: `.page2 .page2center .title2 h1`,
      scroller: `.main`,
    }
  })

} page2lines();

function page3lines() {

  gsap.to("page3", {
    BorderBottom: `1px solid #A9ABB5`,
    scrollTrigger: {
      trigger: `.page3`,
      scroller: `.main`,
      start: `top 50%`,
    }
  })

  gsap.to(".page3 .page3line2", {
    scale: 1,
    duration: 2,
    scrollTrigger: {
      trigger: `.page3 .page3line2`,
      scroller: `.main`,
      start: `top 67%`,
    }
  })


  gsap.to(".page3 .page3line1", {
    height: `150vh`,
    duration: 2,
    scrollTrigger: {
      trigger: `.page2`,
      scroller: `.main`,
      start: `top -10%`,
    }
  })
} page3lines();

function page3imgAnnmation() {

  document.querySelector(".left img , .text").addEventListener("mouseenter", () => {
    gsap.to(".container .left img", {
      height: `80%`,
      width: `80%`,
    })
  })

  document.querySelector(".left img , .text").addEventListener("mouseleave", () => {
    gsap.to(".container .left img", {
      height: `60%`,
      width: `75%`,
    })
  })

  document.querySelector(".right ").addEventListener("mouseenter", (e) => {
    gsap.to(".container .right img", {
      height: `80%`,
      width: `80%`
    })
  })

  document.querySelector(".right").addEventListener("mouseleave", () => {
    gsap.to(".container .right img", {
      height: `60%`,
      width: `75%`,
    })
  })
} page3imgAnnmation();


function page4Annmation() {
  gsap.to(".page4 .hero h1", {
    transform: `rotate(90deg)`,
    scale: 5,
    fontSize: `70vw`,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger: {
      trigger: `.page4`,
      scroller: `.main`,
      start: `top top`,
      scrub: 2,
      pin: true
    }
  })
} page4Annmation();

function page5Annmation() {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.page5`,
      scroller: `.main`,
      start: `top top`,
      end: `bottom top`,
      scrub: 2,
      pin: `.page5`,
    }
  })


  tl.to(".page5 .img2", {
    top: 0,
    zIndex: 2,
    opacity: 1,
    duration: 2,
    scale: 1,
    ease: "slow(0.7,0.7,false)",

  })

  tl.to(".page5 .img3", {
    top: 0,
    zIndex: 3,
    opacity: 1,
    duration: 2,
    scale: 1,
    ease: "slow(0.7,0.7,false)",

  })
} page5Annmation();

function page6Annimation() {

  gsap.to(".page6 .line1", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      scroller: `.main`,
      trigger: `.page6`,
      start: `top 13%`,
      // markers:true
    }
  })

  gsap.to(".page6 .line2", {
    scale: 1,
    duration: 0.8,
    scrollTrigger: {
      scroller: `.main`,
      trigger: `.page6`,
      start: `top 10%`,
      markers:true
    }
  })
} page6Annimation();