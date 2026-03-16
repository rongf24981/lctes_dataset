function __DECODE_0__(YKMkfT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x126;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YKMkfT, key);
}
function __STRING_ARRAY__() {
  const _0x4df488 = ['1208088zQkHNQ', 'indexOf', 'utf8', '254nhJZir', '5NSbGAy', '/dev/stdin', '3497508YZfUtc', 'readFileSync', 'aeiou', '3579762yZjaEH', '21DwsSzZ', '471208oijaDq', 'vowel', '1667943HQqQBb', '4047YjUdbE', 'consonant', '13800240uWZyht'];
  __STRING_ARRAY__ = function () {
    return _0x4df488;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x135)) / 0x1 * (parseInt(__DECODE_0__(0x12a)) / 0x2) + parseInt(__DECODE_0__(0x134)) / 0x3 + -parseInt(__DECODE_0__(0x127)) / 0x4 + parseInt(__DECODE_0__(0x12b)) / 0x5 * (-parseInt(__DECODE_0__(0x130)) / 0x6) + -parseInt(__DECODE_0__(0x131)) / 0x7 * (-parseInt(__DECODE_0__(0x132)) / 0x8) + -parseInt(__DECODE_0__(0x12d)) / 0x9 + parseInt(__DECODE_0__(0x126)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4c0b6);
function Main(input) {
  c = input;
  const vowel = __DECODE_0__(0x12f);
  console['log'](vowel[__DECODE_0__(0x128)](c) !== -0x1 ? __DECODE_0__(0x133) : __DECODE_0__(0x136));
}
Main(require('fs')[__DECODE_0__(0x12e)](__DECODE_0__(0x12c), __DECODE_0__(0x129)));
