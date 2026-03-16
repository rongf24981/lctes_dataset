function __DECODE_0__(KBbUpf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KBbUpf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b3)) / 0x1 + parseInt(__DECODE_0__(0x1b2)) / 0x2 + -parseInt(__DECODE_0__(0x1aa)) / 0x3 * (parseInt(__DECODE_0__(0x1ab)) / 0x4) + -parseInt(__DECODE_0__(0x1b9)) / 0x5 + parseInt(__DECODE_0__(0x1b7)) / 0x6 + -parseInt(__DECODE_0__(0x1a8)) / 0x7 + parseInt(__DECODE_0__(0x1b4)) / 0x8 * (parseInt(__DECODE_0__(0x1bb)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb7539);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1ad));
var Arr = input[__DECODE_0__(0x1ac)]()['split']('\x0a');
var abc = [];
function __STRING_ARRAY__() {
  var _0x448477 = ['length', '12492315RwoKij', '30730Qtwbyx', 'reduce', '4059emyTEo', '32cbNZBi', 'trim', 'utf8', 'ABCD', 'log', '0\x200', 'indexOf', '695514lNVBDB', '732257mMHabd', '8eacDWW', 'map', 'split', '2730858OyUqkw', 'max', '3462795EgHLRP'];
  __STRING_ARRAY__ = function () {
    return _0x448477;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x1ba)]; i++) {
  if (abc['length'] == 0x0 && Arr[i] == __DECODE_0__(0x1b0)) {
    break;
  }
  if (abc[__DECODE_0__(0x1ba)] == 0x4) {
    var max = abc[__DECODE_0__(0x1a9)](function (a, b) {
      return Math[__DECODE_0__(0x1b8)](a, b);
    });
    var ABC = __DECODE_0__(0x1ae)['split']('');
    var str = ABC[abc[__DECODE_0__(0x1b1)](max)];
    console[__DECODE_0__(0x1af)](str + '\x20' + max);
    abc = [];
  } else {
    var arr = Arr[i][__DECODE_0__(0x1b6)]('\x20')[__DECODE_0__(0x1b5)](Number);
    abc['push'](arr[0x0] + arr[0x1]);
  }
}
