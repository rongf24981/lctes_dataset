(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("181167kKtqki") / 1 + parseInt("325346wtQYKJ") / 2 + -parseInt("24306yhMmPk") / 3 * (parseInt("76HKuJbK") / 4) + -parseInt("35ixEwyS") / 5 * (-parseInt("41178ZusYLN") / 6) + -parseInt("4732MtkWmJ") / 7 * (parseInt("1024redrMz") / 8) + parseInt("343332BKHgnB") / 9 + parseInt("2824180WFcRwM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 109647);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
function __STRING_ARRAY__() {
  var _0x67edae = ["readFileSync", "343332BKHgnB", "2824180WFcRwM", "split", "325346wtQYKJ", "41178ZusYLN", "log", "1024redrMz", "76HKuJbK", "utf8", "YES", "shift", "181167kKtqki", "4732MtkWmJ", "24306yhMmPk", "35ixEwyS"];
  __STRING_ARRAY__ = function () {
    return _0x67edae;
  };
  return __STRING_ARRAY__();
}
l = inp["shift"]()["split"](" ");
function __DECODE_0__(EEuULk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 284;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EEuULk, key);
}
A = l[0] * 1;
B = l[1] * 1;
X = l[2] * 1;
console["log"](A + B > X && A < X ? "YES" : "NO");
