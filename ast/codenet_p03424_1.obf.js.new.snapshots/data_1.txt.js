const a0_0x55359e = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x512900 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x512900(0x110)) / 0x1 + -parseInt(_0x512900(0x114)) / 0x2 * (parseInt(_0x512900(0x113)) / 0x3) + parseInt(_0x512900(0x117)) / 0x4 * (parseInt(_0x512900(0x119)) / 0x5) + -parseInt(_0x512900(0x116)) / 0x6 * (parseInt(_0x512900(0x10c)) / 0x7) + parseInt(_0x512900(0x10e)) / 0x8 * (parseInt(_0x512900(0x10f)) / 0x9) + -parseInt(_0x512900(0x10d)) / 0xa + parseInt(_0x512900(0x112)) / 0xb;
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
  const _0xaafadc = __DECODE_0__;
  const set = new Set(s['split']('\x0a')[0x1][_0xaafadc(0x11a)]('\x20'));
  const ans = [...set][_0xaafadc(0x115)] === 0x4 ? 'Four' : 'Three';
  console[_0xaafadc(0x111)](ans);
}
main(require('fs')['readFileSync'](a0_0x55359e(0x118), 'utf8'));
