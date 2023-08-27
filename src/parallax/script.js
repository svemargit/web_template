let introOne = document.getElementById('introOne');
let introTwo = document.getElementById('introTwo');
let divers = document.getElementById('divers')
let reef = document.getElementById('reef');
let coral = document.getElementById('coral');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    introOne.style.marginLeft = value * 2.5 + 'px';
    introTwo.style.marginLeft = value * 1.8 + 'px';
    divers.style.marginLeft = value * (-1.5) + 'px';
    reef.style.marginTop = value * 0.4 + 'px';
    coral.style.marginLeft = value * (-0.2) + 'px';
});