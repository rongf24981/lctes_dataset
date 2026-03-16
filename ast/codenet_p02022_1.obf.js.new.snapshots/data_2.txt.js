function __DECODE_0__(jUQgBN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x97;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jUQgBN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa5)) / 0x1 + -parseInt(__DECODE_0__(0x9c)) / 0x2 * (-parseInt(__DECODE_0__(0x99)) / 0x3) + -parseInt(__DECODE_0__(0xa3)) / 0x4 * (parseInt(__DECODE_0__(0xa8)) / 0x5) + parseInt(__DECODE_0__(0xa2)) / 0x6 + -parseInt(__DECODE_0__(0x9b)) / 0x7 * (-parseInt(__DECODE_0__(0x98)) / 0x8) + parseInt(__DECODE_0__(0xa7)) / 0x9 * (-parseInt(__DECODE_0__(0xa1)) / 0xa) + -parseInt(__DECODE_0__(0x9e)) / 0xb * (-parseInt(__DECODE_0__(0xa0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe3fc2);
var input = require('fs')[__DECODE_0__(0x9a)]('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0x64d116 = ['8157176tZunDx', '6ugUnZb', 'readFileSync', '7GISjXy', '880834uIksWT', 'trim', '22iizetT', 'reduce', '19333752BKGjyV', '430ueMgSg', '1156188aAkeQf', '24XBpXrK', 'split', '1364414GOIZZR', 'log', '315459APgSSo', '1258365BXMwqc', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x64d116;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x9d)]()[__DECODE_0__(0xa4)]('\x0a');
var A = arr[0x1][__DECODE_0__(0xa4)]('\x20')[__DECODE_0__(0x97)](Number)[__DECODE_0__(0x9f)]((a, b) => a + b);
var B = arr[0x2][__DECODE_0__(0xa4)]('\x20')[__DECODE_0__(0x97)](Number)[__DECODE_0__(0x9f)]((a, b) => a + b);
console[__DECODE_0__(0xa6)](A * B);
