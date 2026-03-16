(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xfe)) / 0x1 * (parseInt(__DECODE_0__(0xfa)) / 0x2) + parseInt(__DECODE_0__(0xfc)) / 0x3 + -parseInt(__DECODE_0__(0xf8)) / 0x4 * (parseInt(__DECODE_0__(0x104)) / 0x5) + parseInt(__DECODE_0__(0xf7)) / 0x6 + parseInt(__DECODE_0__(0x102)) / 0x7 + parseInt(__DECODE_0__(0xff)) / 0x8 + -parseInt(__DECODE_0__(0x101)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x90cf3);
var abc = require('fs')[__DECODE_0__(0x100)](__DECODE_0__(0xfb), __DECODE_0__(0xf9))[__DECODE_0__(0xfd)]('\x20')[__DECODE_0__(0x103)](Number);
var a = abc[0x0];
var b = abc[0x1];
var c = abc[0x2];
var i;
function __STRING_ARRAY__() {
  var _0x84b8f7 = ['6645XELotG', '8493744dtxquB', 'readFileSync', '26670195WxiOzi', '5397784BRgVIL', 'map', '2532385cwGXAt', '6990624guXeOH', '8LoRMAB', 'utf8', '120yXMcKp', '/dev/stdin', '3518442qXSJjT', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x84b8f7;
  };
  return __STRING_ARRAY__();
}
var result = 0x0;
for (i = a; i <= b; i++) {
  if (c % i === 0x0) {
    result++;
  }
}
function __DECODE_0__(ygPcBZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ygPcBZ, key);
}
console['log'](result);
