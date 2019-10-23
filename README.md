# OOP Game
Object oriented browser-based, word guessing game developed to practice theprinciples of object-oriented Programming.

## Rules of the Game:
    The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
    The player clicks an onscreen keyboard to guess letters in the phrase.
    The letter is disabled on the onscreen keyboard and a player can't select that letter again.
    If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
    If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
    The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

## Project Restrictions and Assumptions

    Use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.
    Create a Game class for managing the game.
    Create a Phrase class to help with creating an array of Phrase objects.
    A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).
    If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.
    A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.
    
## Extra Credit

### Add keyboard functionality
    Let players use their physical computer keyboard to enter guesses. You'll need to use the keydown or keyup event.
### Making the project your own
    The general layout should remain the same, but your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
    Detail your style changes in your README.md file and in your submission notes.
    *Project has bursts of confetti using keyframe animations on the winning screen.
