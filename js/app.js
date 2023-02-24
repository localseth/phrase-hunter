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

// construct new Game class when 'start' button is clicked
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// add event listeners to each button on the on-screen keyboard
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON' && button.className !== 'chosen') {
        game.handleInteraction(button);
    }
})

// allow user to type on the keyboard to check letters
addEventListener("keyup", (event) => {
    let button;
    document.querySelectorAll('#qwerty button').forEach( i => {
        if (i.innerText === event.key.toString()) {
            button = i;
            game.handleInteraction(i);
        }
    })
})