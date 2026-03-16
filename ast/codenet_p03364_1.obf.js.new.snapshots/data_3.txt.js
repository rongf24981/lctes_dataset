(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("19777hdtIUG") / 1 * (-parseInt("194xiApMa") / 2) + parseInt("26511gjLCBI") / 3 * (parseInt("444GSYkDR") / 4) + -parseInt("1772705yDNRzf") / 5 + -parseInt("8685708wnytrC") / 6 + -parseInt("10076283ZOagkG") / 7 + parseInt("8GaAoNe") / 8 * (-parseInt("15686127cWagGj") / 9) + parseInt("4490ObczGC") / 10 * (parseInt("169367XaMaNi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 991260);
var lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
var n = lines[0] | 0;
function __DECODE_0__(aFYrnV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 416;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFYrnV, key);
}
var s = lines["slice"](1);
function good(a, b) {
  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < n; ++j) {
      if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n]) {
        return 0;
      }
    }
  }
  return 1;
}
var ans = 0;
for (var a = 0; a < n; ++a) {
  for (var b = 0; b < n; ++b) {
    ans += good(a, b);
  }
}
function __STRING_ARRAY__() {
  var _0x361c44 = ["/dev/stdin", "log", "split", "1772705yDNRzf", "10076283ZOagkG", "utf8", "169367XaMaNi", "4490ObczGC", "slice", "444GSYkDR", "19777hdtIUG", "26511gjLCBI", "8GaAoNe", "15686127cWagGj", "8685708wnytrC", "readFileSync", "194xiApMa"];
  __STRING_ARRAY__ = function () {
    return _0x361c44;
  };
  return __STRING_ARRAY__();
}
console["log"](ans);
