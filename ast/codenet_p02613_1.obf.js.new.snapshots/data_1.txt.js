function __STRING_ARRAY__() {
  const _0x44a359 = ['11QiPyrI', '30368pDRsfI', 'MYTEST', '1044aKyMHk', '\x20x\x20', 'trim', 'readFileSync', '2pRJbec', 'TLE', 'log', '922100SIFPVT', '1526660ZoofxL', '6jHzsLs', '4168272xqmYhM', '99IyCHfP', '155581riIJcY', '3183KLFbnx', '2564947sDqcGf', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x44a359;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDmlFM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDmlFM, key);
}
const a0_0x1768bf = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x38043e = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x38043e(0x1bd)) / 0x1 * (-parseInt(_0x38043e(0x1c9)) / 0x2) + -parseInt(_0x38043e(0x1be)) / 0x3 * (parseInt(_0x38043e(0x1c5)) / 0x4) + -parseInt(_0x38043e(0x1cc)) / 0x5 + parseInt(_0x38043e(0x1ce)) / 0x6 * (parseInt(_0x38043e(0x1bf)) / 0x7) + -parseInt(_0x38043e(0x1c3)) / 0x8 * (parseInt(_0x38043e(0x1d0)) / 0x9) + -parseInt(_0x38043e(0x1cd)) / 0xa * (-parseInt(_0x38043e(0x1c2)) / 0xb) + parseInt(_0x38043e(0x1cf)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x32b95);
const main = input => {
  const _0x15a5d2 = __DECODE_0__;
  const [n, ...rows] = input[_0x15a5d2(0x1c7)]()[_0x15a5d2(0x1c1)]('\x0a');
  const k = ['AC', 'WA', _0x15a5d2(0x1ca), 'RE'];
  const ans = {};
  for (let v of k) {
    ans[v] = 0x0;
  }
  for (let r of rows) {
    ans[r] += 0x1;
  }
  for (let v of k) {
    console[_0x15a5d2(0x1cb)](v + _0x15a5d2(0x1c6) + ans[v]);
  }
};
process['env'][a0_0x1768bf(0x1c4)] ? test() : main(require('fs')[a0_0x1768bf(0x1c8)]('/dev/stdin', a0_0x1768bf(0x1c0)));
