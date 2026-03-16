'use strict';

function __DECODE_0__(AslmeM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AslmeM, key);
}
function __STRING_ARRAY__() {
  var _0x17277d = ['sort', 'split', '7605858rxHSTh', 'log', 'aoki', '1275437mEqRud', 'shift', '566072xrVcGa', 'taka', 'readFileSync', '4515138wqerdt', '/dev/stdin', '7167300kRBKtc', '4357130iQfBOX', '2yyqtRf', '2345624tTwfON'];
  __STRING_ARRAY__ = function () {
    return _0x17277d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8c)) / 0x1 + parseInt(__DECODE_0__(0x95)) / 0x2 * (parseInt(__DECODE_0__(0x91)) / 0x3) + -parseInt(__DECODE_0__(0x96)) / 0x4 + parseInt(__DECODE_0__(0x94)) / 0x5 + parseInt(__DECODE_0__(0x99)) / 0x6 + -parseInt(__DECODE_0__(0x93)) / 0x7 + parseInt(__DECODE_0__(0x8e)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xca6cb);
function Main(input) {
  var lines = input['split']('\x0a');
  var N = lines[__DECODE_0__(0x8d)]() - 0x0;
  var ryo = new Array(N);
  for (var n = 0x0; n < N; n++) {
    var nums = lines[n][__DECODE_0__(0x98)]('\x20');
    ryo[n] = {
      'taka': nums[0x0] - 0x0,
      'aoki': nums[0x1] - 0x0
    };
    ryo[n]['sa'] = ryo[n][__DECODE_0__(0x9b)] - ryo[n][__DECODE_0__(0x8f)];
  }
  ryo['sort'](function (a, b) {
    return b['sa'] - a['sa'];
  });
  ryo[__DECODE_0__(0x97)](function (a, b) {
    return b['taka'] - a['taka'];
  });
  var koufuku = 0x0;
  for (var n = 0x0; n < N; n++) {
    if (n % 0x2 == 0x0) {
      koufuku += ryo[n][__DECODE_0__(0x8f)];
      ryo[n][__DECODE_0__(0x8f)] = 0x0;
    } else {
      koufuku -= ryo[n]['aoki'];
      ryo[n]['aoki'] = 0x0;
    }
  }
  console[__DECODE_0__(0x9a)](koufuku);
}
Main(require('fs')[__DECODE_0__(0x90)](__DECODE_0__(0x92), 'utf8'));
