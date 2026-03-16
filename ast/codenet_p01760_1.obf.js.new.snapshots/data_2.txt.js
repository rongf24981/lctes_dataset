function __DECODE_0__(kYJXCH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x160;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kYJXCH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x172)) / 0x1 * (parseInt(__DECODE_0__(0x168)) / 0x2) + parseInt(__DECODE_0__(0x16c)) / 0x3 + parseInt(__DECODE_0__(0x161)) / 0x4 * (parseInt(__DECODE_0__(0x167)) / 0x5) + parseInt(__DECODE_0__(0x16f)) / 0x6 * (parseInt(__DECODE_0__(0x16e)) / 0x7) + parseInt(__DECODE_0__(0x173)) / 0x8 + parseInt(__DECODE_0__(0x170)) / 0x9 * (-parseInt(__DECODE_0__(0x160)) / 0xa) + parseInt(__DECODE_0__(0x16a)) / 0xb * (-parseInt(__DECODE_0__(0x163)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4578c);
var input = require('fs')['readFileSync'](__DECODE_0__(0x169), __DECODE_0__(0x171));
var arr = input[__DECODE_0__(0x16d)]()[__DECODE_0__(0x162)]('\x0a');
var TD = arr[__DECODE_0__(0x164)]()['split']('\x20')[__DECODE_0__(0x16b)](Number);
var T = TD[0x0];
var D = TD[0x1];
var t = arr[__DECODE_0__(0x164)]()[__DECODE_0__(0x162)]('\x20')[__DECODE_0__(0x16b)](Number);
var tA = t[0x0];
var tB = t[0x1];
var d = arr[__DECODE_0__(0x164)]()[__DECODE_0__(0x162)]('\x20')[__DECODE_0__(0x16b)](Number);
var dA = d[0x0];
function __STRING_ARRAY__() {
  var _0x389be0 = ['trim', '3235463NpOiMU', '6QTfrgl', '100305cRKcfG', 'utf8', '3413QRWJUW', '2928536qixQYq', 'abs', 'min', '220SvNebI', '196NaKbSO', 'split', '26628OJxoeP', 'shift', 'toFixed', 'log', '10315NCPyXl', '206QqippE', '/dev/stdin', '473EOBBTe', 'map', '142017UobECn'];
  __STRING_ARRAY__ = function () {
    return _0x389be0;
  };
  return __STRING_ARRAY__();
}
var dB = d[0x1];
var min = Infinity;
var i = 0x0;
while (!![]) {
  var vA = i * dA;
  if (vA > D) {
    break;
  }
  var j = 0x0;
  while (!![]) {
    var vB = j * dB;
    if (vA + vB > D) {
      break;
    }
    if (vA + vB != 0x0) {
      var c = T - (tA * vA + tB * vB) / (vA + vB);
      min = Math[__DECODE_0__(0x175)](min, Math[__DECODE_0__(0x174)](c));
    }
    j++;
  }
  i++;
}
console[__DECODE_0__(0x166)](min[__DECODE_0__(0x165)](0xa));
