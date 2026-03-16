function __STRING_ARRAY__() {
  var _0xdfd1c2 = ['301DjAsFJ', 'readFileSync', '1123205RGbFly', '19895427kpiCCX', '3dXwGvc', '975434mzXxiv', 'split', '2242040AzAbhg', 'push', '10IYdJyj', '124356KupZlL', '817930vFCHPB', 'filter', '/dev/stdin', 'shift', 'Buzz', 'log', '574888SQhNAy', 'length', 'trim', 'map'];
  __STRING_ARRAY__ = function () {
    return _0xdfd1c2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IdHsTm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x144;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IdHsTm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x148)) / 0x1 + parseInt(__DECODE_0__(0x14e)) / 0x2 * (parseInt(__DECODE_0__(0x147)) / 0x3) + -parseInt(__DECODE_0__(0x14a)) / 0x4 + parseInt(__DECODE_0__(0x145)) / 0x5 + -parseInt(__DECODE_0__(0x14d)) / 0x6 * (parseInt(__DECODE_0__(0x158)) / 0x7) + parseInt(__DECODE_0__(0x154)) / 0x8 + -parseInt(__DECODE_0__(0x146)) / 0x9 * (-parseInt(__DECODE_0__(0x14c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x775cc);
var input = require('fs')[__DECODE_0__(0x144)](__DECODE_0__(0x150), 'utf8');
var Arr = input[__DECODE_0__(0x156)]()['split']('\x0a');
while (!![]) {
  var mn = Arr[__DECODE_0__(0x151)]()[__DECODE_0__(0x149)]('\x20')[__DECODE_0__(0x157)](Number);
  if (mn[0x0] == 0x0 && mn[0x1] == 0x0) {
    break;
  }
  var player = [];
  for (var i = 0x0; i < mn[0x0]; i++) {
    player[i] = i + 0x1;
  }
  var arr = [];
  for (var i = 0x0; i < mn[0x1]; i++) {
    var v = Arr[__DECODE_0__(0x151)]();
    arr[__DECODE_0__(0x14b)](v);
  }
  var i = 0x1;
  var k = 0x0;
  var len = mn[0x0];
  for (var I = 0x0; I < arr[__DECODE_0__(0x155)]; I++) {
    var v = arr[I];
    var str = '';
    if (i % 0x3 == 0x0) {
      str += 'Fizz';
    }
    if (i % 0x5 == 0x0) {
      str += __DECODE_0__(0x152);
    }
    if (str == '') {
      str = i;
    }
    if (v != str) {
      player[k] = ![];
      len++;
      if (len == 0x1) {
        break;
      }
    }
    i++;
    var H = 0x0;
    do {
      H++;
      if (H > 0x3e8) {
        break;
      }
      k++;
      if (k >= player[__DECODE_0__(0x155)]) {
        player = player[__DECODE_0__(0x14f)](function (v) {
          return v != ![];
        });
        k = 0x0;
      }
    } while (player[k] == ![]);
  }
  player = player[__DECODE_0__(0x14f)](function (v) {
    return v != ![];
  });
  console[__DECODE_0__(0x153)](player['join']('\x20'));
}
