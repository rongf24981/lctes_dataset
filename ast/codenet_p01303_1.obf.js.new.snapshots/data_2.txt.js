function __STRING_ARRAY__() {
  var _0x52d83c = ['split', 'utf8', '405HDvVqv', 'shift', '6flIrJy', 'map', '3954090lmUljV', '3564040CgKAKn', '10924SLrJPF', '816039dYPtGl', '7511656dZlkJo', '1949703bFCLOI', 'replace', '36983835tebMhR'];
  __STRING_ARRAY__ = function () {
    return _0x52d83c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BlnoHM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x162;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BlnoHM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x16e)) / 0x1 + -parseInt(__DECODE_0__(0x16b)) / 0x2 + -parseInt(__DECODE_0__(0x167)) / 0x3 * (parseInt(__DECODE_0__(0x16d)) / 0x4) + parseInt(__DECODE_0__(0x16c)) / 0x5 * (parseInt(__DECODE_0__(0x169)) / 0x6) + parseInt(__DECODE_0__(0x162)) / 0x7 + -parseInt(__DECODE_0__(0x16f)) / 0x8 + parseInt(__DECODE_0__(0x164)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf41f6);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x166));
var Arr = input[__DECODE_0__(0x163)](/\n$/, '')[__DECODE_0__(0x165)]('\x0a');
var N = Arr['shift']() - 0x0;
for (var I = 0x0; I < N; I++) {
  var xywh = Arr[__DECODE_0__(0x168)]()['split']('\x20')['map'](Number);
  var x1 = xywh[0x0];
  var x2 = xywh[0x0] + xywh[0x2];
  var y1 = xywh[0x1];
  var y2 = xywh[0x1] + xywh[0x3];
  var n = Arr[__DECODE_0__(0x168)]() - 0x0;
  var cnt = 0x0;
  for (var i = 0x0; i < n; i++) {
    var XY = Arr[__DECODE_0__(0x168)]()[__DECODE_0__(0x165)]('\x20')[__DECODE_0__(0x16a)](Number);
    var X = XY[0x0];
    var Y = XY[0x1];
    if (x1 <= X && x2 >= X && y1 <= Y && y2 >= Y) {
      cnt++;
    }
  }
  console['log'](cnt);
}
