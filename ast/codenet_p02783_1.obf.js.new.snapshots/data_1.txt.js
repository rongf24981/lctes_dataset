function __STRING_ARRAY__() {
  const _0x23c711 = ['221696fchcwF', '562832FcJDfK', '180554SQADrY', '348RBziBa', '2241629FOWkZT', '95568QrNFdM', '209990swCVUM', 'log', '2NFDECg', 'utf8', '/dev/stdin', 'ceil', '160BuvJXp', '9ltjHBx', '3FGhuXy', '126920OyWvQD', '77UlGGss'];
  __STRING_ARRAY__ = function () {
    return _0x23c711;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Ojxgem, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x164;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ojxgem, key);
}
const a0_0x2c75b9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x49b169 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x49b169(0x16c)) / 0x1 * (parseInt(_0x49b169(0x164)) / 0x2) + parseInt(_0x49b169(0x172)) / 0x3 * (-parseInt(_0x49b169(0x165)) / 0x4) + parseInt(_0x49b169(0x170)) / 0x5 * (parseInt(_0x49b169(0x169)) / 0x6) + -parseInt(_0x49b169(0x174)) / 0x7 * (parseInt(_0x49b169(0x173)) / 0x8) + parseInt(_0x49b169(0x171)) / 0x9 * (-parseInt(_0x49b169(0x16a)) / 0xa) + parseInt(_0x49b169(0x166)) / 0xb * (parseInt(_0x49b169(0x167)) / 0xc) + -parseInt(_0x49b169(0x168)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3e577);
function Main(input) {
  const _0x20cd68 = __DECODE_0__;
  const args = input['split']('\x20');
  const H = parseInt(args[0x0], 0xa);
  const A = parseInt(args[0x1], 0xa);
  const ans = Math[_0x20cd68(0x16f)](H / A);
  console[_0x20cd68(0x16b)](ans);
}
Main(require('fs')['readFileSync'](a0_0x2c75b9(0x16e), a0_0x2c75b9(0x16d)));
