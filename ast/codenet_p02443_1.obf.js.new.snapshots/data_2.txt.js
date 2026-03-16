(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x123)) / 0x1 + parseInt(__DECODE_0__(0x11e)) / 0x2 + -parseInt(__DECODE_0__(0x125)) / 0x3 * (parseInt(__DECODE_0__(0x12c)) / 0x4) + -parseInt(__DECODE_0__(0x12a)) / 0x5 * (-parseInt(__DECODE_0__(0x128)) / 0x6) + -parseInt(__DECODE_0__(0x129)) / 0x7 + -parseInt(__DECODE_0__(0x12e)) / 0x8 * (-parseInt(__DECODE_0__(0x11f)) / 0x9) + -parseInt(__DECODE_0__(0x121)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcbce6);
var input = require('fs')[__DECODE_0__(0x127)](__DECODE_0__(0x130), __DECODE_0__(0x124));
var arr = input[__DECODE_0__(0x120)]()['split']('\x0a');
var n = arr[__DECODE_0__(0x12d)]() - 0x0;
var a = arr[__DECODE_0__(0x12d)]()[__DECODE_0__(0x122)]('\x20')['map'](Number);
var q = arr[__DECODE_0__(0x12d)]() - 0x0;
function __DECODE_0__(YTLzCy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YTLzCy, key);
}
function __STRING_ARRAY__() {
  var _0x209eb1 = ['log', '80vfYnhN', 'shift', '847096wFwjVY', 'concat', '/dev/stdin', 'slice', '45506tmiQep', '135KfqzRh', 'trim', '12103200tXsgFM', 'split', '1403762yZlNCC', 'utf8', '76449ltCfDN', 'reverse', 'readFileSync', '102918eiyrQD', '5501699vqswqy', '95QQAZpt'];
  __STRING_ARRAY__ = function () {
    return _0x209eb1;
  };
  return __STRING_ARRAY__();
}
var s = '';
for (var i = 0x0; i < q; i++) {
  var [b, e] = arr[i][__DECODE_0__(0x122)]('\x20')['map'](Number);
  var x = a[__DECODE_0__(0x131)](0x0, b);
  var y = a[__DECODE_0__(0x131)](b, e)[__DECODE_0__(0x126)]();
  var z = a[__DECODE_0__(0x131)](e);
  a = x[__DECODE_0__(0x12f)](y, z);
}
console[__DECODE_0__(0x12b)](a['join']('\x20'));
