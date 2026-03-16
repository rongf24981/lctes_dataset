function __STRING_ARRAY__() {
  var _0x4b4a88 = ['push', '1146184fPCYWJ', '645386ukirlO', '2294454vEftbI', '2619440VCUlhO', '113445uzUIog', '7gYgdjc', '4piPnLI', 'split', 'log', '1069321oyVjRZ', '/dev/stdin', '5SmWojS', 'sort', 'replace', 'trim', 'join', 'utf8', '100vWucwc', '3548667qWfSZA', '408sEdBqA'];
  __STRING_ARRAY__ = function () {
    return _0x4b4a88;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MgrbYW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MgrbYW, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xaf)) / 0x1 * (-parseInt(__DECODE_0__(0xa5)) / 0x2) + parseInt(__DECODE_0__(0xb6)) / 0x3 * (-parseInt(__DECODE_0__(0xaa)) / 0x4) + parseInt(__DECODE_0__(0xa7)) / 0x5 + -parseInt(__DECODE_0__(0xa6)) / 0x6 + parseInt(__DECODE_0__(0xa9)) / 0x7 * (parseInt(__DECODE_0__(0xa4)) / 0x8) + parseInt(__DECODE_0__(0xa8)) / 0x9 * (parseInt(__DECODE_0__(0xb5)) / 0xa) + parseInt(__DECODE_0__(0xad)) / 0xb * (parseInt(__DECODE_0__(0xb7)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe0846);
var input = require('fs')['readFileSync'](__DECODE_0__(0xae), __DECODE_0__(0xb4));
var arr = input[__DECODE_0__(0xb2)]()[__DECODE_0__(0xab)]('\x0a');
var n = arr['shift']() - 0x0;
var a = [];
for (var i = 0x0; i < n; i++) {
  a[__DECODE_0__(0xb8)](arr[i][__DECODE_0__(0xab)]('\x20')['map'](Number));
}
a[__DECODE_0__(0xb0)](function (a, b) {
  if (a[0x0] != b[0x0]) {
    return a[0x0] - b[0x0];
  } else {
    return a[0x1] - b[0x1];
  }
});
console[__DECODE_0__(0xac)](a[__DECODE_0__(0xb3)]('\x0a')[__DECODE_0__(0xb1)](/,/g, '\x20'));
