gsap.registerPlugin(ScrollTrigger);

gsap.to('.line1-slide', {
    scrollTrigger: {
        trigger: '.line1-slide',
        start: '2% 23%',
        // markers: true,
        scrub: 0.5
    },
    x: 300
});
gsap.to('.line2-slide', {
    scrollTrigger: {
        trigger: '.line2-slide',
        start: '-105% 23%',
        // markers: true,
        scrub: 0.5
    },
    x: -300
});


gsap.from('.aboutInView', {
    scrollTrigger: {
        trigger: '.aboutInView',
        start: 'top 80%',
        end: 'bottom 0%',
        // markers: true,
        toggleActions: 'play complete none reverse',
    },
    stagger: {
        amount: 0.5
    },
    y: 50,
    opacity: 0,
    // duration: .5
});

gsap.to('.about-star', {
    scrollTrigger: {
        trigger: '.about-star',
        // markers: true,
        scrub: true,
    },
    rotate: 90,
});

