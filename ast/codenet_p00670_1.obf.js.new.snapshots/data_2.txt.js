(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe5)) / 0x1 + -parseInt(__DECODE_0__(0xe8)) / 0x2 * (parseInt(__DECODE_0__(0xf3)) / 0x3) + parseInt(__DECODE_0__(0xf4)) / 0x4 * (-parseInt(__DECODE_0__(0xee)) / 0x5) + -parseInt(__DECODE_0__(0xec)) / 0x6 + parseInt(__DECODE_0__(0xed)) / 0x7 + -parseInt(__DECODE_0__(0xe6)) / 0x8 * (parseInt(__DECODE_0__(0xeb)) / 0x9) + parseInt(__DECODE_0__(0xe7)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc3a4e);
var input = require('fs')[__DECODE_0__(0xe9)](__DECODE_0__(0xf0), 'utf8');
function __DECODE_0__(HiXkpQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HiXkpQ, key);
}
function __STRING_ARRAY__() {
  var _0x2c9c8f = ['readFileSync', 'split', '9cfEDZq', '7351302qYiKOV', '1407DUNBsF', '35NPFSnI', 'trim', '/dev/stdin', 'shift', 'min', '1884WwHnau', '600824LOFIjd', 'log', '1175417INRWgg', '12200008SYyYDW', '38085960xyQuDl', '1214JsxVmc'];
  __STRING_ARRAY__ = function () {
    return _0x2c9c8f;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0xef)]()[__DECODE_0__(0xea)]('\x0a');
while (!![]) {
  var nS = Arr[__DECODE_0__(0xf1)]()['split']('\x20')['map'](Number);
  var n = nS[0x0];
  var S = nS[0x1];
  if (n == 0x0 && S == 0x0) {
    break;
  }
  var arr = [];
  for (var i = 0x0; i <= 0x64; i++) {
    arr[i] = 0x0;
  }
  for (var i = 0x0; i < n; i++) {
    var v = Arr[__DECODE_0__(0xf1)]() - 0x0;
    arr[v]++;
  }
  var cnt = 0x0;
  for (var i = 0x0; i <= 0x64; i++) {
    for (var j = i + 0x1; j <= 0x64; j++) {
      if (i + j > S) {
        cnt += Math[__DECODE_0__(0xf2)](arr[i], arr[j]);
      }
    }
  }
  console[__DECODE_0__(0xf5)](cnt);
}
