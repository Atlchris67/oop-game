/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

$('#btn__reset').click(function(event){
    game.startGame();
    $('#overlay').hide();
});



