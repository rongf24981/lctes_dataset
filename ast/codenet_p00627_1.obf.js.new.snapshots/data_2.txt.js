function __STRING_ARRAY__() {
  var _0x2598df = ['map', 'log', 'readFileSync', '11589450YAqUSU', '1460bWrLie', '17904XXfGHN', '14vMsvyL', '/dev/stdin', '2098017xCaDhg', '4347112gGIOdJ', 'trim', '6RTRUoz', '2519152iCoOYL', '5870547DlPPYl', 'length', 'split', '275118IWhhov'];
  __STRING_ARRAY__ = function () {
    return _0x2598df;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x103)) / 0x1 * (parseInt(__DECODE_0__(0x108)) / 0x2) + -parseInt(__DECODE_0__(0x100)) / 0x3 + parseInt(__DECODE_0__(0x101)) / 0x4 + parseInt(__DECODE_0__(0xfc)) / 0x5 * (parseInt(__DECODE_0__(0xfd)) / 0x6) + parseInt(__DECODE_0__(0xfe)) / 0x7 * (parseInt(__DECODE_0__(0x104)) / 0x8) + -parseInt(__DECODE_0__(0x105)) / 0x9 + -parseInt(__DECODE_0__(0x10c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdc619);
function __DECODE_0__(qbHVRu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qbHVRu, key);
}
var input = require('fs')[__DECODE_0__(0x10b)](__DECODE_0__(0xff), 'utf8');
var Arr = input[__DECODE_0__(0x102)]()[__DECODE_0__(0x107)]('\x0a')[__DECODE_0__(0x109)](Number);
while (Arr[__DECODE_0__(0x106)] != 0x0) {
  var n = Arr['shift']() / 0x4;
  if (n == 0x0) {
    break;
  }
  var sum = 0x0;
  while (n != 0x0) {
    sum += Arr['shift']();
    n--;
  }
  console[__DECODE_0__(0x10a)](sum);
}
