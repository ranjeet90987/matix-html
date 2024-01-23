 gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

 const smoother = ScrollSmoother.create({
   content: "#wrapper",
   smooth: 3,
   effects: true
 });

//  smoother.effects(".aboutpgim", { speed: "auto", lag: 0.1 });
//  smoother.effects(".ourbuninpgim img", { speed: "auto", lag: 0.2});

 var win = $(this);
 if(win.width()>1025){
  const galleryWrapper = document.querySelector('.gallery-wrapper')
  const gallery = document.querySelector('.gallery')

  const tl = gsap.timeline()
  tl.to(gallery, {
    x: `-${gallery.offsetWidth+1116}`,
    scrollTrigger: { 
      trigger: galleryWrapper,
      start: 'top top',
      end: `+=${gallery.offsetWidth}`,
      pin: true,
      scrub: 1,
    }
  });
}


