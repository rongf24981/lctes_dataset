(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd1)) / 0x1 * (parseInt(__DECODE_0__(0xcb)) / 0x2) + -parseInt(__DECODE_0__(0xcf)) / 0x3 + -parseInt(__DECODE_0__(0xc8)) / 0x4 + -parseInt(__DECODE_0__(0xce)) / 0x5 + -parseInt(__DECODE_0__(0xc6)) / 0x6 * (-parseInt(__DECODE_0__(0xcd)) / 0x7) + parseInt(__DECODE_0__(0xc2)) / 0x8 * (parseInt(__DECODE_0__(0xc9)) / 0x9) + -parseInt(__DECODE_0__(0xc4)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xefd71);
var input = require('fs')[__DECODE_0__(0xc5)](__DECODE_0__(0xc3), __DECODE_0__(0xca));
var arr = input[__DECODE_0__(0xcc)]()[__DECODE_0__(0xd0)]('\x0a');
function __STRING_ARRAY__() {
  var _0x3eb495 = ['readFileSync', '219900Czhrjn', 'shift', '977536XieIXG', '674397CVVRGi', 'utf8', '126cGSPsl', 'trim', '140FKOjlf', '2804010WtMksx', '4931379mwjeJx', 'split', '24379iWCptX', 'map', 'log', '152MNZICz', '/dev/stdin', '2612400ADfAgZ'];
  __STRING_ARRAY__ = function () {
    return _0x3eb495;
  };
  return __STRING_ARRAY__();
}
var [n, m] = arr[__DECODE_0__(0xc7)]()[__DECODE_0__(0xd0)]('\x20')[__DECODE_0__(0xc0)](Number);
var cnt = 0x0;
function __DECODE_0__(SwfIRC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SwfIRC, key);
}
for (var i = 0x0; i < n; i++) {
  var s = arr[i];
  var t = arr[i + n];
  for (var j = 0x0; j < m; j++) {
    if (s[j] != t[j]) {
      cnt++;
    }
  }
}
console[__DECODE_0__(0xc1)](cnt);
