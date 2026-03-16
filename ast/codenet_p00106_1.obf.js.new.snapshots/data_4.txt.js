var obj = {};
for (var i = 0; i <= 25; i++) {
  for (var j = 0; j <= 16; j++) {
    for (var k = 0; k <= 10; k++) {
      var weight = i * 200 + j * 300 + k * 500;
      if (weight > 5000) {
        continue;
      }
      var money = 0;
      money += Math["floor"](i / 5) * 1520;
      money += Math["floor"](j / 4) * 1870;
      money += Math["floor"](k / 3) * 2244;
      money += i % 5 * 380;
      money += j % 4 * 550;
      money += k % 3 * 850;
      if (obj["hasOwnProperty"](weight)) {
        obj[weight] = Math["min"](obj[weight], money);
      } else {
        obj[weight] = money;
      }
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  console.log(obj[n]);
}
