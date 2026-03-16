function __STRING_ARRAY__() {
  var _0x13821b = ["30149406QjDzAf", "trim", "utf8", "split", "/dev/stdin", "5537337NhkVpG", "6oQTMhg", "4546dOcuKM", "shift", "6136490EBjvQS", "820MZwPkA", "902951qFwJDD", "log", "10310200ZVEIjQ", "readFileSync", "22752rQseDQ"];
  __STRING_ARRAY__ = function () {
    return _0x13821b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rMBCsz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 129;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rMBCsz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4546dOcuKM") / 1 * (parseInt("820MZwPkA") / 2) + -parseInt("5537337NhkVpG") / 3 + -parseInt("22752rQseDQ") / 4 + -parseInt("6136490EBjvQS") / 5 + parseInt("6oQTMhg") / 6 * (parseInt("902951qFwJDD") / 7) + -parseInt("10310200ZVEIjQ") / 8 + parseInt("30149406QjDzAf") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 975247);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var cnt = 0;
  while (n != 1) {
    cnt++;
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
  }
  console["log"](cnt);
}
