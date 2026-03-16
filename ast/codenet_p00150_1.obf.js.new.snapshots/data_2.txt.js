function __DECODE_0__(BhTbFc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BhTbFc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xbd)) / 0x1 * (-parseInt(__DECODE_0__(0xbb)) / 0x2) + -parseInt(__DECODE_0__(0xb8)) / 0x3 * (-parseInt(__DECODE_0__(0xb6)) / 0x4) + -parseInt(__DECODE_0__(0xb5)) / 0x5 * (parseInt(__DECODE_0__(0xb2)) / 0x6) + parseInt(__DECODE_0__(0xc2)) / 0x7 * (parseInt(__DECODE_0__(0xb9)) / 0x8) + parseInt(__DECODE_0__(0xbc)) / 0x9 * (-parseInt(__DECODE_0__(0xbf)) / 0xa) + parseInt(__DECODE_0__(0xb3)) / 0xb * (parseInt(__DECODE_0__(0xc0)) / 0xc) + parseInt(__DECODE_0__(0xb0)) / 0xd * (-parseInt(__DECODE_0__(0xb4)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4e942);
function prime(max) {
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[__DECODE_0__(0xc3)](Math['sqrt'](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[__DECODE_0__(0xc5)](arr[i]);
    }
  }
  return result;
}
var p = prime(0xf423f);
function __STRING_ARRAY__() {
  var _0x4ea0ba = ['push', '299jLoiwS', 'length', '201276NKcyAB', '10142oksVor', '32410WsjLdd', '10TLSzRG', '4uCCipP', 'trim', '48861hzIRlc', '8oTgdwU', 'utf8', '83894fdodut', '333cDBjBl', '1zShFbm', 'split', '15410eItjhn', '2148IpZDrO', '/dev/stdin', '2518838tKzVdX', 'floor', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4ea0ba;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xc1), __DECODE_0__(0xba));
var Arr = input[__DECODE_0__(0xb7)]()[__DECODE_0__(0xbe)]('\x0a')['map'](Number);
for (var i = 0x0; i < Arr[__DECODE_0__(0xb1)]; i++) {
  var a = Arr[i];
  if (a == 0x0) {
    break;
  }
  var twin = '';
  for (var j = 0x1; j < p[__DECODE_0__(0xb1)]; j++) {
    if (p[j] > a) {
      break;
    }
    if (p[j] - p[j - 0x1] == 0x2) {
      twin = p[j - 0x1] + '\x20' + p[j];
    }
  }
  console[__DECODE_0__(0xc4)](twin);
}
