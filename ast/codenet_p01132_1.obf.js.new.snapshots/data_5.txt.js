var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var j = 0;
while (true) {
  var v = Arr.shift() - 0;
  if (v == 0) {
    break;
  }
  var m = Arr.shift()["split"](" ")["map"](Number);
  var money = m[0] * 10 + m[1] * 50 + m[2] * 100 + m[3] * 500 - v;
  var M = [0, 0, 0, 0];
  while (money >= 500) {
    M[3]++;
    money -= 500;
  }
  while (money >= 100) {
    M[2]++;
    money -= 100;
  }
  while (money >= 50) {
    M[1]++;
    money -= 50;
  }
  while (money >= 10) {
    M[0]++;
    money -= 10;
  }
  var coin = [10, 50, 100, 500];
  var str = "";
  m["forEach"](function (v, i) {
    if (v > M[i]) {
      str += coin[i] + " " + (v - M[i]) + "\n";
    }
  });
  console["log"](str);
}
