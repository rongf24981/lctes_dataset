'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xac)) / 0x1 * (parseInt(__DECODE_0__(0xad)) / 0x2) + -parseInt(__DECODE_0__(0xa6)) / 0x3 + parseInt(__DECODE_0__(0xa7)) / 0x4 * (parseInt(__DECODE_0__(0x9f)) / 0x5) + parseInt(__DECODE_0__(0xb0)) / 0x6 + parseInt(__DECODE_0__(0x9e)) / 0x7 * (-parseInt(__DECODE_0__(0xa5)) / 0x8) + parseInt(__DECODE_0__(0xa1)) / 0x9 * (-parseInt(__DECODE_0__(0xa8)) / 0xa) + parseInt(__DECODE_0__(0x9d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe20ed);
function __STRING_ARRAY__() {
  var _0x5bdd27 = ['slice', 'utf8', 'max', '23MTDsOf', '144130AHqnyU', 'push', 'readFileSync', '1360170lcgDEF', '/dev/stdin', 'apply', '29947665xiTBeE', '1616797yqGsKH', '2005lYHzki', 'split', '9215163gKKIOy', 'log', 'splice', 'length', '56YDILBs', '3934635UHyUEZ', '2708gSJJNW', '10RNOsZn'];
  __STRING_ARRAY__ = function () {
    return _0x5bdd27;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rXmdFe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rXmdFe, key);
}
function main(arg) {
  var input = arg[__DECODE_0__(0xa0)]('\x0a');
  var retu = input[0x0];
  var kazu = [];
  for (var i = 0x1; retu >= i; i++) {
    kazu[__DECODE_0__(0xae)](input[i]);
  }
  for (var x = 0x0, len = kazu['length']; x < len; ++x) {
    var kazu2 = kazu[__DECODE_0__(0xa9)](0x0, kazu[__DECODE_0__(0xa4)]);
    kazu2[__DECODE_0__(0xa3)](x, 0x1);
    console[__DECODE_0__(0xa2)](Math[__DECODE_0__(0xab)][__DECODE_0__(0xb2)](null, kazu2));
  }
}
main(require('fs')[__DECODE_0__(0xaf)](__DECODE_0__(0xb1), __DECODE_0__(0xaa)));
