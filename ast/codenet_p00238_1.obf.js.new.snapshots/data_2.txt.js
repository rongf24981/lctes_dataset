function __STRING_ARRAY__() {
  var _0x4300e9 = ['trim', 'utf8', 'shift', '21gzCkyz', '1627890eJGaxI', '20bexFXe', 'split', '12565539NKVRAt', 'readFileSync', '519lMFGcd', 'map', '587800Laihjs', '3063852UPNWzh', '10732EBQLbv', '833471ofWUvl', '3214845iZahuK'];
  __STRING_ARRAY__ = function () {
    return _0x4300e9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RzMoMv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x84;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RzMoMv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x90)) / 0x1 + -parseInt(__DECODE_0__(0x86)) / 0x2 + parseInt(__DECODE_0__(0x8b)) / 0x3 * (-parseInt(__DECODE_0__(0x8f)) / 0x4) + parseInt(__DECODE_0__(0x91)) / 0x5 + -parseInt(__DECODE_0__(0x8e)) / 0x6 + -parseInt(__DECODE_0__(0x85)) / 0x7 * (parseInt(__DECODE_0__(0x8d)) / 0x8) + -parseInt(__DECODE_0__(0x89)) / 0x9 * (-parseInt(__DECODE_0__(0x87)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x90b1d);
var input = require('fs')[__DECODE_0__(0x8a)]('/dev/stdin', __DECODE_0__(0x93));
var Arr = input[__DECODE_0__(0x92)]()[__DECODE_0__(0x88)]('\x0a');
while (!![]) {
  var t = Arr['shift']() - 0x0;
  if (t == 0x0) {
    break;
  }
  var n = Arr[__DECODE_0__(0x84)]() - 0x0;
  var sum = 0x0;
  for (var i = 0x0; i < n; i++) {
    var arr = Arr['shift']()['split']('\x20')[__DECODE_0__(0x8c)](Number);
    sum += arr[0x1] - arr[0x0];
  }
  console['log'](t <= sum ? 'OK' : t - sum);
}
