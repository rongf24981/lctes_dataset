(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc8)) / 0x1 + parseInt(__DECODE_0__(0xca)) / 0x2 + parseInt(__DECODE_0__(0xc3)) / 0x3 * (-parseInt(__DECODE_0__(0xcf)) / 0x4) + parseInt(__DECODE_0__(0xd0)) / 0x5 * (-parseInt(__DECODE_0__(0xce)) / 0x6) + -parseInt(__DECODE_0__(0xd2)) / 0x7 * (parseInt(__DECODE_0__(0xcb)) / 0x8) + parseInt(__DECODE_0__(0xcd)) / 0x9 * (parseInt(__DECODE_0__(0xc6)) / 0xa) + parseInt(__DECODE_0__(0xd4)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd050c);
var input = require('fs')[__DECODE_0__(0xc5)]('/dev/stdin', __DECODE_0__(0xd3));
var Arr = input[__DECODE_0__(0xc9)]()['split']('\x0a');
function __DECODE_0__(IPzmtx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IPzmtx, key);
}
function __STRING_ARRAY__() {
  var _0xf6d7a1 = ['9957420WAHClq', 'toFixed', 'length', '1023lRlqcY', 'split', 'readFileSync', '1460gcMwIK', 'map', '663977InNEAt', 'trim', '2144874shLskR', '328hEKpjb', 'YES', '16434piftcP', '138ORFtRa', '572izDKue', '127705Yyahtk', 'log', '242228ThUNHP', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0xf6d7a1;
  };
  return __STRING_ARRAY__();
}
for (i = 0x0; i < Arr[__DECODE_0__(0xd6)]; i++) {
  var arr = Arr[i][__DECODE_0__(0xc4)]('\x20')[__DECODE_0__(0xc7)](Number);
  (function (x1, y1, x2, y2, x3, y3, x4, y4) {
    var k1;
    var k2;
    if (x2 - x1 !== 0x0) {
      k1 = ((y2 - y1) / (x2 - x1))[__DECODE_0__(0xd5)](0xb);
    } else {
      k1 = Infinity;
    }
    if (x4 - x3 !== 0x0) {
      k2 = (y4 - y3) / (x4 - x3)[__DECODE_0__(0xd5)](0xb);
    } else {
      k2 = Infinity;
    }
    var ans = 'NO';
    if (k1 == 0x0 && k2 == Infinity) {
      ans = __DECODE_0__(0xcc);
    }
    if (k2 == 0x0 && k1 == Infinity) {
      ans = __DECODE_0__(0xcc);
    }
    if (k1 == -0x1 * k2 && k1 != 0x0 && k2 != 0x0) {
      ans = __DECODE_0__(0xcc);
    }
    console[__DECODE_0__(0xd1)](ans);
  })['apply'](null, arr);
}
