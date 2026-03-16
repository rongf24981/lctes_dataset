function __DECODE_0__(RHlWhp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ba;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RHlWhp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c9)) / 0x1 + parseInt(__DECODE_0__(0x1c1)) / 0x2 * (parseInt(__DECODE_0__(0x1ca)) / 0x3) + parseInt(__DECODE_0__(0x1c6)) / 0x4 * (-parseInt(__DECODE_0__(0x1c3)) / 0x5) + -parseInt(__DECODE_0__(0x1bc)) / 0x6 * (-parseInt(__DECODE_0__(0x1bf)) / 0x7) + parseInt(__DECODE_0__(0x1c7)) / 0x8 + -parseInt(__DECODE_0__(0x1bb)) / 0x9 * (-parseInt(__DECODE_0__(0x1ba)) / 0xa) + -parseInt(__DECODE_0__(0x1cb)) / 0xb * (parseInt(__DECODE_0__(0x1c8)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2f56b);
var input = require('fs')[__DECODE_0__(0x1cd)](__DECODE_0__(0x1c4), __DECODE_0__(0x1be));
var Arr = input[__DECODE_0__(0x1c0)]()[__DECODE_0__(0x1c5)]('\x0a')[__DECODE_0__(0x1cc)](Number);
var n = 0x0;
function __STRING_ARRAY__() {
  var _0x3969c8 = ['9981iPoefo', '13128QaEwFJ', 'log', 'utf8', '406QjfbQV', 'trim', '31052TbcMAl', 'length', '1293815BPxILU', '/dev/stdin', 'split', '4vJitCw', '2641888VqSAqk', '1935852NWDZPC', '61630TYflCY', '39fahtAu', '11lXpZLp', 'map', 'readFileSync', '150RhICIz'];
  __STRING_ARRAY__ = function () {
    return _0x3969c8;
  };
  return __STRING_ARRAY__();
}
var arr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
for (var i = 0x0; i < Arr[__DECODE_0__(0x1c2)]; i++) {
  if (n == 0x0) {
    if (i != 0x0) {
      arr['forEach'](function (v) {
        console[__DECODE_0__(0x1bd)](v);
      });
    }
    if (Arr[i] == 0x0) {
      break;
    }
    n = Arr[i];
    arr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
  } else {
    n--;
    if (Arr[i] >= 0x3c) {
      arr[0x6]++;
    } else {
      if (Arr[i] >= 0x32) {
        arr[0x5]++;
      } else {
        if (Arr[i] >= 0x28) {
          arr[0x4]++;
        } else {
          if (Arr[i] >= 0x1e) {
            arr[0x3]++;
          } else {
            if (Arr[i] >= 0x14) {
              arr[0x2]++;
            } else {
              if (Arr[i] >= 0xa) {
                arr[0x1]++;
              } else {
                arr[0x0]++;
              }
            }
          }
        }
      }
    }
  }
}
