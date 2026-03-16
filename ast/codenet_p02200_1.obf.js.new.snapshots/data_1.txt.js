var a0_0x3277bc = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x467e80 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x467e80(0x197)) / 0x1 + -parseInt(_0x467e80(0x196)) / 0x2 + -parseInt(_0x467e80(0x191)) / 0x3 + parseInt(_0x467e80(0x198)) / 0x4 * (-parseInt(_0x467e80(0x199)) / 0x5) + -parseInt(_0x467e80(0x19d)) / 0x6 * (-parseInt(_0x467e80(0x193)) / 0x7) + parseInt(_0x467e80(0x19c)) / 0x8 + parseInt(_0x467e80(0x19b)) / 0x9;
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
var input = require('fs')[a0_0x3277bc(0x192)]('/dev/stdin', a0_0x3277bc(0x19a));
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0x3277bc(0x195)]()['split']('\x20')[a0_0x3277bc(0x194)](Number);
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
