const pos = document.querySelector('.btn--positive');
const neg = document.querySelector('.btn--negative');
const cnt = document.querySelector('.btn--counter');

let counter = 0;
pos.addEventListener('click', function() {
    counter++;
    cnt.classList.add('hide');

    setTimeout(() => { 
        cnt.textContent = counter;
        cnt.classList.remove('hide'); 
    }, 400);
});

neg.addEventListener('click', function() {
    counter--;
    cnt.classList.add('hide');

    setTimeout(() => { 
        cnt.textContent = counter;
        cnt.classList.remove('hide'); 
    }, 400);
});