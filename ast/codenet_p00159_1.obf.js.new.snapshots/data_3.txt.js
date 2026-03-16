(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1259YXFYOg") / 1 * (-parseInt("908ZALFBZ") / 2) + -parseInt("898728DWuUqv") / 3 + -parseInt("4jixKUE") / 4 * (-parseInt("3064315jNkQKt") / 5) + -parseInt("354156FFEvJn") / 6 + -parseInt("903elbWhK") / 7 * (-parseInt("23944HdgKRq") / 8) + -parseInt("4137687cbgLtq") / 9 + -parseInt("4251030QRrjPb") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 327098);
let input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x5f420e = ["4jixKUE", "1259YXFYOg", "903elbWhK", "354156FFEvJn", "split", "3064315jNkQKt", "sort", "next", "trim", "log", "value", "4137687cbgLtq", "/dev/stdin", "4251030QRrjPb", "utf8", "map", "abs", "23944HdgKRq", "908ZALFBZ", "shift", "set", "898728DWuUqv"];
  __STRING_ARRAY__ = function () {
    return _0x5f420e;
  };
  return __STRING_ARRAY__();
}
let Arr = input["trim"]().split("\n");
function __DECODE_0__(wZdjcY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wZdjcY, key);
}
let bmis = new Map();
while (1) {
  let n = Arr[0];
  if (n == 0) {
    break;
  }
  Arr["shift"]();
  for (var i = 0; i < n; ++i) {
    var nums = Arr[0]["split"](" ")["map"](Number);
    var m = nums[1] / 100;
    var bmi = nums[2] / (m * m);
    var dif = Math["abs"](22 - bmi);
    bmis["set"](nums[0].toString(), dif);
    Arr["shift"]();
  }
  let sorted = new Map([...bmis.entries()]["sort"]((a, b) => a[1] - b[1]));
  console["log"](sorted.keys()["next"]()["value"]);
}
