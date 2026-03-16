function __DECODE_0__(LcfpaZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x163;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LcfpaZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x176)) / 0x1 + parseInt(__DECODE_0__(0x16e)) / 0x2 * (parseInt(__DECODE_0__(0x174)) / 0x3) + -parseInt(__DECODE_0__(0x169)) / 0x4 * (-parseInt(__DECODE_0__(0x173)) / 0x5) + parseInt(__DECODE_0__(0x16b)) / 0x6 * (-parseInt(__DECODE_0__(0x165)) / 0x7) + -parseInt(__DECODE_0__(0x175)) / 0x8 * (-parseInt(__DECODE_0__(0x163)) / 0x9) + parseInt(__DECODE_0__(0x172)) / 0xa * (-parseInt(__DECODE_0__(0x170)) / 0xb) + parseInt(__DECODE_0__(0x164)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2c8ec);
var input = __DECODE_0__(0x167);
var input = require('fs')[__DECODE_0__(0x16f)](__DECODE_0__(0x166), __DECODE_0__(0x16d));
var arr = input[__DECODE_0__(0x168)]()[__DECODE_0__(0x16a)]('\x0a');
var k = arr[0x0][__DECODE_0__(0x16a)]('\x20')[0x0] - 0x0;
var x = arr[0x0][__DECODE_0__(0x16a)]('\x20')[0x1] - 0x0;
var a = [];
for (var i = x - k + 0x1; i < x + k; i++) {
  a[__DECODE_0__(0x171)](i);
}
function __STRING_ARRAY__() {
  var _0x1ad2af = ['/dev/stdin', '\x0a3\x207\x0a', 'trim', '179764wqNMhD', 'split', '1409706vbaWLa', 'join', 'utf8', '1438qJFixl', 'readFileSync', '20042BfojDM', 'push', '710MtvZxd', '20ffdSvg', '1131WqKZcD', '37336yVceTW', '260641rLVLOf', '612ADnouC', '471348MemKRn', '7wELFUr'];
  __STRING_ARRAY__ = function () {
    return _0x1ad2af;
  };
  return __STRING_ARRAY__();
}
console['log'](a[__DECODE_0__(0x16c)]('\x20'));
