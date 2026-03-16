(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xea)) / 0x1 * (parseInt(__DECODE_0__(0xfa)) / 0x2) + -parseInt(__DECODE_0__(0xf1)) / 0x3 + -parseInt(__DECODE_0__(0xeb)) / 0x4 * (-parseInt(__DECODE_0__(0xf2)) / 0x5) + parseInt(__DECODE_0__(0xf9)) / 0x6 * (-parseInt(__DECODE_0__(0xef)) / 0x7) + -parseInt(__DECODE_0__(0xf3)) / 0x8 * (parseInt(__DECODE_0__(0xf0)) / 0x9) + parseInt(__DECODE_0__(0xfb)) / 0xa + parseInt(__DECODE_0__(0xed)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6a730);
var input = require('fs')[__DECODE_0__(0xf4)](__DECODE_0__(0xec), __DECODE_0__(0xee));
var Arr = input['trim']()[__DECODE_0__(0xf8)]('\x0a0,0\x0a');
var inputA = Arr[0x0][__DECODE_0__(0xf8)]('\x0a');
var inputB = Arr[0x1][__DECODE_0__(0xf8)]('\x0a')[__DECODE_0__(0xf5)](Number);
var obj = {};
var s = [];
inputA['forEach'](function (v) {
  var arr = v[__DECODE_0__(0xf8)](',')[__DECODE_0__(0xf5)](Number);
  obj[arr[0x0]] = arr[0x1];
  s[__DECODE_0__(0xf6)](arr[0x1]);
});
s['sort'](function (a, b) {
  return b - a;
});
var s0 = s[0x0];
var t = [s0];
function __STRING_ARRAY__() {
  var _0x1937d6 = ['utf8', '7UzjTog', '4550949UaPrwh', '2431965qBEENV', '525205KFnRMU', '8VwvTzy', 'readFileSync', 'map', 'push', 'length', 'split', '661812ForYkG', '2yUsBQs', '904360bXtbRi', 'log', 'forEach', 'indexOf', '765663ePbiCI', '16QjLVYh', '/dev/stdin', '6450081OerOOk'];
  __STRING_ARRAY__ = function () {
    return _0x1937d6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZyrdDl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZyrdDl, key);
}
for (var i = 0x1; i < s[__DECODE_0__(0xf7)]; i++) {
  if (s0 == s[i]) {
    continue;
  }
  s0 = s[i];
  t['push'](s[i]);
}
inputB[__DECODE_0__(0xe8)](function (v) {
  console[__DECODE_0__(0xe7)](t[__DECODE_0__(0xe9)](obj[v]) + 0x1);
});
