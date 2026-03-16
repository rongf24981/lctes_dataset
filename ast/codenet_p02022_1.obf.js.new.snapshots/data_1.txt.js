var a0_0x15f3c4 = __DECODE_0__;
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
  var _0x49aae1 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x49aae1(0xa5)) / 0x1 + -parseInt(_0x49aae1(0x9c)) / 0x2 * (-parseInt(_0x49aae1(0x99)) / 0x3) + -parseInt(_0x49aae1(0xa3)) / 0x4 * (parseInt(_0x49aae1(0xa8)) / 0x5) + parseInt(_0x49aae1(0xa2)) / 0x6 + -parseInt(_0x49aae1(0x9b)) / 0x7 * (-parseInt(_0x49aae1(0x98)) / 0x8) + parseInt(_0x49aae1(0xa7)) / 0x9 * (-parseInt(_0x49aae1(0xa1)) / 0xa) + -parseInt(_0x49aae1(0x9e)) / 0xb * (-parseInt(_0x49aae1(0xa0)) / 0xc);
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
var input = require('fs')[a0_0x15f3c4(0x9a)]('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0x64d116 = ['8157176tZunDx', '6ugUnZb', 'readFileSync', '7GISjXy', '880834uIksWT', 'trim', '22iizetT', 'reduce', '19333752BKGjyV', '430ueMgSg', '1156188aAkeQf', '24XBpXrK', 'split', '1364414GOIZZR', 'log', '315459APgSSo', '1258365BXMwqc', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x64d116;
  };
  return __STRING_ARRAY__();
}
var arr = input[a0_0x15f3c4(0x9d)]()[a0_0x15f3c4(0xa4)]('\x0a');
var A = arr[0x1][a0_0x15f3c4(0xa4)]('\x20')[a0_0x15f3c4(0x97)](Number)[a0_0x15f3c4(0x9f)]((a, b) => a + b);
var B = arr[0x2][a0_0x15f3c4(0xa4)]('\x20')[a0_0x15f3c4(0x97)](Number)[a0_0x15f3c4(0x9f)]((a, b) => a + b);
console[a0_0x15f3c4(0xa6)](A * B);
