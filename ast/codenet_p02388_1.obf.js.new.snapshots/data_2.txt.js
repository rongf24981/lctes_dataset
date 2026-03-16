'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d1)) / 0x1 + -parseInt(__DECODE_0__(0x1c3)) / 0x2 * (-parseInt(__DECODE_0__(0x1c6)) / 0x3) + parseInt(__DECODE_0__(0x1cf)) / 0x4 + parseInt(__DECODE_0__(0x1cc)) / 0x5 + parseInt(__DECODE_0__(0x1c8)) / 0x6 * (parseInt(__DECODE_0__(0x1c5)) / 0x7) + -parseInt(__DECODE_0__(0x1cd)) / 0x8 + parseInt(__DECODE_0__(0x1c7)) / 0x9 * (-parseInt(__DECODE_0__(0x1ca)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xee907);
function __DECODE_0__(vGKIlm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vGKIlm, key);
}
function __STRING_ARRAY__() {
  var _0x5767bd = ['726497XXBHvD', 'split', '2Ctdnvr', 'trim', '13492234nkDEdD', '5669415GUFIVv', '273897cyUiYn', '6sOgmwo', 'toString', '1640vQKcMD', 'log', '6463285IkNRqi', '4342912XcYsUD', 'readFileSync', '2698456ZWaYOB', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x5767bd;
  };
  return __STRING_ARRAY__();
}
(function (stdin) {
  var inputs = stdin[__DECODE_0__(0x1c9)]()[__DECODE_0__(0x1c4)]()[__DECODE_0__(0x1d2)]('\x0a');
  (function (x) {
    console[__DECODE_0__(0x1cb)](x * x * x);
  })(parseInt(inputs[0x0], 0xa));
})(require('fs')[__DECODE_0__(0x1ce)]('/dev/stdin', __DECODE_0__(0x1d0)));
