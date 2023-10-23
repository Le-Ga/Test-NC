const figures = document.querySelectorAll('.square, .rectangle, .circle, .triangle');
figures.forEach(figure => {
    console.log(figure);
    if (figure.classList.contains('square')) {
        figure.addEventListener('click', function () {
            figure.classList.toggle('square-animation');
        });
    }
    if (figure.classList.contains('rectangle')) {
        figure.addEventListener('click', function () {
            figure.classList.toggle('rectangle-animation');
        });
    }
    if (figure.classList.contains('circle')) {
        figure.addEventListener('click', function () {
            figure.classList.toggle('circle-animation');
        });
    }
    if (figure.classList.contains('triangle')) {
        figure.addEventListener('click', function () {
            figure.classList.toggle('triangle-animation');
        });
    }
});



const cube = document.querySelector('.cube');
let rotation = 0;

setInterval(() => {
    rotation += 1;
    cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
}, 50);