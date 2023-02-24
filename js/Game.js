/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const Game = class {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'You win some you lose some'},
            {phrase: 'A penny saved is a penny earned'},
            {phrase: 'To be or not to be that is the question'},
            {phrase: 'thats just the way the cookie crumbles'},
            {phrase: 'rebel without a cause'}
        ];
        this.activePhrase = null;
    }

    // selects a random phrase from the array and creates a new instance of the Phrase class
    getRandomPhrase () {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        const selectedPhrase = this.phrases[randomNumber].phrase;
        return new Phrase(selectedPhrase);
    }

    // start game: set active phrase, load to display, and remove overlay
    startGame () {
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    // when the length of the array of letters is equal to the array of revelead letters, returns true fora  win (otherwise false)
    checkForWin () {
        const revealedLetters = document.getElementsByClassName('show');
        return revealedLetters.length === letters.length;
    }

    // removes a heart when the an incorrect letter is guessed
    removeLife () {
        const i = 5 - this.missed;
        const heartImg = livesObject.querySelector(`:nth-child(${i})`).lastElementChild;
        heartImg.setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        console.log(this.missed);
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    // determines win or lose based on parameter passed in and resets the game
    gameOver (gameWon) {
        const hearts = Array.from(livesObject.children);
        if (!gameWon) {
            overlay.className = 'lose';
            title.innerText = "Sorry, you didn't win! try again?"
        } else if (gameWon) {
            overlay.className = 'win';
            title.innerText = "Congratulations! you've won!";
        }
        overlay.style.display = 'flex';
        // reset phrase and buttons
        phrase.firstElementChild.innerHTML = '';
        document.querySelectorAll('#qwerty button').forEach(i => {
            i.className = 'key';
            i.removeAttribute('disabled');
        })
        hearts.forEach(i => {
            i.firstChild.setAttribute('src', 'images/liveHeart.png');
        })

    }

    // control user interaction with the keyboard
    handleInteraction (button) {
        const letter = button.innerText;
        console.log('letter ' + letter + ' was clicked');
        button.setAttribute('disabled', 'true');
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            button.className = 'chosen';
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }
}