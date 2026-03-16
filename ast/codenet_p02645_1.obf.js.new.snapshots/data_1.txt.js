const a0_0x298230 = __DECODE_0__;
function __DECODE_0__(IjLaHW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IjLaHW, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x12c716 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x12c716(0x1dd)) / 0x1 * (-parseInt(_0x12c716(0x1d2)) / 0x2) + parseInt(_0x12c716(0x1d5)) / 0x3 * (-parseInt(_0x12c716(0x1de)) / 0x4) + -parseInt(_0x12c716(0x1d8)) / 0x5 + -parseInt(_0x12c716(0x1d1)) / 0x6 * (parseInt(_0x12c716(0x1d3)) / 0x7) + parseInt(_0x12c716(0x1d4)) / 0x8 + -parseInt(_0x12c716(0x1d9)) / 0x9 * (parseInt(_0x12c716(0x1db)) / 0xa) + parseInt(_0x12c716(0x1d7)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcd08d);
function main(lines) {
  const _0xef4c82 = __DECODE_0__;
  const input = lines['split']('\x20');
  console[_0xef4c82(0x1d6)](input['join']()[_0xef4c82(0x1da)](0x0, 0x3));
}
function __STRING_ARRAY__() {
  const _0x2d1fc7 = ['utf8', '303162BdWfTv', '3202KBAzZv', '77aFSrBv', '8803640YlzMXP', '24021RLSiKI', 'log', '23558414AEMomD', '2492230dZZlLB', '392454WAvaEb', 'slice', '250wWavil', 'readFileSync', '224zAdrFu', '308DGFXer', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2d1fc7;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x298230(0x1dc)](a0_0x298230(0x1df), a0_0x298230(0x1e0)));
