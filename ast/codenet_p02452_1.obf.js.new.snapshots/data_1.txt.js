function __STRING_ARRAY__() {
  var _0x4a55c1 = ['4StYNvU', '6837201sWYMQZ', 'shift', 'map', 'log', '3076812ygbngY', '3130655bLaDxt', '16212744bsNvUJ', 'readFileSync', 'utf8', 'split', '1931496AxDNRm', '1083976SxAzqZ', '2224041ZFFydh'];
  __STRING_ARRAY__ = function () {
    return _0x4a55c1;
  };
  return __STRING_ARRAY__();
}
var a0_0x296cde = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4fa4e7 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4fa4e7(0xbd)) / 0x1 + -parseInt(_0x4fa4e7(0xca)) / 0x2 + -parseInt(_0x4fa4e7(0xbe)) / 0x3 * (-parseInt(_0x4fa4e7(0xbf)) / 0x4) + -parseInt(_0x4fa4e7(0xc5)) / 0x5 + -parseInt(_0x4fa4e7(0xc4)) / 0x6 + parseInt(_0x4fa4e7(0xc0)) / 0x7 + parseInt(_0x4fa4e7(0xc6)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x87bfa);
function __DECODE_0__(voLRtg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(voLRtg, key);
}
var input = require('fs')[a0_0x296cde(0xc7)]('/dev/stdin', a0_0x296cde(0xc8));
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0x296cde(0xc1)]()[a0_0x296cde(0xc9)]('\x20')[a0_0x296cde(0xc2)](Number);
var m = arr['shift']() - 0x0;
var b = arr[a0_0x296cde(0xc1)]()[a0_0x296cde(0xc9)]('\x20')['map'](Number);
var memo = 0x0;
var cnt = 0x0;
for (var i = 0x0; i < m; i++) {
  var num = b[i];
  for (var j = memo; j < n; j++) {
    memo = j;
    if (num == a[j]) {
      cnt++;
      break;
    }
  }
}
console[a0_0x296cde(0xc3)](cnt == m ? 0x1 : 0x0);
