function __STRING_ARRAY__() {
  var _0x5bd453 = ['6cFNPCg', '/dev/stdin', '338028zgpnnU', '558015ARcdkW', '64810XvbEuB', 'trim', '6NNBsCz', '385677sOctCk', 'split', 'utf8', '8864030skCYDJ', '1343193dIEurZ', 'map', 'push', '263585bVOlre', '104gIDIgF'];
  __STRING_ARRAY__ = function () {
    return _0x5bd453;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x134)) / 0x1 * (parseInt(__DECODE_0__(0x132)) / 0x2) + -parseInt(__DECODE_0__(0x139)) / 0x3 + -parseInt(__DECODE_0__(0x130)) / 0x4 + -parseInt(__DECODE_0__(0x131)) / 0x5 + parseInt(__DECODE_0__(0x12e)) / 0x6 * (-parseInt(__DECODE_0__(0x12c)) / 0x7) + -parseInt(__DECODE_0__(0x12d)) / 0x8 * (-parseInt(__DECODE_0__(0x135)) / 0x9) + parseInt(__DECODE_0__(0x138)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8a90e);
function __DECODE_0__(rkIBPO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rkIBPO, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x133)]()[__DECODE_0__(0x136)]('\x0a')['map'](function (x) {
    return x[__DECODE_0__(0x136)]('\x20');
  });
  var N = parseInt(input[0x0][0x0], 0xa);
  var x = parseInt(input[0x0][0x1], 0xa);
  var vec_a = input[0x1][__DECODE_0__(0x13a)](e => parseInt(e, 0xa));
  function sum(arr) {
    var sum = 0x0;
    arr['forEach'](function (elm) {
      sum += elm;
    });
    return sum;
  }
  var vec_b = [];
  var tmp = 0x0;
  for (var i = 0x0; i < N; i++) {
    if (vec_a[i] >= x - tmp) {
      vec_b[__DECODE_0__(0x13b)](x - tmp);
    } else {
      vec_b['push'](vec_a[i]);
    }
    tmp = vec_b[i];
  }
  console['log'](sum(vec_a) - sum(vec_b));
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x12f), __DECODE_0__(0x137)));
