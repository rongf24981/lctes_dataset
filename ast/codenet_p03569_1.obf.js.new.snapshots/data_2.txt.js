function __STRING_ARRAY__() {
  const _0x8625f4 = ['33AYLaTY', '2193766voHESW', '1DTCAkx', '303045hwxYmt', '145000ovzYCz', '60WpGQKR', 'length', '273100ZCEbVe', '293908MAaAtR', '/dev/stdin', 'trim', '1472967xQquqF', '1234996NRofJC', 'log', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x8625f4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb5)) / 0x1 * (parseInt(__DECODE_0__(0xc3)) / 0x2) + -parseInt(__DECODE_0__(0xc2)) / 0x3 * (parseInt(__DECODE_0__(0xbb)) / 0x4) + parseInt(__DECODE_0__(0xb6)) / 0x5 * (parseInt(__DECODE_0__(0xb8)) / 0x6) + -parseInt(__DECODE_0__(0xbf)) / 0x7 + -parseInt(__DECODE_0__(0xb7)) / 0x8 + -parseInt(__DECODE_0__(0xbe)) / 0x9 + parseInt(__DECODE_0__(0xba)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89a6c);
function __DECODE_0__(uopvRx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uopvRx, key);
}
console[__DECODE_0__(0xc0)]((args => {
  const s = args[__DECODE_0__(0xbd)]();
  const N = s[__DECODE_0__(0xb9)] - 0x1;
  let x = 0x0;
  for (let i = 0x0, j = N; i < j; i++, j--) {
    while (s[i] !== s[j]) {
      if (s[i] === 'x') {
        x++;
        i++;
      } else {
        if (s[j] === 'x') {
          x++;
          j--;
        } else {
          return '-1';
        }
      }
    }
  }
  return '' + x;
})(require('fs')[__DECODE_0__(0xc1)](__DECODE_0__(0xbc), 'utf8')));
