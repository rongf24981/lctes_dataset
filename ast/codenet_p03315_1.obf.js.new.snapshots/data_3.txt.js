function __DECODE_0__(rIlyIX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 459;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rIlyIX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("356134oYffFr") / 1 + -parseInt("3896IWqSsF") / 2 * (parseInt("1116HTpbql") / 3) + parseInt("4YXEVrb") / 4 * (parseInt("1153645pxaatn") / 5) + -parseInt("3811986YIHEEw") / 6 * (-parseInt("7yEASsw") / 7) + -parseInt("312KEmIXq") / 8 * (parseInt("116091ZTUzwZ") / 9) + -parseInt("2081980LGdYAF") / 10 + -parseInt("11sAJWHf") / 11 * (-parseInt("15555372gyVksB") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 370292);
function main(input) {
  var input = input;
  var sum = 0;
  for (var i = 0; i < 4; i++) {
    if (input[i] == "+") {
      sum += 1;
    } else {
      sum -= 1;
    }
  }
  console["log"](sum);
}
function __STRING_ARRAY__() {
  var _0x4f2101 = ["312KEmIXq", "4YXEVrb", "3896IWqSsF", "2081980LGdYAF", "116091ZTUzwZ", "11sAJWHf", "7yEASsw", "utf8", "1116HTpbql", "3811986YIHEEw", "356134oYffFr", "1153645pxaatn", "log", "15555372gyVksB"];
  __STRING_ARRAY__ = function () {
    return _0x4f2101;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
