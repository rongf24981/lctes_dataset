function __DECODE_0__(OcvDRk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OcvDRk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1df)) / 0x1 * (-parseInt(__DECODE_0__(0x1e0)) / 0x2) + parseInt(__DECODE_0__(0x1da)) / 0x3 * (parseInt(__DECODE_0__(0x1d5)) / 0x4) + parseInt(__DECODE_0__(0x1d9)) / 0x5 + parseInt(__DECODE_0__(0x1e2)) / 0x6 * (parseInt(__DECODE_0__(0x1e4)) / 0x7) + parseInt(__DECODE_0__(0x1dc)) / 0x8 + -parseInt(__DECODE_0__(0x1d8)) / 0x9 * (parseInt(__DECODE_0__(0x1d6)) / 0xa) + -parseInt(__DECODE_0__(0x1e3)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x70e46);
function main(input) {
  const nums = input[__DECODE_0__(0x1d7)]('\x20')[__DECODE_0__(0x1de)](num => parseInt(num, 0xa));
  console['log'](nums[0x0] >= 0xd ? nums[0x1] : nums[0x0] >= 0x6 ? nums[0x1] / 0x2 : 0x0);
}
main(require('fs')[__DECODE_0__(0x1db)](__DECODE_0__(0x1dd), __DECODE_0__(0x1e1)));
function __STRING_ARRAY__() {
  const _0x374a9f = ['690GBlRJJ', '10348173aIjeum', '55573CxxOEf', '2738808OOgUyA', '4413170pMCJdC', 'split', '9hbrQhy', '2184670TYwNNc', '3iQZkRK', 'readFileSync', '4289072vdGXIJ', '/dev/stdin', 'map', '726289tYTpYq', '2PCrRiO', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x374a9f;
  };
  return __STRING_ARRAY__();
}
