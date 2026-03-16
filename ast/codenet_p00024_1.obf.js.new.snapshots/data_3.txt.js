'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1vOfYfR") / 1 * (parseInt("393394NHQOCf") / 2) + parseInt("481860SqQoCx") / 3 + parseInt("113956tNiNsg") / 4 + -parseInt("1195095dNWccC") / 5 + parseInt("247398tcoRMr") / 6 * (-parseInt("21HMKeFl") / 7) + -parseInt("53816vPXRqp") / 8 * (parseInt("117PlDDcZ") / 9) + parseInt("2942660LpvCKD") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 229903);
function __STRING_ARRAY__() {
  var _0x1ba247 = ["1vOfYfR", "117PlDDcZ", "247398tcoRMr", "1195095dNWccC", "53816vPXRqp", "log", "2942660LpvCKD", "pow", "113956tNiNsg", "readFileSync", "393394NHQOCf", "481860SqQoCx", "trim", "21HMKeFl"];
  __STRING_ARRAY__ = function () {
    return _0x1ba247;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QbkyYj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 182;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QbkyYj, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var minvs = input["trim"]().split("\n");
var minv;
while (minv = minvs.shift()) {
  var floor = Math.ceil(Math["pow"](parseFloat(minv), 2) / 98 + 1);
  console["log"](floor);
}
