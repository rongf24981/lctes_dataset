'use strict';

function __DECODE_0__(JJyUOk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x191;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JJyUOk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x192)) / 0x1 + parseInt(__DECODE_0__(0x19c)) / 0x2 * (-parseInt(__DECODE_0__(0x194)) / 0x3) + parseInt(__DECODE_0__(0x191)) / 0x4 * (-parseInt(__DECODE_0__(0x196)) / 0x5) + parseInt(__DECODE_0__(0x19d)) / 0x6 + -parseInt(__DECODE_0__(0x19a)) / 0x7 + -parseInt(__DECODE_0__(0x198)) / 0x8 + parseInt(__DECODE_0__(0x197)) / 0x9 * (parseInt(__DECODE_0__(0x193)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2172);
function __STRING_ARRAY__() {
  var _0x1e9234 = ['utf8', '55ZRwpbp', '24097518TDxkJl', '3310936KIAfSJ', 'log', '9679369EhoQkO', 'trim', '2mNfSuA', '6480084lrMbbE', '382268JDwMqf', '110632mWUQcX', '10KvNXEK', '872457MHLXhq'];
  __STRING_ARRAY__ = function () {
    return _0x1e9234;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  input = input[__DECODE_0__(0x19b)]() - 0x0;
  console[__DECODE_0__(0x199)](0xb4 * (input - 0x2));
})(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x195)));
