function __STRING_ARRAY__() {
  var _0x39487a = ['247548WXAVzC', '6736AZTVyt', 'length', '1091020ZneXue', '479645mIkTDf', '2ozkVKv', '18hgMrwj', '10050103Zitveg', '9900FsAhHz', 'trim', '4096407OyRlYg', '287304zWOSRB', 'split', '407AKzIVg', '4LwKiNZ', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x39487a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xd9)) / 0x1 * (-parseInt(__DECODE_0__(0xdf)) / 0x2) + parseInt(__DECODE_0__(0xde)) / 0x3 * (parseInt(__DECODE_0__(0xe2)) / 0x4) + parseInt(__DECODE_0__(0xd8)) / 0x5 * (parseInt(__DECODE_0__(0xda)) / 0x6) + -parseInt(__DECODE_0__(0xdb)) / 0x7 + parseInt(__DECODE_0__(0xd5)) / 0x8 * (parseInt(__DECODE_0__(0xdc)) / 0x9) + parseInt(__DECODE_0__(0xd7)) / 0xa + -parseInt(__DECODE_0__(0xe1)) / 0xb * (parseInt(__DECODE_0__(0xd4)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbda9c);
var input = require('fs')[__DECODE_0__(0xe3)]('/dev/stdin', 'utf8');
var Arr = input[__DECODE_0__(0xdd)]()[__DECODE_0__(0xe0)]('\x0a');
function __DECODE_0__(sPtqds, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sPtqds, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0xd6)]; i = i + 0x2) {
  var n = Arr[i] - 0x0;
  var str = Arr[i + 0x1];
  for (var j = 0x0; j < n; j++) {
    str = str['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (s) {
      return s[__DECODE_0__(0xd6)] + s[0x0];
    });
  }
  console['log'](str);
  if (Arr[i + 0x2] == '0') {
    break;
  }
}
