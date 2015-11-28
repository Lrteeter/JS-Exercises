var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Hanoi(){
  this.stacks = [[3,2,1],[],[]];
}

Hanoi.prototype.isWon = function() {
  if (this.stacks[0].length === 0) {
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
      return true;
    }
  }
  return false;
};

Hanoi.prototype.isValidMove = function(moves){
  var start = this.stacks[moves[0]][this.stacks[moves[0]].length - 1];
  var finish = this.stacks[moves[1]][this.stacks[moves[1]].length - 1];

  if (typeof finish === "undefined" || start < finish)  {
    return true;
  }
  return false;
};

Hanoi.prototype.print = function() {
  console.log(this.stacks);
};

Hanoi.prototype.promptMove = function(move) {
  this.print();
  rl.question("Start tower ", function (startMove){
    rl.question("End tower ", function (endMove){
      var startTowerIdx = parseInt(startMove);
      var endTowerIdx = parseInt(endMove);
      move([startTowerIdx, endTowerIdx]);
    });
  });
};

Hanoi.prototype.move = function(moves) {
  if (this.isValidMove(moves) === true) {
    this.stacks[moves[1]].push(this.stacks[moves[0]].pop());
  } else {
    console.log("Invalid move");
  }
};

Hanoi.prototype.run = function() {
  var game = this;
  if (this.isWon() === false)  {
    // var makeMove = function (moves){
    //   game.move(moves);
    //   game.run();
    // };

  this.promptMove(function (moves){
    game.move(moves);
    game.run();
  });
  } else {
    console.log("You rock!");
    rl.close();
  }
};

var game = new Hanoi;
game.run();
