function __DECODE_0__(PYAEZI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 387;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PYAEZI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2545tboOuI") / 1 * (parseInt("1294bWvnFB") / 2) + parseInt("3747558FmYaVA") / 3 + -parseInt("711164kGcAqn") / 4 + -parseInt("4415045SHhGhM") / 5 * (parseInt("6nfVJao") / 6) + parseInt("348138qrCYTr") / 7 + parseInt("7617960tfJCEm") / 8 + parseInt("1512SRqExC") / 9 * (-parseInt("114960wdrdMq") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 905652);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x44a75d = ["6nfVJao", "711164kGcAqn", "trim", "7617960tfJCEm", "348138qrCYTr", "join", "/dev/stdin", "2545tboOuI", "shift", "map", "log", "0 0", "utf8", "4415045SHhGhM", "114960wdrdMq", "1294bWvnFB", "3747558FmYaVA", "1512SRqExC", "readFileSync", "split"];
  __STRING_ARRAY__ = function () {
    return _0x44a75d;
  };
  return __STRING_ARRAY__();
}
var n = arr["shift"]() - 0;
while (n--) {
  var xy = [0, 0];
  var max = [0, 0, 0];
  while (true) {
    var str = arr["shift"]();
    if (str == "0 0") {
      break;
    }
    var ary = str["split"](" ")["map"](Number);
    xy[0] += ary[0];
    xy[1] += ary[1];
    var d = Math.sqrt(xy[0] * xy[0] + xy[1] * xy[1]);
    if (max[0] < d) {
      max = [d, xy[0], xy[1]];
    } else if (max[0] == d && max[1] < xy[0]) {
      max = [d, xy[0], xy[1]];
    }
  }
  max.shift();
  console["log"](max["join"](" "));
}
