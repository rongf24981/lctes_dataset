function __STRING_ARRAY__() {
  var _0x318103 = ["10ZetppH", "log", "lastIndexOf", "1MomzfD", "4962NwGbdA", "587212LbGMJt", "2079802uvFbLS", "trim", "2993160GnbOWY", "19992863FniUEr", "3129wbTKIv", "50859hJRXkF", "88XlEZQN", "split", "11827920llYMnT"];
  __STRING_ARRAY__ = function () {
    return _0x318103;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1MomzfD") / 1 * (-parseInt("2079802uvFbLS") / 2) + parseInt("2993160GnbOWY") / 3 + -parseInt("587212LbGMJt") / 4 * (parseInt("10ZetppH") / 5) + parseInt("4962NwGbdA") / 6 * (parseInt("3129wbTKIv") / 7) + -parseInt("88XlEZQN") / 8 * (parseInt("50859hJRXkF") / 9) + -parseInt("11827920llYMnT") / 10 + parseInt("19992863FniUEr") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 606462);
const main = input => {
  var N = input[0] - 0;
  var str = input[1];
  var ans = 0;
  var min = 0;
  var max = ~~(N / 2);
  start: while (min <= max) {
    var ave = ~~((min + max) / 2);
    for (var i = 0; i < N - ave; i++) {
      var base = str.substring(i, i + ave);
      if (str["lastIndexOf"](base) >= i + ave) {
        min = ave + 1;
        ans = ave;
        continue start;
      }
    }
    max = ave - 1;
  }
  console["log"](ans);
};
function __DECODE_0__(jpyXlS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jpyXlS, key);
}
main(require("fs").readFileSync("/dev/stdin", "UTF-8")["trim"]()["split"]("\n"));
