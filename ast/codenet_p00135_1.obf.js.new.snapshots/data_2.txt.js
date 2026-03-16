(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x14b)) / 0x1 + -parseInt(__DECODE_0__(0x14a)) / 0x2 * (-parseInt(__DECODE_0__(0x156)) / 0x3) + parseInt(__DECODE_0__(0x146)) / 0x4 + parseInt(__DECODE_0__(0x153)) / 0x5 + parseInt(__DECODE_0__(0x150)) / 0x6 * (parseInt(__DECODE_0__(0x147)) / 0x7) + parseInt(__DECODE_0__(0x157)) / 0x8 * (-parseInt(__DECODE_0__(0x14e)) / 0x9) + parseInt(__DECODE_0__(0x155)) / 0xa * (-parseInt(__DECODE_0__(0x14c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x918b8);
function __DECODE_0__(sDoCxF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x146;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sDoCxF, key);
}
function __STRING_ARRAY__() {
  var _0x429ab4 = ['7322259PxIbKa', 'alert', 'split', '8KxVxWv', '1009682izQjYy', '2059222Aerdmk', 'utf8', '1759878aRckWF', 'log', '6ihMTzu', 'shift', 'abs', '1658360ivbRdO', '/dev/stdin', '160tacTIv', '442137isfuDv', '8oiZTiP', '3240076rHGlYa'];
  __STRING_ARRAY__ = function () {
    return _0x429ab4;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x154), __DECODE_0__(0x14d));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x149)]('\x0a');
var n = Arr[__DECODE_0__(0x151)]() - 0x0;
for (var I = 0x0; I < n; I++) {
  var arr = Arr[I]['split'](':');
  var h = parseInt(arr[0x0], 0xa);
  var m = parseInt(arr[0x1], 0xa);
  var H = h * (0x168 / 0xc) + m * (0x168 / 0xc / 0x3c);
  var M = m * (0x168 / 0x3c);
  var hm = Math[__DECODE_0__(0x152)](H - M);
  var ans;
  if (hm >= 0x0 && hm < 0x1e) {
    ans = __DECODE_0__(0x148);
  } else {
    if (hm >= 0x5a && hm <= 0xb4) {
      ans = 'safe';
    } else {
      ans = 'warning';
    }
  }
  console[__DECODE_0__(0x14f)](ans);
}
