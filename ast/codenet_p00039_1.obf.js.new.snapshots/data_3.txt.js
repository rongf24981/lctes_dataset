function __STRING_ARRAY__() {
  var _0x17cea8 = ["12nLfIED", ".IVXLCDM", "430wQCBGA", "log", "117427FvdrGb", "utf8", "27786SbhtmX", "split", "10BRYvio", "readFileSync", "564kpjRbR", "260561WNbXpu", "11018187irghen", "indexOf", "49314ySVRdz", "1406568SkkZcE", "104VoKaiQ", "map", "16090855QKkCQL"];
  __STRING_ARRAY__ = function () {
    return _0x17cea8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("117427FvdrGb") / 1 + parseInt("1406568SkkZcE") / 2 + parseInt("27786SbhtmX") / 3 * (parseInt("564kpjRbR") / 4) + parseInt("430wQCBGA") / 5 * (-parseInt("49314ySVRdz") / 6) + -parseInt("260561WNbXpu") / 7 * (parseInt("104VoKaiQ") / 8) + -parseInt("11018187irghen") / 9 * (-parseInt("10BRYvio") / 10) + parseInt("16090855QKkCQL") / 11 * (-parseInt("12nLfIED") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 697358);
function __DECODE_0__(umYIHs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 383;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(umYIHs, key);
}
r = ".IVXLCDM";
require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n")["map"](function (i) {
  if (i) {
    n = s = p = 0;
    i["split"]("")["map"](function (c) {
      n = Math.pow(10, ~~((n = r["indexOf"](c)) / 2)) / (2 - n % 2);
      if (n > p) {
        s -= p * 2;
      } else {
        0;
      }
      s += n;
      p = n;
    });
    console["log"](s);
  } else {
    0;
  }
});
