'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("236752kZIYMa") / 1 + parseInt("585518gydTlq") / 2 + parseInt("11151GiKVdl") / 3 + parseInt("290604MPtdFu") / 4 * (parseInt("60VshETx") / 5) + -parseInt("18XznuMX") / 6 * (-parseInt("545867fprrZh") / 7) + parseInt("2585240OrZnFo") / 8 + -parseInt("8927766mJpmFs") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 496660);
function __STRING_ARRAY__() {
  var _0x2925a1 = ["236752kZIYMa", "reduce", "60VshETx", "11151GiKVdl", "readFileSync", "8927766mJpmFs", "split", "545867fprrZh", "toString", "290604MPtdFu", "585518gydTlq", "push", "2585240OrZnFo", "map", "18XznuMX", "utf8", "trim", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2925a1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zdNQNy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zdNQNy, key);
}
(function (stdin) {
  function sumLine(a, b) {
    return a + b;
  }
  function result(matrix) {
    var size = matrix.shift();
    matrix["map"](function (v) {
      return v["push"](v["reduce"](sumLine));
    });
    var sumColumn = [];
    for (var i = 0; i < size[1] + 1; i++) {
      var sumValue = 0;
      for (var j = 0; j < size[0]; j++) {
        sumValue += matrix[j][i];
      }
      sumColumn.push(sumValue);
    }
    matrix.push(sumColumn);
    return matrix.join("\n").replace(/,/g, " ");
  }
  var inputs = stdin["toString"]()["trim"]()["split"]("\n");
  var sheet = inputs.map(function (v) {
    return v["split"](" ")["map"](Number);
  });
  console.log(result(sheet));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
