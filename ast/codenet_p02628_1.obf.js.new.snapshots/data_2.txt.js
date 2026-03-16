(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x19f)) / 0x1 + -parseInt(__DECODE_0__(0x1a6)) / 0x2 + -parseInt(__DECODE_0__(0x1a5)) / 0x3 + -parseInt(__DECODE_0__(0x1ab)) / 0x4 * (parseInt(__DECODE_0__(0x1a2)) / 0x5) + -parseInt(__DECODE_0__(0x1a3)) / 0x6 + -parseInt(__DECODE_0__(0x1a7)) / 0x7 * (-parseInt(__DECODE_0__(0x1ac)) / 0x8) + parseInt(__DECODE_0__(0x1aa)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45da7);
function main(lines) {
  const [N, K] = parseNumberLine(lines[0x0]);
  const prices = parseNumberLine(lines[0x1])[__DECODE_0__(0x1a1)]((a, b) => a - b);
  let total = 0x0;
  for (let i = 0x0; i < K; ++i) {
    total += prices[i];
  }
  console[__DECODE_0__(0x1ad)](total);
}
function __STRING_ARRAY__() {
  const _0xc0c803 = ['sort', '5eQeowS', '1971372mbZojH', 'utf8', '1560678GWKwYM', '766322yfYkQM', '700nmKcGy', 'readFileSync', 'map', '16159896PwPTum', '1970636vsmurB', '30064uFRhok', 'log', 'split', '160617PAiLTE', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xc0c803;
  };
  return __STRING_ARRAY__();
}
function parseNumberLine(line, radix = 0xa) {
  return line[__DECODE_0__(0x19e)](/\s+/)[__DECODE_0__(0x1a9)](_ => parseInt(_, radix));
}
function __DECODE_0__(HVEvPz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HVEvPz, key);
}
main(require('fs')[__DECODE_0__(0x1a8)](__DECODE_0__(0x1a0), __DECODE_0__(0x1a4))[__DECODE_0__(0x19e)]('\x0a'));
