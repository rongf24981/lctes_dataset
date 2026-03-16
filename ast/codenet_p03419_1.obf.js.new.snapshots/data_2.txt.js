(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a5)) / 0x1 + -parseInt(__DECODE_0__(0x1a3)) / 0x2 + -parseInt(__DECODE_0__(0x19e)) / 0x3 * (parseInt(__DECODE_0__(0x19c)) / 0x4) + parseInt(__DECODE_0__(0x19d)) / 0x5 * (-parseInt(__DECODE_0__(0x1a4)) / 0x6) + -parseInt(__DECODE_0__(0x1a2)) / 0x7 + parseInt(__DECODE_0__(0x1a1)) / 0x8 + -parseInt(__DECODE_0__(0x1a0)) / 0x9 * (-parseInt(__DECODE_0__(0x198)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc3da9);
function __DECODE_0__(LxoXGf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x196;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LxoXGf, key);
}
console[__DECODE_0__(0x19b)]((args => {
  const [N, M] = args[__DECODE_0__(0x1a6)]()[__DECODE_0__(0x197)]('\x20')[__DECODE_0__(0x196)](v => v - 0x2);
  return '' + Math['abs'](N * M);
})(require('fs')[__DECODE_0__(0x19f)](__DECODE_0__(0x19a), __DECODE_0__(0x199))));
function __STRING_ARRAY__() {
  const _0x1a3756 = ['split', '30lLKUas', 'utf8', '/dev/stdin', 'log', '1346552oGlbtY', '1058425HYyvgw', '12cJqVEa', 'readFileSync', '13090941cWnglL', '439600cdfXQC', '5337262qthNZh', '2354014OjKGJx', '42TOOlmC', '1151440LPeXmB', 'trim', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x1a3756;
  };
  return __STRING_ARRAY__();
}
