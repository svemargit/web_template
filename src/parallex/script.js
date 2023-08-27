let introOne = document.getElementById('introOne');
let introTwo = document.getElementById('introTwo');
/*let blueBack = document.getElementById('blueBack');*/
let diver = document.getElementById('diver');
let coralReef = document.getElementById('coralReef');
let coral = document.getElementById('coral');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    introOne.style.marginLeft = value * 2.5 + 'px';
    introTwo.style.marginLeft = value * 1.8 + 'px';
    diver.style.marginTop = value * 0.4 + 'px';
    coral.style.marginLeft = value * (-0.1) + 'px';
});