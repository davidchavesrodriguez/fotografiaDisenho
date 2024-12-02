let horizontalSection = document.querySelector(".horizontal");

console.log(horizontalSection.scrollWidth);

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

<<<<<<< HEAD
const menuNavegacion = document.getElementById("menu-navegacion");
=======
// SCROLL NAVIGATION

const menuNavegacion = document.getElementById('menu-navegacion')
>>>>>>> 68b60b0c544b1ac3c5d2badab2b090200770f2a0

// window.addEventListener('scroll', () => {
//     const scrollPosition  = window.scrollY;

<<<<<<< HEAD
//     if(scrollPosition >= window.innerHeight) {
//         menuNavegacion.classList.add('fixed')
//     } else {
//         menuNavegacion.classList.remove('fixed')
//     }
// }
// );
=======
    if(scrollPosition >= window.innerHeight) {
        menuNavegacion.style.top = '100%'
        menuNavegacion.classList.add('fixed')
    } else {
        menuNavegacion.classList.remove('fixed')
        menuNavegacion.style.top = '35vh'
    }
}
);
>>>>>>> 68b60b0c544b1ac3c5d2badab2b090200770f2a0
