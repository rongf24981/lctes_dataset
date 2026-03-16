function __STRING_ARRAY__() {
  const _0x2c1a8a = ['1328160dMANbv', '572172LBcrbo', '10886fozLIQ', '1477140AmCtrc', 'fill', 'map', '/dev/stdin', '2474635vXlgTT', 'utf8', '5455898BNMieI', 'split', '2018944yWCKEa', '23gaueqF', 'every'];
  __STRING_ARRAY__ = function () {
    return _0x2c1a8a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iWHWiO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iWHWiO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xf3)) / 0x1 * (parseInt(__DECODE_0__(0xf7)) / 0x2) + parseInt(__DECODE_0__(0xf5)) / 0x3 + -parseInt(__DECODE_0__(0xf6)) / 0x4 + -parseInt(__DECODE_0__(0xfc)) / 0x5 + -parseInt(__DECODE_0__(0xf8)) / 0x6 + parseInt(__DECODE_0__(0xf0)) / 0x7 + parseInt(__DECODE_0__(0xf2)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71901);
const main = input => {
  const lines = input[__DECODE_0__(0xf1)]('\x0a');
  const [h, w] = lines[0x0][__DECODE_0__(0xf1)]('\x20')[__DECODE_0__(0xfa)](Number);
  const data = Array(h)[__DECODE_0__(0xf9)](![])[__DECODE_0__(0xfa)]((_, i) => lines[i + 0x1][__DECODE_0__(0xf1)]('')['slice'](0x0, w)['map'](c => c === '#'));
  const ans = data[__DECODE_0__(0xf4)]((row, i) => row['every']((cell, j) => !cell || (data[i - 0x1] || [])[j] || (data[i + 0x1] || [])[j] || data[i][j - 0x1] || data[i][j + 0x1]));
  console['log'](ans ? 'Yes' : 'No');
};
main(require('fs')['readFileSync'](__DECODE_0__(0xfb), __DECODE_0__(0xef)));
