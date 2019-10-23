/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.reset = false;
    }

    /**
     * Creates phrases for use in game
     * @ return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [
            new Phrase('Hush Your Mouth'),
            new Phrase('Hold Your Horses'),
            new Phrase('Bless Your Heart'),
            new Phrase('Two Peas In A Pod'),
            new Phrase('Full As A Tick')
        ]
        return phrases;
    };

    /**
     * Selects random phrase from phrases property
     * @ return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        //Step 1. get random number - the random number is from 0-length, just like an array so no need to add one.
        var phraseIndex = Math.floor((Math.random() * this.phrases.length));
        //Step 2. Use random number to get random quote from array of objects
        //Step 3. return the quote object
        return this.phrases[phraseIndex];
    };

    /**
    * Checks for winning move
    * @ return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        //if none of the phrase letters still hidden - yippee they won
        if ($('.hide').length === 0) {
            this.gameOver(true);
        };
    };

    /**
     * Displays game over message
     * @ param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(winner) {
        //used ternary statements to change bacnkground color and game over message 
        $('#overlay').show().css("background-color", winner ? "lime" : "tomato");
        $('#game-over-message').text(winner ? "Great Job!" : "Sorry, better luck next time!");
        //if they won show the fireworks
        if (winner) {
            $('.pyro').show();
        }
        this.reset = true;
    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const $hearts = $('img[src="images/liveHeart.png"]');
        //I did it my way......(then chickened out)
        //let heartCount = $hearts.length;

        this.missed++;
        //if (heartCount > 1) {
        //this is hard coded but should not be...:(
        if (this.missed < 5) {

            $hearts.first().attr("src", "images/lostHeart.png").attr("alt", "Lost Heart Icon");
        } else {
            this.gameOver(false);
        }
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        if (this.reset) {
            this.resetGame();
        }
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();

    };


    /**
     * Resets game by clearing the keyboard and game board of classes, reset the heart images, stops pyro show for winners and restores click event to all keys used in the last game.
     */
    resetGame() {
        $(".key").removeClass('wrong chosen').off();
        $('img[src="images/lostHeart.png"]').attr("src", "images/liveHeart.png").attr("alt", "Heart Icon");
        $('.key').click(function (e) {
            const letter = $(this).text();
            game.handleInteraction(letter);
        });
        this.activePhrase.removePhrase();
        this.missed = 0;
        $('.pyro').hide();

    }
    
    /** 
     * Handles events raised forn app.js for letters being played
     */
    handleInteraction(letter) {

        const count = this.activePhrase.checkLetter(letter);
        if (count > 0) {
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            $(".key:contains('" + letter + "')").addClass('wrong').off();;
            this.removeLife();
        }


    };
}