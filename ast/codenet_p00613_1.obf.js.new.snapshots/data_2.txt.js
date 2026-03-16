function __STRING_ARRAY__() {
  var _0x2fbfab = ['718530aXaMYq', 'readFileSync', '845920WkVzkc', 'shift', '5850290VkqQmt', '127xsAmPp', '6nRmosu', 'utf8', '2052837Jfnams', 'reduce', 'trim', '2064kUUtYR', '2986tbbOeI', 'split', 'map', '70EvfMuk', '347247AIGZyc'];
  __STRING_ARRAY__ = function () {
    return _0x2fbfab;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x183)) / 0x1 * (parseInt(__DECODE_0__(0x179)) / 0x2) + -parseInt(__DECODE_0__(0x17d)) / 0x3 + parseInt(__DECODE_0__(0x180)) / 0x4 + -parseInt(__DECODE_0__(0x17e)) / 0x5 * (parseInt(__DECODE_0__(0x184)) / 0x6) + -parseInt(__DECODE_0__(0x17c)) / 0x7 * (parseInt(__DECODE_0__(0x178)) / 0x8) + -parseInt(__DECODE_0__(0x175)) / 0x9 + parseInt(__DECODE_0__(0x182)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1c822);
var input = require('fs')[__DECODE_0__(0x17f)]('/dev/stdin', __DECODE_0__(0x185));
var Arr = input[__DECODE_0__(0x177)]()['split']('\x0a');
function __DECODE_0__(ueuyDY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ueuyDY, key);
}
while (!![]) {
  var K = Arr[__DECODE_0__(0x181)]() - 0x0;
  if (K == 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0x181)]()[__DECODE_0__(0x17a)]('\x20')[__DECODE_0__(0x17b)](Number);
  var sum = arr[__DECODE_0__(0x176)](function (a, b) {
    return a + b;
  });
  console['log'](sum / (K - 0x1));
}
