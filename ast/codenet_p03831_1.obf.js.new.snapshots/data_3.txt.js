(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1438361wETIZe") / 1 * (parseInt("2GIJNxp") / 2) + parseInt("1650231MlDBMs") / 3 * (parseInt("4fByiUP") / 4) + -parseInt("8346445hjMQwY") / 5 * (-parseInt("6SbsoQC") / 6) + parseInt("10019548kwGtYy") / 7 * (parseInt("8lBISXl") / 8) + parseInt("4149189FkYVgw") / 9 * (-parseInt("20cBWqnq") / 10) + parseInt("10510324USNZUn") / 11 + -parseInt("50782236mWcRCN") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 890680);
function main(input) {
  var lines = input.split("\n");
  var line0 = lines[0].split(" ");
  var n = parseInt(line0[0]);
  var a = parseInt(line0[1]);
  var b = parseInt(line0[2]);
  var x = lines[1]["split"](" ")["map"](t => parseInt(t));
  var ans = 0;
  for (var i = 0; i < n - 1; i++) {
    ans += Math["min"](a * (x[i + 1] - x[i]), b);
  }
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(MLkeDv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MLkeDv, key);
}
function __STRING_ARRAY__() {
  var _0x3ed69e = ["1438361wETIZe", "20cBWqnq", "map", "2GIJNxp", "1650231MlDBMs", "utf8", "50782236mWcRCN", "4fByiUP", "readFileSync", "log", "10510324USNZUn", "6SbsoQC", "min", "10019548kwGtYy", "8346445hjMQwY", "split", "8lBISXl", "4149189FkYVgw"];
  __STRING_ARRAY__ = function () {
    return _0x3ed69e;
  };
  return __STRING_ARRAY__();
}
