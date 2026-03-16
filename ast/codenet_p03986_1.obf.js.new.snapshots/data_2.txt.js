(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe4)) / 0x1 * (parseInt(__DECODE_0__(0xe5)) / 0x2) + parseInt(__DECODE_0__(0xef)) / 0x3 + -parseInt(__DECODE_0__(0xeb)) / 0x4 * (-parseInt(__DECODE_0__(0xe6)) / 0x5) + -parseInt(__DECODE_0__(0xe3)) / 0x6 * (-parseInt(__DECODE_0__(0xf0)) / 0x7) + parseInt(__DECODE_0__(0xe7)) / 0x8 * (-parseInt(__DECODE_0__(0xe1)) / 0x9) + parseInt(__DECODE_0__(0xec)) / 0xa + -parseInt(__DECODE_0__(0xe2)) / 0xb * (parseInt(__DECODE_0__(0xe8)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1c40e);
function __DECODE_0__(OfolxW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OfolxW, key);
}
const Main = input => {
  while (input[__DECODE_0__(0xe9)]('ST') > -0x1) {
    input = input[__DECODE_0__(0xea)](/ST/g, '');
  }
  console['log'](input['length']);
};
function __STRING_ARRAY__() {
  const _0x29dee6 = ['4jPqMWl', '928510lLgRRp', 'readFileSync', '/dev/stdin', '577287EriYrp', '259GlrVJV', '153YkhzPJ', '11ekKUYB', '31908dglqOc', '1HxuAVk', '342234vArROD', '51675HUkxLQ', '19816RNbxYk', '6067956hQFCbL', 'indexOf', 'replace'];
  __STRING_ARRAY__ = function () {
    return _0x29dee6;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xed)](__DECODE_0__(0xee), 'utf8'));
