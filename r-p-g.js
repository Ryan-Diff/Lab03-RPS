export function getRandomThrow() {
    let value = Math.ceil(Math.random() * 3);

    if (value === 1) {
        return value = 'rock';

    } else if (value === 2) {
        return value = 'paper';

    } else {
        return value = 'scissors';
    }
}

export function checkResults(player, computer) {

    if (player === computer) {
        return 'draw';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'loss';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'rock' && computer === 'paper') {
        return 'loss';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'loss';
    } else {
        return 'win';
    }
}