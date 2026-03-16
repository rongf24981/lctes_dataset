function __DECODE_0__(xyQpyy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xyQpyy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3dQuUSH") / 1 * (parseInt("785258TckcAa") / 2) + -parseInt("3wtQraR") / 3 * (-parseInt("411356xycsZA") / 4) + parseInt("2632085SYDggL") / 5 * (parseInt("6gmJnMI") / 6) + parseInt("4115139EXknah") / 7 * (parseInt("8YbsQjd") / 8) + parseInt("207tLZqUj") / 9 * (parseInt("384210qEwCqK") / 10) + parseInt("12340086CGEFyv") / 11 + -parseInt("17436900UVPqCy") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 591680);
function __STRING_ARRAY__() {
  var _0x51cf66 = ["2632085SYDggL", "785258TckcAa", "/dev/stdin", "3dQuUSH", "12340086CGEFyv", "6gmJnMI", "3wtQraR", "384210qEwCqK", "split", "4115139EXknah", "411356xycsZA", "toFixed", "sqrt", "log", "trim", "17436900UVPqCy", "readFileSync", "8YbsQjd", "207tLZqUj"];
  __STRING_ARRAY__ = function () {
    return _0x51cf66;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
var lines = input["split"]("\n");
while (true) {
  var x = +lines.shift();
  var h = +lines.shift();
  if (x + h == 0) {
    break;
  }
  console["log"]((x * x + x * Math["sqrt"](h * 4 * h + x * x))["toFixed"](6));
}
