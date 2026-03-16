'use strict';

function __STRING_ARRAY__() {
  var _0x74c8fc = ['211398rUkhOp', '8LMSGLY', '1619088hjWoCL', 'log', '121280iMLhNO', 'filter', 'readFileSync', 'utf8', '391757ThtOWC', 'trim', 'length', '1301657peKfEL', 'split', '2oihzss', '76310ZidAWD', 'toLowerCase', '14170222iotpYy', '48KGfXVE', 'shift', 'join', '639IChGEd', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x74c8fc;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bDtWBk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bDtWBk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x206)) / 0x1 + parseInt(__DECODE_0__(0x1f5)) / 0x2 * (-parseInt(__DECODE_0__(0x1fe)) / 0x3) + -parseInt(__DECODE_0__(0x200)) / 0x4 + -parseInt(__DECODE_0__(0x202)) / 0x5 * (parseInt(__DECODE_0__(0x1f9)) / 0x6) + parseInt(__DECODE_0__(0x1f3)) / 0x7 * (-parseInt(__DECODE_0__(0x1ff)) / 0x8) + -parseInt(__DECODE_0__(0x1fc)) / 0x9 * (parseInt(__DECODE_0__(0x1f6)) / 0xa) + parseInt(__DECODE_0__(0x1f8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45129);
(function (stdin) {
  var lines = stdin['toString']()[__DECODE_0__(0x1f4)]('\x0a');
  var result = function (word, data) {
    return data[__DECODE_0__(0x203)](function (v) {
      return v === word;
    })[__DECODE_0__(0x208)];
  }(lines[__DECODE_0__(0x1fa)]()[__DECODE_0__(0x1f7)](), lines[__DECODE_0__(0x1fb)]('')[__DECODE_0__(0x1f4)]('END_OF_TEXT')[0x0][__DECODE_0__(0x1f7)]()[__DECODE_0__(0x207)]()[__DECODE_0__(0x1f4)]('\x20'));
  console[__DECODE_0__(0x201)](result);
})(require('fs')[__DECODE_0__(0x204)](__DECODE_0__(0x1fd), __DECODE_0__(0x205)));
