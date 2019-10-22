/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
$('.pyro').hide();

$('#btn__reset').click(function (event) {
    game.startGame();
    $('#overlay').hide();
});


$('.key').click(function (e) {
    const letter = $(this).text();
    game.handleInteraction(letter);
});

//Adapted from https://stackoverflow.com/questions/5271129/do-an-alert-on-keyup-only-if-the-key-is-a-letter-or-number
$(document).keypress(function(e) {
    var charTyped = String.fromCharCode(e.which).toLowerCase();
    if (/[a-zA-Z]/i.test(charTyped)) {
        game.handleInteraction(charTyped);
    }
});