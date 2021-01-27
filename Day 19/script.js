const dots__container = document.querySelector('.dots__container');
const dot__solid = document.querySelector('.dot__solid');

const frame = document.querySelector('.frame');

let current = 1;

dots__container.addEventListener('click', function (event) {
    const i = event.target.id;
    dot__solid.classList.remove(`position__${current}`);
    frame.classList.remove(`background__${current}`);
    current = i;
    dot__solid.classList.add(`position__${current}`);
    frame.classList.add(`background__${current}`);
});