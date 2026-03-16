(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b5)) / 0x1 + parseInt(__DECODE_0__(0x1b3)) / 0x2 * (parseInt(__DECODE_0__(0x1ad)) / 0x3) + -parseInt(__DECODE_0__(0x1b7)) / 0x4 + -parseInt(__DECODE_0__(0x1b6)) / 0x5 * (-parseInt(__DECODE_0__(0x1bb)) / 0x6) + -parseInt(__DECODE_0__(0x1b0)) / 0x7 * (-parseInt(__DECODE_0__(0x1b8)) / 0x8) + parseInt(__DECODE_0__(0x1b2)) / 0x9 + parseInt(__DECODE_0__(0x1b4)) / 0xa * (-parseInt(__DECODE_0__(0x1bc)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe7b64);
function __DECODE_0__(vhBHci, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ab;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vhBHci, key);
}
const main = input => {
  var d = input[0x1][__DECODE_0__(0x1b1)]('\x20')[__DECODE_0__(0x1ac)](p => parseInt(p, 0xa))[__DECODE_0__(0x1ab)]((p, q) => p > q ? 0x1 : -0x1);
  console[__DECODE_0__(0x1b9)](d[d[__DECODE_0__(0x1ae)] / 0x2] - d[d[__DECODE_0__(0x1ae)] / 0x2 - 0x1]);
};
main(require('fs')[__DECODE_0__(0x1ba)]('/dev/stdin', __DECODE_0__(0x1af))['split']('\x0a'));
function __STRING_ARRAY__() {
  const _0x35da73 = ['sort', 'map', '11274nMUsoK', 'length', 'utf8', '7rJrXJa', 'split', '127872wcUQzC', '908isKDEv', '10vnwgoZ', '1117933wbpVdg', '797845rRueLj', '3014076lzRfZf', '11440656LZyULI', 'log', 'readFileSync', '36MkPAEJ', '14160212ZLdGXw'];
  __STRING_ARRAY__ = function () {
    return _0x35da73;
  };
  return __STRING_ARRAY__();
}
