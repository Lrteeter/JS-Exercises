var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0){
    completionCallback(sum);
  } else {
    rl.question("Enter a number: ", function(numString1){
      sum += parseInt(numString1);
      console.log("total is " + sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  }
}
