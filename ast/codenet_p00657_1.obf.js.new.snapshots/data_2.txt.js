(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1fb)) / 0x1 + parseInt(__DECODE_0__(0x1f1)) / 0x2 + -parseInt(__DECODE_0__(0x1f9)) / 0x3 + -parseInt(__DECODE_0__(0x1f3)) / 0x4 * (parseInt(__DECODE_0__(0x1f2)) / 0x5) + -parseInt(__DECODE_0__(0x1f0)) / 0x6 + parseInt(__DECODE_0__(0x1fc)) / 0x7 * (parseInt(__DECODE_0__(0x1f5)) / 0x8) + parseInt(__DECODE_0__(0x1f6)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe31ef);
var input = require('fs')[__DECODE_0__(0x1ef)](__DECODE_0__(0x1fa), __DECODE_0__(0x1f8));
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
  var rc = Arr[__DECODE_0__(0x1ee)]()[__DECODE_0__(0x1f4)]('\x20')['map'](Number);
  var r = rc[0x0];
  var c = rc[0x1];
  if (r == 0x0 && c == 0x0) {
    break;
  }
  console[__DECODE_0__(0x1f7)](r % 0x2 == 0x1 && c % 0x2 == 0x1 ? 'no' : __DECODE_0__(0x1fd));
}
function __DECODE_0__(qiGPLF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qiGPLF, key);
}
function __STRING_ARRAY__() {
  var _0x197659 = ['30758580zgxiDO', 'log', 'utf8', '2952126chbCFE', '/dev/stdin', '806424fYZgZL', '4221qUYfVR', 'yes', 'shift', 'readFileSync', '7850652hRmSZF', '292286BoBmvA', '1373115jCdPmp', '20WdcdBn', 'split', '24392YJFXNe'];
  __STRING_ARRAY__ = function () {
    return _0x197659;
  };
  return __STRING_ARRAY__();
}
