/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    
    createPhrases(){
        const phrases = [
            new Phrase('Hush Your Mouth'),
            new Phrase('Hold Your Horses'),
            new Phrase('Bless Your Heart'),
            new Phrase('Two Peas In A Pod'),
            new Phrase('Full As A Tick')
        ]
        return phrases;
    }

    getRandomPhrase() {
        //Step 1. get random number - the random number is from 0-length, just like an array so no need to add one.
        var phraseIndex = Math.floor((Math.random() * this.phrases.length));
        //Step 2. Use random number to get random quote from array of objects
        //Step 3. return the quote object
        return this.phrases[phraseIndex];
      };

    startGame() {
        const randomPhrase = game.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();

        $('.key').click(function(e){
            
            const count = phrase.phrase.split($(this).text()).length -1;
            
           
               console.log(count);
           
        });



    };

    count (phrase, letter){
      const letters = phrase.split('');  
      return  phrase.split('').reduce((count, letter) => {return (phrase.includes(letter))?count + 1: count;}, 0);
    }
}