let input = require("fs").readFileSync("/dev/stdin", "UTF-8");
let array = input["split"]("\n");
let result = "";
for (let i = 0; i < array.length; i++) {
  let data = array[i].split(" ")["map"](Number);
  let fScore = data[0];
  let lScore = data[1];
  let retest = data[2];
  if (fScore === -1 && lScore === -1 && retest === -1) {
    break;
  }
  if (i !== 0) {
    result += "\n";
  }
  if (fScore === -1 || lScore === -1) {
    result += "F";
  } else {
    let sum = fScore + lScore;
    switch (true) {
      case sum >= 80:
        result += "A";
        break;
      case sum >= 65 && sum < 80:
        result += "B";
        break;
      case sum >= 50 && sum < 65:
        result += "C";
        break;
      case sum >= 30 && sum < 50:
        result += retest >= 50 ? "C" : "D";
        break;
      default:
        result += "F";
    }
    ;
  }
}
console.log(result);
