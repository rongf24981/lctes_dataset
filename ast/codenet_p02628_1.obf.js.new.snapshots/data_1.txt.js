const a0_0x96f27e = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1b9aec = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x1b9aec(0x19f)) / 0x1 + -parseInt(_0x1b9aec(0x1a6)) / 0x2 + -parseInt(_0x1b9aec(0x1a5)) / 0x3 + -parseInt(_0x1b9aec(0x1ab)) / 0x4 * (parseInt(_0x1b9aec(0x1a2)) / 0x5) + -parseInt(_0x1b9aec(0x1a3)) / 0x6 + -parseInt(_0x1b9aec(0x1a7)) / 0x7 * (-parseInt(_0x1b9aec(0x1ac)) / 0x8) + parseInt(_0x1b9aec(0x1aa)) / 0x9;
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
  const _0x51a3cb = __DECODE_0__;
  const [N, K] = parseNumberLine(lines[0x0]);
  const prices = parseNumberLine(lines[0x1])[_0x51a3cb(0x1a1)]((a, b) => a - b);
  let total = 0x0;
  for (let i = 0x0; i < K; ++i) {
    total += prices[i];
  }
  console[_0x51a3cb(0x1ad)](total);
}
function __STRING_ARRAY__() {
  const _0xc0c803 = ['sort', '5eQeowS', '1971372mbZojH', 'utf8', '1560678GWKwYM', '766322yfYkQM', '700nmKcGy', 'readFileSync', 'map', '16159896PwPTum', '1970636vsmurB', '30064uFRhok', 'log', 'split', '160617PAiLTE', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xc0c803;
  };
  return __STRING_ARRAY__();
}
function parseNumberLine(line, radix = 0xa) {
  const _0x210744 = __DECODE_0__;
  return line[_0x210744(0x19e)](/\s+/)[_0x210744(0x1a9)](_ => parseInt(_, radix));
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
main(require('fs')[a0_0x96f27e(0x1a8)](a0_0x96f27e(0x1a0), a0_0x96f27e(0x1a4))[a0_0x96f27e(0x19e)]('\x0a'));
