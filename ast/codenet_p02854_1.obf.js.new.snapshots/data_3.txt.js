function __DECODE_0__(jxQjyv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jxQjyv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("117NCRRQn") / 1 * (parseInt("4964pbmHRq") / 2) + -parseInt("38664dRjTph") / 3 * (-parseInt("324zYFmgO") / 4) + parseInt("574165NoKGGe") / 5 * (-parseInt("42oeGhsM") / 6) + parseInt("2661589SDqphB") / 7 * (-parseInt("16VEPiMK") / 8) + -parseInt("504ekdLgd") / 9 * (parseInt("103780qVNXBM") / 10) + -parseInt("15625500KNRMhW") / 11 + parseInt("38261976ejdgyp") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 956867);
function Main(input) {
  var N = parseInt(input[0], 10);
  var A = input[1]["split"](" ");
  var total = 0;
  for (var i = 0; i < N; i++) {
    A[i] = parseInt(A[i], 10);
    total += A[i];
  }
  var result = 0;
  var mae = 0;
  var ato = 0;
  var target = 0;
  for (var i = 0; i < N; i++) {
    if (mae + A[i] < total / 2) {
      mae += A[i];
    } else if (mae + A[i] == total / 2) {
      console["log"]("%s", 0);
      return;
    } else {
      target = i;
      ato = total - mae - A[i];
      break;
    }
  }
  var diff = Math["abs"](ato - mae);
  var result = Math["abs"](A[i] - diff);
  console["log"]("%s", result);
}
function __STRING_ARRAY__() {
  var _0x1e4e24 = ["574165NoKGGe", "readFileSync", "split", "504ekdLgd", "117NCRRQn", "4964pbmHRq", "utf8", "log", "324zYFmgO", "16VEPiMK", "42oeGhsM", "2661589SDqphB", "103780qVNXBM", "15625500KNRMhW", "abs", "38664dRjTph", "38261976ejdgyp", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1e4e24;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
