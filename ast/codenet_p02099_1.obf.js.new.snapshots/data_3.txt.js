(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("173448xDZHsO") / 1 + -parseInt("744068oNbkjt") / 2 + -parseInt("478413jFHYeN") / 3 + -parseInt("2279936gCKeSP") / 4 + parseInt("3153030wzXFid") / 5 + parseInt("2673294zQNhvS") / 6 * (parseInt("7jPPuJh") / 7) + parseInt("4295856oANoBN") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 338200);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
arr = arr["map"](v => v["replace"](".", "")).map(Number);
var a = [];
function __DECODE_0__(PtDWdM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PtDWdM, key);
}
for (var i = 0; i <= 4000; i++) {
  a[i] = 0;
}
arr.forEach(v => a[v]++);
var ans = [];
var s = [];
s[0] = a[0];
for (var i = 1; i <= 4000; i++) {
  s[i] = s[i - 1] + a[i];
}
arr.forEach(v => {
  var point = 0;
  point += a[v] - 1;
  if (v != 0) {
    point += s[v - 1] * 3;
  }
  ans["push"](point);
});
function __STRING_ARRAY__() {
  var _0x5ab916 = ["4295856oANoBN", "split", "/dev/stdin", "shift", "replace", "478413jFHYeN", "map", "744068oNbkjt", "7jPPuJh", "trim", "join", "push", "173448xDZHsO", "utf8", "2673294zQNhvS", "2279936gCKeSP", "3153030wzXFid"];
  __STRING_ARRAY__ = function () {
    return _0x5ab916;
  };
  return __STRING_ARRAY__();
}
console.log(ans["join"]("\n"));
