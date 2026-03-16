(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x110)) / 0x1 + -parseInt(__DECODE_0__(0x114)) / 0x2 * (parseInt(__DECODE_0__(0x113)) / 0x3) + parseInt(__DECODE_0__(0x117)) / 0x4 * (parseInt(__DECODE_0__(0x119)) / 0x5) + -parseInt(__DECODE_0__(0x116)) / 0x6 * (parseInt(__DECODE_0__(0x10c)) / 0x7) + parseInt(__DECODE_0__(0x10e)) / 0x8 * (parseInt(__DECODE_0__(0x10f)) / 0x9) + -parseInt(__DECODE_0__(0x10d)) / 0xa + parseInt(__DECODE_0__(0x112)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x787ea);
function __DECODE_0__(xeCBhS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xeCBhS, key);
}
function __STRING_ARRAY__() {
  const _0x1a8828 = ['length', '1296LDBdRk', '2827628kyGgXI', '/dev/stdin', '5FodJNJ', 'split', '28399xwjwCj', '1783330slbyqu', '104xnJTSS', '112581AlquFt', '5884FRHazg', 'log', '17436672FsHjmj', '2847oHtaEY', '1898pAFAPu'];
  __STRING_ARRAY__ = function () {
    return _0x1a8828;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const set = new Set(s['split']('\x0a')[0x1][__DECODE_0__(0x11a)]('\x20'));
  const ans = [...set][__DECODE_0__(0x115)] === 0x4 ? 'Four' : 'Three';
  console[__DECODE_0__(0x111)](ans);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x118), 'utf8'));
