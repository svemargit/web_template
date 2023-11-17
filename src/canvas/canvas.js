var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set canvas width based on viewport size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 1; //100vh

var stars = [];

function drawStar(x, y, radius, spikes, color) {
    ctx.beginPath();
    ctx.moveTo(x, y - radius);
    for (var i = 0; i < spikes; i++) {
        ctx.lineTo(
            x + Math.cos((i * 2 * Math.PI) / spikes) * radius,
            y + Math.sin((i * 2 * Math.PI) / spikes) * radius
        );
        ctx.lineTo(
            x + Math.cos(((i + 0.5) * 2 * Math.PI) / spikes) * (radius / 2),
            y + Math.sin(((i + 0.5) * 2 * Math.PI) / spikes) * (radius / 2)
        );
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function createStars() {
    for (var i = 0; i < 200; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var radius = Math.random() * 2 + 1;
        var spikes = Math.floor(Math.random() * 5) + 5;
        var color = "rgba(255, 255, 0, " + Math.random() + ")";
        var speedX = (Math.random() - 0.5) *0.5; // Random horizontal speed between -1 and 1
        var speedY = (Math.random() - 0.5)*0.5; // Random vertical speed between -1 and 1
        if (i > 150) {
            speedX = (Math.random() - 0.5) * 3; // Random horizontal speed between -1 and 1
            speedY = (Math.random() - 0.5) * 3;
        }

        stars.push({x, y, radius, spikes, color, speedX, speedY});
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];

        drawStar(star.x, star.y, star.radius, star.spikes, star.color);

        // Update star position
        star.x += star.speedX;
        star.y += star.speedY;

        if (i < 180) {
            if (star.x - star.radius < 0 || star.x + star.radius > canvas.width) {
                star.speedX = -star.speedX;
            }
            if (star.y - star.radius < 0 || star.y + star.radius > canvas.height) {
                star.speedY = -star.speedY;
            }
        }


    }
    requestAnimationFrame(drawStars);
}


createStars();
drawStars();

//smooth scroll
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            const targetOffset = targetElement.getBoundingClientRect().top;
            const duration = 1000; // Adjust the duration in milliseconds (1 second in this example)
            const startingY = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            function scroll() {
                const elapsed = 'now' in window.performance ? performance.now() - startTime : new Date().getTime() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, startingY + targetOffset * progress);

                if (progress < 1) {
                    requestAnimationFrame(scroll);
                }
            }

            scroll();
        });
    });
});