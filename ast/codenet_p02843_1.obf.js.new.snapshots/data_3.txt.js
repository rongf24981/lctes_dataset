(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1092490eWkqRM") / 1 + -parseInt("1752962RaRBvW") / 2 + parseInt("33WrnMQC") / 3 * (-parseInt("203068ERxnJB") / 4) + -parseInt("1280635cUpLEe") / 5 * (parseInt("6JjourK") / 6) + -parseInt("2834636LfHxXo") / 7 + parseInt("7660360QqUiqW") / 8 + -parseInt("1719rsNiyu") / 9 * (-parseInt("35380wzbVvW") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 629800);
function Main(input) {
  const n = input["split"]("\n")[0];
  var ans = 0;
  if (n >= 2525) {
    ans = 1;
    console["log"](ans);
  } else {
    for (var i = 1; i <= 25; i++) {
      if (n >= i * 101 && n <= i * 105) {
        ans = 1;
        break;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(LrcLPn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 199;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LrcLPn, key);
}
function __STRING_ARRAY__() {
  var _0x10b6ee = ["1092490eWkqRM", "33WrnMQC", "1719rsNiyu", "6JjourK", "readFileSync", "1752962RaRBvW", "log", "1280635cUpLEe", "35380wzbVvW", "2834636LfHxXo", "203068ERxnJB", "split", "utf8", "/dev/stdin", "7660360QqUiqW"];
  __STRING_ARRAY__ = function () {
    return _0x10b6ee;
  };
  return __STRING_ARRAY__();
}
