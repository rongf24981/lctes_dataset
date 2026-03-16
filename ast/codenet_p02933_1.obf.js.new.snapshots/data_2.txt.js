(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x82)) / 0x1 * (-parseInt(__DECODE_0__(0x7a)) / 0x2) + parseInt(__DECODE_0__(0x7d)) / 0x3 * (parseInt(__DECODE_0__(0x77)) / 0x4) + -parseInt(__DECODE_0__(0x83)) / 0x5 * (-parseInt(__DECODE_0__(0x81)) / 0x6) + -parseInt(__DECODE_0__(0x7f)) / 0x7 * (-parseInt(__DECODE_0__(0x78)) / 0x8) + parseInt(__DECODE_0__(0x7b)) / 0x9 * (parseInt(__DECODE_0__(0x84)) / 0xa) + -parseInt(__DECODE_0__(0x80)) / 0xb + -parseInt(__DECODE_0__(0x85)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2db6);
function __DECODE_0__(XZYqoG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XZYqoG, key);
}
const Main = input => {
  input = input[__DECODE_0__(0x76)]('\x0a');
  const a = input[0x0];
  const s = input[0x1];
  if (a >= 0xc80) {
    console[__DECODE_0__(0x79)](s);
  } else {
    console[__DECODE_0__(0x79)](__DECODE_0__(0x7c));
  }
};
Main(require('fs')['readFileSync'](__DECODE_0__(0x86), __DECODE_0__(0x7e)));
function __STRING_ARRAY__() {
  const _0x4f7589 = ['86118IqgzlH', '866826JLkzwS', 'red', '93eZSqiL', 'utf8', '255283nBhMvp', '16187611jbUkEj', '860304WILzrr', '1lKQJpL', '25mXmeuv', '40KiXvpY', '3112992XXZCoa', '/dev/stdin', 'split', '128508lmLlNx', '104dDjBmG', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4f7589;
  };
  return __STRING_ARRAY__();
}
