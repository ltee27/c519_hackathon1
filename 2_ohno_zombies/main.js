

$(document).ready(init);
function init(){
    $('#roll-dice-button').on("click", randomNumDice);

}
    

function randomNumDice(){ 
    var playerDie = $('#player-die');
    var zombieDie = $('#zombie-die');
    var playerVal = Math.floor(Math.random() *6) +1;
    var zombieVal = Math.floor(Math.random() *6) +1;
    var playerDieImg = "assets/dice-images/dice" +playerVal+ ".png";
    var zombieDieImg = "assets/dice-images/zdice" +zombieVal+ ".png";
    playerDie.css('background-image', 'url(' +playerDieImg+ ')');
    zombieDie.css('background-image', 'url(' +zombieDieImg+ ')');
}
var a = 'The trips over a stray appendage and hits the ground with a thud. Move four spaces';
var b = 'You decide its time to take care of this business slo-mo Kung-fu style! First you leg sweep the zombie then you hit him with a palm thrust to the sternum. Move six spaces.';
var c = 'The zombie reaches for you, but you duck beneath its arms and crawl between its legs. Move two spaces.';
var d = 'As the zombie gets closer, you close your eyes and await your doom..but nothing happens. You open your eyes and see the zombie lying motionless beside you. You nudge it with your foot. Yep, its dead.';
var e = 'As the zombie approaches, you laugh and figure you\'ll wake up from this nightmare any time now. Oops! The zombie bites your face and you become a zombie yourself.';
var f = 'You dive into an open grave and when the zombie peers in, you pretend to be a zombie. The zombie isn\'t fooled. It jumps into the grave and gnaws on you until you become a zombie for real.';
var g = 'You slap the zombie square in the face and tell it to go back to the grave. For a moment, it\'s stunned, but then it recovers and bites you repeatedly until you become a zombie yourself.';
var h = 'The zombie grabs your arm and you let out a piercing scream. It\'s no use though. The zombie munches on your arm like a turkey leg and you become a zombie.';



var zombieCardPile = [a,b,c,d,e,f,g,h];

function randomZombieCard(array) {
  var randomCard = Math.floor(Math.random() * zombieCardPile.length);
  console.log(zombieCardPile[randomCard]);
  return randomCard;
}

function ZombieCard(){//add clickhandler to call this function which returns a zombieCard
    return randomZombieCard(zombieCardPile);
}