function __STRING_ARRAY__() {
  var _0x24a62d = ["0 0", "log", "join", "forEach", "8532IGGmAp", "2524KUgYgE", "85HYWLlA", "300345unNguI", "168984xIUTte", "72FPOgYL", "push", "3262938jMhyoD", "shift", "min", "trim", "utf8", "2841CfucWi", "sort", "830115sqyTNK", "pow", "15538030NASqei", "split", "sqrt"];
  __STRING_ARRAY__ = function () {
    return _0x24a62d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("85HYWLlA") / 1 * (-parseInt("8532IGGmAp") / 2) + parseInt("2841CfucWi") / 3 * (-parseInt("2524KUgYgE") / 4) + -parseInt("300345unNguI") / 5 * (parseInt("72FPOgYL") / 6) + parseInt("3262938jMhyoD") / 7 + parseInt("168984xIUTte") / 8 + parseInt("830115sqyTNK") / 9 + parseInt("15538030NASqei") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 452300);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __DECODE_0__(FmRhRq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 136;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FmRhRq, key);
}
while (true) {
  var ab = arr["shift"]()["split"](" ").map(Number);
  if (ab["join"](" ") == "0 0") {
    break;
  }
  var a = ab[0];
  var b = ab[1];
  var A = [];
  var B = [];
  for (i = 1; i <= Math["sqrt"](a); i++) {
    if (a % i == 0) {
      A.push([a / i, i]);
    }
  }
  for (i = 1; i <= Math["sqrt"](b); i++) {
    if (b % i == 0) {
      B["push"]([b / i, i]);
    }
  }
  var min = Infinity;
  A.forEach(function (va) {
    B["forEach"](function (vb) {
      var c = [va[0], va[1], vb[0], vb[1]];
      c["sort"](function (a, b) {
        return a - b;
      });
      min = Math["min"](min, Math["pow"](c[0] - c[1], 2) + Math.pow(c[1] - c[2], 2) + Math["pow"](c[2] - c[3], 2));
    });
  });
  console["log"](min);
}
