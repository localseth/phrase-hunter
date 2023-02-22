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
}