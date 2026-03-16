(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x197)) / 0x1 + -parseInt(__DECODE_0__(0x196)) / 0x2 + -parseInt(__DECODE_0__(0x191)) / 0x3 + parseInt(__DECODE_0__(0x198)) / 0x4 * (-parseInt(__DECODE_0__(0x199)) / 0x5) + -parseInt(__DECODE_0__(0x19d)) / 0x6 * (-parseInt(__DECODE_0__(0x193)) / 0x7) + parseInt(__DECODE_0__(0x19c)) / 0x8 + parseInt(__DECODE_0__(0x19b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa5447);
function __DECODE_0__(CEbnof, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x191;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CEbnof, key);
}
var input = require('fs')[__DECODE_0__(0x192)]('/dev/stdin', __DECODE_0__(0x19a));
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[__DECODE_0__(0x195)]()['split']('\x20')[__DECODE_0__(0x194)](Number);
var cnt = 0x0;
for (var i = 0x0; i < n - 0x1; i++) {
  if (a[i] < a[i + 0x1]) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x428e2d = ['2097160rKjLvZ', '722231tNoWOx', '28VHkvjm', '480715rpGgkX', 'utf8', '23781015ERWxQC', '3218352NSaSNC', '6GcdmCX', '871893xThJnl', 'readFileSync', '2567243XqKGMd', 'map', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x428e2d;
  };
  return __STRING_ARRAY__();
}
console['log'](cnt);
