'use strict';

function __DECODE_0__(qsIKeS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x182;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qsIKeS, key);
}
function __STRING_ARRAY__() {
  var _0x64c46c = ['readFileSync', 'log', 'utf8', '470170rkibjV', 'split', '1220478tHHqMf', '680esaqOW', '3868997jIKrfH', '223506HPuYdp', '8874IYKiAE', '12775kFTTiC', '1jRqZTL', '/dev/stdin', '330698QoTIdL', '770OdzpGp', '12hPWNGD', '8KjzkWP'];
  __STRING_ARRAY__ = function () {
    return _0x64c46c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x185)) / 0x1 * (-parseInt(__DECODE_0__(0x187)) / 0x2) + parseInt(__DECODE_0__(0x182)) / 0x3 * (-parseInt(__DECODE_0__(0x18a)) / 0x4) + parseInt(__DECODE_0__(0x18e)) / 0x5 + parseInt(__DECODE_0__(0x190)) / 0x6 + -parseInt(__DECODE_0__(0x184)) / 0x7 * (parseInt(__DECODE_0__(0x191)) / 0x8) + parseInt(__DECODE_0__(0x183)) / 0x9 * (-parseInt(__DECODE_0__(0x188)) / 0xa) + -parseInt(__DECODE_0__(0x192)) / 0xb * (-parseInt(__DECODE_0__(0x189)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1955e);
function Main(input) {
  input = input[__DECODE_0__(0x18f)]('\x0a');
  var input0 = input[0x0][__DECODE_0__(0x18f)]('\x20');
  var N = parseInt(input0[0x0]);
  var T = parseInt(input0[0x1]);
  var t = input[0x1][__DECODE_0__(0x18f)]('\x20');
  for (var i = 0x0; i < N; i++) {
    t[i] = parseInt(t[i]);
  }
  var count = 0x0;
  var t_i;
  for (var i = 0x1; i < N; i++) {
    t_i = t[i] - t[i - 0x1];
    if (t_i < T) {
      count += t_i;
    } else {
      count += T;
    }
  }
  console[__DECODE_0__(0x18c)](count + T);
}
Main(require('fs')[__DECODE_0__(0x18b)](__DECODE_0__(0x186), __DECODE_0__(0x18d)));
