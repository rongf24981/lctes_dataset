function __DECODE_0__(oPQNVp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oPQNVp, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1cc)) / 0x1 + parseInt(__DECODE_0__(0x1cd)) / 0x2 * (parseInt(__DECODE_0__(0x1cb)) / 0x3) + -parseInt(__DECODE_0__(0x1d8)) / 0x4 + -parseInt(__DECODE_0__(0x1d1)) / 0x5 * (-parseInt(__DECODE_0__(0x1ce)) / 0x6) + parseInt(__DECODE_0__(0x1d0)) / 0x7 + parseInt(__DECODE_0__(0x1ca)) / 0x8 * (-parseInt(__DECODE_0__(0x1d5)) / 0x9) + -parseInt(__DECODE_0__(0x1d3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1929c);
const main = arg => {
  arg = arg[__DECODE_0__(0x1d6)]()[__DECODE_0__(0x1c9)]('\x0a');
  const k = arg[0x0];
  const s = arg[0x1];
  if (s[__DECODE_0__(0x1d2)] <= k) {
    console['log'](s);
  } else {
    console[__DECODE_0__(0x1c8)](s['slice'](0x0, k) + __DECODE_0__(0x1d7));
  }
};
main(require('fs')[__DECODE_0__(0x1c7)](__DECODE_0__(0x1cf), __DECODE_0__(0x1d4)));
function __STRING_ARRAY__() {
  const _0x42df81 = ['split', '22664pbNxIk', '122052BuBzCJ', '23328fChEeH', '4HiFXMc', '6kZrJhA', '/dev/stdin', '850689HTAvnW', '898285chYZOL', 'length', '714270hLvDVP', 'utf8', '117OoeOuE', 'trim', '...', '778224MWuMDn', 'readFileSync', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x42df81;
  };
  return __STRING_ARRAY__();
}
