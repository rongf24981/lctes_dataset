(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("639132HtlLNy") / 1 + parseInt("14ePhgaO") / 2 * (-parseInt("28869LzGFfD") / 3) + -parseInt("1134376eGOkRx") / 4 + -parseInt("1375685cuneeb") / 5 + parseInt("343890PgLSbE") / 6 * (parseInt("35RKYcim") / 7) + -parseInt("672ZOzWXm") / 8 * (-parseInt("59715HSQmGJ") / 9) + -parseInt("5102460mElWfA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 346709);
const BKRT = "\n";
const SPAC = " ";
const NOSP = "";
function Main(input) {
  input = []["concat"](...input.split(BKRT)["map"](a => a["split"](SPAC)));
  const strShift = () => input["shift"]();
  const intShift = () => ~~input["shift"]();
  var N = intShift();
  var M = intShift();
  var X = intShift();
  var right = 0;
  var left = 0;
  for (var i = 0; i < M; i++) {
    var a = intShift();
    if (a < X) {
      left++;
    } else {
      right++;
    }
  }
  return ~~Math["min"](left, right);
}
function __DECODE_0__(HewRNP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HewRNP, key);
}
function __STRING_ARRAY__() {
  var _0x2809c = ["5102460mElWfA", "28869LzGFfD", "\n5 3 3\n1 2 4\n", "343890PgLSbE", "639132HtlLNy", "map", "35RKYcim", "59715HSQmGJ", "/dev/stdin", "1134376eGOkRx", "undefined", "split", "slice", "append", "appendTo", "672ZOzWXm", "utf8", "min", "message", "1375685cuneeb", "shift", "readFileSync", "<form>", "14ePhgaO", "log", "concat"];
  __STRING_ARRAY__ = function () {
    return _0x2809c;
  };
  return __STRING_ARRAY__();
}
((b, c, d) => "undefined" != typeof require ? console["log"](Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"))) : [b = b["split"]("\n")["slice"](1, -1).join("\n"), c = function () {
  try {
    return Main(b);
  } catch (f) {
    return f.stack || f["message"];
  }
}(), d = typeof c, d == "string" || (c = JSON.stringify(c)), $("<form>")["append"]([[10, b], 0, [1, d], 0, [10, c]]["map"](f => $(f ? "<textarea>" : "<br>", f && {
  rows: f[0],
  cols: 40,
  text: f[1]
})))["appendTo"]("body")])("\n5 3 3\n1 2 4\n");
