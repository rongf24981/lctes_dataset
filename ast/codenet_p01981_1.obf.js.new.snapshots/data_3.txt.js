(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2oLWfRM") / 1 * (parseInt("999806bWhvSv") / 2) + -parseInt("3517776IKEWPl") / 3 + parseInt("1337664uwtyvc") / 4 + -parseInt("5uCQjqE") / 5 * (-parseInt("4172130dArOAQ") / 6) + parseInt("154TPNLqE") / 7 * (parseInt("504272XPpQcs") / 8) + parseInt("11159766xvpEEH") / 9 * (parseInt("10ddCBQV") / 10) + -parseInt("8532678YvBIFk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 708397);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(iTOeQx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 163;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iTOeQx, key);
}
function __STRING_ARRAY__() {
  var _0x2f791f = ["999806bWhvSv", "8532678YvBIFk", "2oLWfRM", "4172130dArOAQ", "5uCQjqE", "154TPNLqE", "10ddCBQV", "3517776IKEWPl", "504272XPpQcs", "readFileSync", "1337664uwtyvc", "log", "utf8", "trim", "split", "/dev/stdin", "11159766xvpEEH"];
  __STRING_ARRAY__ = function () {
    return _0x2f791f;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
while (true) {
  var gymd = arr.shift();
  if (gymd == "#") {
    break;
  }
  var [g, y, m, d] = gymd["split"](" ");
  [y, m, d] = [y - 0, m - 0, d - 0];
  if (y <= 30 || y == 31 && m <= 4) {
    console["log"](gymd);
  } else {
    y = y - 30;
    console["log"]("? " + y + " " + m + " " + d);
  }
}
