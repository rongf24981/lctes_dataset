'use strict';

function __STRING_ARRAY__() {
  var _0x53d07e = ['fill', 'slice', '120570OcoqFM', '1040238YMwOdN', '2277874vIiEvA', '7FdAtkA', '3wgumcm', 'alloc', '1953RgzXDI', '8295736GszoED', 'erase', '4221148qPqUTg', 'YES', 'eraser', 'dreamer', 'trim', 'log', '1024454uzBPno', '9057905bPekOa', 'length', 'dream'];
  __STRING_ARRAY__ = function () {
    return _0x53d07e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1dd)) / 0x1 + -parseInt(__DECODE_0__(0x1e5)) / 0x2 * (parseInt(__DECODE_0__(0x1e7)) / 0x3) + parseInt(__DECODE_0__(0x1ec)) / 0x4 + -parseInt(__DECODE_0__(0x1de)) / 0x5 + parseInt(__DECODE_0__(0x1e4)) / 0x6 + parseInt(__DECODE_0__(0x1e6)) / 0x7 * (parseInt(__DECODE_0__(0x1ea)) / 0x8) + -parseInt(__DECODE_0__(0x1e9)) / 0x9 * (-parseInt(__DECODE_0__(0x1e3)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdd710);
var fs = require('fs');
function __DECODE_0__(omnLfB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1db;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(omnLfB, key);
}
var input = Buffer[__DECODE_0__(0x1e8)](0x10000);
var length = fs['readSync'](0x0, input, 0x0, 0x10000);
var text = input['toString']()[__DECODE_0__(0x1e2)](0x0, length)[__DECODE_0__(0x1db)]();
var dp = Array(text[__DECODE_0__(0x1df)] + 0x1)[__DECODE_0__(0x1e1)](![]);
dp[0x0] = !![];
for (var index = 0x5; index <= text[__DECODE_0__(0x1df)]; index++) {
  if (dp[index - 0x5] === !![] && text[__DECODE_0__(0x1e2)](index - 0x5, index) === __DECODE_0__(0x1e0)) {
    dp[index] = !![];
    continue;
  }
  if (dp[index - 0x7] === !![] && text[__DECODE_0__(0x1e2)](index - 0x7, index) === __DECODE_0__(0x1ef)) {
    dp[index] = !![];
    continue;
  }
  if (dp[index - 0x5] === !![] && text[__DECODE_0__(0x1e2)](index - 0x5, index) === __DECODE_0__(0x1eb)) {
    dp[index] = !![];
    continue;
  }
  if (dp[index - 0x6] === !![] && text[__DECODE_0__(0x1e2)](index - 0x6, index) === __DECODE_0__(0x1ee)) {
    dp[index] = !![];
    continue;
  }
}
console[__DECODE_0__(0x1dc)](dp[text[__DECODE_0__(0x1df)]] ? __DECODE_0__(0x1ed) : 'NO');
