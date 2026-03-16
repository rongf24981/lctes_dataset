'use strict';

function __STRING_ARRAY__() {
  const _0x2526f7 = ['6732632cfKdpS', '12170QxnQoP', 'utf8', '2871522SLLgXH', 'log', '544986SrXfBm', '/dev/stdin', 'split', '5391855NCyMMs', '288rEXYMj', 'readFileSync', 'map', '1989916ZcZYfz', '84NyuVDl', '40TRcqLo', '698501qdxDwZ'];
  __STRING_ARRAY__ = function () {
    return _0x2526f7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ECeZHt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x193;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ECeZHt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x19a)) / 0x1 + -parseInt(__DECODE_0__(0x19c)) / 0x2 * (parseInt(__DECODE_0__(0x194)) / 0x3) + parseInt(__DECODE_0__(0x197)) / 0x4 + -parseInt(__DECODE_0__(0x193)) / 0x5 + -parseInt(__DECODE_0__(0x1a0)) / 0x6 * (parseInt(__DECODE_0__(0x198)) / 0x7) + parseInt(__DECODE_0__(0x19b)) / 0x8 + parseInt(__DECODE_0__(0x19e)) / 0x9 * (parseInt(__DECODE_0__(0x199)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89088);
function main(arg) {
  const letters = arg['split']('\x0a')[__DECODE_0__(0x196)](n => n[__DECODE_0__(0x1a2)](''));
  console[__DECODE_0__(0x19f)](letters[0x0][0x0] + letters[0x1][0x1] + letters[0x2][0x2]);
}
main(require('fs')[__DECODE_0__(0x195)](__DECODE_0__(0x1a1), __DECODE_0__(0x19d)));
