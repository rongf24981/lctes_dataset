(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2UuFJRQ") / 1 * (-parseInt("959258WLEZSd") / 2) + -parseInt("1464600xKtoSP") / 3 + parseInt("4274116gCFPUI") / 4 + -parseInt("62735ZDKyJp") / 5 * (-parseInt("330WoBbGa") / 6) + parseInt("27356lSQPgZ") / 7 * (parseInt("2936tpjPHq") / 8) + parseInt("14272020nxLhWR") / 9 + -parseInt("24791430DiKdTa") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 852029);
function __DECODE_0__(VOjBeO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 149;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VOjBeO, key);
}
function Main(input) {
  input = input.split("\n");
  for (i = 0; i < input["length"]; i = i + 2) {
    var N = parseInt(input[i]);
    var a = input[i + 1]["split"]("");
    var aa = a.map(Number);
    for (j = N; j > 1; j--) {
      for (k = 0; k < j; k++) {
        var e = Math["abs"](aa[0] - aa[1]);
        aa["push"](e);
        aa.shift();
      }
      aa["pop"]();
    }
    console["log"](aa[0]);
  }
}
function __STRING_ARRAY__() {
  var _0x3e4124 = ["4274116gCFPUI", "24791430DiKdTa", "push", "pop", "abs", "14272020nxLhWR", "27356lSQPgZ", "2UuFJRQ", "62735ZDKyJp", "split", "length", "959258WLEZSd", "log", "1464600xKtoSP", "330WoBbGa", "utf8", "2936tpjPHq"];
  __STRING_ARRAY__ = function () {
    return _0x3e4124;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
