(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x115)) / 0x1 * (-parseInt(__DECODE_0__(0x109)) / 0x2) + -parseInt(__DECODE_0__(0x112)) / 0x3 + -parseInt(__DECODE_0__(0x118)) / 0x4 * (parseInt(__DECODE_0__(0x11a)) / 0x5) + -parseInt(__DECODE_0__(0x10a)) / 0x6 * (parseInt(__DECODE_0__(0x10c)) / 0x7) + -parseInt(__DECODE_0__(0x114)) / 0x8 * (-parseInt(__DECODE_0__(0x116)) / 0x9) + parseInt(__DECODE_0__(0x111)) / 0xa + parseInt(__DECODE_0__(0x10d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4ad65);
function __DECODE_0__(OHBIfk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHBIfk, key);
}
const Main = input => {
  const tmp = input[__DECODE_0__(0x119)]()[__DECODE_0__(0x110)]('');
  let result = '';
  if (tmp[__DECODE_0__(0x113)]('7') === -0x1) {
    result = 'No';
  } else {
    result = __DECODE_0__(0x10f);
  }
  console[__DECODE_0__(0x10e)](result);
  return result;
};
function __STRING_ARRAY__() {
  const _0x4763ad = ['531824VCoWGB', '247749bwzxnB', '36HNgcDz', 'utf8', '2399524xEKGci', 'trim', '5ltNrZx', '2ZnwoFz', '3566586DtIRcw', 'readFileSync', '7iYGXQg', '17160011xgvWCk', 'log', 'Yes', 'split', '1895770WZBJJp', '800688tuqzlG', 'indexOf'];
  __STRING_ARRAY__ = function () {
    return _0x4763ad;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x10b)]('/dev/stdin', __DECODE_0__(0x117)));
