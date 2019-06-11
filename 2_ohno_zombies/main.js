

$(document).ready(init);

var roll;

function init(){
    roll = new OhNoZombies();
    $('#roll-dice-button').on("click", roll.rollBothDice);

}
class OhNoZombies {
    constructor() {
        this.dice = {
            players: $('#player-die'),
            zombies: $('#zombie-die'),
        };
        this.squares = $('.space');
        this.playerDie = $('#player-die');
        this.zombieDie = $('#zombie-die');
        this.gamePieces = {
            players: [
                { dom: $('.player-human'), position: 8},
            ],
            zombies: [
                { dom: $('.player-zombie'), position: 1}
            ]
        };
        this.currentPlayer = 0;
        this.currentZombie = 0;
        this.positionZombie = $('.player-zombie').position();
        this.positionHuman = $('.player-human').position();
        this.rollBothDice = this.rollBothDice.bind(this);

        this.moveGamePiece(this.gamePieces.players[0]);
        this.moveGamePiece(this.gamePieces.zombies[0]);        
    }

    rollBothDice() {

        this.pieceRoll('players');
        this.pieceRoll('zombies');
    }
    diceRoll(type) {
        var diceType = (type === 'zombies') ? 'z' : '';
        var roll = Math.floor(Math.random() * 6) + 1;
        var dieImage = "assets/dice-images/"+diceType+"dice" + roll + ".png";
        this.dice[type].css('background-image', 'url(' + dieImage + ")");
        return roll;

    }
    moveGamePiece(piece) {
        var maxLength = this.squares.length;
        var position = piece.position;
        var dom = piece.dom;
        if(position >= maxLength){
            position = position - maxLength;
        }
        var destinationSquare = this.squares[position];
        $(destinationSquare).append(dom);

    }
    pieceRoll(type) {
        var currentPiece = this.gamePieces[type][this.currentPlayer];
        var currentPosition = currentPiece.position;
        currentPiece.position += this.diceRoll(type);
        this.moveGamePiece( currentPiece );
        
        return;
        
    }
    zombieCollision() {
        var zombieModal = document.getElementById('zombie-collision');
        if(roll.gamePieces.players[0].position === roll.gamePieces.zombies[0].position) {
            console.log("they are in the same location");            
           zombieModal.style.display = "block";
        }
    }

}

