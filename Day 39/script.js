const navContainer = document.querySelector('.nav__container');
const navList = document.querySelector('.nav__list');

let flag = true;

const delayWide = function () {
    const navLines = document.querySelectorAll('.nav__line');
    navLines.forEach(function (nav) {
        nav.classList.toggle('nav__line-wide');
    });
}

const shrinkExpand = function () {
    document.querySelector('.nav__line--bottom').classList.toggle('nav__line-wide-bottom');
    document.querySelector('.nav__line--top').classList.toggle('nav__line-wide-top');
}


navContainer.addEventListener('click', function (event) {

    if (flag) {
        shrinkExpand();
        navList.classList.toggle('show');
        setTimeout(delayWide, 1000);
        flag = false;
    }
    else {
        delayWide();
        navList.classList.toggle('show');
        setTimeout(shrinkExpand, 1000);
        flag = true;
    }
});