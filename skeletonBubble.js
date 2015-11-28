var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  var qstring = "Is " + el1 + " greater than " + el2 + "? (y/n) : ";
  reader.question(qstring, function(answer){
    if (answer === "y"){
      callback(true);
    } else {
      callback(false);
    }
  });
}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
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
    innerBubbleLoop(arr, (i + 1), madeAnySwaps, console.log("ourtLoop"));
  } else {
    console.log("outerBubbleSortLoop(madeAnySwaps)");
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true){
      innerBubbleLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback();
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
