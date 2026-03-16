'use strict';

function __DECODE_0__(NHryRA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NHryRA, key);
}
function __STRING_ARRAY__() {
  var _0x71722 = ['97602OgUXMi', '8104580YnMsCu', '/dev/stdin', '4386604JONXeX', '518rCjnbX', 'shift', 'readFileSync', '162962AVDdyg', '29035611TYjaem', 'log', '934134krmmTI', 'utf8', 'pow', '14byfjHe', 'not\x20yet', '6819520HKDZPz'];
  __STRING_ARRAY__ = function () {
    return _0x71722;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1aa)) / 0x1 * (parseInt(__DECODE_0__(0x1a4)) / 0x2) + -parseInt(__DECODE_0__(0x1a7)) / 0x3 + -parseInt(__DECODE_0__(0x1a0)) / 0x4 + -parseInt(__DECODE_0__(0x19e)) / 0x5 + parseInt(__DECODE_0__(0x19d)) / 0x6 * (-parseInt(__DECODE_0__(0x1a1)) / 0x7) + parseInt(__DECODE_0__(0x1ac)) / 0x8 + parseInt(__DECODE_0__(0x1a5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf0e1a);
function Main(input) {
  input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
  var N = input[__DECODE_0__(0x1a2)]();
  var last = [];
  for (let i = 0x0; i < 0x1e8480; i++) {
    last[i] = __DECODE_0__(0x1ab);
  }
  last[input[0x0]] = 0x0;
  var dp = [0x1];
  var M = Math[__DECODE_0__(0x1a9)](0xa, 0x9) + 0x7;
  for (let i = 0x1; i < N; i++) {
    let c = input[i];
    if (last[c] === __DECODE_0__(0x1ab) || last[c] === i - 0x1) {
      last[c] = i;
      dp[i] = dp[i - 0x1];
      continue;
    }
    dp[i] = (dp[i - 0x1] + dp[last[c]]) % M;
    last[c] = i;
  }
  console[__DECODE_0__(0x1a6)](dp['pop']());
}
Main(require('fs')[__DECODE_0__(0x1a3)](__DECODE_0__(0x19f), __DECODE_0__(0x1a8)));
