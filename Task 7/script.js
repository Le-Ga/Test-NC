const wrapper = document.querySelector('.wrapper');

const randomNumber = Math.floor(Math.random() * 91) + 10;

for (let i = 0; i < randomNumber; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = getRandomColor();
    wrapper.append(block);
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}