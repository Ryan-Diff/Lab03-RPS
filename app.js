import { getRandomThrow, checkResults } from './r-p-g.js';
// import functions and grab DOM elements
const button = document.querySelector('#play-button');
const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#losses');
const totalSpan = document.querySelector('#total');
const drawSpan = document.querySelector('#draw');
const resetButton = document.getElementById('reset-button');
const resetSpan = document.querySelector('#reset');
// initialize state
let draw = 0;
let wins = 0;
let total = 0;
let loss = 0;
let reset = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const player = document.querySelector('input:checked');

    let choice = player.value;
    // console.log(choice);
    let computer = getRandomThrow();
    // console.log(computer);

    let game = checkResults(choice, computer);
    if (game === 'win') {
        wins ++;
        total ++;
    } else if (game === 'draw') {
        draw ++;
        total ++;

    } else if (game === 'loss') {
        loss++;
        total++;
        
    } 
    winSpan.textContent = `wins=${wins}`;
    lossSpan.textContent = `loss=${loss}`;
    totalSpan.textContent = `total=${total}`;
    drawSpan.textContent = `draw=${draw}`;
    // Need to connect the reset span 

});

const resetPage = () => {
    const userChoice = window.confirm('Are you sure?');

    if (userChoice === true) {
        /* document.location.reload(); */
        draw = 0;
        wins = 0;
        total = 0;
        loss = 0;
        winSpan.textContent = `wins=${wins}`;
        lossSpan.textContent = `loss=${loss}`;
        totalSpan.textContent = `total=${total}`;
        drawSpan.textContent = `draw=${draw}`;
    } else {
        return false;
    }
};

resetButton.addEventListener('click', () => {
    resetPage();
    reset++;
    console.log(reset);
    resetSpan.textContent = `reset=${reset}`;
});