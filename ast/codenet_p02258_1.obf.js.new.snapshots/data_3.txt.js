function __STRING_ARRAY__() {
  var _0x44681d = ["18974358HngVeV", "1839649FxlNdm", "1454102ZwhuxR", "log", "3433284jEwlJO", "readFileSync", "462FbvSAW", "11COhhkW", "81280UCKuVq", "2876GUcWLB", "1551kHQDyi", "10TRSqDO", "split", "48HvkgXo", "15570084huliLx", "MAX_VALUE", "1LTsjsa"];
  __STRING_ARRAY__ = function () {
    return _0x44681d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zsgpBf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zsgpBf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1LTsjsa") / 1 * (parseInt("1454102ZwhuxR") / 2) + parseInt("1551kHQDyi") / 3 * (parseInt("2876GUcWLB") / 4) + -parseInt("81280UCKuVq") / 5 * (-parseInt("462FbvSAW") / 6) + -parseInt("1839649FxlNdm") / 7 * (-parseInt("48HvkgXo") / 8) + -parseInt("3433284jEwlJO") / 9 * (parseInt("10TRSqDO") / 10) + -parseInt("11COhhkW") / 11 * (parseInt("15570084huliLx") / 12) + -parseInt("18974358HngVeV") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 788779);
function main(input) {
  input = input["split"]("\n");
  var values = input.map(function (v) {
    return parseInt(v);
  });
  var min = Number["MAX_VALUE"];
  var val = -Number["MAX_VALUE"];
  var N = values[0];
  for (var i = 1; i <= N - 1; i++) {
    if (min >= values[i]) {
      min = values[i];
    }
    if (values[i + 1] - min >= val) {
      val = values[i + 1] - min;
    }
  }
  console["log"](val);
  return val;
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
