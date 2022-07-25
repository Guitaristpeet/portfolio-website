// --------------------------------
// Words Animation Data and Functionality
// --------------------------------
const swiperWrapper = document.querySelector('.swiper-wrapper');
const words = ['web development', 'innovation', 'technology', 'design', '3d', 'animation', 'game design', 'audio innovation', 'spatial audio', 'ambisonic mix'];

let allWords = words.map((word) => {
    return `<h3 class="words-animation contactInView swiper-slide">${word}</h3>`;
}).join('');
swiperWrapper.innerHTML = allWords;

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1500
    },
    direction  : 'vertical',
    clickable: false,
    allowTouchMove: false
});

// --------------------------------
// Projects Data and Functionality
// --------------------------------
const projectsContainer = document.querySelector('.projContainer');
let allProject = projects.map((project, index) => {
    const div = document.createElement('div');
    div.classList.add('project');
    let num = index + 1;
    div.innerHTML = `
        <div class="line project-line"></div>
            <div class="project-content projInView">
                <p class="project-num">0${num}</p>
                <h2 class="project-name">${project.name}</h2>
                <div class="project-info">
                    <p class="project-desc">${project.desc}</p>
                    <p class="technology">${project.technologies}</p>
                </div>
            </div>`;
    projectsContainer.appendChild(div);
});
const lineDiv = document.createElement('div');
lineDiv.classList.add('line', 'project-line-last');
projectsContainer.appendChild(lineDiv);

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
// --------------------------------
// About Section In-View Animation
// --------------------------------
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
// --------------------------------
// Prohects Section In-View Animation
// --------------------------------
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
// --------------------------------
// Contact Section In-View Animation
// --------------------------------
gsap.from('.contactInView', {
    scrollTrigger: {
        trigger: '.contactInView',
        start: 'top 80%',
        end: 'bottom 0%',
        // markers: true,
        toggleActions: 'play none none reverse',
    },
    stagger: {
        amount: 0.8
    },
    y: 35,
    opacity: 0,
});
// --------------------------------
// Star Animation
// --------------------------------
gsap.to('.about-star', {
    scrollTrigger: {
        trigger: '.about-star',
        scrub: true,
    },
    rotate: 90,
});
gsap.to('.proj-star', {
    scrollTrigger: {
        trigger: '.proj-star',
        scrub: true,
    },
    rotate: 90,
});
gsap.to('.contact-star', {
    scrollTrigger: {
        trigger: '.contact-star',
        scrub: true,
    },
    rotate: 90,
});
// --------------------------------
// Arrow-down Animation
// --------------------------------
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


