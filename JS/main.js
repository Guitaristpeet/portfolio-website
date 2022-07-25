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

// gsap.from('.contactInView', {
//     scrollTrigger: {
//         trigger: '.contactInView',
//         start: 'top 80%',
//         end: 'bottom 0%',
//         // markers: true,
//         toggleActions: 'play none none reverse',
//     },
//     stagger: {
//         amount: 0.8
//     },
//     y: 35,
//     opacity: 0,
// });

gsap.to('.arrow-down', {
    y: 5,
    repeat: -1,
    yoyo: true,
})

// var text = document.querySelector('.scroll-down');
// text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//     .add({
//         targets: '.scroll-down span',
//         translateX: [0, -20],
//         easing: 'linear',
//         duration: 500,
//         delay: anime.stagger(100),
//     })
//     .add({
//         delay: 500,
//     })
//     .add({
//         targets: '.scroll-down span',
//         translateX: [-20, 0],
//         easing: 'linear',
//         duration: 500,
//         delay: anime.stagger(100, {from: 'last'}),
//     });

const words = ['web development', 'innovation', 'technology', 'design', 'immersive experience', '3d', 'animation', 'game design', 'audio innovation', 'spatial audio', 'ambisonic mix'];
const wordsAnim = document.querySelector('.words-animation');

// words.forEach((word) => {
//     let result = `<span class='letter'>${word}</span>`;
//     wordsAnim.innerHTML = result;

//     anime.timeline({
//         target: wordsAnim,
//         translateY: [0, -100],
//         easing: 'linear',
//         duration: 500,
//         delay: 1000
//     })

// });
// let allWords = words.map((word) => {
//     return `<h3 class="words-animation contactInView">${word}</h3>`;
// }).join('');
// wordsAnim.innerHTML = allWords;





// var text = document.querySelector('.words-animation');
// text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//     .add({
//         targets: '.scroll-down span',
//         translateX: [0, -20],
//         easing: 'linear',
//         duration: 500,
//         delay: anime.stagger(100),
//     })
//     .add({
//         delay: 500,
//     })
//     .add({
//         targets: '.scroll-down span',
//         translateX: [-20, 0],
//         easing: 'linear',
//         duration: 500,
//         delay: anime.stagger(100, {from: 'last'}),
//     });

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1500
    },
    direction  : 'vertical',
    clickable: false,
    allowTouchMove: false
});