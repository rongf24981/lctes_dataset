(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1iDxDfT") / 1 * (-parseInt("3135926SIsfvr") / 2) + -parseInt("15852yFszoF") / 3 * (parseInt("816suUmeK") / 4) + -parseInt("1287275TzAyzZ") / 5 + parseInt("5292BGGWbV") / 6 * (parseInt("42FEHCsM") / 7) + parseInt("8XAYrvx") / 8 * (parseInt("16114662WuXKKv") / 9) + parseInt("16681540CONZGU") / 10 + parseInt("4000150JIEfaM") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 924260);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x52f57b = ["/dev/stdin", "5292BGGWbV", "utf8", "16681540CONZGU", "split", "NO COLOR", "8XAYrvx", "1287275TzAyzZ", "1iDxDfT", "forEach", "readFileSync", "816suUmeK", "3135926SIsfvr", "trim", "shift", "15852yFszoF", "4000150JIEfaM", "42FEHCsM", "16114662WuXKKv"];
  __STRING_ARRAY__ = function () {
    return _0x52f57b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jMynOe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 165;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jMynOe, key);
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n === 0) {
    break;
  }
  var ary = arr["shift"]()["split"](" ");
  var obj = {};
  ary.forEach(function (v) {
    obj[v] = 0;
  });
  ary["forEach"](function (v) {
    obj[v]++;
  });
  var ans = "NO COLOR";
  var half = n / 2;
  for (var k in obj) {
    if (obj[k] > half) {
      ans = k;
      break;
    }
  }
  console.log(ans);
}
