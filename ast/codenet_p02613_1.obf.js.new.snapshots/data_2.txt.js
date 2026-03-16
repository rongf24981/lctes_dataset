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
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1bd)) / 0x1 * (-parseInt(__DECODE_0__(0x1c9)) / 0x2) + -parseInt(__DECODE_0__(0x1be)) / 0x3 * (parseInt(__DECODE_0__(0x1c5)) / 0x4) + -parseInt(__DECODE_0__(0x1cc)) / 0x5 + parseInt(__DECODE_0__(0x1ce)) / 0x6 * (parseInt(__DECODE_0__(0x1bf)) / 0x7) + -parseInt(__DECODE_0__(0x1c3)) / 0x8 * (parseInt(__DECODE_0__(0x1d0)) / 0x9) + -parseInt(__DECODE_0__(0x1cd)) / 0xa * (-parseInt(__DECODE_0__(0x1c2)) / 0xb) + parseInt(__DECODE_0__(0x1cf)) / 0xc;
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
  const [n, ...rows] = input[__DECODE_0__(0x1c7)]()[__DECODE_0__(0x1c1)]('\x0a');
  const k = ['AC', 'WA', __DECODE_0__(0x1ca), 'RE'];
  const ans = {};
  for (let v of k) {
    ans[v] = 0x0;
  }
  for (let r of rows) {
    ans[r] += 0x1;
  }
  for (let v of k) {
    console[__DECODE_0__(0x1cb)](v + __DECODE_0__(0x1c6) + ans[v]);
  }
};
process['env'][__DECODE_0__(0x1c4)] ? test() : main(require('fs')[__DECODE_0__(0x1c8)]('/dev/stdin', __DECODE_0__(0x1c0)));
