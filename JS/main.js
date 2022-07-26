gsap.registerPlugin(ScrollTrigger);
// --------------------------------
// Scroll To
// --------------------------------
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const linkAbout = document.querySelector('.link-to-about')
const linkProjects = document.querySelector('.link-to-projects')
const linkContact = document.querySelector('.link-to-contact')
linkAbout.addEventListener('click', () => aboutSection.scrollIntoView({behavior: 'smooth'}));
linkProjects.addEventListener('click', () => projectsSection.scrollIntoView({behavior: 'smooth'}));
linkContact.addEventListener('click', () => contactSection.scrollIntoView({behavior: 'smooth'}));
// --------------------------------
// Words Animation Data 
// --------------------------------
const swiperWrapper1 = document.querySelector('.swiper-wrapper1');
const words = ['web development', 'innovation', 'design', 'technology', 'animation', 'game design', 'audio innovation', '3d', 'ambisonic mix'];

let allWords = words.map((word) => {
    return `<h3 class="words-animation contactInView swiper-slide">${word}</h3>`;
}).join('');
swiperWrapper1.innerHTML = allWords;
// --------------------------------
// Words Animation Functionality
// --------------------------------
const swiper1 = new Swiper('.swiper1', {
    loop: true,
    autoplay: {
        delay: 1500
    },
    direction  : 'vertical',
    clickable: false,
    allowTouchMove: false
});
ScrollTrigger.create({
    trigger: '.interested',
    start: 'top 80%',
    end: 'bottom 80%',
    // markers: true,
    onEnter: () => {
        setTimeout(() => {
            swiper1.autoplay.start();
        }, 1500);
    },  
    onLeaveBack: () => {
        swiper1.autoplay.stop();
    },
});
document.addEventListener('DOMContentLoaded', () => {
    swiper1.autoplay.stop();
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
                <h2 class="project-name" onclick={window.open('${project.url}')}>${project.name}</h2>
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
// --------------------------------
// GSAP
// --------------------------------

// --------------------------------
// Intro 
// --------------------------------
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
gsap.to('.intro-p', {
    scrollTrigger: {
        trigger: '.intro-p',
        scrub: 0.7,
        // markers: true,
        start: 'top center'
    },
    y: 300,
    opacity: 0,
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
// Projects Section In-View Animation
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
// --------------------------------
// Alter BG Color
// --------------------------------
const sections = gsap.utils.toArray('.section');
sections.forEach((section, i) => {
    var colorAttr = section.getAttribute('data-color');

    gsap.to('.body', {
        backgroundColor: colorAttr,
        immediateRender: false,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top bottom',
            end: '+=100%'
        }
    })
});
// --------------------------------
// Button Functionalities
// --------------------------------
const btn = document.querySelector('.btn');
const myEmail = document.querySelector('.email');
var copyText = document.querySelector('.copy-email');
copyText.innerHTML = copyText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

btn.addEventListener('mouseover', () => {
    anime({
        targets: '.copy-email span',
        translateY: [20, 0],
        duration: 400,
        easing: 'easeOutElastic(1, .6)',
        delay: anime.stagger(20),
    });
});
const swiper2 = new Swiper('.swiper2', {
    duration: 1500,
    clickable: false,
    allowTouchMove: false
});
    btn.addEventListener('click', () => {
        copyToClipboard();
        
        swiper2.slideNext();
    });
    function copyToClipboard(){
        let inputEl = document.createElement('input');
        inputEl.value = myEmail.innerText;
        document.body.appendChild(inputEl);
        inputEl.select();
        document.execCommand('copy');
        inputEl.parentNode.removeChild(inputEl);
    };
btn.addEventListener('mouseout', () => {
    anime({
        targets: '.copy-email span',
        translateY: [0, 20],
        duration: 400,
        easing: 'easeInElastic(1, .6)',
        delay: anime.stagger(20, {from: 'last'}),
    });
    setTimeout(() => {
        swiper2.slidePrev();
    }, 500);
});

/* ---------------- */
/* Try
/* ---------------- */
// document.body.addEventListener('mousemove', (event) => {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     gsap.set('.cursor', {
//         x: mouseX,
//         y: mouseY,
//     });
//     gsap.to('.shape', {
//         x: mouseX,
//         y: mouseY,
//         stagger: -0.05
//     });
// });