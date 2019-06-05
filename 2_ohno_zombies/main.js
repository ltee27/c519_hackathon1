$(document).ready(init);
function init(){
    
}
var randomNum = null;
function randomNumDice(){ //add button click handler to call this function to generate num
    //$(event.currentTarget).
    randomNum = Math.floor(Math.random() *6) +1;
    return randomNum;
}