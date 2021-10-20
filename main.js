// Landing typing effect

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = ['a Web Developer', 'a Problem Solver', 'Creative', 'a team player'];
const typingDelay = 120;
const erasingDelay = 80;
const newTextDelay = 900; // Delay between texts
let textArrayIndex = 0;
let charIndex = 0;

// Typing text

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

// Deleting text

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}


// Initiate the effect on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});



// =============================================================================

// Toggle between dark and light mode

const checkbox = document.getElementById('chk');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

// =============================================================================

// Back to top button

const topButton = document.getElementById('topBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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