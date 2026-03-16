(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1db)) / 0x1 * (-parseInt(__DECODE_0__(0x1e1)) / 0x2) + -parseInt(__DECODE_0__(0x1e3)) / 0x3 * (-parseInt(__DECODE_0__(0x1da)) / 0x4) + parseInt(__DECODE_0__(0x1e8)) / 0x5 + parseInt(__DECODE_0__(0x1e7)) / 0x6 * (parseInt(__DECODE_0__(0x1d8)) / 0x7) + parseInt(__DECODE_0__(0x1d9)) / 0x8 + parseInt(__DECODE_0__(0x1de)) / 0x9 + parseInt(__DECODE_0__(0x1e5)) / 0xa * (-parseInt(__DECODE_0__(0x1d7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3ff5c);
var input = require('fs')[__DECODE_0__(0x1df)](__DECODE_0__(0x1e6), 'utf8');
var [a, b, x] = input[__DECODE_0__(0x1e4)]()[__DECODE_0__(0x1dc)]('\x20')[__DECODE_0__(0x1e2)](Number);
var min = Infinity;
for (var i = 0x0; i <= 0x14; i++) {
  for (var j = 0x0; j <= 0x28; j++) {
    if (i * 0x3e8 + j * 0x1f4 >= x) {
      min = Math[__DECODE_0__(0x1e0)](min, i * a + j * b);
    }
  }
}
function __STRING_ARRAY__() {
  var _0x3ac021 = ['log', '3836097bBsxlC', 'readFileSync', 'min', '595534mGOhRI', 'map', '3666hkMYmx', 'trim', '2218850pClvzQ', '/dev/stdin', '2044194OcQQuY', '920675ZvCtSI', '55pdWQhh', '7TOopnl', '169160kFUuHP', '332tRJREj', '1jGnpKV', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x3ac021;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ahbGhN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ahbGhN, key);
}
console[__DECODE_0__(0x1dd)](min);
