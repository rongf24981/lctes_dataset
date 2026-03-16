function __DECODE_0__(oPojQE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oPojQE, key);
}
function __STRING_ARRAY__() {
  var _0x237107 = ['/dev/stdin', '41878408bCupNj', 'hasOwnProperty', '9256hTujqJ', '114hcINAq', 'shift', '446271QkVquw', 'log', '2025976nYfosJ', '46RRRsrS', '82593RSjPFB', '6997680ECfVcM', '10ZKGhsa', '4905JfyyaQ', 'push', 'readFileSync', 'split', '129696WprefY', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x237107;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xde)) / 0x1 + parseInt(__DECODE_0__(0xdd)) / 0x2 * (-parseInt(__DECODE_0__(0xe5)) / 0x3) + parseInt(__DECODE_0__(0xdc)) / 0x4 * (-parseInt(__DECODE_0__(0xe0)) / 0x5) + -parseInt(__DECODE_0__(0xeb)) / 0x6 * (parseInt(__DECODE_0__(0xda)) / 0x7) + -parseInt(__DECODE_0__(0xea)) / 0x8 * (parseInt(__DECODE_0__(0xe1)) / 0x9) + parseInt(__DECODE_0__(0xdf)) / 0xa + parseInt(__DECODE_0__(0xe8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb4bc5);
var input = require('fs')[__DECODE_0__(0xe3)](__DECODE_0__(0xe7), __DECODE_0__(0xe6));
var Arr = input['trim']()[__DECODE_0__(0xe4)]('\x0a');
while (!![]) {
  var N = Arr['shift']() - 0x0;
  if (N == 0x0) {
    break;
  }
  var plus = {};
  var minus = {};
  var pm = [];
  for (var i = 0x0; i < N; i++) {
    var arr = Arr[__DECODE_0__(0xd9)]()[__DECODE_0__(0xe4)]('\x20')['map'](Number);
    var m = arr[0x0];
    var a = arr[0x1];
    var b = arr[0x2] - 0.001 * N;
    plus[a] = m;
    minus[b] = m;
    pm[__DECODE_0__(0xe2)](a);
    pm['push'](b);
  }
  pm['sort'](function (a, b) {
    return a - b;
  });
  var flag = 'OK';
  var sum = 0x0;
  for (var i = 0x0; i < pm['length']; i++) {
    var v = pm[i];
    if (plus['hasOwnProperty'](v)) {
      sum += plus[v];
    }
    if (minus[__DECODE_0__(0xe9)](v)) {
      sum -= minus[v];
    }
    if (sum > 0x96) {
      flag = 'NG';
      break;
    }
  }
  console[__DECODE_0__(0xdb)](flag);
}
