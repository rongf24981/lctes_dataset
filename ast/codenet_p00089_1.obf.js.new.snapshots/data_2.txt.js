function __STRING_ARRAY__() {
  var _0x4cd5be = ['2150145CbJtVM', 'push', 'readFileSync', 'utf8', '168fKjnat', 'split', 'map', 'log', 'length', 'trim', '106800UTZPMB', '143728dvqjeq', '16wOMyOt', 'max', '161858uNggZY', '65544XJNQvf', '270865FQOfWU', '39067Ykedip'];
  __STRING_ARRAY__ = function () {
    return _0x4cd5be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe5)) / 0x1 + -parseInt(__DECODE_0__(0xe3)) / 0x2 * (parseInt(__DECODE_0__(0xd4)) / 0x3) + parseInt(__DECODE_0__(0xe1)) / 0x4 + parseInt(__DECODE_0__(0xd5)) / 0x5 + parseInt(__DECODE_0__(0xdb)) / 0x6 * (-parseInt(__DECODE_0__(0xd6)) / 0x7) + -parseInt(__DECODE_0__(0xe2)) / 0x8 + parseInt(__DECODE_0__(0xd7)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2060a);
function bomb(y, x, sum) {
  YX[y][x] = sum;
  if (y == yx[__DECODE_0__(0xdf)] - 0x1) {
    max = Math[__DECODE_0__(0xe4)](max, sum);
  } else {
    if ((yx['length'] - 0x1) / 0x2 > y) {
      if (YX[y + 0x1][x] < sum + yx[y + 0x1][x]) {
        bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
      }
      if (YX[y + 0x1][x + 0x1] < sum + yx[y + 0x1][x + 0x1]) {
        bomb(y + 0x1, x + 0x1, sum + yx[y + 0x1][x + 0x1]);
      }
    } else {
      if ((yx['length'] - 0x1) / 0x2 <= y) {
        if (x - 0x1 >= 0x0) {
          if (YX[y + 0x1][x - 0x1] < sum + yx[y + 0x1][x - 0x1]) {
            bomb(y + 0x1, x - 0x1, sum + yx[y + 0x1][x - 0x1]);
          }
        }
        if (x < yx[y][__DECODE_0__(0xdf)] - 0x1) {
          if (YX[y + 0x1][x] < sum + yx[y + 0x1][x]) {
            bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
          }
        }
      }
    }
  }
}
var input = require('fs')[__DECODE_0__(0xd9)]('/dev/stdin', __DECODE_0__(0xda));
var Arr = input[__DECODE_0__(0xe0)]()['split']('\x0a');
var yx = [];
function __DECODE_0__(YKxSqU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YKxSqU, key);
}
var YX = [];
Arr['forEach'](function (v) {
  var x = v[__DECODE_0__(0xdc)](',')[__DECODE_0__(0xdd)](Number);
  var X = x[__DECODE_0__(0xdd)](function (v) {
    return 0x0;
  });
  yx['push'](x);
  YX[__DECODE_0__(0xd8)](X);
});
var max = 0x0;
bomb(0x0, 0x0, yx[0x0][0x0]);
console[__DECODE_0__(0xde)](max);
