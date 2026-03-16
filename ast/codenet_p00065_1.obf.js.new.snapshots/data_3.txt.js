(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1378809LBhpVX") / 1 * (-parseInt("2pfgsAi") / 2) + -parseInt("3765444iUWLLD") / 3 + -parseInt("6780964hbcSSW") / 4 + parseInt("4952160etJiPT") / 5 + -parseInt("5666808KelpJO") / 6 + parseInt("38633ofVGjZ") / 7 * (parseInt("544uJwqpq") / 8) + -parseInt("12789QHIgpD") / 9 * (-parseInt("14380dwHROF") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 893074);
function __DECODE_0__(hhtPwl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 496;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hhtPwl, key);
}
function __STRING_ARRAY__() {
  var _0x64d178 = ["filter", "readFileSync", "3765444iUWLLD", "sort", "/dev/stdin", "utf8", "4952160etJiPT", "12789QHIgpD", "1378809LBhpVX", "544uJwqpq", "5666808KelpJO", "push", "forEach", "trim", "38633ofVGjZ", "shift", "split", "6780964hbcSSW", "14380dwHROF", "2pfgsAi", "length"];
  __STRING_ARRAY__ = function () {
    return _0x64d178;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["trim"]().split("\n");
var lm = [];
var line;
while (line = lines["shift"]()) {
  lm["push"](line.split(",")[0]);
}
var tm = [];
while (line = lines["shift"]()) {
  tm["push"](line["split"](",")[0]);
}
lm["sort"](function (a, b) {
  return a - b;
});
lm["forEach"](function (c) {
  var cnt = tm["filter"](function (n) {
    return n == c;
  })["length"];
  if (cnt > 0) {
    var tcnt = lm["filter"](function (n) {
      return n == c;
    })["length"];
    console.log(c, cnt + tcnt);
  }
});
