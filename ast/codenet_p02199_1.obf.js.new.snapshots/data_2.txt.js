(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd3)) / 0x1 * (parseInt(__DECODE_0__(0xdf)) / 0x2) + parseInt(__DECODE_0__(0xd5)) / 0x3 * (-parseInt(__DECODE_0__(0xd4)) / 0x4) + -parseInt(__DECODE_0__(0xd6)) / 0x5 * (parseInt(__DECODE_0__(0xd0)) / 0x6) + -parseInt(__DECODE_0__(0xce)) / 0x7 * (parseInt(__DECODE_0__(0xcc)) / 0x8) + -parseInt(__DECODE_0__(0xcd)) / 0x9 + parseInt(__DECODE_0__(0xde)) / 0xa * (parseInt(__DECODE_0__(0xd7)) / 0xb) + -parseInt(__DECODE_0__(0xd9)) / 0xc * (-parseInt(__DECODE_0__(0xcf)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd1506);
var input = require('fs')[__DECODE_0__(0xdc)](__DECODE_0__(0xdb), 'utf8');
var arr = input[__DECODE_0__(0xdd)]()[__DECODE_0__(0xd2)]('\x0a');
var [a, b] = arr[__DECODE_0__(0xda)]()[__DECODE_0__(0xd2)]('\x20')[__DECODE_0__(0xd8)](Number);
function __STRING_ARRAY__() {
  var _0x10a516 = ['128299HxqYJW', '4SNeHUH', '3220680pmpfqO', '1963550kqaqAs', '998415qprZjd', 'map', '4689876xGlTuQ', 'shift', '/dev/stdin', 'readFileSync', 'trim', '80JLeaoK', '2yPKyXw', '128SBCNYF', '2034864ujPbND', '455203JbkNFn', '91yMhdiu', '6iGaine', 'log', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x10a516;
  };
  return __STRING_ARRAY__();
}
var [p, q, r] = arr['shift']()[__DECODE_0__(0xd2)]('\x20')[__DECODE_0__(0xd8)](Number);
function __DECODE_0__(bUfbpO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bUfbpO, key);
}
var hanareta = b * p;
var tikaduita = (b - a) * q;
var d = hanareta - tikaduita;
console[__DECODE_0__(0xd1)]((d / (q + r) + b)['toFixed'](0xc));
