(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x182)) / 0x1 + parseInt(__DECODE_0__(0x17c)) / 0x2 * (parseInt(__DECODE_0__(0x186)) / 0x3) + parseInt(__DECODE_0__(0x17f)) / 0x4 + parseInt(__DECODE_0__(0x17b)) / 0x5 + -parseInt(__DECODE_0__(0x180)) / 0x6 + -parseInt(__DECODE_0__(0x185)) / 0x7 * (parseInt(__DECODE_0__(0x181)) / 0x8) + parseInt(__DECODE_0__(0x17d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x32883);
const input = require('fs')[__DECODE_0__(0x17a)](__DECODE_0__(0x179), __DECODE_0__(0x183));
function __DECODE_0__(XcSjCS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x179;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XcSjCS, key);
}
const list = input[__DECODE_0__(0x184)]('\x20');
const a = Number(list[0x0]);
function __STRING_ARRAY__() {
  const _0x36e58d = ['split', '120855GhMvWl', '226509jEWxfg', '/dev/stdin', 'readFileSync', '579165RYkmkh', '4PdfePe', '3045114iocHbV', 'log', '1361920WJhobN', '795600bRAnbH', '144FhqeSG', '295316RYauex', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x36e58d;
  };
  return __STRING_ARRAY__();
}
const b = Number(list[0x1]);
if (a > b) {
  console[__DECODE_0__(0x17e)](a - 0x1);
} else {
  console[__DECODE_0__(0x17e)](a);
}
