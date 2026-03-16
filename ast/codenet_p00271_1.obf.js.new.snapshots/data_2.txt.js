(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8f)) / 0x1 + parseInt(__DECODE_0__(0x8e)) / 0x2 + -parseInt(__DECODE_0__(0x8d)) / 0x3 + parseInt(__DECODE_0__(0x90)) / 0x4 + parseInt(__DECODE_0__(0x8c)) / 0x5 + -parseInt(__DECODE_0__(0x94)) / 0x6 + parseInt(__DECODE_0__(0x91)) / 0x7 * (parseInt(__DECODE_0__(0x92)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1e44a);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function __DECODE_0__(EtskdL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EtskdL, key);
}
var Arr = input[__DECODE_0__(0x93)]()[__DECODE_0__(0x8b)]('\x0a');
for (var i = 0x0; i < 0x7; i++) {
  var arr = Arr[i][__DECODE_0__(0x8b)]('\x20')[__DECODE_0__(0x8a)](Number);
  console['log'](arr[0x0] - arr[0x1]);
}
function __STRING_ARRAY__() {
  var _0x3b209c = ['split', '495535meWyia', '550245UZqCuK', '107210pSwFUh', '111827thofTB', '842472AONtKr', '7KalIbT', '1771912XzwsBW', 'trim', '993594tvxpCA', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x3b209c;
  };
  return __STRING_ARRAY__();
}
