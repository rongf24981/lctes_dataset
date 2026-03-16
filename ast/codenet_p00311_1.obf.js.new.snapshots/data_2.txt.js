(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9f)) / 0x1 + -parseInt(__DECODE_0__(0x99)) / 0x2 * (parseInt(__DECODE_0__(0x9a)) / 0x3) + -parseInt(__DECODE_0__(0x91)) / 0x4 * (parseInt(__DECODE_0__(0x90)) / 0x5) + parseInt(__DECODE_0__(0x93)) / 0x6 + -parseInt(__DECODE_0__(0x9b)) / 0x7 + parseInt(__DECODE_0__(0x94)) / 0x8 * (parseInt(__DECODE_0__(0x96)) / 0x9) + parseInt(__DECODE_0__(0x8f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x98cfc);
var input = require('fs')[__DECODE_0__(0x9d)]('/dev/stdin', __DECODE_0__(0x9e));
function __DECODE_0__(gLFLVu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gLFLVu, key);
}
function __STRING_ARRAY__() {
  var _0x14d42d = ['kenjiro', 'shift', '4oLlTCl', '3144ceayHx', '692930JywQlv', 'map', 'readFileSync', 'utf8', '819708hukmrD', 'split', 'log', '17590520FtTYhq', '25HeuTEf', '543068oWOxaJ', 'even', '2352372iVVKTd', '8prpFRj', 'floor', '669879IRxZTS'];
  __STRING_ARRAY__ = function () {
    return _0x14d42d;
  };
  return __STRING_ARRAY__();
}
var arr = input['trim']()['split']('\x0a');
var [h1, h2] = arr[__DECODE_0__(0x98)]()[__DECODE_0__(0x8d)]('\x20')[__DECODE_0__(0x9c)](Number);
var [k1, k2] = arr[__DECODE_0__(0x98)]()['split']('\x20')[__DECODE_0__(0x9c)](Number);
var [a, b, c, d] = arr[__DECODE_0__(0x98)]()[__DECODE_0__(0x8d)]('\x20')[__DECODE_0__(0x9c)](Number);
var h = h1 * a + h2 * b + Math[__DECODE_0__(0x95)](h1 / 0xa) * c + Math[__DECODE_0__(0x95)](h2 / 0x14) * d;
var k = k1 * a + k2 * b + Math['floor'](k1 / 0xa) * c + Math['floor'](k2 / 0x14) * d;
if (h == k) {
  console[__DECODE_0__(0x8e)](__DECODE_0__(0x92));
} else {
  if (h > k) {
    console[__DECODE_0__(0x8e)]('hiroshi');
  } else {
    console[__DECODE_0__(0x8e)](__DECODE_0__(0x97));
  }
}
