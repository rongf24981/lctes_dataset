function __STRING_ARRAY__() {
  var _0x34273e = ['1227GfBjgr', '7924rumgCN', '21ObBjBE', 'pow', '1106566CKVCiR', '4877580uVKmzC', 'push', '3351895IPxYJr', '2057368CqCxXq', 'split', 'utf8', 'replace', '/dev/stdin', '9329436ozeaYr', 'length', 'shift', '591202FEhcGH', '6dybDqU', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x34273e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x198)) / 0x1 + parseInt(__DECODE_0__(0x18c)) / 0x2 + parseInt(__DECODE_0__(0x19b)) / 0x3 * (parseInt(__DECODE_0__(0x19c)) / 0x4) + -parseInt(__DECODE_0__(0x18f)) / 0x5 * (parseInt(__DECODE_0__(0x199)) / 0x6) + -parseInt(__DECODE_0__(0x19d)) / 0x7 * (-parseInt(__DECODE_0__(0x190)) / 0x8) + -parseInt(__DECODE_0__(0x195)) / 0x9 + -parseInt(__DECODE_0__(0x18d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x81c1e);
var input = require('fs')[__DECODE_0__(0x19a)](__DECODE_0__(0x194), __DECODE_0__(0x192));
var Arr = input[__DECODE_0__(0x193)](/\n$/, '')[__DECODE_0__(0x191)]('\x0a');
var nums = [];
for (var i = 0x7; i >= -0x4; i--) {
  nums[__DECODE_0__(0x18e)](Math[__DECODE_0__(0x19e)](0x2, i));
}
function __DECODE_0__(bIRZYh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bIRZYh, key);
}
while (!![]) {
  var x = Arr[__DECODE_0__(0x197)]() - 0x0;
  if (x == -0x1) {
    break;
  }
  var str = '';
  for (var i = 0x0; i < nums[__DECODE_0__(0x196)]; i++) {
    if (x >= nums[i]) {
      x -= nums[i];
      str += '1';
    } else {
      str += '0';
    }
    if (i == 0x7) {
      str += '.';
    }
  }
  if (x !== 0x0) {
    str = 'NA';
  }
  console['log'](str);
}
