(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xac)) / 0x1 * (-parseInt(__DECODE_0__(0xb8)) / 0x2) + parseInt(__DECODE_0__(0xab)) / 0x3 * (-parseInt(__DECODE_0__(0xb0)) / 0x4) + parseInt(__DECODE_0__(0xaf)) / 0x5 + parseInt(__DECODE_0__(0xb3)) / 0x6 + -parseInt(__DECODE_0__(0xa9)) / 0x7 + parseInt(__DECODE_0__(0xb5)) / 0x8 * (-parseInt(__DECODE_0__(0xb2)) / 0x9) + parseInt(__DECODE_0__(0xba)) / 0xa * (parseInt(__DECODE_0__(0xae)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x97fa0);
function __STRING_ARRAY__() {
  var _0x4b4f6f = ['16386FFuojJ', '1UlMNTB', 'split', '34001XRbqZA', '5799045zXpbcU', '888hEEORp', 'log', '105471kNCtRa', '7130622ngLDHW', 'shift', '800IQcOrs', 'length', 'utf8', '365962DuEzbZ', 'readFileSync', '5770TzbVaL', '6592684wcpwBa', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x4b4f6f;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0xb9)](__DECODE_0__(0xaa), __DECODE_0__(0xb7));
var Arr = input['trim']()[__DECODE_0__(0xad)]('\x0a');
var t = Arr[0x0]['split']('\x20')[0x1] - 0x0;
function __DECODE_0__(LaxtHg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LaxtHg, key);
}
Arr[__DECODE_0__(0xb4)]();
var T = 0x0;
while (Arr[__DECODE_0__(0xb6)] != 0x0) {
  var arr = Arr[0x0]['split']('\x20');
  Arr[__DECODE_0__(0xb4)]();
  var a = arr[0x0];
  var b = arr[0x1] - 0x0;
  if (b - t <= 0x0) {
    console[__DECODE_0__(0xb1)](a + '\x20' + (T + b));
    T += b;
  } else {
    Arr['push'](a + '\x20' + (b - t));
    T += t;
  }
}
