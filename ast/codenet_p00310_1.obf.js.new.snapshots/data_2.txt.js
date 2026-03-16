function __DECODE_0__(EFRrYj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x81;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EFRrYj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8a)) / 0x1 * (parseInt(__DECODE_0__(0x8e)) / 0x2) + -parseInt(__DECODE_0__(0x8f)) / 0x3 + -parseInt(__DECODE_0__(0x89)) / 0x4 + parseInt(__DECODE_0__(0x8b)) / 0x5 + parseInt(__DECODE_0__(0x88)) / 0x6 * (-parseInt(__DECODE_0__(0x8d)) / 0x7) + parseInt(__DECODE_0__(0x91)) / 0x8 * (parseInt(__DECODE_0__(0x82)) / 0x9) + parseInt(__DECODE_0__(0x83)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa4903);
var input = require('fs')[__DECODE_0__(0x81)](__DECODE_0__(0x90), __DECODE_0__(0x87));
var [p, m, c] = input[__DECODE_0__(0x84)]()[__DECODE_0__(0x8c)]('\x20')[__DECODE_0__(0x85)](Number);
function __STRING_ARRAY__() {
  var _0x4c1d1e = ['map', 'log', 'utf8', '6rCdsBk', '4881044QUWFqj', '1TMDMPP', '4099490ztIhcq', 'split', '6534143EtmVkO', '2549438pZsxwU', '878025HCwoSv', '/dev/stdin', '1192pcIbFj', 'readFileSync', '20700eSloLy', '32325570MkfKbw', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x4c1d1e;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x86)](p + m + c);
