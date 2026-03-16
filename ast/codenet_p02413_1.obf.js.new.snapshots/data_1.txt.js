'use strict';

var a0_0x2c84bd = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2442ff = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2442ff(0x197)) / 0x1 + parseInt(_0x2442ff(0x1a1)) / 0x2 + parseInt(_0x2442ff(0x19a)) / 0x3 + parseInt(_0x2442ff(0x1a0)) / 0x4 * (parseInt(_0x2442ff(0x199)) / 0x5) + -parseInt(_0x2442ff(0x1a5)) / 0x6 * (-parseInt(_0x2442ff(0x19e)) / 0x7) + parseInt(_0x2442ff(0x1a3)) / 0x8 + -parseInt(_0x2442ff(0x19c)) / 0x9;
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
  var _0x2cd75b = __DECODE_0__;
  function sumLine(a, b) {
    return a + b;
  }
  function result(matrix) {
    var _0x4277f8 = __DECODE_0__;
    var size = matrix['shift']();
    matrix[_0x4277f8(0x1a4)](function (v) {
      var _0x2c318f = _0x4277f8;
      return v[_0x2c318f(0x1a2)](v[_0x2c318f(0x198)](sumLine));
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
  var inputs = stdin[_0x2cd75b(0x19f)]()[_0x2cd75b(0x195)]()[_0x2cd75b(0x19d)]('\x0a');
  var sheet = inputs['map'](function (v) {
    var _0x3084d4 = _0x2cd75b;
    return v[_0x3084d4(0x19d)]('\x20')[_0x3084d4(0x1a4)](Number);
  });
  console['log'](result(sheet));
})(require('fs')[a0_0x2c84bd(0x19b)](a0_0x2c84bd(0x196), a0_0x2c84bd(0x1a6)));
