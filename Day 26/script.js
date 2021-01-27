let current = 0;

const cardBtn = document.querySelectorAll('.card__btn');

cardBtn.forEach(function(btn, index) {
    btn.addEventListener('click', function(event) {
        document.querySelector(`.card--${current}`).classList.remove('show');

        current = (current + 1) % 3;
        console.log(current);
        document.querySelector(`.card--${current}`).classList.add('show');
    })
})