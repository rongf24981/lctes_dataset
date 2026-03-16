(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xdb)) / 0x1 + -parseInt(__DECODE_0__(0xda)) / 0x2 * (-parseInt(__DECODE_0__(0xdf)) / 0x3) + parseInt(__DECODE_0__(0xe1)) / 0x4 * (-parseInt(__DECODE_0__(0xe0)) / 0x5) + -parseInt(__DECODE_0__(0xd8)) / 0x6 + -parseInt(__DECODE_0__(0xdd)) / 0x7 + parseInt(__DECODE_0__(0xde)) / 0x8 + -parseInt(__DECODE_0__(0xd6)) / 0x9 * (parseInt(__DECODE_0__(0xd9)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x96970);
inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()[__DECODE_0__(0xd7)]('\x0a');
function __DECODE_0__(NVhmbt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NVhmbt, key);
}
l = inp[__DECODE_0__(0xe2)]()[__DECODE_0__(0xd7)]('\x20');
a = l[__DECODE_0__(0xe2)]() * 0x1;
b = l['shift']() * 0x1;
c = l[__DECODE_0__(0xe2)]() * 0x1;
console['log'](Math['sqrt'](a) + Math[__DECODE_0__(0xdc)](b) < Math[__DECODE_0__(0xdc)](c) ? __DECODE_0__(0xe3) : 'No');
function __STRING_ARRAY__() {
  var _0x5105c9 = ['110448REHYEQ', '250KSVRTh', '43570AfqVBk', '1187147FBiAwS', 'sqrt', '1442938XDnzuC', '4227288eFaDme', '129WJbgAe', '75brUTKe', '44848LVmXaO', 'shift', 'Yes', '591399cHXSgB', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5105c9;
  };
  return __STRING_ARRAY__();
}
