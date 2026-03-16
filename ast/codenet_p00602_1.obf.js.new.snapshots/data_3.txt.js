function __STRING_ARRAY__() {
  var _0x57f9d3 = ["/dev/stdin", "map", "684480QBHuty", "5241369XsLnpB", "utf8", "5223354TmLoHA", "12835125fYtaLP", "45RCTAcP", "length", "split", "forEach", "1JhhDcj", "162612ggPivX", "trim", "14onTjKW", "2207200AtfNoS", "1159348lBqqWS"];
  __STRING_ARRAY__ = function () {
    return _0x57f9d3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(roBqWp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(roBqWp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1JhhDcj") / 1 * (parseInt("1159348lBqqWS") / 2) + -parseInt("5241369XsLnpB") / 3 + parseInt("162612ggPivX") / 4 * (parseInt("45RCTAcP") / 5) + -parseInt("5223354TmLoHA") / 6 * (-parseInt("14onTjKW") / 7) + -parseInt("2207200AtfNoS") / 8 + parseInt("12835125fYtaLP") / 9 + parseInt("684480QBHuty") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 998871);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
arr["forEach"](function (value) {
  var vd = value["split"](" ")["map"](Number);
  var v = vd[0];
  var d = vd[1];
  var f = [];
  f[0] = 1;
  f[1] = 2;
  for (var i = 2; i <= v; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 1001;
  }
  f.shift();
  f.sort(function (a, b) {
    return a - b;
  });
  var cnt = 0;
  for (var i = 1; i < f.length; i++) {
    if (f[i] - f[i - 1] < d) {
      cnt++;
    }
  }
  console.log(f["length"] - cnt);
});
