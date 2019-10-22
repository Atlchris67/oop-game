/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();

    }

    addPhraseToDisplay(){
        const phraseletters = this.phrase.split('');
        phraseletters.forEach(character => this.createSpace(character));
    }

    createSpace(letter){
        const $space = $('<li></li>');
        const $destination = $('#phrase ul');
        if (letter === ' '){
            $space.addClass(`space`);
        } else {
            $space.addClass(`hide letter ${letter}`);
            $space.text(letter);
        }
        $destination.append($space);
    }

}