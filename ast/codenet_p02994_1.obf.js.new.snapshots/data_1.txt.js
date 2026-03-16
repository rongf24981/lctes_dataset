'use strict';

function __STRING_ARRAY__() {
  const _0x19bc68 = ['2853imepyP', 'log', '3352740YhhQQQ', '830961twoPGZ', 'abs', '22600uVPhkO', '4sTZmJM', '6706931TgzeaL', 'utf8', '1412938NXYkMm', '5268495LLxEVx', 'readFileSync', '6sYccLf', '72226610LFcztr', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x19bc68;
  };
  return __STRING_ARRAY__();
}
const a0_0x5d9c6e = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x3b49ef = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x3b49ef(0x1f5)) / 0x1 + -parseInt(_0x3b49ef(0x1fd)) / 0x2 + parseInt(_0x3b49ef(0x1fe)) / 0x3 * (-parseInt(_0x3b49ef(0x1f2)) / 0x4) + -parseInt(_0x3b49ef(0x1f6)) / 0x5 + parseInt(_0x3b49ef(0x1f8)) / 0x6 * (-parseInt(_0x3b49ef(0x1f3)) / 0x7) + parseInt(_0x3b49ef(0x200)) / 0x8 * (-parseInt(_0x3b49ef(0x1fb)) / 0x9) + parseInt(_0x3b49ef(0x1f9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe7b11);
function main(stdin) {
  const _0x30a286 = __DECODE_0__;
  const input = stdin[_0x30a286(0x1fa)]('\x20')['map'](v => parseInt(v, 0xa));
  const N = input[0x0];
  const L = input[0x1];
  let sum = 0x0;
  let min = Infinity;
  for (let i = L; i < L + N; ++i) {
    sum += i;
    if (Math[_0x30a286(0x1ff)](i) < Math[_0x30a286(0x1ff)](min)) {
      min = i;
    }
  }
  console[_0x30a286(0x1fc)](sum - min);
}
function __DECODE_0__(huUTuX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(huUTuX, key);
}
main(require('fs')[a0_0x5d9c6e(0x1f7)]('/dev/stdin', a0_0x5d9c6e(0x1f4)));
