'use strict';

const a0_0x49a5bc = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x42b76a = ['split', '1017335lGzOIc', 'Yes', 'utf8', '42BhPJDn', '6363027SQePDa', '2552263fHLIZD', 'readFileSync', '/dev/stdin', '10xHCGHf', 'shift', '1026760sqNxjw', '4281504AnZbAC', 'map', 'push', 'sort', '35487AzlTxu', '82557zVSqch', '212hqwvsy'];
  __STRING_ARRAY__ = function () {
    return _0x42b76a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gzjtsq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x138;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gzjtsq, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0xb4a427 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0xb4a427(0x140)) / 0x1 + parseInt(_0xb4a427(0x141)) / 0x2 * (parseInt(_0xb4a427(0x13f)) / 0x3) + -parseInt(_0xb4a427(0x13a)) / 0x4 + -parseInt(_0xb4a427(0x143)) / 0x5 * (-parseInt(_0xb4a427(0x146)) / 0x6) + -parseInt(_0xb4a427(0x148)) / 0x7 + -parseInt(_0xb4a427(0x13b)) / 0x8 + -parseInt(_0xb4a427(0x147)) / 0x9 * (parseInt(_0xb4a427(0x138)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2bc0);
function main(input) {
  const _0x41374a = __DECODE_0__;
  const lines = input[_0x41374a(0x142)]('\x0a');
  const N = parseInt(lines[_0x41374a(0x139)]());
  const tasks = [];
  for (let i = 0x0; i < N; i++) {
    tasks[_0x41374a(0x13d)](lines[i][_0x41374a(0x142)]('\x20')[_0x41374a(0x13c)](x => parseInt(x)));
  }
  tasks[_0x41374a(0x13e)]((a, b) => a[0x1] - b[0x1]);
  let result = _0x41374a(0x144);
  let sum = 0x0;
  for (let i = 0x0; i < N; i++) {
    sum += tasks[i][0x0];
    if (sum > tasks[i][0x1]) {
      result = 'No';
      break;
    }
  }
  console['log'](result);
}
main(require('fs')[a0_0x49a5bc(0x149)](a0_0x49a5bc(0x14a), a0_0x49a5bc(0x145)));
