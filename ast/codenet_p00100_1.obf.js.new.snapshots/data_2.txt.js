(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa0)) / 0x1 + -parseInt(__DECODE_0__(0x9a)) / 0x2 + -parseInt(__DECODE_0__(0xa7)) / 0x3 * (-parseInt(__DECODE_0__(0xa9)) / 0x4) + -parseInt(__DECODE_0__(0xa8)) / 0x5 + parseInt(__DECODE_0__(0x9e)) / 0x6 * (parseInt(__DECODE_0__(0xa3)) / 0x7) + parseInt(__DECODE_0__(0xa1)) / 0x8 * (-parseInt(__DECODE_0__(0x9c)) / 0x9) + parseInt(__DECODE_0__(0xa5)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3b107);
var input = require('fs')[__DECODE_0__(0x9f)]('/dev/stdin', 'utf8');
function __DECODE_0__(oFZzqN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x99;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oFZzqN, key);
}
var Arr = input[__DECODE_0__(0xa6)]()[__DECODE_0__(0xa2)]('\x0a');
var obj = {};
function __STRING_ARRAY__() {
  var _0x4d0cd6 = ['map', '10129390pzPxhV', 'trim', '18EaAYQL', '1612190kiSWGe', '50836TtkVCi', 'push', '926080NdISzB', 'length', '403416inLRiO', 'log', '144738uCKzhC', 'readFileSync', '475301WbcBIU', '8WFhSzi', 'split', '133pxLitm'];
  __STRING_ARRAY__ = function () {
    return _0x4d0cd6;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x9b)]; i++) {
  var arr = Arr[i]['split']('\x20')[__DECODE_0__(0xa4)](Number);
  if (i != 0x0 && arr[__DECODE_0__(0x9b)] == 0x1) {
    var keys = [];
    for (var k in obj) {
      keys[__DECODE_0__(0x99)](k - 0x0);
    }
    var cnt = 0x0;
    for (var j = 0x0; j < keys['length']; j++) {
      if (obj[keys[j + '']] >= 0xf4240) {
        console[__DECODE_0__(0x9d)](keys[j + '']);
        cnt++;
      }
    }
    if (cnt == 0x0) {
      console[__DECODE_0__(0x9d)]('NA');
    }
    if (arr[0x0] == 0x0) {
      break;
    }
    obj = {};
  } else {
    if (arr[__DECODE_0__(0x9b)] == 0x3) {
      if (!obj['hasOwnProperty'](arr[0x0])) {
        obj[arr[0x0]] = arr[0x1] * arr[0x2];
      } else {
        obj[arr[0x0]] += arr[0x1] * arr[0x2];
      }
    }
  }
}
