function __DECODE_0__(FvQVTq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x149;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FvQVTq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x156)) / 0x1 + parseInt(__DECODE_0__(0x155)) / 0x2 * (parseInt(__DECODE_0__(0x158)) / 0x3) + -parseInt(__DECODE_0__(0x14e)) / 0x4 + parseInt(__DECODE_0__(0x153)) / 0x5 * (-parseInt(__DECODE_0__(0x149)) / 0x6) + -parseInt(__DECODE_0__(0x157)) / 0x7 + -parseInt(__DECODE_0__(0x15b)) / 0x8 + parseInt(__DECODE_0__(0x152)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8f70e);
function tobu(arr) {
  var max = 0x0;
  for (var i = 0x0; i < arr[__DECODE_0__(0x15a)] - 0x1; i++) {
    if (i > max) {
      break;
    }
    var d = Math[__DECODE_0__(0x159)](arr[i] / 0xa);
    max = Math[__DECODE_0__(0x14d)](max, i + d);
  }
  return max >= arr['length'] - 0x1;
}
var input = require('fs')[__DECODE_0__(0x154)](__DECODE_0__(0x151), 'utf8');
var arr = input[__DECODE_0__(0x14f)]()[__DECODE_0__(0x14b)]('\x0a')['map'](Number);
var n = arr['shift']();
if (tobu(arr) && tobu(arr[__DECODE_0__(0x14a)]())) {
  console[__DECODE_0__(0x14c)](__DECODE_0__(0x150));
} else {
  console['log']('no');
}
function __STRING_ARRAY__() {
  var _0x2243a9 = ['3193684cCsgOu', 'trim', 'yes', '/dev/stdin', '22700457GYETqU', '685zdPdCf', 'readFileSync', '1808462KkSNwL', '322998qdrVFx', '3411177ifwvSX', '3LSJDXu', 'floor', 'length', '6158264arGRjg', '20166EBFMac', 'reverse', 'split', 'log', 'max'];
  __STRING_ARRAY__ = function () {
    return _0x2243a9;
  };
  return __STRING_ARRAY__();
}
