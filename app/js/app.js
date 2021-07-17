// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
import Swiper from 'swiper';
import 'bootstrap/dist/js/bootstrap.bundle.min'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

// document.addEventListener('DOMContentLoaded', () => {
//
// 	// Custom JS
//
// })

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});
