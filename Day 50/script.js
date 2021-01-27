const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const timer__content = document.querySelector('.timer__content');
timer__content.textContent = "";
// const date = new Date();
// const load__time = date.getTime() / 1000;

let flag = true;
let cnt = 0;

stop.addEventListener('click', function () {
    stop.classList.toggle('visibility');
    start.classList.toggle('visibility');
    flag = false;
})

start.addEventListener('click', function () {
    start.classList.toggle('visibility');
    stop.classList.toggle('visibility');
    flag = true;
})


setInterval(function () {

    if (flag) {
        // const date = new Date();
        // const current__time = date.getTime() / 1000;
        // timer__content.textContent = `${Math.trunc(current__time - load__time)}`.padStart(4, '0');
        cnt++;
        timer__content.textContent = `${cnt}`.padStart(4, '0');
        console.log()
    }
}, 1000);
