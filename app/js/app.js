// // Import jQuery module (npm i jquery)
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min'
// import AOS from 'aos';
// import 'particles.js/particles'
// import 'particles.js/demo/js/lib/stats'
import $ from 'jquery'

window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

})


// Custom JS
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                    ;
                });
            }
        }
    });


const swiper = new Swiper('.services-swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // when window width is >= 640px
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        412: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        414: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const swiper2 = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        // when window width is >= 480px
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        412: {
            slidesPerView: 1,
        },
        414: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const swiper3 = new Swiper('.clients-swiper ', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 70,
    loop: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    autoplay: {
        delay: 8000,
    },
    navigation: {
        nextEl: ".clients-swiper-next",
        prevEl: ".clients-swiper-prev",
    },
    breakpoints: {
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        576: {
            slidesPerView: 2,
        },
        412: {
            slidesPerView: 1,
        },
        414: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }

    }
});

const swiper4 = new Swiper('.p-swiper ', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper5 = new Swiper('.s-swiper ', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//mobile menu
$('.menu_burger').click(function () {
    $(".mobile_menu-wrap").toggleClass("mobile_menu-active");
});

$('.navbar_top-cancel').click(function () {
    $(".mobile_menu-wrap").removeClass("mobile_menu-active");
});




/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 380,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#567dd9"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": true,
//             "distance": 120,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 6,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 800,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "grab"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 140,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });


//
// /* ---- stats.js config ---- */
//
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


