(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa2)) / 0x1 * (-parseInt(__DECODE_0__(0x9c)) / 0x2) + -parseInt(__DECODE_0__(0x9a)) / 0x3 * (parseInt(__DECODE_0__(0xa4)) / 0x4) + parseInt(__DECODE_0__(0xa1)) / 0x5 * (parseInt(__DECODE_0__(0xa0)) / 0x6) + -parseInt(__DECODE_0__(0xa9)) / 0x7 + -parseInt(__DECODE_0__(0xac)) / 0x8 + -parseInt(__DECODE_0__(0x97)) / 0x9 + -parseInt(__DECODE_0__(0xa7)) / 0xa * (-parseInt(__DECODE_0__(0x99)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2982);
var a = [''];
a[0x1] = '\x27,.,!?'[__DECODE_0__(0x9d)]('');
a[0x2] = __DECODE_0__(0x9e)[__DECODE_0__(0x9d)]('');
a[0x3] = __DECODE_0__(0xa3)[__DECODE_0__(0x9d)]('');
a[0x4] = __DECODE_0__(0xab)[__DECODE_0__(0x9d)]('');
a[0x5] = __DECODE_0__(0xa8)[__DECODE_0__(0x9d)]('');
function __STRING_ARRAY__() {
  var _0x13d8cd = ['69265muQwWp', '21yPDcVQ', 'defDEF', '4cNujDQ', 'utf8', 'log', '3630PqIpYZ', 'jklJKL', '8797453yqNDxB', 'length', 'ghiGHI', '254368YqqUqQ', '/dev/stdin', '11154690YpKPpF', 'readFileSync', '87923jiHydk', '3008187NJRutE', 'wxyzWXYZ', '90982nOtYHk', 'split', 'abcABC', 'forEach', '204LBjHuZ'];
  __STRING_ARRAY__ = function () {
    return _0x13d8cd;
  };
  return __STRING_ARRAY__();
}
a[0x6] = 'mnoMNO'[__DECODE_0__(0x9d)]('');
a[0x7] = 'pqrsPQRS'[__DECODE_0__(0x9d)]('');
a[0x8] = 'tuvTUV'[__DECODE_0__(0x9d)]('');
function __DECODE_0__(DfiNjp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x96;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfiNjp, key);
}
a[0x9] = __DECODE_0__(0x9b)[__DECODE_0__(0x9d)]('');
var input = require('fs')[__DECODE_0__(0x98)](__DECODE_0__(0x96), __DECODE_0__(0xa5));
var arr = input['trim']()[__DECODE_0__(0x9d)]('\x0a');
arr[__DECODE_0__(0x9f)](function (v) {
  v = v['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
    if (x[0x0] == '0') {
      return x['slice'](0x1)['replace'](/0/g, '\x20');
    } else {
      return a[x[0x0] - 0x0][x[__DECODE_0__(0xaa)] - 0x1];
    }
  });
  console[__DECODE_0__(0xa6)](v);
});
