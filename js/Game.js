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

    getRandomPhrase () {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        const selectedPhrase = this.phrases[randomNumber].phrase;
        return new Phrase(selectedPhrase);
    }

    startGame () {
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin () {
        const revealedLetters = document.getElementsByClassName('show');
        return revealedLetters.length === letters.length;
    }

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