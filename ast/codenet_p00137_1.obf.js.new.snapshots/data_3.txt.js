(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1lQNQNP") / 1 * (-parseInt("469486jFzbiK") / 2) + parseInt("1166835WnAIeM") / 3 + -parseInt("613388PZSLcu") / 4 * (-parseInt("5vigYbu") / 5) + parseInt("11214tZBttN") / 6 * (-parseInt("7035okcafW") / 7) + parseInt("9553984XAcPxv") / 8 + parseInt("13407651aSjKPa") / 9 + parseInt("584710kWHtnB") / 10 * (-parseInt("22ESOLvN") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 996249);
function __DECODE_0__(KIPYDs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 329;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KIPYDs, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n")["map"](Number);
var L = Arr.shift();
for (var i = 0; i < L; i++) {
  console["log"]("Case " + (i + 1) + ":");
  var v = Arr[i];
  for (var j = 0; j < 10; j++) {
    v = "000000" + v * v;
    v = v["slice"](-6);
    v = v["slice"](0, 4);
    v = parseInt(v, 10);
    console["log"](v);
  }
}
function __STRING_ARRAY__() {
  var _0x411395 = ["584710kWHtnB", "613388PZSLcu", "slice", "9553984XAcPxv", "log", "utf8", "13407651aSjKPa", "22ESOLvN", "1lQNQNP", "Case ", "split", "map", "11214tZBttN", "000000", "1166835WnAIeM", "readFileSync", "5vigYbu", "7035okcafW", "469486jFzbiK"];
  __STRING_ARRAY__ = function () {
    return _0x411395;
  };
  return __STRING_ARRAY__();
}
