(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x101)) / 0x1 * (parseInt(__DECODE_0__(0x100)) / 0x2) + -parseInt(__DECODE_0__(0x102)) / 0x3 + -parseInt(__DECODE_0__(0xf3)) / 0x4 + parseInt(__DECODE_0__(0xfe)) / 0x5 * (-parseInt(__DECODE_0__(0xfa)) / 0x6) + parseInt(__DECODE_0__(0xfb)) / 0x7 * (parseInt(__DECODE_0__(0xf8)) / 0x8) + parseInt(__DECODE_0__(0xee)) / 0x9 * (-parseInt(__DECODE_0__(0xff)) / 0xa) + parseInt(__DECODE_0__(0xf9)) / 0xb * (parseInt(__DECODE_0__(0xfc)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4dd6b);
var input = require('fs')[__DECODE_0__(0xec)](__DECODE_0__(0xf0), __DECODE_0__(0xf4));
var arr = input[__DECODE_0__(0xef)]()[__DECODE_0__(0xf7)]('\x0a');
var n = arr[__DECODE_0__(0xfd)]() - 0x0;
function __DECODE_0__(vXvuRj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vXvuRj, key);
}
var a = arr['shift']()['split']('\x20')['map'](Number);
var b = a['slice']()[__DECODE_0__(0xf2)]((x, y) => x - y);
var q = arr[__DECODE_0__(0xfd)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x2633ab = ['121dutkZN', '78bymMhj', '838271BBWBWT', '1891116VRGwWy', 'shift', '53985BANyss', '1210dtlMQV', '2JATjvB', '582611YGlboA', '551904yvMTOE', 'map', 'readFileSync', 'log', '32733ZfdivB', 'trim', '/dev/stdin', 'keys', 'sort', '1228740FXPVKd', 'utf8', 'length', 'unshift', 'split', '16thAptW'];
  __STRING_ARRAY__ = function () {
    return _0x2633ab;
  };
  return __STRING_ARRAY__();
}
var xy = arr[__DECODE_0__(0x103)](v => v[__DECODE_0__(0xf7)]('\x20')[__DECODE_0__(0x103)](Number)['map'](v => v - 0x1));
xy[__DECODE_0__(0xf6)]([0x0, 0x0]);
var A = {};
var B = {};
for (var i = 0x0; i < a[__DECODE_0__(0xf5)]; i++) {
  if (a[i] != b[i]) {
    A[i] = a[i];
    B[i] = b[i];
  }
}
var BB = '';
for (var k in B) {
  BB += B[k];
}
var flag = ![];
for (var i = 0x0; i <= q; i++) {
  [A[xy[i][0x0]], A[xy[i][0x1]]] = [A[xy[i][0x1]], A[xy[i][0x0]]];
  var AA = '';
  for (var k in A) {
    AA += A[k];
  }
  if (AA == BB) {
    flag = !![];
    break;
  }
}
if (Object[__DECODE_0__(0xf1)](A)[__DECODE_0__(0xf5)] == 0x0) {
  console[__DECODE_0__(0xed)](0x0);
} else {
  if (flag) {
    console[__DECODE_0__(0xed)](i);
  } else {
    console[__DECODE_0__(0xed)](-0x1);
  }
}
