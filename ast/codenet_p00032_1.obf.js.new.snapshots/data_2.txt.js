(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa6)) / 0x1 * (-parseInt(__DECODE_0__(0x9d)) / 0x2) + parseInt(__DECODE_0__(0xa8)) / 0x3 + -parseInt(__DECODE_0__(0xa3)) / 0x4 + -parseInt(__DECODE_0__(0x9a)) / 0x5 * (-parseInt(__DECODE_0__(0xa7)) / 0x6) + -parseInt(__DECODE_0__(0xa4)) / 0x7 + -parseInt(__DECODE_0__(0x9f)) / 0x8 * (-parseInt(__DECODE_0__(0x9c)) / 0x9) + -parseInt(__DECODE_0__(0xa1)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xebe49);
var input = require('fs')[__DECODE_0__(0xa5)](__DECODE_0__(0x9b), 'utf8');
var lines = input[__DECODE_0__(0xa2)]()['split']('\x0a');
var line;
var rectangles = 0x0;
var lozenges = 0x0;
while (line = lines['shift']()) {
  var l = line['split'](',')[__DECODE_0__(0xa0)](function (n) {
    return +n;
  });
  var a = l[0x0];
  var b = l[0x1];
  var c = l[0x2];
  if (a * a + b * b == c * c) {
    rectangles++;
  } else {
    if (a == b) {
      lozenges++;
    }
  }
}
function __STRING_ARRAY__() {
  var _0x3a01fd = ['5018697TyJJoA', '793075pHhsvK', '/dev/stdin', '704493Lsmmxp', '2gmHmna', 'log', '8LZusRG', 'map', '6974880kromLF', 'trim', '6052228SMXAOn', '8992844DGexnH', 'readFileSync', '1917203WFUbxc', '30LDuhcL'];
  __STRING_ARRAY__ = function () {
    return _0x3a01fd;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x9e)](rectangles);
function __DECODE_0__(huRkHs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(huRkHs, key);
}
console[__DECODE_0__(0x9e)](lozenges);
