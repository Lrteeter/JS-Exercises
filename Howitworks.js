var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var promptMove = function() {
  var start = function (startMove) {


    var secondMove = "Destination tower ";
    rl.question(secondMove, finish);
  };

  var firstMove = "Starting tower ";
  rl.question(firstMove, start);

  var finish = function(endMove) {
    console.log(endMove);
    rl.close();
  };


};

promptMove();
