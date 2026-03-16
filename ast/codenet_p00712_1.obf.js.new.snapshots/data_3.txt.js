(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("85OWBcFT") / 1 * (parseInt("21022oNFErX") / 2) + parseInt("2814858tcOYqg") / 3 + parseInt("6823580eDRGSn") / 4 + parseInt("6140950oQyljF") / 5 + parseInt("10414158fTYhLy") / 6 * (parseInt("7oxhOrJ") / 7) + -parseInt("2119696oBlsYd") / 8 + -parseInt("15111yBdsmB") / 9 * (parseInt("31580gFvOLf") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 934255);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var pqan = arr.shift().split(" ")["map"](Number);
  if (pqan["join"](" ") == "0 0 0 0") {
    break;
  }
  var p = pqan[0];
  var q = pqan[1];
  var a = pqan[2];
  var n = pqan[3];
  var ans = 0;
  function loop(start, P, Q, A, cnt) {
    if (cnt > 0) {
      if (cnt > n) {
        return;
      }
      if (p * Q == P * q) {
        ans++;
        return;
      } else if (p * Q < P * q) {
        return;
      }
    }
    for (var i = start; A * i <= a; i++) {
      loop(i, Q * 1 + i * P, Q * i, A * i, cnt + 1);
    }
  }
  loop(1, 0, 1, 1, 0);
  console["log"](ans);
}
function __DECODE_0__(entvIN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 111;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(entvIN, key);
}
function __STRING_ARRAY__() {
  var _0x287a3a = ["utf8", "7oxhOrJ", "10414158fTYhLy", "trim", "readFileSync", "6140950oQyljF", "join", "0 0 0 0", "map", "85OWBcFT", "15111yBdsmB", "21022oNFErX", "6823580eDRGSn", "2119696oBlsYd", "31580gFvOLf", "log", "2814858tcOYqg"];
  __STRING_ARRAY__ = function () {
    return _0x287a3a;
  };
  return __STRING_ARRAY__();
}
