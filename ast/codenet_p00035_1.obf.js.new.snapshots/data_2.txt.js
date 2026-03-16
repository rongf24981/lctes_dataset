(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x128)) / 0x1 + -parseInt(__DECODE_0__(0x134)) / 0x2 * (-parseInt(__DECODE_0__(0x12f)) / 0x3) + parseInt(__DECODE_0__(0x12b)) / 0x4 + -parseInt(__DECODE_0__(0x138)) / 0x5 + -parseInt(__DECODE_0__(0x139)) / 0x6 * (-parseInt(__DECODE_0__(0x12d)) / 0x7) + -parseInt(__DECODE_0__(0x137)) / 0x8 + parseInt(__DECODE_0__(0x129)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc88e7);
function heron(a, b, c) {
  var s = (a + b + c) / 0x2;
  var S = Math['sqrt'](s * (s - a) * (s - b) * (s - c));
  return S;
}
function __STRING_ARRAY__() {
  var _0x1b83d1 = ['8436vHtlzo', 'split', 'apply', '4093712JREHGz', '6206810WeqAUt', '426BVcHJg', 'abs', 'pow', '105827NGDAOc', '9110601SWTPUv', 'map', '1696016PITLTw', 'length', '103943uCbxcj', 'sqrt', '135HtjGUx', '/dev/stdin', 'trim', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x1b83d1;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x133)](__DECODE_0__(0x130), __DECODE_0__(0x132));
var Arr = input[__DECODE_0__(0x131)]()[__DECODE_0__(0x135)]('\x0a');
function __DECODE_0__(PTmzoG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x127;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PTmzoG, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x12c)]; i++) {
  var arr = Arr[i][__DECODE_0__(0x135)](',')[__DECODE_0__(0x12a)](Number);
  (function (x1, y1, x2, y2, x3, y3, x4, y4) {
    var d12 = Math[__DECODE_0__(0x12e)](Math[__DECODE_0__(0x127)](x1 - x2, 0x2) + Math[__DECODE_0__(0x127)](y1 - y2, 0x2));
    var d23 = Math[__DECODE_0__(0x12e)](Math[__DECODE_0__(0x127)](x2 - x3, 0x2) + Math[__DECODE_0__(0x127)](y2 - y3, 0x2));
    var d34 = Math['sqrt'](Math[__DECODE_0__(0x127)](x3 - x4, 0x2) + Math['pow'](y3 - y4, 0x2));
    var d41 = Math[__DECODE_0__(0x12e)](Math['pow'](x4 - x1, 0x2) + Math[__DECODE_0__(0x127)](y4 - y1, 0x2));
    var d13 = Math[__DECODE_0__(0x12e)](Math[__DECODE_0__(0x127)](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
    var d24 = Math[__DECODE_0__(0x12e)](Math[__DECODE_0__(0x127)](x2 - x4, 0x2) + Math[__DECODE_0__(0x127)](y2 - y4, 0x2));
    var A = heron(d12, d24, d41) + heron(d23, d34, d24);
    var B = heron(d12, d23, d13) + heron(d13, d34, d41);
    var ans = Math[__DECODE_0__(0x13a)](A - B) < 0.00001 ? 'YES' : 'NO';
    console['log'](ans);
  })[__DECODE_0__(0x136)](null, arr);
}
