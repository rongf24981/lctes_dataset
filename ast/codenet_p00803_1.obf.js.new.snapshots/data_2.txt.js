function __STRING_ARRAY__() {
  var _0x575681 = ['2044164TEcRrF', '9RccejL', '2013100FYAkqV', '686042hJjwws', 'trim', 'map', 'split', '71458owAHRm', '14JxIbof', '4510816krljNn', 'shift', 'log', '/dev/stdin', '8421954OzhIVu', '8SGzvOZ', '11426510UUxLGR'];
  __STRING_ARRAY__ = function () {
    return _0x575681;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IZcchy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x194;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IZcchy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a0)) / 0x1 * (parseInt(__DECODE_0__(0x19f)) / 0x2) + -parseInt(__DECODE_0__(0x198)) / 0x3 * (-parseInt(__DECODE_0__(0x196)) / 0x4) + -parseInt(__DECODE_0__(0x19a)) / 0x5 + -parseInt(__DECODE_0__(0x195)) / 0x6 + parseInt(__DECODE_0__(0x19b)) / 0x7 + -parseInt(__DECODE_0__(0x1a1)) / 0x8 + parseInt(__DECODE_0__(0x199)) / 0x9 * (parseInt(__DECODE_0__(0x197)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb3144);
var input = require('fs')['readFileSync'](__DECODE_0__(0x194), 'utf8');
var arr = input[__DECODE_0__(0x19c)]()[__DECODE_0__(0x19e)]('\x0a')[__DECODE_0__(0x19d)](Number);
while (!![]) {
  var n = arr[__DECODE_0__(0x1a2)]();
  if (n == 0x0) {
    break;
  }
  var max = 0x0;
  for (var i = 0x0; i <= 0x36; i++) {
    for (var j = 0x0; j <= 0x60; j++) {
      var sum = i * i * i + j * (j + 0x1) * (j + 0x2) / 0x6;
      if (n >= sum) {
        max = Math['max'](max, sum);
      }
    }
  }
  console[__DECODE_0__(0x1a3)](max);
}
