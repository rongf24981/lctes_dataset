(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x101)) / 0x1 + parseInt(__DECODE_0__(0x102)) / 0x2 * (-parseInt(__DECODE_0__(0xf7)) / 0x3) + -parseInt(__DECODE_0__(0xf2)) / 0x4 + -parseInt(__DECODE_0__(0x100)) / 0x5 * (-parseInt(__DECODE_0__(0xf8)) / 0x6) + -parseInt(__DECODE_0__(0xfb)) / 0x7 + -parseInt(__DECODE_0__(0xfa)) / 0x8 + parseInt(__DECODE_0__(0xfd)) / 0x9 * (parseInt(__DECODE_0__(0xf9)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x735cc);
var input = require('fs')[__DECODE_0__(0xf5)](__DECODE_0__(0xff), __DECODE_0__(0xf4));
var arr = input['trim']()[__DECODE_0__(0xfc)]('\x0a')[__DECODE_0__(0xf3)](Number);
var n = arr['shift']();
var a = arr['shift']();
var cnt = 0x1;
var max = 0x1;
var memo = 0x0;
arr[__DECODE_0__(0xfe)](v => {
  if (a > v) {
    if (memo == 0x1) {
      cnt = 0x2;
    } else {
      cnt++;
    }
    memo = -0x1;
  } else {
    if (a < v) {
      if (memo == -0x1) {
        cnt = 0x2;
      } else {
        cnt++;
      }
      memo = 0x1;
    }
  }
  max = Math['max'](max, cnt);
  a = v;
});
function __DECODE_0__(mHOjZE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mHOjZE, key);
}
function __STRING_ARRAY__() {
  var _0x85fae1 = ['4710ukIklJ', '10BXGDWg', '4941184OVAqyR', '4092305OETGmH', 'split', '29790513CMxcuo', 'forEach', '/dev/stdin', '730ojLiUU', '803052zcjgxP', '235078TEnjGo', '1906688nGzrlH', 'map', 'utf8', 'readFileSync', 'log', '12Sldqrh'];
  __STRING_ARRAY__ = function () {
    return _0x85fae1;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0xf6)](max);
