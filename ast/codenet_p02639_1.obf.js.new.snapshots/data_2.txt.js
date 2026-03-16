(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe3)) / 0x1 * (-parseInt(__DECODE_0__(0xdd)) / 0x2) + -parseInt(__DECODE_0__(0xe4)) / 0x3 * (-parseInt(__DECODE_0__(0xd6)) / 0x4) + -parseInt(__DECODE_0__(0xde)) / 0x5 * (-parseInt(__DECODE_0__(0xd7)) / 0x6) + -parseInt(__DECODE_0__(0xd9)) / 0x7 + -parseInt(__DECODE_0__(0xdb)) / 0x8 + -parseInt(__DECODE_0__(0xda)) / 0x9 + parseInt(__DECODE_0__(0xe0)) / 0xa * (parseInt(__DECODE_0__(0xd8)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd89f5);
function __STRING_ARRAY__() {
  const _0x26ef77 = ['267oJOJRB', 'utf8', 'trim', '48788pUJTdg', '42oHLFaW', '66MPwaoS', '5157530xcvUAk', '8671788JRmzMu', '3400088KzlpBB', 'findIndex', '2222mLPOpp', '280435RJYPsz', '/dev/stdin', '2812990SwcutF', 'log', 'readFileSync', '138tLNYiz'];
  __STRING_ARRAY__ = function () {
    return _0x26ef77;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const idx = input[__DECODE_0__(0xd5)]()['split']('\x20')['map'](el => parseInt(el, 0xa))[__DECODE_0__(0xdc)](el => el === 0x0);
  console[__DECODE_0__(0xe1)](idx + 0x1);
}
function __DECODE_0__(HlUsCF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HlUsCF, key);
}
main(require('fs')[__DECODE_0__(0xe2)](__DECODE_0__(0xdf), __DECODE_0__(0xe5)));
