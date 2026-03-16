'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe0)) / 0x1 + -parseInt(__DECODE_0__(0xde)) / 0x2 * (-parseInt(__DECODE_0__(0xdf)) / 0x3) + parseInt(__DECODE_0__(0xd6)) / 0x4 + -parseInt(__DECODE_0__(0xe2)) / 0x5 * (parseInt(__DECODE_0__(0xe1)) / 0x6) + parseInt(__DECODE_0__(0xdb)) / 0x7 + -parseInt(__DECODE_0__(0xd7)) / 0x8 * (-parseInt(__DECODE_0__(0xdd)) / 0x9) + parseInt(__DECODE_0__(0xda)) / 0xa * (-parseInt(__DECODE_0__(0xd8)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeb648);
function __DECODE_0__(nDGAgY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nDGAgY, key);
}
function main(input) {
  var line = input[__DECODE_0__(0xdc)]('\x20');
  console['log'](line[0x2] + '\x20' + line[0x0] + '\x20' + line[0x1]);
}
main(require('fs')['readFileSync'](__DECODE_0__(0xd5), __DECODE_0__(0xd9)));
function __STRING_ARRAY__() {
  var _0x3d725c = ['split', '9UdVFtP', '12kksvFJ', '745971fTTcJr', '1623129mGqHao', '810UmPFyU', '10030CzTPNF', '/dev/stdin', '2373176LXCKcC', '13635184LuGDNh', '393305lEoPqA', 'utf8', '1500NUmfPN', '8298255pUuQfE'];
  __STRING_ARRAY__ = function () {
    return _0x3d725c;
  };
  return __STRING_ARRAY__();
}
