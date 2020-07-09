import { getRandomThrow, checkResults } from './r-p-g.js';
// import functions and grab DOM elements
const button = document.querySelector('#play-button');
const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#losses');
const totalSpan = document.querySelector('#total');
const drawSpan = document.querySelector('#draw');
// initialize state
let draw = 0;
let wins = 0;
let total = 0;
let loss = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const player = document.querySelector('input:checked');

    let choice = player.value;
    console.log(choice);
    let computer = getRandomThrow();
    console.log(computer);

    let game = checkResults(choice, computer);
    if (game === 'wins') {
        wins ++;
        total ++;
    } else if (game === 'draw') {
    } else {
        loss++;
        total++;
    } 
    winSpan.textContent = `wins=${wins}`;
    lossSpan.textContent = `loss=${loss}`;
    totalSpan.textContent = `total=${total}`;
    drawSpan.textContent = `draw=${draw}`;

});