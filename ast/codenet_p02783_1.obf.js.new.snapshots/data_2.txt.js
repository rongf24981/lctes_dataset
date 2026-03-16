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
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x16c)) / 0x1 * (parseInt(__DECODE_0__(0x164)) / 0x2) + parseInt(__DECODE_0__(0x172)) / 0x3 * (-parseInt(__DECODE_0__(0x165)) / 0x4) + parseInt(__DECODE_0__(0x170)) / 0x5 * (parseInt(__DECODE_0__(0x169)) / 0x6) + -parseInt(__DECODE_0__(0x174)) / 0x7 * (parseInt(__DECODE_0__(0x173)) / 0x8) + parseInt(__DECODE_0__(0x171)) / 0x9 * (-parseInt(__DECODE_0__(0x16a)) / 0xa) + parseInt(__DECODE_0__(0x166)) / 0xb * (parseInt(__DECODE_0__(0x167)) / 0xc) + -parseInt(__DECODE_0__(0x168)) / 0xd;
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
  const args = input['split']('\x20');
  const H = parseInt(args[0x0], 0xa);
  const A = parseInt(args[0x1], 0xa);
  const ans = Math[__DECODE_0__(0x16f)](H / A);
  console[__DECODE_0__(0x16b)](ans);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x16e), __DECODE_0__(0x16d)));
