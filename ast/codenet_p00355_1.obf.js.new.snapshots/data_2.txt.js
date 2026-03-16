(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ff)) / 0x1 + -parseInt(__DECODE_0__(0x1fa)) / 0x2 * (-parseInt(__DECODE_0__(0x1f9)) / 0x3) + parseInt(__DECODE_0__(0x1f4)) / 0x4 * (parseInt(__DECODE_0__(0x1f8)) / 0x5) + parseInt(__DECODE_0__(0x203)) / 0x6 + -parseInt(__DECODE_0__(0x200)) / 0x7 + -parseInt(__DECODE_0__(0x1fe)) / 0x8 + parseInt(__DECODE_0__(0x1fb)) / 0x9 * (parseInt(__DECODE_0__(0x1f7)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1fcac);
var input = require('fs')[__DECODE_0__(0x202)](__DECODE_0__(0x1fd), 'utf8');
function __DECODE_0__(bBfHgL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBfHgL, key);
}
var arr = input[__DECODE_0__(0x1f6)]()[__DECODE_0__(0x201)]('\x0a');
var [a, b] = arr[__DECODE_0__(0x1f5)]()['split']('\x20')['map'](Number);
var n = arr['shift']() - 0x0;
var flag = 0x0;
while (n--) {
  var [s, f] = arr[__DECODE_0__(0x1f5)]()[__DECODE_0__(0x201)]('\x20')[__DECODE_0__(0x1fc)](Number);
  if (f <= a || b <= s) {
    continue;
  } else {
    flag = 0x1;
  }
}
function __STRING_ARRAY__() {
  var _0x6b4b08 = ['20OwixJa', '7758rWPbtq', '40trMxCe', '2459295pzDoog', 'map', '/dev/stdin', '1839304pkwOCT', '203364VRSYzZ', '1099133lvbzAJ', 'split', 'readFileSync', '1400286tNcEpD', '162160rmozaf', 'shift', 'trim', '10qwueBC'];
  __STRING_ARRAY__ = function () {
    return _0x6b4b08;
  };
  return __STRING_ARRAY__();
}
console['log'](flag);
