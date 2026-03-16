(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf1)) / 0x1 + -parseInt(__DECODE_0__(0xe8)) / 0x2 + -parseInt(__DECODE_0__(0xee)) / 0x3 + parseInt(__DECODE_0__(0xf9)) / 0x4 + -parseInt(__DECODE_0__(0xf6)) / 0x5 + parseInt(__DECODE_0__(0xf7)) / 0x6 * (parseInt(__DECODE_0__(0xf4)) / 0x7) + parseInt(__DECODE_0__(0xea)) / 0x8 * (parseInt(__DECODE_0__(0xfa)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x78426);
var input = require('fs')[__DECODE_0__(0xe9)]('/dev/stdin', __DECODE_0__(0xf2));
var Arr = input[__DECODE_0__(0xeb)]()[__DECODE_0__(0xec)]('\x0a');
function __STRING_ARRAY__() {
  var _0x4713ba = ['reverse', '654668mmoShV', 'utf8', 'forEach', '6458739mciOJK', 'shift', '4597235jZydnx', '6ujDGsR', 'length', '2933264ICkyYO', '441747nfdYbZ', 'replace', '1854174NjTeCv', 'readFileSync', '24xbRKpr', 'trim', 'split', 'log', '356382OvwJsw', 'slice'];
  __STRING_ARRAY__ = function () {
    return _0x4713ba;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDccwN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDccwN, key);
}
var n = Arr[__DECODE_0__(0xf5)]() - 0x0;
for (var I = 0x0; I < n; I++) {
  var arr = Arr[__DECODE_0__(0xf5)]()['split']('')[__DECODE_0__(0xf0)]();
  var str = Arr[__DECODE_0__(0xf5)]();
  var x = str[__DECODE_0__(0xf8)];
  arr[__DECODE_0__(0xf3)](function (v) {
    if (v == 'J') {
      str = str['slice'](-0x1) + str[__DECODE_0__(0xef)](0x0, -0x1);
    } else {
      if (v == 'C') {
        str = str['slice'](0x1) + str['slice'](0x0, 0x1);
      } else {
        if (v == 'E' && x % 0x2 == 0x0) {
          str = str[__DECODE_0__(0xef)](x / 0x2, x) + str[__DECODE_0__(0xef)](0x0, x / 0x2);
        } else {
          if (v == 'E' && x % 0x2 == 0x1) {
            str = str[__DECODE_0__(0xef)](~~(x / 0x2) + 0x1, x) + str[~~(x / 0x2)] + str['slice'](0x0, ~~(x / 0x2));
          } else {
            if (v == 'A') {
              str = str['split']('')[__DECODE_0__(0xf0)]()['join']('');
            } else {
              if (v == 'P') {
                str = str[__DECODE_0__(0xfb)](/\d/g, function (s) {
                  return s == '0' ? '9' : s - 0x0 - 0x1;
                });
              } else {
                if (v == 'M') {
                  str = str[__DECODE_0__(0xfb)](/\d/g, function (s) {
                    return s == '9' ? '0' : s - 0x0 + 0x1;
                  });
                }
              }
            }
          }
        }
      }
    }
  });
  console[__DECODE_0__(0xed)](str);
}
