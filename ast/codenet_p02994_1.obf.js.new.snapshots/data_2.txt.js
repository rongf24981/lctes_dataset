'use strict';

function __STRING_ARRAY__() {
  const _0x19bc68 = ['2853imepyP', 'log', '3352740YhhQQQ', '830961twoPGZ', 'abs', '22600uVPhkO', '4sTZmJM', '6706931TgzeaL', 'utf8', '1412938NXYkMm', '5268495LLxEVx', 'readFileSync', '6sYccLf', '72226610LFcztr', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x19bc68;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1f5)) / 0x1 + -parseInt(__DECODE_0__(0x1fd)) / 0x2 + parseInt(__DECODE_0__(0x1fe)) / 0x3 * (-parseInt(__DECODE_0__(0x1f2)) / 0x4) + -parseInt(__DECODE_0__(0x1f6)) / 0x5 + parseInt(__DECODE_0__(0x1f8)) / 0x6 * (-parseInt(__DECODE_0__(0x1f3)) / 0x7) + parseInt(__DECODE_0__(0x200)) / 0x8 * (-parseInt(__DECODE_0__(0x1fb)) / 0x9) + parseInt(__DECODE_0__(0x1f9)) / 0xa;
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
  const input = stdin[__DECODE_0__(0x1fa)]('\x20')['map'](v => parseInt(v, 0xa));
  const N = input[0x0];
  const L = input[0x1];
  let sum = 0x0;
  let min = Infinity;
  for (let i = L; i < L + N; ++i) {
    sum += i;
    if (Math[__DECODE_0__(0x1ff)](i) < Math[__DECODE_0__(0x1ff)](min)) {
      min = i;
    }
  }
  console[__DECODE_0__(0x1fc)](sum - min);
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
main(require('fs')[__DECODE_0__(0x1f7)]('/dev/stdin', __DECODE_0__(0x1f4)));
