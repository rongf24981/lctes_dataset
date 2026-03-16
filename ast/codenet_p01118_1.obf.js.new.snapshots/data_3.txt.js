function __DECODE_0__(jDazwm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jDazwm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("353728qjCTVO") / 1 + parseInt("1649996qpxBRY") / 2 + parseInt("3387UaEOeV") / 3 * (-parseInt("4300ugAxPx") / 4) + parseInt("5037005vUodXK") / 5 + -parseInt("6ZPYxRw") / 6 * (parseInt("12614791vrYrse") / 7) + parseInt("2768760iuqQHD") / 8 + parseInt("18999441vrujtp") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 920027);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
while (true) {
  var [h, w] = arr["shift"]()["split"](" ").map(Number);
  if (h == 0 && w == 0) {
    break;
  }
  var k = {};
  for (var i = 0; i < h; i++) {
    var r = arr["shift"]()["split"]("");
    for (var j = 0; j < w; j++) {
      k[r[j]] = [i, j];
    }
  }
  var [s, sum, y, x] = [arr.shift()["split"](""), 0, 0, 0];
  s["forEach"](v => {
    sum += Math["abs"](y - k[v][0]) + Math["abs"](x - k[v][1]) + 1;
    [y, x] = [k[v][0], k[v][1]];
  });
  console["log"](sum);
}
function __STRING_ARRAY__() {
  var _0x1d45e8 = ["5037005vUodXK", "utf8", "forEach", "2768760iuqQHD", "shift", "readFileSync", "4300ugAxPx", "12614791vrYrse", "6ZPYxRw", "split", "18999441vrujtp", "log", "353728qjCTVO", "3387UaEOeV", "1649996qpxBRY", "/dev/stdin", "abs"];
  __STRING_ARRAY__ = function () {
    return _0x1d45e8;
  };
  return __STRING_ARRAY__();
}
