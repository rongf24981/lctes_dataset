'use strict';

function __STRING_ARRAY__() {
  var _0x1a9ad0 = ['readFileSync', 'slice', '14387400DXCpMs', '78DWNliy', 'toString', 'map', 'log', '2402xUhigZ', 'join', 'utf8', '5208336qbppPe', '14scecib', '1276815xagnQL', 'trim', '11672mzhLWq', '934YaWoxL', '3979962bvtzhs', '5372110UPSLqg', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1a9ad0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(NWefpd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x73;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NWefpd, key);
}
var a0_0x3cf5e1 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x31c58f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x31c58f(0x7d)) / 0x1 * (parseInt(_0x31c58f(0x75)) / 0x2) + -parseInt(_0x31c58f(0x84)) / 0x3 * (parseInt(_0x31c58f(0x7c)) / 0x4) + parseInt(_0x31c58f(0x7a)) / 0x5 + -parseInt(_0x31c58f(0x7e)) / 0x6 + -parseInt(_0x31c58f(0x79)) / 0x7 * (-parseInt(_0x31c58f(0x78)) / 0x8) + -parseInt(_0x31c58f(0x83)) / 0x9 + parseInt(_0x31c58f(0x7f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd6805);
(function (stdin) {
  var _0x14cb00 = __DECODE_0__;
  var lines = stdin[_0x14cb00(0x85)]();
  var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
  var result = function (data) {
    var _0x4eb982 = _0x14cb00;
    return data[_0x4eb982(0x73)](function (v) {
      var _0x118878 = _0x4eb982;
      return v[_0x118878(0x82)](-v[0x1])[_0x118878(0x73)](Number)['reduce'](function (str, num) {
        var _0x2996c3 = _0x118878;
        return str[_0x2996c3(0x82)](num) + str[_0x2996c3(0x82)](0x0, num);
      }, v[0x0]);
    })[_0x4eb982(0x76)]('\x0a');
  }(lines['match'](re)[_0x14cb00(0x73)](function (v) {
    var _0x15506c = _0x14cb00;
    return v[_0x15506c(0x7b)]()['split']('\x0a');
  }));
  console[_0x14cb00(0x74)](result);
})(require('fs')[a0_0x3cf5e1(0x81)](a0_0x3cf5e1(0x80), a0_0x3cf5e1(0x77)));
