function __STRING_ARRAY__() {
  var _0x4e20d9 = ['/dev/stdin', '12MmtOEJ', '1610360pwFhHM', '3504495BCPbGb', '440541mRthpC', 'readFileSync', '9jhpbqW', 'split', '6123100fUSclX', '7XOBOSK', '7370982PAiGag', '3923656wfRerA', 'indexOf', '0\x200', 'utf8', '195193vSknWj', 'length', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x4e20d9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x144)) / 0x1 * (parseInt(__DECODE_0__(0x148)) / 0x2) + parseInt(__DECODE_0__(0x139)) / 0x3 + -parseInt(__DECODE_0__(0x140)) / 0x4 + parseInt(__DECODE_0__(0x14a)) / 0x5 + -parseInt(__DECODE_0__(0x13f)) / 0x6 + -parseInt(__DECODE_0__(0x13e)) / 0x7 * (-parseInt(__DECODE_0__(0x149)) / 0x8) + parseInt(__DECODE_0__(0x13b)) / 0x9 * (parseInt(__DECODE_0__(0x13d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x981fa);
var input = require('fs')[__DECODE_0__(0x13a)](__DECODE_0__(0x147), __DECODE_0__(0x143));
var Arr = input[__DECODE_0__(0x146)]()['split']('\x0a');
function __DECODE_0__(wQWUdm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x139;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wQWUdm, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x145)]; i++) {
  if (Arr[i] == __DECODE_0__(0x142)) {
    break;
  }
  var arr = Arr[i][__DECODE_0__(0x13c)]('\x20');
  var x = arr[0x0]['split']('');
  var y = arr[0x1][__DECODE_0__(0x13c)]('');
  var h = 0x0;
  var b = 0x0;
  for (var j = 0x0; j < 0x4; j++) {
    if (x[j] == y[j]) {
      h++;
    } else {
      if (y[__DECODE_0__(0x141)](x[j]) != -0x1) {
        b++;
      }
    }
  }
  console['log'](h + '\x20' + b);
}
