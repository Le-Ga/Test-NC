const video = document.querySelector('#videoPlayer');
const timer = document.querySelector('#timer');

let intervalId;

video.addEventListener('loadedmetadata', function () {
    timer.textContent = formatTime(video.currentTime);
});

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        startTimer();
    } else {
        video.pause();
        clearInterval(intervalId);
    }
});

video.addEventListener('timeupdate', function () {
    timer.textContent = formatTime(video.currentTime);

    if (video.currentTime === video.duration) {
        video.pause();
        video.currentTime = 0;
        clearInterval(intervalId);
    }
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    let milliseconds = Math.floor((time % 1) * 1000);
    return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}

function padTime(value) {
    return value.toString().padStart(2, '0');
}

function startTimer() {
    intervalId = setInterval(() => {
        timer.textContent = formatTime(video.currentTime);
    }, 10);
}
