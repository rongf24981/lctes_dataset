(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f2)) / 0x1 + parseInt(__DECODE_0__(0x1f9)) / 0x2 * (-parseInt(__DECODE_0__(0x1f6)) / 0x3) + parseInt(__DECODE_0__(0x1ed)) / 0x4 + -parseInt(__DECODE_0__(0x1ef)) / 0x5 * (parseInt(__DECODE_0__(0x1ec)) / 0x6) + parseInt(__DECODE_0__(0x1f1)) / 0x7 * (-parseInt(__DECODE_0__(0x1f7)) / 0x8) + parseInt(__DECODE_0__(0x1fd)) / 0x9 + parseInt(__DECODE_0__(0x1ee)) / 0xa * (parseInt(__DECODE_0__(0x1f5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc1c10);
function euc(a, b) {
  var r0 = a;
  var r1 = b;
  var x0 = 0x1;
  var x1 = 0x0;
  var y0 = 0x0;
  var y1 = 0x1;
  while (r1 > 0x0) {
    var q = Math[__DECODE_0__(0x1fc)](r0 / r1);
    var r2 = r0 % r1;
    var x2 = x0 - q * x1;
    var y2 = y0 - q * y1;
    r0 = r1;
    r1 = r2;
    x0 = x1;
    x1 = x2;
    y0 = y1;
    y1 = y2;
  }
  return [x0, y0];
}
var input = require('fs')[__DECODE_0__(0x1f8)](__DECODE_0__(0x1fb), __DECODE_0__(0x1f0))[__DECODE_0__(0x1fe)]();
var nums = input[__DECODE_0__(0x1f3)]('\x20')['map'](function (num) {
  return +num;
});
function __DECODE_0__(BhPdAZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BhPdAZ, key);
}
var a = nums[0x0];
var b = nums[0x1];
console[__DECODE_0__(0x1fa)](euc(a, b)[__DECODE_0__(0x1f4)]('\x20'));
function __STRING_ARRAY__() {
  var _0x937c0 = ['27102lRFTym', '3234396jWeCHW', '18042670ItfxQQ', '200uWxXxL', 'utf8', '21BvNMKW', '53916SaESpc', 'split', 'join', '11PPRSwv', '27DyBnml', '4217384dEtvzf', 'readFileSync', '157078zvIDlS', 'log', '/dev/stdin', 'floor', '5362956xjJwDv', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x937c0;
  };
  return __STRING_ARRAY__();
}
