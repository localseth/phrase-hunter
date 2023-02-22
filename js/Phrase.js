/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const Phrase = class {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

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

    checkLetter = (btn) => {
        const letterSelect = btn.innerText;
        const letterAll = document.getElementsByClassName("letter");
        const letterArray = Array.from(letterAll);
        let match = null;
        for (each of letterArray) {
            if (each.innerText === letterSelect) {
                match = letterSelect;
                each.className += ' show';
            }
        }
        return match;
    }

    showMatchedLetter = () => {

    }
}