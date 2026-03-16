var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  if (Arr[i] == -1) {
    break;
  }
  var a = Arr[i];
  var sum = 1150;
  if (a > 10 && a <= 20) {
    sum = 1150 + (a - 10) * 125;
  } else if (a > 20 && a <= 30) {
    sum = 2400 + (a - 20) * 140;
  } else if (a > 30) {
    sum = 3800 + (a - 30) * 160;
  }
  console["log"](4280 - sum);
}
