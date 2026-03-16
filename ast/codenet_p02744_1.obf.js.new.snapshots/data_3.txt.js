(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("137068jRiZTL") / 1 + -parseInt("351528qRNnep") / 2 + parseInt("446580yHpXEF") / 3 + parseInt("188608cusJwQ") / 4 + parseInt("673085vuSzvb") / 5 + parseInt("24AyYAhu") / 6 * (parseInt("162862iAJCwe") / 7) + parseInt("69456vYftRJ") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 119543);
function Main(input) {
  var N = input[0] - 0;
  var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  var ans = {
    0: [],
    1: ["a"]
  };
  for (var i = 2; i <= N; i++) {
    ans[i] = [];
    var preAns = ans[i - 1];
    var nowAns = ans[i];
    preAns["forEach"](preans => {
      var max = "a";
      preans["split"]("").forEach(v => {
        max = max < v ? v : max;
      });
      var endflg = false;
      for (var i = 0; i < list.length - 1; i++) {
        nowAns.push(preans + list[i]);
        if (endflg) {
          break;
        }
        if (max == list[i]) {
          endflg = true;
        }
      }
    });
  }
  console["log"](ans[N].join("\n"));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n"));
function __DECODE_0__(FUVxrf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 221;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FUVxrf, key);
}
function __STRING_ARRAY__() {
  var _0x37efef = ["log", "utf8", "/dev/stdin", "split", "188608cusJwQ", "137068jRiZTL", "24AyYAhu", "69456vYftRJ", "673085vuSzvb", "162862iAJCwe", "readFileSync", "trim", "351528qRNnep", "forEach", "446580yHpXEF"];
  __STRING_ARRAY__ = function () {
    return _0x37efef;
  };
  return __STRING_ARRAY__();
}
