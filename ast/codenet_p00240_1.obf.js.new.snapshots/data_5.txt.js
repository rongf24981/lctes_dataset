var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var y = Arr.shift() - 0;
  var S = [];
  var s = [];
  for (var i = 0; i < n; i++) {
    var brt = Arr.shift()["split"](" ")["map"](Number);
    var r = brt[1];
    var t = brt[2];
    var result;
    if (t == 1) {
      result = (1 + y * (r / 100)) * 10000;
    }
    if (t == 2) {
      result = Math["pow"](1 + r / 100, y) * 10000;
    }
    S.push(brt[0]);
    s["push"](result);
  }
  var max = Math.max["apply"](null, s);
  console["log"](S[s.indexOf(max)]);
}
