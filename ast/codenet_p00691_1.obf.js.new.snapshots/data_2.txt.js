function __DECODE_0__(UJxvxK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UJxvxK, key);
}
function __STRING_ARRAY__() {
  var _0x5911e8 = ['7368NZCARj', '7713KiOOnT', 'push', 'log', '8771sRRqai', 'utf8', '1408332DkpfNz', '10503081Nhgoqh', 'min', '6220oOFpRt', 'trim', '13398BSONat', '876mqyTGM', '1567QjQMzX', 'apply', '842gSwVxw', 'readFileSync', '/dev/stdin', '3683130LZhWyW'];
  __STRING_ARRAY__ = function () {
    return _0x5911e8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa1)) / 0x1 * (parseInt(__DECODE_0__(0xa3)) / 0x2) + parseInt(__DECODE_0__(0xa8)) / 0x3 * (-parseInt(__DECODE_0__(0xa0)) / 0x4) + -parseInt(__DECODE_0__(0xa6)) / 0x5 + -parseInt(__DECODE_0__(0xad)) / 0x6 + parseInt(__DECODE_0__(0xab)) / 0x7 * (parseInt(__DECODE_0__(0xa7)) / 0x8) + parseInt(__DECODE_0__(0xae)) / 0x9 + parseInt(__DECODE_0__(0x9d)) / 0xa * (-parseInt(__DECODE_0__(0x9f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa8260);
var input = require('fs')[__DECODE_0__(0xa4)](__DECODE_0__(0xa5), __DECODE_0__(0xac));
var arr = input[__DECODE_0__(0x9e)]()['split']('\x0a');
while (!![]) {
  var z = arr['shift']() - 0x0;
  if (z == 0x0) {
    break;
  }
  var zzz = z * z * z;
  var ary = [];
  for (var i = z - 0x1; i > 0x0; i--) {
    for (var j = i; j > 0x0; j--) {
      var x = zzz - i * i * i - j * j * j;
      if (x > 0x0) {
        ary[__DECODE_0__(0xa9)](x);
      }
    }
  }
  console[__DECODE_0__(0xaa)](Math[__DECODE_0__(0xaf)][__DECODE_0__(0xa2)](null, ary));
}
