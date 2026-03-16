(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("246bCelxD") / 1 * (parseInt("1318REFoFy") / 2) + -parseInt("3hTxaeG") / 3 * (-parseInt("882584YOVkSK") / 4) + -parseInt("100155BdTaoX") / 5 + parseInt("2512056MpgBQX") / 6 + parseInt("2727921PGJueF") / 7 + -parseInt("3175152PopSzP") / 8 + -parseInt("4935015mPZnMA") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 225879);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var [n, d] = arr["shift"]()["split"](" ")["map"](Number);
  if (n == 0 && d == 0) {
    break;
  }
  var S = [];
  var C = [];
  for (var i = 0; i < n; i++) {
    var mc = arr[i].split(" ");
    mc["shift"]();
    var c = mc["map"](Number)["reverse"]();
    var sum = c["length"] != 0 ? c["reduce"]((a, b) => a + b) : 0;
    S[i] = sum;
    C[i] = c;
  }
  while (true) {
    var f = false;
    for (var i = 0; i < S["length"]; i++) {
      if (S[i] == 0) {
        continue;
      }
      S[i] -= C[i][0];
      if (Math["max"](...S) - Math["min"](...S) <= d) {
        C[i]["shift"]();
        f = true;
        break;
      } else {
        S[i] += C[i][0];
      }
    }
    if (f == false) {
      break;
    }
  }
  var sum = S["reduce"]((a, b) => a + b);
  if (sum == 0) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
  arr = arr.slice(n);
}
function __DECODE_0__(uYunQC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 199;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uYunQC, key);
}
function __STRING_ARRAY__() {
  var _0x51c9b7 = ["trim", "/dev/stdin", "max", "reduce", "split", "utf8", "882584YOVkSK", "100155BdTaoX", "reverse", "readFileSync", "length", "3175152PopSzP", "246bCelxD", "2512056MpgBQX", "min", "2727921PGJueF", "log", "map", "Yes", "shift", "4935015mPZnMA", "1318REFoFy", "3hTxaeG"];
  __STRING_ARRAY__ = function () {
    return _0x51c9b7;
  };
  return __STRING_ARRAY__();
}
