'use strict';

function __STRING_ARRAY__() {
  var _0x20ec83 = ['23722480wevsFJ', '141SXuumP', '8KaXCAe', 'toFixed', '3270270PkguOa', '748584uemLKm', '206yqpHRa', 'length', 'utf8', 'pow', '1099071XeMkcJ', 'join', '/dev/stdin', 'split', 'map', 'reduce', 'toString', '50900FqoBxv', '407043YkIDLY', '2269RfTFnp'];
  __STRING_ARRAY__ = function () {
    return _0x20ec83;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WemyHm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WemyHm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11b)) / 0x1 * (parseInt(__DECODE_0__(0x122)) / 0x2) + -parseInt(__DECODE_0__(0x11d)) / 0x3 * (parseInt(__DECODE_0__(0x119)) / 0x4) + -parseInt(__DECODE_0__(0x120)) / 0x5 + -parseInt(__DECODE_0__(0x121)) / 0x6 + parseInt(__DECODE_0__(0x11a)) / 0x7 + parseInt(__DECODE_0__(0x11e)) / 0x8 * (-parseInt(__DECODE_0__(0x126)) / 0x9) + parseInt(__DECODE_0__(0x11c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaa54e);
(function (stdin) {
  var lines = stdin[__DECODE_0__(0x118)]();
  var re = /\w+\n[\w\s]*?\n/g;
  var result = function (data) {
    return data[__DECODE_0__(0x116)](stdev)[__DECODE_0__(0x113)]('\x0a');
    function stdev(scores) {
      var count = scores[__DECODE_0__(0x123)];
      var mean = scores[__DECODE_0__(0x117)](sum) / count;
      return Math['sqrt'](scores[__DECODE_0__(0x116)](function (v) {
        return Math[__DECODE_0__(0x125)](v - mean, 0x2);
      })[__DECODE_0__(0x117)](sum) / count)[__DECODE_0__(0x11f)](0x8);
    }
    function sum(a, b) {
      return a + b;
    }
  }(lines['match'](re)['map'](function (v) {
    return v[__DECODE_0__(0x115)]('\x0a')[0x1][__DECODE_0__(0x115)]('\x20')['slice'](0x0, v[__DECODE_0__(0x115)]('\x0a')[0x0])[__DECODE_0__(0x116)](Number);
  }));
  console['log'](result);
})(require('fs')['readFileSync'](__DECODE_0__(0x114), __DECODE_0__(0x124)));
