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
        start: 'top 85%',
        end: 'bottom 0%',
        // markers: true,
        toggleActions: 'play complete none reverse',
    },
    stagger: {
        amount: 0.5
    },
    y: 50,
    opacity: 0,
});

gsap.to('.about-star', {
    scrollTrigger: {
        trigger: '.about-star',
        scrub: true,
    },
    rotate: 90,
});

gsap.from('.projInView', {
    scrollTrigger: {
        trigger: '.projInView',
        start: 'top 80%',
        end: 'bottom 0%',
        // markers: true,
        toggleActions: 'play none none reverse',
    },
    stagger: {
        amount: 1
    },
    y: 50,
    opacity: 0,
});

gsap.from('.project-line', {
    scrollTrigger: {
        trigger: '.projInView',
        start: 'top 80%',
        end: 'bottom 0%',
        // markers: true,
        toggleActions: 'play none none reverse',
    },
    stagger: {
        amount: 1.25
    },
    scaleX: 0,
    ease: "power2.inOut"
});

gsap.to('.proj-star', {
    scrollTrigger: {
        trigger: '.proj-star',
        scrub: true,
    },
    rotate: 90,
});

gsap.from('.contactInView', {
    scrollTrigger: {
        trigger: '.contactInView',
        start: 'top 80%',
        end: 'bottom 0%',
        markers: true,
        toggleActions: 'play none none reverse',
    },
    stagger: {
        amount: 0.8
    },
    y: 35,
    opacity: 0,
});