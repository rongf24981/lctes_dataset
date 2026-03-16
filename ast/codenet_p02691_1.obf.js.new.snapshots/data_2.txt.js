'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1ca)) / 0x1 + -parseInt(__DECODE_0__(0x1d1)) / 0x2 + parseInt(__DECODE_0__(0x1d3)) / 0x3 + parseInt(__DECODE_0__(0x1d7)) / 0x4 + -parseInt(__DECODE_0__(0x1cc)) / 0x5 * (-parseInt(__DECODE_0__(0x1d4)) / 0x6) + parseInt(__DECODE_0__(0x1d5)) / 0x7 + -parseInt(__DECODE_0__(0x1d2)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x43e8d);
function __DECODE_0__(fWAEek, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ca;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fWAEek, key);
}
var input = require('fs')[__DECODE_0__(0x1cf)](__DECODE_0__(0x1ce), 'utf8');
var cin = input[__DECODE_0__(0x1d6)](/ |\n/);
var cid = 0x0;
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x1d0)](myOut);
}
function main() {
  let n = +cin['shift']();
  let B = {};
  let C = {};
  cin['forEach']((v, i) => {
    let x = +v;
    B[String(i + x)] = B[String(i + x)] + 0x1 || 0x1;
    C[String(i - x)] = C[String(i - x)] + 0x1 || 0x1;
  });
  let keys = Object[__DECODE_0__(0x1cb)](B);
  let ans = 0x0;
  keys[__DECODE_0__(0x1cd)](i => {
    ans += B[i] * C[i] || 0x0;
  });
  return ans;
}
function __STRING_ARRAY__() {
  const _0x1f45bb = ['3494712IwxEtP', '915099xxTvNm', '60YisYvt', '687666kaFuLV', 'split', '1609056hASneE', '384827ApbxaE', 'keys', '38665uyKWNm', 'forEach', '/dev/stdin', 'readFileSync', 'log', '1105392TVFsfp'];
  __STRING_ARRAY__ = function () {
    return _0x1f45bb;
  };
  return __STRING_ARRAY__();
}
