(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("7Jgcnsl") / 1 * (-parseInt("168754MdUpzr") / 2) + parseInt("4263768mcsnjU") / 3 + parseInt("4913340jmrCDO") / 4 + -parseInt("749455RXUkmx") / 5 * (parseInt("6hgyqtL") / 6) + parseInt("13191927SDQgxt") / 7 + parseInt("3440688hpOraT") / 8 + parseInt("1280619CsazNG") / 9 * (-parseInt("230KcxVGK") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 951015);
function __DECODE_0__(vcqAXh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 318;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vcqAXh, key);
}
function __STRING_ARRAY__() {
  var _0x2b6733 = ["/dev/stdin", "utf8", "4263768mcsnjU", "168754MdUpzr", "7Jgcnsl", "map", "13191927SDQgxt", "split", "sort", "230KcxVGK", "slice", "log", "3440688hpOraT", "749455RXUkmx", "4913340jmrCDO", "1280619CsazNG", "6hgyqtL"];
  __STRING_ARRAY__ = function () {
    return _0x2b6733;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  var s = s.split("\n");
  var zero = s[0]["split"](" ")["map"](e => parseInt(e, 10));
  var t = s["slice"](1)["map"](e => parseInt(e, 10))["sort"]((a, b) => a - b);
  var cnt = 1;
  var c = zero[1];
  for (var i = 1; i < zero[0]; i++) {
    if (t[i - 1] <= t[i] && t[i] <= t[i - 1] + zero[2]) {
      c--;
      if (c === 0) {
        cnt++;
        c = zero[1];
      }
    } else {
      cnt++;
      c = zero[1];
    }
  }
  console["log"](cnt);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
