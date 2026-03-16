(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("237341SDvBSM") / 1 + parseInt("597444pqKRuZ") / 2 + -parseInt("8889fNoWod") / 3 * (-parseInt("56potaQu") / 4) + parseInt("1140200nsGydS") / 5 + -parseInt("4006008OnhOiF") / 6 + -parseInt("7NVywcD") / 7 * (-parseInt("4649416OXkERt") / 8) + parseInt("1129752AoFSEn") / 9 * (-parseInt("30KeyqId") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 342510);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x5932c8 = ["length", "8889fNoWod", "237341SDvBSM", "56potaQu", "7NVywcD", "597444pqKRuZ", "readFileSync", "utf8", "30KeyqId", "split", "4649416OXkERt", "trim", "4006008OnhOiF", "1140200nsGydS", "shift", "push", "log", "1129752AoFSEn", "forEach", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x5932c8;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
var [h, w] = arr["shift"]()["split"](" ").map(Number);
var b = [];
for (var i = 0; i < h; i++) {
  var two = [];
  arr[i]["split"]("")["forEach"]((v, j) => {
    if (v == "B") {
      two["push"]([i, j]);
    }
  });
  if (two["length"] == 1) {
    b["push"](two[0]);
  } else if (two["length"] >= 2) {
    b["push"](two[0], two[two["length"] - 1]);
  }
}
var max = 0;
function __DECODE_0__(NibHIg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 221;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NibHIg, key);
}
for (var i = 0; i < b["length"]; i++) {
  for (var j = i + 1; j < b.length; j++) {
    var d = Math.abs(b[i][0] - b[j][0]) + Math.abs(b[i][1] - b[j][1]);
    max = Math.max(max, d);
  }
}
console["log"](max);
