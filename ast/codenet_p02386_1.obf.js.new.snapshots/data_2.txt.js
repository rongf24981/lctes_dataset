(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf3)) / 0x1 + -parseInt(__DECODE_0__(0xf0)) / 0x2 + parseInt(__DECODE_0__(0xf7)) / 0x3 + parseInt(__DECODE_0__(0xf9)) / 0x4 * (parseInt(__DECODE_0__(0xeb)) / 0x5) + -parseInt(__DECODE_0__(0xf6)) / 0x6 + parseInt(__DECODE_0__(0xf1)) / 0x7 * (-parseInt(__DECODE_0__(0xfb)) / 0x8) + parseInt(__DECODE_0__(0xf5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb25a1);
function __STRING_ARRAY__() {
  var _0x4ebc14 = ['Yes', 'trim', '710NuHTrx', 'toString', 'readFileSync', 'shift', 'utf8', '1446718cozaxZ', '7tMFvQY', 'map', '217591uAYNHf', 'hasOwnProperty', '8883054CUmeXb', '556260Xehfrx', '1340514aBxGpv', 'apply', '17096ueDDdi', '/dev/stdin', '2212504ZmiwnJ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4ebc14;
  };
  return __STRING_ARRAY__();
}
function move(d1, d2, d3, d4, d5, d6) {
  var x = this[__DECODE_0__(0xec)]();
  if (x == 'N') {
    return [d2, d6, d3, d4, d1, d5];
  }
  if (x == 'E') {
    return [d4, d2, d1, d6, d5, d3];
  }
}
function roll(d1, d2, d3, d4, d5, d6) {
  return [d1, d3, d5, d2, d4, d6];
}
function rolls(arr) {
  for (var i = 0x0; i < 0x4; i++) {
    obj[arr['join'](',')] = !![];
    arr = roll['apply'](null, arr);
  }
}
var input = require('fs')[__DECODE_0__(0xed)](__DECODE_0__(0xfa), __DECODE_0__(0xef));
var Arr = input[__DECODE_0__(0xea)]()['split']('\x0a');
function __DECODE_0__(wxVkMA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xea;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wxVkMA, key);
}
var n = Arr[__DECODE_0__(0xee)]() - 0x0;
var OBJ = {};
var result = __DECODE_0__(0xfd);
for (var i = 0x0; i < n; i++) {
  var obj = {};
  var dice = Arr[i]['split']('\x20')[__DECODE_0__(0xf2)](Number);
  for (var j = 0x0; j < 0x4; j++) {
    rolls(dice);
    dice = move[__DECODE_0__(0xf8)]('N', dice);
  }
  dice = move['apply']('E', dice);
  rolls(dice);
  dice = move[__DECODE_0__(0xf8)]('E', dice);
  dice = move['apply']('E', dice);
  rolls(dice);
  for (var k in obj) {
    if (OBJ[__DECODE_0__(0xf4)](k)) {
      result = 'No';
    } else {
      OBJ[k] = !![];
    }
  }
  if (result == 'No') {
    break;
  }
}
console[__DECODE_0__(0xfc)](result);
