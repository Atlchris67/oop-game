/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseletters = this.phrase.split('');
        phraseletters.forEach(character => this.createSpace(character));
    };

    removePhrase() {
        $('#phrase ul').empty();
    };

    /**
     * Adds lettes to the board
     * @ param {*} letter 
     */
    createSpace(letter) {
        const $space = $('<li></li>');
        const $destination = $('#phrase ul');
        if (letter === ' ') {
            $space.addClass(`space`);
        } else {
            $space.addClass(`hide letter ${letter}`);
            $space.text(letter);
        }
        $destination.append($space);
    }

    /**
     * Checks if passed letter is in phrase
     * @ param (string) letter - Letter to check
     */
    checkLetter(letter) {
        return this.phrase.split(letter).length - 1;

    }


    /**
     * Displays passed letter on screen after a match is found
     * @ param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        //show the the letter on the board
        $(".letter:contains('" + letter + "')").removeClass('hide').addClass('show');
        //update the keyboard
        $(".key:contains('" + letter + "')").addClass('chosen').off();;
    }



}