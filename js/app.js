const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

const selectBeginButton = document.querySelector('#begin-game');

selectBeginButton.addEventListener('click', function() {
    console.log(this);
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    game.startGame()
});

/** 
 * Listen for keyboard presses
 */

document.addEventListener('keydown', function(event){
    game.handleKeydown(event);
});
