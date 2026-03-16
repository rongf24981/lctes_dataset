(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd7)) / 0x1 * (parseInt(__DECODE_0__(0xe0)) / 0x2) + parseInt(__DECODE_0__(0xdf)) / 0x3 * (parseInt(__DECODE_0__(0xdd)) / 0x4) + -parseInt(__DECODE_0__(0xd8)) / 0x5 * (parseInt(__DECODE_0__(0xd6)) / 0x6) + -parseInt(__DECODE_0__(0xde)) / 0x7 * (parseInt(__DECODE_0__(0xd5)) / 0x8) + -parseInt(__DECODE_0__(0xdb)) / 0x9 * (parseInt(__DECODE_0__(0xda)) / 0xa) + -parseInt(__DECODE_0__(0xd4)) / 0xb + parseInt(__DECODE_0__(0xe3)) / 0xc * (parseInt(__DECODE_0__(0xe2)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42c96);
function __DECODE_0__(xLXDVO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd4;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xLXDVO, key);
}
let [a, b, c] = require('fs')[__DECODE_0__(0xd9)]('/dev/stdin', 'utf8')[__DECODE_0__(0xe4)]('\x20')['map'](Number);
function __STRING_ARRAY__() {
  const _0x22535a = ['max', '64675vdHyYQ', '4284zLAFmM', 'split', '2607242qmRUFD', '1968TVZHxm', '18HnmgHa', '358928Trfakp', '479755AqGgVk', 'readFileSync', '19070ZDywUe', '2538qqNvkG', 'log', '4qMxQyO', '8477xqaXjq', '650898fWfINK', '2wEtKPt'];
  __STRING_ARRAY__ = function () {
    return _0x22535a;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0xdc)](a + b + c - Math[__DECODE_0__(0xe1)](...[a, b, c]));
