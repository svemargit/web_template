let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let modeToggle = document.querySelector('.mode-toggle');
let toggleSlider = document.querySelector('.toggle-slider');

// Check and set initial state of the navbar and toggle based on localStorage
window.addEventListener('DOMContentLoaded', () => {
    const isNavbarOpen = localStorage.getItem('navbarOpen') === 'true';
    const isToggleOpen = localStorage.getItem('toggleOpen') === 'true';

    if (isNavbarOpen) {
        navigation.classList.add('active');
    }

    if (isToggleOpen) {
        menuToggle.classList.add('active');
    }
});

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    // Store the state of the toggle in localStorage
    localStorage.setItem('navbarOpen', navigation.classList.contains('active'));
}

modeToggle.onclick = function() {
    document.body.classList.toggle('light-mode');
    modeToggle.querySelector('.light-icon').classList.toggle('active-icon');
    modeToggle.querySelector('.dark-icon').classList.toggle('active-icon');
    toggleSlider.style.transform = document.body.classList.contains('light-mode') ? 'translateX(100%)' : 'translateX(0)';

    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Check and set initial theme based on localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleSlider.style.transform = 'translateX(100%)';
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        toggleSlider.style.transform = 'translateX(0)';
    }
});

let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}
function showContent(contentId) {
    console.log('showContent called with contentId:', contentId);

    // Hide all content sections
    $('.content').removeClass('active');

    // Show the selected content section
    $('#' + contentId + '-content').addClass('active');
}

// Get references to the open and close spans
const openSpan = document.querySelector('.open');
const closeSpan = document.querySelector('.close');

// Initialize a variable to track the current state
let isOpen = true;
closeSpan.style.display = 'none';

// Add a click event listener to the toggle container
document.querySelector('.toggle').addEventListener('click', function () {
    if (isOpen) {
        // If open span is visible, hide it and show close span
        openSpan.style.display = 'none';
        closeSpan.style.display = 'inline';
    } else {
        // If close span is visible, hide it and show open span
        openSpan.style.display = 'inline';
        closeSpan.style.display = 'none';
    }

    // Toggle the state
    isOpen = !isOpen;
});