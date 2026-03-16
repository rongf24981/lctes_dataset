(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe4)) / 0x1 * (-parseInt(__DECODE_0__(0xee)) / 0x2) + parseInt(__DECODE_0__(0xe6)) / 0x3 + -parseInt(__DECODE_0__(0xe3)) / 0x4 + -parseInt(__DECODE_0__(0xed)) / 0x5 * (parseInt(__DECODE_0__(0xe5)) / 0x6) + parseInt(__DECODE_0__(0xef)) / 0x7 + parseInt(__DECODE_0__(0xeb)) / 0x8 + parseInt(__DECODE_0__(0xe7)) / 0x9 * (-parseInt(__DECODE_0__(0xe0)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9c53f);
function __DECODE_0__(WjhvFi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WjhvFi, key);
}
var input = require('fs')[__DECODE_0__(0xe2)](__DECODE_0__(0xe9), __DECODE_0__(0xe8));
var arr = input['trim']()['split']('\x0a');
var n = arr[__DECODE_0__(0xdf)]() - 0x0;
var v = arr[__DECODE_0__(0xdf)]()[__DECODE_0__(0xea)]('\x20')[__DECODE_0__(0xe1)](Number);
var cnt = 0x1;
for (var i = 0x0; i < n - 0x1; i++) {
  if (v[i] >= v[i + 0x1]) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x2a1c49 = ['1483756uOQRnD', '109IHndFX', '18IKFzfK', '3789288RLFuQG', '15926031PjxBFE', 'utf8', '/dev/stdin', 'split', '10165472vKVqGd', 'log', '316465sFpkTF', '14482wBguir', '8583295OyisoA', 'shift', '10qFwFbC', 'map', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2a1c49;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0xec)](cnt);
console[__DECODE_0__(0xec)](n);
