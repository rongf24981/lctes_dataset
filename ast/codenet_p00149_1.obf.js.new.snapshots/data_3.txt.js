function __DECODE_0__(oADaQh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 474;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oADaQh, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2BoTBmH") / 1 * (parseInt("64430bKzTQF") / 2) + parseInt("435816SoGmYM") / 3 + parseInt("799144pwgODX") / 4 * (-parseInt("5HPWFeS") / 5) + -parseInt("261678FwgJxo") / 6 + parseInt("76419SUYRjh") / 7 * (parseInt("200PMNQXB") / 8) + parseInt("3235122AUSHSG") / 9 + -parseInt("2326110jXWWdB") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 237215);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var a = [0, 0];
var b = [0, 0];
var c = [0, 0];
var d = [0, 0];
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  for (var j = 0; j < 2; j++) {
    if (arr[j] >= 1.1) {
      a[j]++;
    } else if (arr[j] >= 0.6) {
      b[j]++;
    } else if (arr[j] >= 0.2) {
      c[j]++;
    } else {
      d[j]++;
    }
  }
}
console["log"](a[0] + " " + a[1]);
console["log"](b[0] + " " + b[1]);
console["log"](c[0] + " " + c[1]);
function __STRING_ARRAY__() {
  var _0x3ad410 = ["utf8", "200PMNQXB", "5HPWFeS", "trim", "split", "2BoTBmH", "/dev/stdin", "map", "log", "261678FwgJxo", "3235122AUSHSG", "435816SoGmYM", "76419SUYRjh", "799144pwgODX", "2326110jXWWdB", "length", "64430bKzTQF"];
  __STRING_ARRAY__ = function () {
    return _0x3ad410;
  };
  return __STRING_ARRAY__();
}
console["log"](d[0] + " " + d[1]);
