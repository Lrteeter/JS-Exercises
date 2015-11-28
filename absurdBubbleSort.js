var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){
  askIfGreaterThan(arr[0], arr[1], function(){});
}

function askIfGreaterThan(el1, el2, callback){
  var qstring = "Is " + el1 + " greater than " + el2 + "? (y/n) : ";
  rl.question(qstring, function(answer){
    if (answer === "y"){
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        var elem1 = arr[i];
        var elem2 = arr[i + 1];
        arr[i] = elem2;
        arr[i + 1] = elem1;
        madeAnySwaps = true;
      }
    });
    innerBubbleLoop(arr, i + 1, madeAnySwaps, console.log("outerBubbleSortLoop"));
  } else {
    console.log("outerBubbleSortLoop(madeAnySwaps)");
  }
}



absurdBubbleSort([3,1,2], function(){});
