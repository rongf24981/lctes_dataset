function __STRING_ARRAY__() {
  var _0x30d005 = ["3047252UsgyxJ", "30826809rnSPwe", "134ilPBTb", "length", "1754325dbOrgc", "trim", "readFileSync", "9683344Aumaum", "toFixed", "65883RUlNIM", "split", "log", "195769CvciNS", "333162wSBooG", "186pYLTYB"];
  __STRING_ARRAY__ = function () {
    return _0x30d005;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EXGxNg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 387;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EXGxNg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("333162wSBooG") / 1 + parseInt("134ilPBTb") / 2 * (-parseInt("65883RUlNIM") / 3) + -parseInt("3047252UsgyxJ") / 4 + parseInt("1754325dbOrgc") / 5 + parseInt("186pYLTYB") / 6 * (parseInt("195769CvciNS") / 7) + -parseInt("9683344Aumaum") / 8 + parseInt("30826809rnSPwe") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 866263);
require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n").some(function (i) {
  j = i["split"](" ");
  if (j["length"] == 6) {
    a = j[0];
    b = j[1];
    c = j[2];
    d = j[3];
    e = j[4];
    f = j[5];
    g = a * a;
    h = b * b;
    k = c * c;
    l = d * d;
    m = e * e;
    n = f * f;
    p = ((b - f) * (h - l + g - k) - (b - d) * (h - n + g - m)) / ((b - f) * 2 * (a - c) - (b - d) * 2 * (a - e));
    q = ((a - e) * (g - k + h - l) - (a - c) * (g - m + h - n)) / ((a - e) * 2 * (b - d) - (a - c) * 2 * (b - f));
    console["log"](p["toFixed"](3), q.toFixed(3), Math.sqrt((a - p) * (a - p) + (b - q) * (b - q)).toFixed(3));
  }
});
