'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x149)) / 0x1 + -parseInt(__DECODE_0__(0x157)) / 0x2 * (parseInt(__DECODE_0__(0x14d)) / 0x3) + -parseInt(__DECODE_0__(0x14f)) / 0x4 + -parseInt(__DECODE_0__(0x14c)) / 0x5 + parseInt(__DECODE_0__(0x159)) / 0x6 + -parseInt(__DECODE_0__(0x151)) / 0x7 * (parseInt(__DECODE_0__(0x154)) / 0x8) + -parseInt(__DECODE_0__(0x146)) / 0x9 * (-parseInt(__DECODE_0__(0x147)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbb490);
function __STRING_ARRAY__() {
  const _0x867c61 = ['63aZOLXK', 'split', 'abs', '1254256YUAKTL', 'log', 'readFileSync', '195326JVjSlW', 'trim', '8437494ZXisTM', 'shift', 'sort', '9nhkzKV', '38034040wnGgzx', 'map', '729600HmWVvK', 'utf8', 'min', '2881530UBrbiU', '24AGfwZg', '/dev/stdin', '3777140mJEaAo', 'pow'];
  __STRING_ARRAY__ = function () {
    return _0x867c61;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RPWssH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x146;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RPWssH, key);
}
function main(input) {
  input = input[__DECODE_0__(0x158)]()[__DECODE_0__(0x152)]('\x0a');
  let ABC = input[__DECODE_0__(0x15a)]()[__DECODE_0__(0x152)]('\x20')[__DECODE_0__(0x148)](v => Number(v));
  const N = ABC[__DECODE_0__(0x15a)]();
  input = input[__DECODE_0__(0x148)](v => Number(v))[__DECODE_0__(0x15b)]((a, b) => b - a);
  const INF = Math[__DECODE_0__(0x150)](0xa, 0x9);
  const dfs = (cur, a, b, c) => {
    if (cur === N) {
      if (Math[__DECODE_0__(0x14b)](a, b, c) > 0x0) {
        return Math['abs'](a - ABC[0x0]) + Math[__DECODE_0__(0x153)](b - ABC[0x1]) + Math[__DECODE_0__(0x153)](c - ABC[0x2]) - 0x1e;
      }
      return INF;
    }
    return Math[__DECODE_0__(0x14b)](dfs(cur + 0x1, a, b, c), dfs(cur + 0x1, a + input[cur], b, c) + 0xa, dfs(cur + 0x1, a, b + input[cur], c) + 0xa, dfs(cur + 0x1, a, b, c + input[cur]) + 0xa);
  };
  console[__DECODE_0__(0x155)](dfs(0x0, 0x0, 0x0, 0x0));
}
main(require('fs')[__DECODE_0__(0x156)](__DECODE_0__(0x14e), __DECODE_0__(0x14a)));
