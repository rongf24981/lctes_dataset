function __STRING_ARRAY__() {
  const _0x468646 = ['150936UhIqHW', '26CaQXms', '17288iraiSF', 'map', '/dev/stdin', '955348WGuaYs', 'trim', '6487830DTDdcP', 'log', '4017339WmfslZ', '299125BUzSvV', '20euXSMe', '21461100zwVLxC', 'readFileSync', '2191ltleCf', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x468646;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x166)) / 0x1 + parseInt(__DECODE_0__(0x16d)) / 0x2 * (-parseInt(__DECODE_0__(0x16c)) / 0x3) + parseInt(__DECODE_0__(0x171)) / 0x4 * (parseInt(__DECODE_0__(0x167)) / 0x5) + -parseInt(__DECODE_0__(0x173)) / 0x6 + parseInt(__DECODE_0__(0x16a)) / 0x7 * (-parseInt(__DECODE_0__(0x16e)) / 0x8) + -parseInt(__DECODE_0__(0x175)) / 0x9 + parseInt(__DECODE_0__(0x168)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x846fa);
function __DECODE_0__(ahWvzQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ahWvzQ, key);
}
const main = stdin => {
  const [A, B] = stdin[__DECODE_0__(0x172)]()['split']('\x20')[__DECODE_0__(0x16f)](x => parseInt(x));
  console[__DECODE_0__(0x174)](A * B);
};
main(require('fs')[__DECODE_0__(0x169)](__DECODE_0__(0x170), __DECODE_0__(0x16b)));
