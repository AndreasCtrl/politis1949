// Initiate the effect on DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function () {
//     if (textArray.length) setTimeout(type, newTextDelay + 250);
// });



// =============================================================================

// Back to top button

const topButton = document.getElementById('topBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}
// When the user clicks on the button, scroll to the top of the document
function topBtn() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});