const elements = document.querySelectorAll('.element');
const btn = document.querySelector('button');
let isOpened = false;

btn.addEventListener('click', trigger);

function trigger() {
    if (!isOpened) {
        showElements();
        isOpened = true;
    } else {
        hideElements();
        isOpened = false;
    }
}

const showElements = debounce(function () {
    elements.forEach(element => {
        element.classList.remove('hide');
        element.classList.add('show');
    });
    btn.textContent = switchButtonText();
}, 1000);

const hideElements = debounce(function () {
    elements.forEach(element => {
        element.classList.remove('show');
        element.classList.add('hide');
    });
    btn.textContent = switchButtonText();
}, 1000);


function debounce(instruction, delay) {
    let timerID;
    return function () {
        clearTimeout(timerID);
        timerID = setTimeout(instruction, delay);
    };
}

function switchButtonText() {
    const btnText = isOpened ? 'Скрыть элементы' : 'Показать элементы';
    return btnText;
}