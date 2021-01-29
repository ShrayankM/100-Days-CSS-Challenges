const priceCard1 = document.querySelector('.price__card--1');
const priceCard2 = document.querySelector('.price__card--2');
const priceCard3 = document.querySelector('.price__card--3');

const barUser = document.querySelector('.bar__user');
const barData = document.querySelector('.bar__data');
const barProject = document.querySelector('.bar__project');

priceCard1.addEventListener('mouseover', function() {
    // console.log('get');
    barUser.classList.add('bar__user--basic');
    barData.classList.add('bar__gb--basic');
    barProject.classList.add('bar__proj--basic');
})

priceCard1.addEventListener('mouseout', function() {
    // console.log('get');
    barUser.classList.remove('bar__user--basic');
    barData.classList.remove('bar__gb--basic');
    barProject.classList.remove('bar__proj--basic');
})

priceCard2.addEventListener('mouseover', function() {
    // console.log('get');
    barUser.classList.add('bar__user--pro');
    barData.classList.add('bar__gb--pro');
    barProject.classList.add('bar__proj--pro');
})

priceCard2.addEventListener('mouseout', function() {
    // console.log('get');
    barUser.classList.remove('bar__user--pro');
    barData.classList.remove('bar__gb--pro');
    barProject.classList.remove('bar__proj--pro');
})

priceCard3.addEventListener('mouseover', function() {
    // console.log('get');
    barUser.classList.add('bar__user--pre');
    barData.classList.add('bar__gb--pre');
    barProject.classList.add('bar__proj--pre');
})

priceCard3.addEventListener('mouseout', function() {
    // console.log('get');
    barUser.classList.remove('bar__user--pre');
    barData.classList.remove('bar__gb--pre');
    barProject.classList.remove('bar__proj--pre');
})