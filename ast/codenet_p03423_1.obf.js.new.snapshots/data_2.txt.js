function __STRING_ARRAY__() {
  const _0x33740c = ['384568kLPGKy', '6624460BirNke', '2qDBNbZ', '/dev/stdin', '645144fGkPdQ', '9WNtoef', '132tNiBKI', '6PwvJgI', '601485JrCNqE', 'floor', '5uMnODr', '2471602mjABXC', '2140707wphMAa', 'split', '142888gYMKhb', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x33740c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EEdTaG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EEdTaG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1d8)) / 0x1 + -parseInt(__DECODE_0__(0x1d2)) / 0x2 * (-parseInt(__DECODE_0__(0x1dc)) / 0x3) + -parseInt(__DECODE_0__(0x1de)) / 0x4 * (parseInt(__DECODE_0__(0x1da)) / 0x5) + parseInt(__DECODE_0__(0x1d7)) / 0x6 * (parseInt(__DECODE_0__(0x1db)) / 0x7) + -parseInt(__DECODE_0__(0x1d0)) / 0x8 + -parseInt(__DECODE_0__(0x1d5)) / 0x9 * (-parseInt(__DECODE_0__(0x1d1)) / 0xa) + -parseInt(__DECODE_0__(0x1d6)) / 0xb * (parseInt(__DECODE_0__(0x1d4)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x61557);
function main(input) {
  input = input['trim']();
  const a = parseInt(input[__DECODE_0__(0x1dd)]('\x20')[0x0], 0xa);
  console[__DECODE_0__(0x1cf)](Math[__DECODE_0__(0x1d9)](a / 0x3));
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1d3), 'utf8'));
