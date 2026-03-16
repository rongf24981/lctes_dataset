'use strict';

function __STRING_ARRAY__() {
  const _0x35137b = ['length', '/dev/stdin', 'trim', '1358054wPIyzK', 'split', '5709264RjhBJI', '233076PkaKPY', '371284zLWRXu', '6EctLmd', '7695234NBEYWm', '35abcHQI', '8761487chfFmn', '10MKubVq', '9452385RmyZhW', 'readFileSync', 'filter'];
  __STRING_ARRAY__ = function () {
    return _0x35137b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x81)) / 0x1 + -parseInt(__DECODE_0__(0x84)) / 0x2 * (parseInt(__DECODE_0__(0x86)) / 0x3) + -parseInt(__DECODE_0__(0x85)) / 0x4 * (-parseInt(__DECODE_0__(0x88)) / 0x5) + parseInt(__DECODE_0__(0x87)) / 0x6 + -parseInt(__DECODE_0__(0x89)) / 0x7 + parseInt(__DECODE_0__(0x83)) / 0x8 + -parseInt(__DECODE_0__(0x8b)) / 0x9 * (-parseInt(__DECODE_0__(0x8a)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd05be);
const main = arg => {
  arg = arg[__DECODE_0__(0x80)]()['split']('\x0a');
  const S = arg[0x0][__DECODE_0__(0x82)]('');
  console['log'](S[__DECODE_0__(0x8d)](n => n === '1')[__DECODE_0__(0x8e)]);
};
function __DECODE_0__(wtjJpq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wtjJpq, key);
}
main(require('fs')[__DECODE_0__(0x8c)](__DECODE_0__(0x7f), 'utf8'));
