(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12f)) / 0x1 + parseInt(__DECODE_0__(0x133)) / 0x2 * (parseInt(__DECODE_0__(0x13d)) / 0x3) + parseInt(__DECODE_0__(0x134)) / 0x4 + parseInt(__DECODE_0__(0x138)) / 0x5 + parseInt(__DECODE_0__(0x13a)) / 0x6 * (-parseInt(__DECODE_0__(0x13b)) / 0x7) + -parseInt(__DECODE_0__(0x130)) / 0x8 * (parseInt(__DECODE_0__(0x139)) / 0x9) + -parseInt(__DECODE_0__(0x140)) / 0xa * (parseInt(__DECODE_0__(0x135)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9b106);
function __DECODE_0__(rrZCnu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rrZCnu, key);
}
var input = require('fs')[__DECODE_0__(0x131)](__DECODE_0__(0x132), __DECODE_0__(0x137));
var x = input[__DECODE_0__(0x13f)]() - 0x0;
var w = [__DECODE_0__(0x136), __DECODE_0__(0x143), __DECODE_0__(0x13c), __DECODE_0__(0x142), __DECODE_0__(0x13e), 'tue', __DECODE_0__(0x141)];
console['log'](w[x % 0x7]);
function __STRING_ARRAY__() {
  var _0x20e816 = ['7jrLjAu', 'sat', '33YdDmSf', 'mon', 'trim', '510sCgnAB', 'wed', 'sun', 'fri', '968111xJKdjm', '2136LjesLz', 'readFileSync', '/dev/stdin', '94166tiMQxI', '3683280pjehts', '319517TeopTQ', 'thu', 'utf8', '5637605rwquLN', '30195IpUcmG', '3132246iZCQwk'];
  __STRING_ARRAY__ = function () {
    return _0x20e816;
  };
  return __STRING_ARRAY__();
}
