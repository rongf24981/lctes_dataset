function __STRING_ARRAY__() {
  var _0x383726 = ["68280VjbjLn", "145zxlMIh", "trim", "9ePczRB", "86053oqdjVE", "4843760ULnmdW", "split", "readFileSync", "261672VOhcww", "19xJgHrN", "18HQgnVY", "map", "/dev/stdin", "6311270MUaOqx", "utf8", "forEach", "log", "17626LJttUD", "65898mXKYgQ", "1788bGQoNf"];
  __STRING_ARRAY__ = function () {
    return _0x383726;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SVsXBN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 225;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SVsXBN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("19xJgHrN") / 1 * (parseInt("17626LJttUD") / 2) + -parseInt("261672VOhcww") / 3 + parseInt("68280VjbjLn") / 4 * (parseInt("145zxlMIh") / 5) + -parseInt("18HQgnVY") / 6 * (-parseInt("65898mXKYgQ") / 7) + parseInt("4843760ULnmdW") / 8 + -parseInt("9ePczRB") / 9 * (-parseInt("6311270MUaOqx") / 10) + parseInt("86053oqdjVE") / 11 * (-parseInt("1788bGQoNf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 339571);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
Arr["forEach"](function (v) {
  var arr = v.split(" ")["map"](Number);
  var m = Math.max(arr[0], arr[1]);
  var n = Math.min(arr[0], arr[1]);
  while (n != 0) {
    var N = n;
    n = m % n;
    m = N;
  }
  console["log"](m);
});
