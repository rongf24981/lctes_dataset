(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("263101WXyctR") / 1 * (parseInt("2aLGxxQ") / 2) + -parseInt("3JNeVOh") / 3 * (parseInt("1475872dptxMp") / 4) + parseInt("25QqpePr") / 5 * (-parseInt("1133562QoRwvv") / 6) + -parseInt("7327299naVqep") / 7 + -parseInt("276816vZRqrt") / 8 * (-parseInt("99HNZbJd") / 9) + parseInt("4229250dKmgtP") / 10 + parseInt("29672291znfyDH") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 877567);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]().split(" ")[0] - 0;
var x = [];
for (var i = 1; i <= n; i++) {
  x["push"]([i, i * -1]);
}
arr["forEach"](function (v, i) {
  x[v - 0 - 1][1] = i;
});
function __DECODE_0__(bOeJSc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 211;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bOeJSc, key);
}
function __STRING_ARRAY__() {
  var _0x3188c4 = ["276816vZRqrt", "map", "forEach", "29672291znfyDH", "split", "2aLGxxQ", "/dev/stdin", "7327299naVqep", "1475872dptxMp", "log", "join", "shift", "4229250dKmgtP", "readFileSync", "sort", "utf8", "trim", "3JNeVOh", "1133562QoRwvv", "263101WXyctR", "99HNZbJd", "push", "25QqpePr"];
  __STRING_ARRAY__ = function () {
    return _0x3188c4;
  };
  return __STRING_ARRAY__();
}
x["sort"](function (a, b) {
  return b[1] - a[1];
});
x = x["map"](function (v) {
  return v[0];
});
console["log"](x["join"]("\n"));
