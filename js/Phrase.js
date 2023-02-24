/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const Phrase = class {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // adds a letter element to the phrase UL for each letter in the phrase
    addPhraseToDisplay = () => {
        const phraseAsArray = this.phrase.split('');
        const ul = document.getElementById('phrase').firstElementChild
        function addLI(text){
            const newLI = document.createElement('li');
            newLI.innerText = text;
            return newLI;
        }
        phraseAsArray.forEach( (each) => {
            const letter = addLI(each);
            ul.append(letter);
            if (each !== ' ') {
                letter.className += ' letter';
            } else if (each === ' ') {
                letter.className += ' space';
            }
        })
    }

    // check to see if the letter chosen by user is included in this phrase
    checkLetter = (letter) => {
        return this.phrase.includes(letter);
    }

    // add "show" class to letter element in the phrase UL 
    showMatchedLetter = (letter) => {1
        const letterArray = Array.from(letters);
        letterArray.forEach( i => {
            if (i.innerText === letter) {
                i.className += ' show';
            }
        })
    }
}