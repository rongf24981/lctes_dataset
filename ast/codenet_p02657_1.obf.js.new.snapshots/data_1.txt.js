const a0_0x352b9e = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x468646 = ['150936UhIqHW', '26CaQXms', '17288iraiSF', 'map', '/dev/stdin', '955348WGuaYs', 'trim', '6487830DTDdcP', 'log', '4017339WmfslZ', '299125BUzSvV', '20euXSMe', '21461100zwVLxC', 'readFileSync', '2191ltleCf', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x468646;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x5b4c52 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x5b4c52(0x166)) / 0x1 + parseInt(_0x5b4c52(0x16d)) / 0x2 * (-parseInt(_0x5b4c52(0x16c)) / 0x3) + parseInt(_0x5b4c52(0x171)) / 0x4 * (parseInt(_0x5b4c52(0x167)) / 0x5) + -parseInt(_0x5b4c52(0x173)) / 0x6 + parseInt(_0x5b4c52(0x16a)) / 0x7 * (-parseInt(_0x5b4c52(0x16e)) / 0x8) + -parseInt(_0x5b4c52(0x175)) / 0x9 + parseInt(_0x5b4c52(0x168)) / 0xa;
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
  const _0x2787ab = __DECODE_0__;
  const [A, B] = stdin[_0x2787ab(0x172)]()['split']('\x20')[_0x2787ab(0x16f)](x => parseInt(x));
  console[_0x2787ab(0x174)](A * B);
};
main(require('fs')[a0_0x352b9e(0x169)](a0_0x352b9e(0x170), a0_0x352b9e(0x16b)));
