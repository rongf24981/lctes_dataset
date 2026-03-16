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
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7d)) / 0x1 * (parseInt(__DECODE_0__(0x75)) / 0x2) + -parseInt(__DECODE_0__(0x84)) / 0x3 * (parseInt(__DECODE_0__(0x7c)) / 0x4) + parseInt(__DECODE_0__(0x7a)) / 0x5 + -parseInt(__DECODE_0__(0x7e)) / 0x6 + -parseInt(__DECODE_0__(0x79)) / 0x7 * (-parseInt(__DECODE_0__(0x78)) / 0x8) + -parseInt(__DECODE_0__(0x83)) / 0x9 + parseInt(__DECODE_0__(0x7f)) / 0xa;
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
  var lines = stdin[__DECODE_0__(0x85)]();
  var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
  var result = function (data) {
    return data[__DECODE_0__(0x73)](function (v) {
      return v[__DECODE_0__(0x82)](-v[0x1])[__DECODE_0__(0x73)](Number)['reduce'](function (str, num) {
        return str[__DECODE_0__(0x82)](num) + str[__DECODE_0__(0x82)](0x0, num);
      }, v[0x0]);
    })[__DECODE_0__(0x76)]('\x0a');
  }(lines['match'](re)[__DECODE_0__(0x73)](function (v) {
    return v[__DECODE_0__(0x7b)]()['split']('\x0a');
  }));
  console[__DECODE_0__(0x74)](result);
})(require('fs')[__DECODE_0__(0x81)](__DECODE_0__(0x80), __DECODE_0__(0x77)));
