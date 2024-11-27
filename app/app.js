
let horizontalSection = document.querySelector('.horizontal')

console.log(horizontalSection.scrollWidth)

// gsap.to('.horizontal', {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: '.horizontal',
//         start: 'center center',
//         end: '+=3000px',
//         pin: '.container',
//         scrub: true,
//         markers: true,
//         invalidateOnRefresh: true,
//     }
// })

const menuNavegacion = document.getElementById('menu-navegacion')

window.addEventListener('scroll', () => {
    const scrollPosition  = window.scrollY;

    if(scrollPosition >= window.innerHeight) {
        menuNavegacion.classList.add('fixed')
    } else {
        menuNavegacion.classList.remove('fixed')
    }
}
);