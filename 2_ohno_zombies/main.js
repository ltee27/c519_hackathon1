

$(document).ready(init);

var roll;

function init(){
    roll = new randomNumDice();
    $('#roll-dice-button').on("click", roll.rollBothDice);
}
class randomNumDice {
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
        }
        this.currentPlayer = 0;
        this.currentZombie = 0;
        this.positionZombie = $('.player-zombie').position();
        this.positionHuman = $('.player-human').position();
        this.rollBothDice = this.rollBothDice.bind(this);

        this.moveGamePiece(this.gamePieces.players[0]);
        this.moveGamePiece(this.gamePieces.zombies[0]);
        
    }

    rollBothDice() {
//        this.zombieRoll();
//        this.playerRoll();
        this.pieceRoll('players');
        this.pieceRoll('zombies');
    }
    zombieRoll() {
        this.zombieVal = this.diceRoll('zombies');
        this.zombieDieImg = "assets/dice-images/zdice" + this.zombieVal + ".png";
        this.zombieDie.css('background-image', 'url(' + this.zombieDieImg + ')');
        switch (this.zombieVal) {
            case 1:
                $('.player-zombie').css('left', this.positionZombie.left += 76);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
            case 2:
                $('.player-zombie').css('left', this.positionZombie.left += 152);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
            case 3:
                $('.player-zombie').css('left', this.positionZombie.left += 228);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
            case 4:
                $('.player-zombie').css('left', this.positionZombie.left += 304);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
            case 5:
                $('.player-zombie').css('left', this.positionZombie.left += 380);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
            case 6:
                $('.player-zombie').css('left', this.positionZombie.left += 456);
                console.log("coordinates: ", $('.player-zombie').position());
                break;
        }
        if (this.positionZombie.left > 1220) {
            $('.player-zombie').css('left', 1220);
             $('.player-zombie').css('top',this.positionZombie.top += 100);
        }
        
    }
    diceRoll(type) {
        var diceType = (type === 'zombies') ? 'z' : ''; 
        var roll = Math.floor(Math.random() * 6) + 1;
        var dieImage = "assets/dice-images/"+diceType+"dice" + roll + ".png";
        this.dice[type].css('background-image', 'url(' + this.playerDieImg + ")");
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
}

// class zombieCard(){
//     constructor(){
//         this.a = 'The trips over a stray appendage and hits the ground with a thud. Move four spaces';
//         this.b = 'You decide its time to take care of this business slo-mo Kung-fu style! First you leg sweep the zombie then you hit him with a palm thrust to the sternum. Move six spaces.';
//         this.c = 'The zombie reaches for you, but you duck beneath its arms and crawl between its legs. Move two spaces.';
//         this.d = 'As the zombie gets closer, you close your eyes and await your doom..but nothing happens. You open your eyes and see the zombie lying motionless beside you. You nudge it with your foot. Yep, its dead.';
//         this.e = 'As the zombie approaches, you laugh and figure you\'ll wake up from this nightmare any time now. Oops! The zombie bites your face and you become a zombie yourself.';
//         this.f = 'You dive into an open grave and when the zombie peers in, you pretend to be a zombie. The zombie isn\'t fooled. It jumps into the grave and gnaws on you until you become a zombie for real.';
//         this.g = 'You slap the zombie square in the face and tell it to go back to the grave. For a moment, it\'s stunned, but then it recovers and bites you repeatedly until you become a zombie yourself.';
//         this.h = 'The zombie grabs your arm and you let out a piercing scream. It\'s no use though. The zombie munches on your arm like a turkey leg and you become a zombie.';
//         this.zombieCardPile = [a,b,c,d,e,f,g,h];
//     }
//     randomZombieCard(array) {
//         this.randomCard = Math.floor(Math.random() * this.zombieCardPile.length);
//         console.log(this.zombieCardPile[this.randomCard]);
//         return this.randomCard;
//     }
// }

// function ZombieCard(){ //add clickhandler to call this function which returns a zombieCard
//     return randomZombieCard(zombieCardPile);
// }