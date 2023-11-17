let intro1 = document.getElementById('overlay-image1');
let intro2 = document.getElementById('overlay-image2');
const maxScroll2 = 200;
let intro3 = document.getElementById('overlay-image3');
let header = document.getElementById('header');

function isMobile() {
    return window.innerWidth <= 768; // Adjust the screen width as needed
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;
        intro1.style.marginBottom = value * (-1.5) + 'px';
    if (value <= 250) {
        if (!isMobile()) {
            intro3.style.marginTop = value * 0.4 + 'px';
        }
        if (value > 25) {
            header.style.top = value * 0.1 + 'px';
        } else {
            header.style.top = '-30px';
        }
    }

        intro2.style.marginLeft = value * (-2.5) + 'px';
    intro2.style.marginBottom = '0';
    // introOne.style.marginLeft = value * (-1.5) + 'px';
    // coral.style.marginLeft = value * (-0.2) + 'px';
});