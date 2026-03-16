(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("217426xHjcJB") / 1 + -parseInt("991396nGPnpv") / 2 + parseInt("1504062phVJwl") / 3 + parseInt("1878836TajHkW") / 4 * (parseInt("5GGvTNx") / 5) + parseInt("106206GjMWbC") / 6 * (parseInt("175zzTQWZ") / 7) + -parseInt("8quwSgO") / 8 * (-parseInt("1148103iYiSgV") / 9) + -parseInt("4194260BXSrsq") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 408605);
function __DECODE_0__(TiwlAJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 370;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TiwlAJ, key);
}
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x40ec19 = ["setEncoding", "217426xHjcJB", "trim", "991396nGPnpv", "1878836TajHkW", "1148103iYiSgV", "NA\n", "resume", "utf8", "106206GjMWbC", "8quwSgO", "1504062phVJwl", "stdin", "5GGvTNx", "175zzTQWZ", "/dev/stdin", "4194260BXSrsq", "length", "readFileSync", "log"];
  __STRING_ARRAY__ = function () {
    return _0x40ec19;
  };
  return __STRING_ARRAY__();
}
x = require("fs")["readFileSync"]("/dev/stdin", "utf8").trim().split(/\s/);
for (i = 0; i < x["length"]; i += 2) {
  count = 0;
  y = x[i];
  if (y + x[i + 1] == 0) {
    break;
  }
  for (; y <= x[i + 1]; y++) {
    if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
      console["log"](String(y)["trim"]());
      count++;
    }
  }
  if (i != 0 || i == x["length"] - 1) {
    console.log();
  }
  if (count == 0) {
    console["log"]("NA\n");
  }
}
