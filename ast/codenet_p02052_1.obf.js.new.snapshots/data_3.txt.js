(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1504321rniild") / 1 * (-parseInt("2xCSXgB") / 2) + -parseInt("1813308jGwZMO") / 3 + -parseInt("4svinHq") / 4 * (-parseInt("1185745OOIFCy") / 5) + -parseInt("924vyHcDg") / 6 * (-parseInt("23464RmuZLo") / 7) + -parseInt("428208cwyvzB") / 8 * (-parseInt("117BjIBkx") / 9) + parseInt("10aliBDH") / 10 * (-parseInt("2211715UdGCnU") / 11) + -parseInt("16465068RFGzGE") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 775926);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var [h, w] = arr["shift"]()["split"](" ")["map"](Number);
var b = [];
function __DECODE_0__(qlugsU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qlugsU, key);
}
for (var i = 0; i < h; i++) {
  arr["shift"]()["split"]("").forEach((v, j) => {
    if (v == "B") {
      b["push"]([i, j]);
    }
  });
}
function __STRING_ARRAY__() {
  var _0xe18db1 = ["shift", "readFileSync", "2211715UdGCnU", "4svinHq", "1504321rniild", "log", "utf8", "split", "trim", "map", "10aliBDH", "23464RmuZLo", "428208cwyvzB", "117BjIBkx", "1185745OOIFCy", "length", "abs", "1813308jGwZMO", "924vyHcDg", "2xCSXgB", "16465068RFGzGE", "push"];
  __STRING_ARRAY__ = function () {
    return _0xe18db1;
  };
  return __STRING_ARRAY__();
}
var max = 0;
for (var i = 0; i < b["length"]; i++) {
  for (var j = i + 1; j < b["length"]; j++) {
    var d = Math["abs"](b[i][0] - b[j][0]) + Math["abs"](b[i][1] - b[j][1]);
    max = Math.max(max, d);
  }
}
console["log"](max);
