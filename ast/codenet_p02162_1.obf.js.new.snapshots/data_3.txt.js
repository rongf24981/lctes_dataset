function __STRING_ARRAY__() {
  var _0xc4d5e6 = ["142456ryIHLw", "map", "Alice", "827680lbEpjq", "23078tqUFtn", "readFileSync", "log", "4863eSvQhh", "668ViQHRs", "trim", "/dev/stdin", "utf8", "108XDGUsb", "Bob", "1420111ZaGcjt", "8RGIFFu", "2669052kdcHuR", "split", "Draw", "2121485xffuhy"];
  __STRING_ARRAY__ = function () {
    return _0xc4d5e6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("8RGIFFu") / 1 * (parseInt("23078tqUFtn") / 2) + parseInt("4863eSvQhh") / 3 * (parseInt("668ViQHRs") / 4) + parseInt("2121485xffuhy") / 5 + -parseInt("2669052kdcHuR") / 6 + parseInt("1420111ZaGcjt") / 7 + -parseInt("142456ryIHLw") / 8 * (parseInt("108XDGUsb") / 9) + parseInt("827680lbEpjq") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 229807);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(LTkwgN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 434;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LTkwgN, key);
}
var [t, tt, r, rr] = input["trim"]()["split"](" ")["map"](Number);
if (r == -1 || rr == -1) {
  if (t > tt) {
    console["log"]("Bob");
  } else if (t < tt) {
    console["log"]("Alice");
  } else if (t == tt) {
    console["log"]("Draw");
  }
} else if (r > rr) {
  console.log("Alice");
} else if (r < rr) {
  console["log"]("Bob");
} else if (r == rr) {
  console["log"]("Draw");
}
