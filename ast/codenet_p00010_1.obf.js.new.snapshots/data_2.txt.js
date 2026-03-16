function __STRING_ARRAY__() {
  var _0x30d005 = ['3047252UsgyxJ', '30826809rnSPwe', '134ilPBTb', 'length', '1754325dbOrgc', 'trim', 'readFileSync', '9683344Aumaum', 'toFixed', '65883RUlNIM', 'split', 'log', '195769CvciNS', '333162wSBooG', '186pYLTYB'];
  __STRING_ARRAY__ = function () {
    return _0x30d005;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EXGxNg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x183;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EXGxNg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x18a)) / 0x1 + parseInt(__DECODE_0__(0x18e)) / 0x2 * (-parseInt(__DECODE_0__(0x186)) / 0x3) + -parseInt(__DECODE_0__(0x18c)) / 0x4 + parseInt(__DECODE_0__(0x190)) / 0x5 + parseInt(__DECODE_0__(0x18b)) / 0x6 * (parseInt(__DECODE_0__(0x189)) / 0x7) + -parseInt(__DECODE_0__(0x184)) / 0x8 + parseInt(__DECODE_0__(0x18d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd37d7);
require('fs')[__DECODE_0__(0x183)]('/dev/stdin', 'utf8')[__DECODE_0__(0x191)]()[__DECODE_0__(0x187)]('\x0a')['some'](function (i) {
  j = i[__DECODE_0__(0x187)]('\x20');
  if (j[__DECODE_0__(0x18f)] == 0x6) {
    a = j[0x0];
    b = j[0x1];
    c = j[0x2];
    d = j[0x3];
    e = j[0x4];
    f = j[0x5];
    g = a * a;
    h = b * b;
    k = c * c;
    l = d * d;
    m = e * e;
    n = f * f;
    p = ((b - f) * (h - l + g - k) - (b - d) * (h - n + g - m)) / (0x2 * (b - f) * (a - c) - 0x2 * (b - d) * (a - e));
    q = ((a - e) * (g - k + h - l) - (a - c) * (g - m + h - n)) / (0x2 * (a - e) * (b - d) - 0x2 * (a - c) * (b - f));
    console[__DECODE_0__(0x188)](p[__DECODE_0__(0x185)](0x3), q['toFixed'](0x3), Math['sqrt']((a - p) * (a - p) + (b - q) * (b - q))['toFixed'](0x3));
  }
});
