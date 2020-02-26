var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAllStringPermutations(string) {
  var results = [];

  if (string.length === 1) {
    //if string is only 1 character, then just add to results and finish
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    //get the first character
    var currentChar = string[i];
    //store chars left to parse
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    //get next char, excluding the current char
    var innerPermutations = getAllStringPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      //generate char by adding current char + all generated inner permutations
      results.push(currentChar + innerPermutations[j]);
    }
  }
  return results;
}
function init() {
  var string = rl.question(
    "Enter the string you want to get all permutations of\n",
    answer => {
      var permutations = getAllStringPermutations(answer);

      console.log("Here are your results:");
      permutations.forEach(result => {
        console.log(result);
      });
      process.exit(1); git init
    }
  );
}
init();
