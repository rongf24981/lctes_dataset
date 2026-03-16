(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("106787XrENap") / 1 + parseInt("532630MICRKM") / 2 * (parseInt("3cqPLsk") / 3) + parseInt("1277140CXbNJH") / 4 + -parseInt("8510CgbHSL") / 5 + -parseInt("1850334utOAOc") / 6 + -parseInt("1390417rvfDVc") / 7 * (-parseInt("16wfmLPh") / 8) + -parseInt("36zQRkpS") / 9 * (parseInt("1333180ahEWTQ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 246286);
function main(input) {
  var n = input[0] - 0;
  var list = [0]["concat"](input[1]["split"](" ").map(v => v - 0), [0]);
  var llist = [];
  llist[0] = 0;
  var rlist = [];
  rlist[n] = 0;
  for (var i = 1; i <= n; i++) {
    llist[i] = llist[i - 1] + Math["abs"](list[i] - list[i - 1]);
    rlist[n - i] = rlist[n - i + 1] + Math.abs(list[n - i + 1] - list[n - i + 2]);
  }
  for (var i = 1; i <= n; i++) {
    var ans = 0;
    ans += llist[i - 1];
    ans += rlist[i] || 0;
    ans += Math["abs"](list[i - 1] - list[i + 1]);
    console["log"](ans);
  }
}
function __DECODE_0__(suGYIq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 111;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(suGYIq, key);
}
function __STRING_ARRAY__() {
  var _0x20d967 = ["1850334utOAOc", "16wfmLPh", "8510CgbHSL", "readFileSync", "log", "1390417rvfDVc", "532630MICRKM", "concat", "1333180ahEWTQ", "/dev/stdin", "1277140CXbNJH", "106787XrENap", "split", "36zQRkpS", "abs", "3cqPLsk", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x20d967;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n"));
