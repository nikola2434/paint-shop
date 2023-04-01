gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".header-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".header-section",
        start: "top",
        end: "800",
        scrub: true,
      },
    }
  );

  const itemsLeft = gsap.utils.toArray(".container-causes-left .text-item");
  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0.4, x: -70 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "-100",
        },
      }
    );
  });

  const itemsRight = gsap.utils.toArray(".container-causes-right .text-item");
  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0.4, x: 70 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "-100",
        },
      }
    );
  });
}
