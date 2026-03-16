function __DECODE_0__(hSoIHu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x132;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hSoIHu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x137)) / 0x1 * (-parseInt(__DECODE_0__(0x135)) / 0x2) + -parseInt(__DECODE_0__(0x134)) / 0x3 * (-parseInt(__DECODE_0__(0x133)) / 0x4) + parseInt(__DECODE_0__(0x13b)) / 0x5 + -parseInt(__DECODE_0__(0x13d)) / 0x6 * (-parseInt(__DECODE_0__(0x13c)) / 0x7) + parseInt(__DECODE_0__(0x13e)) / 0x8 + parseInt(__DECODE_0__(0x13a)) / 0x9 * (parseInt(__DECODE_0__(0x136)) / 0xa) + -parseInt(__DECODE_0__(0x138)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x38f9f);
function __STRING_ARRAY__() {
  const _0x4e97c4 = ['10695366FMGFVK', 'length', '24273XqzMjP', '2312720TJVydP', '7SNmYqx', '1444542YgHRwx', '2739232EhbygA', 'log', 'readFileSync', '71228mXuqKO', '51TMsLED', '12tsmwVy', '470Tjfigr', '44917KbObOb'];
  __STRING_ARRAY__ = function () {
    return _0x4e97c4;
  };
  return __STRING_ARRAY__();
}
function Main(str) {
  let zero = 0x0;
  let one = 0x0;
  for (let i = 0x0; i < str[__DECODE_0__(0x139)]; i++) {
    if (str[i] === '1') {
      one++;
    } else {
      if (str[i] === '0') {
        zero++;
      }
    }
  }
  console[__DECODE_0__(0x13f)](Math['abs'](one - zero));
}
let input = require('fs')[__DECODE_0__(0x132)]('/dev/stdin', 'utf8');
Main(input);
