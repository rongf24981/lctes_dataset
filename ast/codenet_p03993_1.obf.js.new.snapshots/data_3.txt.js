(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("60020nDpxAm") / 1 * (-parseInt("22HcULWT") / 2) + -parseInt("42774Cdijwq") / 3 * (-parseInt("136vSZTdB") / 4) + parseInt("712840trkyqM") / 5 + parseInt("2758224icuuUX") / 6 + -parseInt("6111063tJjNJk") / 7 * (parseInt("8QbMbgV") / 8) + parseInt("851499IFkKeO") / 9 + -parseInt("180mACKnS") / 10 * (parseInt("247170qSAzmX") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 564406);
function __STRING_ARRAY__() {
  var _0x338017 = ["712840trkyqM", "136vSZTdB", "22HcULWT", "stdin", "247170qSAzmX", "180mACKnS", "42774Cdijwq", "close", "stdout", "createInterface", "log", "line", "map", "60020nDpxAm", "split", "851499IFkKeO", "6111063tJjNJk", "8QbMbgV", "2758224icuuUX", "readline"];
  __STRING_ARRAY__ = function () {
    return _0x338017;
  };
  return __STRING_ARRAY__();
}
var lines = [];
function __DECODE_0__(BjrYEv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 497;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BjrYEv, key);
}
var result = 0;
var readline = require("readline");
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines.push(x);
});
rl.on("close", function () {
  var N = Number(lines[0]);
  var a = lines[1]["split"](" ")["map"](value => Number(value));
  for (var i = 0; i < N; i++) {
    if (i < a[i]) {
      if (a[a[i] - 1] === i + 1) {
        result++;
      }
    }
  }
  console["log"](result);
});
