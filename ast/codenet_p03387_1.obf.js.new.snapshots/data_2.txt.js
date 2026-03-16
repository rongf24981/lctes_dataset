function __DECODE_0__(Rjvpsu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1db;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Rjvpsu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e3)) / 0x1 * (parseInt(__DECODE_0__(0x1de)) / 0x2) + parseInt(__DECODE_0__(0x1e8)) / 0x3 * (parseInt(__DECODE_0__(0x1e1)) / 0x4) + parseInt(__DECODE_0__(0x1e5)) / 0x5 * (parseInt(__DECODE_0__(0x1dc)) / 0x6) + parseInt(__DECODE_0__(0x1e9)) / 0x7 * (parseInt(__DECODE_0__(0x1ed)) / 0x8) + -parseInt(__DECODE_0__(0x1ec)) / 0x9 * (-parseInt(__DECODE_0__(0x1e6)) / 0xa) + -parseInt(__DECODE_0__(0x1e0)) / 0xb * (parseInt(__DECODE_0__(0x1eb)) / 0xc) + -parseInt(__DECODE_0__(0x1e2)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x408c4);
function Main(s) {
  var s = s[__DECODE_0__(0x1dd)]('\x0a')[0x0]['split']('\x20')[__DECODE_0__(0x1df)](e => parseInt(e, 0xa))[__DECODE_0__(0x1e4)]((a, b) => b - a);
  var cnt = 0x0;
  if ((s[0x1] - s[0x2]) % 0x2 === 0x0) {
    cnt += s[0x0] - s[0x1];
    s[0x2] += cnt;
    cnt += (s[0x0] - s[0x2]) / 0x2;
  } else {
    s[0x0]++;
    s[0x1]++;
    cnt++;
    cnt += s[0x0] - s[0x1];
    s[0x2] += s[0x0] - s[0x1];
    cnt += (s[0x0] - s[0x2]) / 0x2;
  }
  console[__DECODE_0__(0x1ea)](cnt);
}
function __STRING_ARRAY__() {
  var _0x1e0018 = ['4ShIcbe', 'sort', '1016300tvSzXS', '4280SsrUYR', 'readFileSync', '3WACwAn', '35QegbPa', 'log', '24PEQSaZ', '5931gykjTY', '220344BbQucF', '/dev/stdin', '6SENwaw', 'split', '104956HaGqUT', 'map', '1464562VXonHc', '1766764gIExNb', '9671454qQursb'];
  __STRING_ARRAY__ = function () {
    return _0x1e0018;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1e7)](__DECODE_0__(0x1db), 'utf8'));
