/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game
const startBtn = document.getElementById('btn__reset');
const letters = document.getElementsByClassName('letter');
const livesObject = document.getElementsByClassName('tries')[0].parentElement;
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON' && button.className !== 'chosen') {
        game.handleInteraction(button);
    }
})

// const game = new Game();

// game.startGame();
// console.log('active phrase: ' + game.activePhrase.phrase)