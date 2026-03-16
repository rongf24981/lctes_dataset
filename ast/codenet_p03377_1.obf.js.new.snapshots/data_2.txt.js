(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x126)) / 0x1 + parseInt(__DECODE_0__(0x11e)) / 0x2 + -parseInt(__DECODE_0__(0x128)) / 0x3 * (parseInt(__DECODE_0__(0x122)) / 0x4) + -parseInt(__DECODE_0__(0x129)) / 0x5 * (-parseInt(__DECODE_0__(0x11f)) / 0x6) + -parseInt(__DECODE_0__(0x127)) / 0x7 * (parseInt(__DECODE_0__(0x121)) / 0x8) + parseInt(__DECODE_0__(0x12b)) / 0x9 + parseInt(__DECODE_0__(0x11c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1ac4f);
inp = require('fs')[__DECODE_0__(0x12a)]('/dev/stdin', __DECODE_0__(0x123))[__DECODE_0__(0x11d)]('\x0a');
function __STRING_ARRAY__() {
  var _0x67edae = ['readFileSync', '343332BKHgnB', '2824180WFcRwM', 'split', '325346wtQYKJ', '41178ZusYLN', 'log', '1024redrMz', '76HKuJbK', 'utf8', 'YES', 'shift', '181167kKtqki', '4732MtkWmJ', '24306yhMmPk', '35ixEwyS'];
  __STRING_ARRAY__ = function () {
    return _0x67edae;
  };
  return __STRING_ARRAY__();
}
l = inp[__DECODE_0__(0x125)]()[__DECODE_0__(0x11d)]('\x20');
function __DECODE_0__(EEuULk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EEuULk, key);
}
A = l[0x0] * 0x1;
B = l[0x1] * 0x1;
X = l[0x2] * 0x1;
console[__DECODE_0__(0x120)](A + B > X && A < X ? __DECODE_0__(0x124) : 'NO');
