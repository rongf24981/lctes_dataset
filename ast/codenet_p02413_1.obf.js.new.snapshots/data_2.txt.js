'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x197)) / 0x1 + parseInt(__DECODE_0__(0x1a1)) / 0x2 + parseInt(__DECODE_0__(0x19a)) / 0x3 + parseInt(__DECODE_0__(0x1a0)) / 0x4 * (parseInt(__DECODE_0__(0x199)) / 0x5) + -parseInt(__DECODE_0__(0x1a5)) / 0x6 * (-parseInt(__DECODE_0__(0x19e)) / 0x7) + parseInt(__DECODE_0__(0x1a3)) / 0x8 + -parseInt(__DECODE_0__(0x19c)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x79414);
function __STRING_ARRAY__() {
  var _0x2925a1 = ['236752kZIYMa', 'reduce', '60VshETx', '11151GiKVdl', 'readFileSync', '8927766mJpmFs', 'split', '545867fprrZh', 'toString', '290604MPtdFu', '585518gydTlq', 'push', '2585240OrZnFo', 'map', '18XznuMX', 'utf8', 'trim', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2925a1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zdNQNy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zdNQNy, key);
}
(function (stdin) {
  function sumLine(a, b) {
    return a + b;
  }
  function result(matrix) {
    var size = matrix['shift']();
    matrix[__DECODE_0__(0x1a4)](function (v) {
      return v[__DECODE_0__(0x1a2)](v[__DECODE_0__(0x198)](sumLine));
    });
    var sumColumn = [];
    for (var i = 0x0; i < size[0x1] + 0x1; i++) {
      var sumValue = 0x0;
      for (var j = 0x0; j < size[0x0]; j++) {
        sumValue += matrix[j][i];
      }
      sumColumn['push'](sumValue);
    }
    matrix['push'](sumColumn);
    return matrix['join']('\x0a')['replace'](/,/g, '\x20');
  }
  var inputs = stdin[__DECODE_0__(0x19f)]()[__DECODE_0__(0x195)]()[__DECODE_0__(0x19d)]('\x0a');
  var sheet = inputs['map'](function (v) {
    return v[__DECODE_0__(0x19d)]('\x20')[__DECODE_0__(0x1a4)](Number);
  });
  console['log'](result(sheet));
})(require('fs')[__DECODE_0__(0x19b)](__DECODE_0__(0x196), __DECODE_0__(0x1a6)));
