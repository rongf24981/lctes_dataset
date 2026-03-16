function __DECODE_0__(iETTWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iETTWi, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1zVwNHO") / 1 * (-parseInt("1358756cIgPgK") / 2) + -parseInt("111DfFRhV") / 3 * (-parseInt("19616ymtDoi") / 4) + -parseInt("7013275rfmKaq") / 5 + -parseInt("1680AfwVnN") / 6 * (-parseInt("36799tRcBQg") / 7) + -parseInt("2805112lttitJ") / 8 + parseInt("7416405jYjGgM") / 9 * (-parseInt("10WztQGV") / 10) + parseInt("28437596rgeflL") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 981927);
const main = input => {
  var K = input.trim().split("\n")[0]["split"](" ")[3];
  var x = input.trim().split("\n")[0].split(" ")[0];
  var y = input["trim"]().split("\n")[0]["split"](" ")[1];
  var z = input["trim"]()["split"]("\n")[0]["split"](" ")[2];
  var a = input.trim()["split"]("\n")[1]["split"](" ")["sort"]((a, b) => b - a).map(v => v - 0);
  var b = input["trim"]()["split"]("\n")[2].split(" ")["sort"]((a, b) => b - a)["map"](v => v - 0);
  var c = input["trim"]()["split"]("\n")[3].split(" ")["sort"]((a, b) => b - a)["map"](v => v - 0);
  var anss = [];
  var idxa = 0;
  var idxb = 0;
  var idxc = 0;
  var min = 0;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      for (var k = 0; k < z; k++) {
        if (i * j * k > K) {
          break;
        }
        var sum = a[i] + b[j] + c[k];
        anss["push"](sum);
      }
    }
  }
  console["log"](anss["sort"]((a, b) => b - a).filter((v, i) => i < K)["join"]("\n"));
};
function __STRING_ARRAY__() {
  var _0x408be7 = ["/dev/stdin", "sort", "36799tRcBQg", "trim", "join", "1zVwNHO", "1680AfwVnN", "7416405jYjGgM", "111DfFRhV", "28437596rgeflL", "readFileSync", "10WztQGV", "UTF-8", "7013275rfmKaq", "push", "2805112lttitJ", "1358756cIgPgK", "log", "19616ymtDoi", "map", "split"];
  __STRING_ARRAY__ = function () {
    return _0x408be7;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8"));
