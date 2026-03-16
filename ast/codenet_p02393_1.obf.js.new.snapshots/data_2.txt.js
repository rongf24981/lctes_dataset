function __STRING_ARRAY__() {
  var _0x478fe4 = ['28352mtaKMS', '50rWzFPP', '3YHuoWD', '1974177RFsevS', '575HpuGBQ', '88FdIIih', '/dev/stdin', 'split', '9902760owwHUn', '591762AbHxia', '49WjMMgl', 'utf8', '108555zQCozV', '1650900WJjELL', '%d\x20%d\x20%d', '435718oBJUis'];
  __STRING_ARRAY__ = function () {
    return _0x478fe4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x89)) / 0x1 * (parseInt(__DECODE_0__(0x86)) / 0x2) + -parseInt(__DECODE_0__(0x93)) / 0x3 + -parseInt(__DECODE_0__(0x87)) / 0x4 * (-parseInt(__DECODE_0__(0x8b)) / 0x5) + -parseInt(__DECODE_0__(0x90)) / 0x6 * (parseInt(__DECODE_0__(0x91)) / 0x7) + parseInt(__DECODE_0__(0x8f)) / 0x8 + parseInt(__DECODE_0__(0x8a)) / 0x9 * (-parseInt(__DECODE_0__(0x88)) / 0xa) + -parseInt(__DECODE_0__(0x8c)) / 0xb * (-parseInt(__DECODE_0__(0x94)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa5329);
function __DECODE_0__(BZFWUH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x85;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BZFWUH, key);
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x8d), __DECODE_0__(0x92));
var cnt;
var i;
var j;
input = input[__DECODE_0__(0x8e)]('\x20');
for (cnt = 0x0; cnt < 0x3; cnt++) {
  for (i = 0x0; i < 0x3; i++) {
    if (input[i] > input[i + 0x1]) {
      j = input[i];
      input[i] = input[i + 0x1];
      input[i + 0x1] = j;
    }
  }
}
console['log'](__DECODE_0__(0x85), input[0x0], input[0x1], input[0x2]);
