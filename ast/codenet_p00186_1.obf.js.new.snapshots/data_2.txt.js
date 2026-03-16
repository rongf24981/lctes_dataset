(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xee)) / 0x1 + -parseInt(__DECODE_0__(0xef)) / 0x2 + parseInt(__DECODE_0__(0xf1)) / 0x3 + -parseInt(__DECODE_0__(0xf3)) / 0x4 + -parseInt(__DECODE_0__(0xed)) / 0x5 + parseInt(__DECODE_0__(0xf9)) / 0x6 * (-parseInt(__DECODE_0__(0xeb)) / 0x7) + parseInt(__DECODE_0__(0xf4)) / 0x8 * (parseInt(__DECODE_0__(0xf2)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xedec1);
var input = require('fs')[__DECODE_0__(0xf8)](__DECODE_0__(0xf6), __DECODE_0__(0xf7));
var Arr = input[__DECODE_0__(0xf5)](/\n$/, '')['split']('\x0a');
function __DECODE_0__(nChumI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xeb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nChumI, key);
}
function __STRING_ARRAY__() {
  var _0x4d4f8e = ['replace', '/dev/stdin', 'utf8', 'readFileSync', '18PgaUyV', '4346405vlmxcV', 'log', '6531305sUEjpj', '1786015WgJqIw', '3438124looGCd', 'split', '5468538hGjRya', '1016397BHHOHI', '4085284HKjPBX', '232aBJEvy'];
  __STRING_ARRAY__ = function () {
    return _0x4d4f8e;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var arr = Arr['shift']()[__DECODE_0__(0xf0)]('\x20')['map'](Number);
  if (arr[0x0] == 0x0) {
    break;
  }
  var q1 = arr[0x0];
  var b = arr[0x1];
  var c1 = arr[0x2];
  var c2 = arr[0x3];
  var q2 = arr[0x4];
  var x = 0x0;
  var y = 0x0;
  var flag = !![];
  while (!![]) {
    if (b >= c1 * (x + 0x1) && x + 0x1 <= q2) {
      x++;
    } else {
      break;
    }
  }
  while (!![]) {
    if (b >= c1 * x + c2 * (y + 0x1)) {
      y++;
    } else {
      break;
    }
  }
  while (!![]) {
    if (x == 0x0) {
      flag = ![];
      break;
    }
    if (c1 * x + c2 * y > b) {
      flag = ![];
      break;
    }
    if (q1 > x + y) {
      x--;
      while (!![]) {
        if (b >= c1 * x + c2 * (y + 0x1)) {
          y++;
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }
  console[__DECODE_0__(0xec)](flag ? x + '\x20' + y : 'NA');
}
