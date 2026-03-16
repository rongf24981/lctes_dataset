(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x117)) / 0x1 + -parseInt(__DECODE_0__(0x113)) / 0x2 * (parseInt(__DECODE_0__(0x11e)) / 0x3) + -parseInt(__DECODE_0__(0x11b)) / 0x4 * (parseInt(__DECODE_0__(0x114)) / 0x5) + -parseInt(__DECODE_0__(0x118)) / 0x6 + -parseInt(__DECODE_0__(0x110)) / 0x7 * (parseInt(__DECODE_0__(0x11d)) / 0x8) + parseInt(__DECODE_0__(0x119)) / 0x9 * (parseInt(__DECODE_0__(0x10f)) / 0xa) + parseInt(__DECODE_0__(0x11a)) / 0xb * (parseInt(__DECODE_0__(0x11f)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb9a33);
function __STRING_ARRAY__() {
  var _0x115cc2 = ['replace', '8fQlrXa', '1212132DPzWkE', '3312060EUbVQT', '670IxsslP', '6455197ZDictd', 'forEach', 'split', '2WxiSOS', '3510oCqBst', 'readFileSync', '/dev/stdin', '1351016NWAyqD', '1063230hlSILT', '143199JiTkyC', '44BkgppR', '7164OepKmV'];
  __STRING_ARRAY__ = function () {
    return _0x115cc2;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x115)](__DECODE_0__(0x116), 'utf8');
function __DECODE_0__(IcPwkt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IcPwkt, key);
}
var Arr = input['trim']()[__DECODE_0__(0x112)]('\x0a');
Arr[__DECODE_0__(0x111)](function (v) {
  v = v[__DECODE_0__(0x11c)](/@(\d)(.)/g, function (s, s1, s2) {
    return Array(s1 - 0x0 + 0x1)['join'](s2);
  });
  console['log'](v);
});
