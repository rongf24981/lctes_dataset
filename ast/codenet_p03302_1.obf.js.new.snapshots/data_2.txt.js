(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a6)) / 0x1 + -parseInt(__DECODE_0__(0x1a9)) / 0x2 * (parseInt(__DECODE_0__(0x1a0)) / 0x3) + parseInt(__DECODE_0__(0x19c)) / 0x4 + parseInt(__DECODE_0__(0x1a4)) / 0x5 * (-parseInt(__DECODE_0__(0x1a7)) / 0x6) + parseInt(__DECODE_0__(0x1a3)) / 0x7 + parseInt(__DECODE_0__(0x1a2)) / 0x8 * (parseInt(__DECODE_0__(0x1aa)) / 0x9) + -parseInt(__DECODE_0__(0x19d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2b8ee);
function Main(s) {
  s = s[__DECODE_0__(0x19e)]('\x20')[__DECODE_0__(0x19b)](a => +a);
  var ans = 'x';
  if (s[0x0] + s[0x1] === 0xf) {
    ans = '+';
  }
  if (s[0x0] * s[0x1] === 0xf) {
    ans = '*';
  }
  console[__DECODE_0__(0x1a1)](ans);
}
function __STRING_ARRAY__() {
  var _0x49bd9d = ['72qytgjq', 'log', '24rKIZVY', '959063RpmFWG', '207925NFlrAS', '/dev/stdin', '121370KknPCr', '48YZkqtS', 'utf8', '12860eOqVHC', '869499SaYutw', 'map', '1105208DfaVzC', '1591000KLuULL', 'split', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x49bd9d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vYViih, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vYViih, key);
}
Main(require('fs')[__DECODE_0__(0x19f)](__DECODE_0__(0x1a5), __DECODE_0__(0x1a8)));
