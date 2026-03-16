function __DECODE_0__(xyQpyy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xyQpyy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa4)) / 0x1 * (parseInt(__DECODE_0__(0xa2)) / 0x2) + -parseInt(__DECODE_0__(0xa7)) / 0x3 * (-parseInt(__DECODE_0__(0xab)) / 0x4) + parseInt(__DECODE_0__(0xa1)) / 0x5 * (parseInt(__DECODE_0__(0xa6)) / 0x6) + parseInt(__DECODE_0__(0xaa)) / 0x7 * (parseInt(__DECODE_0__(0x9f)) / 0x8) + parseInt(__DECODE_0__(0xa0)) / 0x9 * (parseInt(__DECODE_0__(0xa8)) / 0xa) + parseInt(__DECODE_0__(0xa5)) / 0xb + -parseInt(__DECODE_0__(0x9d)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x90740);
function __STRING_ARRAY__() {
  var _0x51cf66 = ['2632085SYDggL', '785258TckcAa', '/dev/stdin', '3dQuUSH', '12340086CGEFyv', '6gmJnMI', '3wtQraR', '384210qEwCqK', 'split', '4115139EXknah', '411356xycsZA', 'toFixed', 'sqrt', 'log', 'trim', '17436900UVPqCy', 'readFileSync', '8YbsQjd', '207tLZqUj'];
  __STRING_ARRAY__ = function () {
    return _0x51cf66;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x9e)](__DECODE_0__(0xa3), 'utf8')[__DECODE_0__(0xaf)]();
var lines = input[__DECODE_0__(0xa9)]('\x0a');
while (!![]) {
  var x = +lines['shift']();
  var h = +lines['shift']();
  if (x + h == 0x0) {
    break;
  }
  console[__DECODE_0__(0xae)]((x * x + x * Math[__DECODE_0__(0xad)](0x4 * h * h + x * x))[__DECODE_0__(0xac)](0x6));
}
