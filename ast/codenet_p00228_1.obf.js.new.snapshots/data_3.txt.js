function __DECODE_0__(HYJMDe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 418;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HYJMDe, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("540313YIODyi") / 1 + parseInt("136924MOYKpl") / 2 * (parseInt("3POAIlk") / 3) + -parseInt("984372FPYEGf") / 4 + -parseInt("130930UFjxPj") / 5 + parseInt("2903874anACAa") / 6 + -parseInt("1431920MfpAmb") / 7 * (parseInt("8TDSCLz") / 8) + -parseInt("45YAGVrM") / 9 * (-parseInt("1502410UDurgl") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 286494);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
var SEG = [[1, 1, 1, 1, 1, 1, 0].reverse(), [0, 1, 1, 0, 0, 0, 0]["reverse"](), [1, 1, 0, 1, 1, 0, 1]["reverse"](), [1, 1, 1, 1, 0, 0, 1]["reverse"](), [0, 1, 1, 0, 0, 1, 1]["reverse"](), [1, 0, 1, 1, 0, 1, 1].reverse(), [1, 0, 1, 1, 1, 1, 1].reverse(), [1, 1, 1, 0, 0, 1, 0].reverse(), [1, 1, 1, 1, 1, 1, 1]["reverse"](), [1, 1, 1, 1, 0, 1, 1]["reverse"]()];
var n = Arr[0];
var seg = [];
function __STRING_ARRAY__() {
  var _0x3a8414 = ["trim", "slice", "136924MOYKpl", "540313YIODyi", "split", "45YAGVrM", "3POAIlk", "8TDSCLz", "130930UFjxPj", "map", "utf8", "1431920MfpAmb", "1502410UDurgl", "push", "984372FPYEGf", "reverse", "2903874anACAa", "length", "forEach", "log", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3a8414;
  };
  return __STRING_ARRAY__();
}
for (var i = 1; i < Arr["length"]; i++) {
  if (n == 0) {
    if (i == 0) {
      continue;
    }
    var arr = [0, 0, 0, 0, 0, 0, 0];
    seg["forEach"](function (v) {
      var V = SEG[v];
      var str = "";
      for (var i = 0; i < 7; i++) {
        str += V[i] == arr[i] ? "0" : "1";
      }
      console["log"](str);
      arr = V["slice"]();
    });
    if (Arr[i] == -1) {
      break;
    }
    seg = [];
    n = Arr[i];
  } else {
    n--;
    seg["push"](Arr[i]);
  }
}
