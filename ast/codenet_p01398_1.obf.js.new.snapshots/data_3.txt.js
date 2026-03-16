(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("869665WTuucD") / 1 + parseInt("1569100KtJdGC") / 2 + parseInt("2708529lOteru") / 3 + parseInt("1981732YPZyne") / 4 + parseInt("5032285zQJRay") / 5 * (parseInt("6fjeUhq") / 6) + -parseInt("1455055UwFlbR") / 7 + parseInt("11384qEtcca") / 8 * (-parseInt("10017CKUNgH") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 527954);
var objStr = {};
var objNum = {};
var abc = "abcdefghijklmnopqrstuvwxyz".split("");
function __STRING_ARRAY__() {
  var _0x427690 = ["shift", "5032285zQJRay", "abcdefghijklmnopqrstuvwxyz", "push", "6fjeUhq", "1981732YPZyne", "reverse", "1569100KtJdGC", "utf8", "forEach", "/dev/stdin", "map", "2708529lOteru", "split", "1455055UwFlbR", "readFileSync", "trim", "869665WTuucD", "length", "11384qEtcca", "join", "10017CKUNgH"];
  __STRING_ARRAY__ = function () {
    return _0x427690;
  };
  return __STRING_ARRAY__();
}
abc["forEach"](function (v, i) {
  objStr[v] = i;
  objNum[i] = v;
});
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(UScmox, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 163;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UScmox, key);
}
var Arr = input["trim"]().split("\n");
while (true) {
  var N = Arr["shift"]() - 0;
  if (N == 0) {
    break;
  }
  var str = Arr["shift"]();
  var AB = [];
  for (var i = 0; i < N; i++) {
    var ab = Arr["shift"]()["split"](" ")["map"](Number);
    AB["push"](ab);
  }
  AB["reverse"]();
  var s = str["split"]("");
  for (var i = 0; i < N; i++) {
    var ab = AB[i];
    var plus = ab[1] - ab[0];
    var m1 = s[ab[0] - 1];
    var m2 = s[ab[1] - 1];
    var n1 = objStr[m1] + plus;
    var n2 = objStr[m2] + plus;
    s[ab[0] - 1] = objNum[n2 % abc["length"]];
    s[ab[1] - 1] = objNum[n1 % abc.length];
  }
  console.log(s["join"](""));
}
