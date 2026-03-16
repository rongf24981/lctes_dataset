'use strict';

const a0_0x37c36c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2c99c2 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2c99c2(0x176)) / 0x1 * (parseInt(_0x2c99c2(0x17f)) / 0x2) + parseInt(_0x2c99c2(0x183)) / 0x3 + -parseInt(_0x2c99c2(0x181)) / 0x4 * (-parseInt(_0x2c99c2(0x17c)) / 0x5) + -parseInt(_0x2c99c2(0x17b)) / 0x6 + -parseInt(_0x2c99c2(0x177)) / 0x7 + -parseInt(_0x2c99c2(0x175)) / 0x8 + parseInt(_0x2c99c2(0x179)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6c968);
function __STRING_ARRAY__() {
  const _0x3e8fdb = ['slice', '5924QMZMWb', 'fill', '181710rbwjun', 'readFileSync', '/dev/stdin', '4516008jGtXXi', '7RrLtDh', '302736cpBgIX', 'length', '6922719VFNRoI', 'log', '637044lCohpt', '745OgmYyA', 'map', 'split', '30934MzqQgD'];
  __STRING_ARRAY__ = function () {
    return _0x3e8fdb;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LVfovk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x174;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LVfovk, key);
}
function Main(input) {
  const _0x1a678a = __DECODE_0__;
  const tmp = input['trim']()[_0x1a678a(0x17e)]('\x0a');
  const D = Number(tmp[0x0]);
  const C = tmp[0x1][_0x1a678a(0x17e)]('\x20')[_0x1a678a(0x17d)](v => Number(v));
  const S = tmp[_0x1a678a(0x180)](0x2, 0x7)[_0x1a678a(0x17d)](v => v[_0x1a678a(0x17e)]('\x20')[_0x1a678a(0x17d)](v => Number(v)));
  const T = tmp[_0x1a678a(0x180)](-0x5)[_0x1a678a(0x17d)](v => Number(v));
  let LastContestDays = Array(0x1a)[_0x1a678a(0x182)](0x0);
  let currnetContestLebels = Array(0x1a)[_0x1a678a(0x182)](0x0);
  let lebel = 0x0;
  for (let i = 0x1; i <= D; i++) {
    LastContestDays[T[i - 0x1] - 0x1] = i;
    for (let j = 0x0; j < C[_0x1a678a(0x178)]; j++) {
      if (LastContestDays[j] === i) {
        currnetContestLebels[j] = S[i - 0x1][j];
      } else {
        currnetContestLebels[j] = C[j] * (i - LastContestDays[j]) * -0x1;
      }
    }
    lebel += currnetContestLebels['reduce']((acc, cur) => acc + cur);
    console[_0x1a678a(0x17a)](String(lebel));
  }
  return;
}
Main(require('fs')[a0_0x37c36c(0x184)](a0_0x37c36c(0x174), 'utf8'));
