(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x106)) / 0x1 + -parseInt(__DECODE_0__(0x10c)) / 0x2 * (parseInt(__DECODE_0__(0x105)) / 0x3) + parseInt(__DECODE_0__(0x112)) / 0x4 * (parseInt(__DECODE_0__(0x110)) / 0x5) + parseInt(__DECODE_0__(0x104)) / 0x6 + -parseInt(__DECODE_0__(0x10e)) / 0x7 * (parseInt(__DECODE_0__(0x10a)) / 0x8) + parseInt(__DECODE_0__(0x108)) / 0x9 * (-parseInt(__DECODE_0__(0x109)) / 0xa) + parseInt(__DECODE_0__(0x10f)) / 0xb * (parseInt(__DECODE_0__(0x102)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4ec3f);
function __DECODE_0__(njGhlS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(njGhlS, key);
}
var input = require('fs')[__DECODE_0__(0x111)](__DECODE_0__(0x107), 'utf8');
var arr = input[__DECODE_0__(0x10d)]()[__DECODE_0__(0x103)]('\x0a');
var n = arr[__DECODE_0__(0x100)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x44ff94 = ['171288ajcaOO', 'push', '4308ImCnUV', 'trim', '175umzNVR', '11fvzXQb', '70sWEPWZ', 'readFileSync', '20028mOcWKy', 'shift', 'map', '24458808HXbDcV', 'split', '402324RInfsY', '654QIFQJn', '567818mgFEII', '/dev/stdin', '132678xUBglM', '190LXiBFZ'];
  __STRING_ARRAY__ = function () {
    return _0x44ff94;
  };
  return __STRING_ARRAY__();
}
var [a, d] = arr[__DECODE_0__(0x100)]()[__DECODE_0__(0x103)]('\x20')[__DECODE_0__(0x101)](Number);
var retu = [];
for (var i = 0x0; i < n; i++) {
  retu[__DECODE_0__(0x10b)](a + i * d);
}
var m = arr['shift']() - 0x0;
for (var i = 0x0; i < m; i++) {
  var [x, y, z] = arr[__DECODE_0__(0x100)]()[__DECODE_0__(0x103)]('\x20')['map'](Number);
  if (x == 0x0) {
    [retu[y - 0x1], retu[z - 0x1]] = [retu[z - 0x1], retu[y - 0x1]];
  } else {
    retu[y - 0x1] = retu[z - 0x1];
  }
}
var k = arr[__DECODE_0__(0x100)]() - 0x0;
console['log'](retu[k - 0x1]);
