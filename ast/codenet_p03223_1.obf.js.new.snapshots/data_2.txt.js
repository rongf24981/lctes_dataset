function __DECODE_0__(qHWQKC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qHWQKC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c7)) / 0x1 + parseInt(__DECODE_0__(0x1d4)) / 0x2 + parseInt(__DECODE_0__(0x1d0)) / 0x3 * (-parseInt(__DECODE_0__(0x1d7)) / 0x4) + parseInt(__DECODE_0__(0x1cf)) / 0x5 + parseInt(__DECODE_0__(0x1d6)) / 0x6 + parseInt(__DECODE_0__(0x1ce)) / 0x7 * (parseInt(__DECODE_0__(0x1ca)) / 0x8) + -parseInt(__DECODE_0__(0x1c8)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x96f97);
console[__DECODE_0__(0x1c9)](main(require('fs')[__DECODE_0__(0x1cb)](__DECODE_0__(0x1d3), __DECODE_0__(0x1d2))));
function __STRING_ARRAY__() {
  var _0x1ef106 = ['readFileSync', 'pop', 'sort', '4309256woLvrE', '4267540mcXzFY', '3hOaGIE', 'split', 'utf8', '/dev/stdin', '230580yOsHtA', 'map', '615714yEimmC', '1678472BMvbTH', '1114120RRIfuR', '1354536AIaVIw', 'log', '16HPHbTq'];
  __STRING_ARRAY__ = function () {
    return _0x1ef106;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  s = s[__DECODE_0__(0x1d1)]('\x0a')[__DECODE_0__(0x1d5)](a => +a);
  var n = s[0x0];
  s[0x0] = s[n];
  s[__DECODE_0__(0x1cc)]();
  s[__DECODE_0__(0x1cd)]((a, b) => a - b);
  var ans = 0x0;
  var m = n + 0x1 >> 0x1;
  for (var i = 0x0; i < m; i++) {
    ans -= s[i] * 0x2;
  }
  for (; i < n; i++) {
    ans += s[i] * 0x2;
  }
  if (n % 0x2 === 0x0) {
    return ans - s[m] + s[m - 0x1];
  }
  if (s[m - 0x1] + s[m - 0x2] > s[m - 0x1] * 0x3 - s[m]) {
    return ans + s[m - 0x1] + s[m - 0x2];
  } else {
    return ans + s[m - 0x1] * 0x3 - s[m];
  }
}
